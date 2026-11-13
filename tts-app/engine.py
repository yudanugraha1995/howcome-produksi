"""Mesin TTS offline: Piper (neural) + suara bawaan macOS (say)."""
import platform
import re
import shutil
import subprocess
import tempfile
import wave
from functools import lru_cache
from pathlib import Path

import numpy as np

import voices as V

IS_MAC = platform.system() == "Darwin"
SR = 22050  # semua audio diseragamkan ke sample rate ini

# ---------------------------------------------------------------- bahasa
ID_WORDS = set("""yang dan di ke dari ini itu dengan untuk tidak akan ada adalah juga
saya aku kamu kita kami mereka dia anda bisa sudah belum lagi atau karena kalau jika
apa siapa kenapa mengapa bagaimana gimana sangat banyak lebih dalam pada oleh seperti
tapi tetapi namun hari orang jadi buat sama aja saja nya pun kok dong ya nggak gak enggak
setiap semua bahwa masih harus mau ingin pernah""".split())
EN_WORDS = set("""the and of to in is it that for you was with on are as be this have
not they at but his from or by we an what if your all can will one there their do so
would about which when how why who my me he she out up been has had were just like
every day our more than then into""".split())


def detect_lang(text: str) -> str:
    words = re.findall(r"[a-zA-Z']+", text.lower())
    score_id = sum(w in ID_WORDS or w.startswith(("meng", "mem", "peng", "ber", "ter")) and len(w) > 6 for w in words)
    score_en = sum(w in EN_WORDS for w in words)
    return "en" if score_en > score_id else "id"


# ---------------------------------------------------------------- teks
def normalize(text: str, lang: str) -> str:
    """Ubah angka jadi kata (num2words) supaya dibaca benar."""
    try:
        from num2words import num2words
    except ImportError:
        return text
    nl = "id" if lang == "id" else "en"

    def pct(m):
        return num2words(int(m.group(1)), lang=nl) + (" persen" if lang == "id" else " percent")

    text = re.sub(r"(\d+)\s?%", pct, text)
    if lang == "id":  # 1.000.000 -> 1000000, 2,5 -> 2 koma 5
        text = re.sub(r"(?<=\d)\.(?=\d{3}\b)", "", text)
        text = re.sub(r"(\d+),(\d+)", lambda m: f"{m.group(1)} koma {' '.join(m.group(2))}", text)
    else:
        text = re.sub(r"(?<=\d),(?=\d{3}\b)", "", text)
        text = re.sub(r"(\d+)\.(\d+)", lambda m: f"{m.group(1)} point {' '.join(m.group(2))}", text)
    return re.sub(r"\d+", lambda m: num2words(int(m.group()), lang=nl), text)


def split_sentences(text: str):
    text = re.sub(r"[ \t]+", " ", text.strip())
    parts = re.split(r"(?<=[.!?…])\s+|\n+", text)
    return [p.strip() for p in parts if p.strip()]


# ---------------------------------------------------------------- audio utils
def resample(x: np.ndarray, sr: int) -> np.ndarray:
    if sr == SR or len(x) == 0:
        return x
    n = int(len(x) * SR / sr)
    return np.interp(np.linspace(0, len(x) - 1, n), np.arange(len(x)), x).astype(np.float32)


def save_wav(path: Path, x: np.ndarray):
    pcm = (np.clip(x, -1, 1) * 32767).astype(np.int16)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def read_wav(path: Path):
    with wave.open(str(path), "rb") as w:
        sr, ch, n = w.getframerate(), w.getnchannels(), w.getnframes()
        x = np.frombuffer(w.readframes(n), dtype=np.int16).astype(np.float32) / 32768
    if ch > 1:
        x = x.reshape(-1, ch).mean(1)
    return x, sr


def to_mp3(wav: Path):
    if not shutil.which("ffmpeg"):
        return None
    mp3 = wav.with_suffix(".mp3")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-b:a", "192k", str(mp3)], check=True)
    return mp3


# ---------------------------------------------------------------- Piper
@lru_cache(maxsize=8)
def _piper(onnx_path: str):
    from piper import PiperVoice
    return PiperVoice.load(onnx_path)


def piper_say(text: str, onnx_path: Path, speed: float) -> np.ndarray:
    from piper import SynthesisConfig
    voice = _piper(str(onnx_path))
    cfg = SynthesisConfig(length_scale=1.0 / speed)
    chunks = [c.audio_float_array for c in voice.synthesize(text, syn_config=cfg)]
    if not chunks:
        return np.zeros(0, np.float32)
    return resample(np.concatenate(chunks).astype(np.float32), voice.config.sample_rate)


# ---------------------------------------------------------------- macOS say
def mac_voices():
    """{nama_tampilan: (lang, nama_voice_say)} untuk suara id/en yang terpasang."""
    if not IS_MAC:
        return {}
    out = {}
    try:
        res = subprocess.run(["say", "-v", "?"], capture_output=True, text=True).stdout
    except FileNotFoundError:
        return {}
    for line in res.splitlines():
        m = re.match(r"(.+?)\s+([a-z]{2})[_-]([A-Z]{2})\s+#", line)
        if m and m.group(2) in ("id", "en"):
            name = m.group(1).strip()
            out[f"macOS - {name} ({m.group(2)}_{m.group(3)})"] = (m.group(2), name)
    return out


def mac_say(text: str, voice: str, speed: float) -> np.ndarray:
    with tempfile.TemporaryDirectory() as d:
        out = Path(d) / "o.wav"
        subprocess.run(["say", "-v", voice, "-r", str(int(180 * speed)),
                        "--file-format=WAVE", f"--data-format=LEI16@{SR}", "-o", str(out), text], check=True)
        x, sr = read_wav(out)
    return resample(x, sr)


# ---------------------------------------------------------------- utama
def all_voices():
    """{nama: (lang, kind, ref)}"""
    v = {n: (lang, "piper", p) for n, (lang, p) in V.installed().items()}
    v.update({n: (lang, "mac", ref) for n, (lang, ref) in mac_voices().items()})
    return v


def synthesize(text: str, lang_mode: str, voice_id: str, voice_en: str,
               speed: float = 1.0, pause: float = 0.35, progress=None) -> np.ndarray:
    """lang_mode: 'auto' | 'id' | 'en'. Hasil: float32 mono @ SR."""
    voices = all_voices()
    sents = split_sentences(text)
    gap = np.zeros(int(SR * pause), np.float32)
    out = []
    for i, s in enumerate(sents):
        lang = detect_lang(s) if lang_mode == "auto" else lang_mode
        name = voice_id if lang == "id" else voice_en
        if name not in voices:
            raise ValueError(f"Suara '{name}' tidak ditemukan. Jalankan install.sh dulu.")
        _, kind, ref = voices[name]
        s = normalize(s, lang)
        audio = piper_say(s, ref, speed) if kind == "piper" else mac_say(s, ref, speed)
        out += [audio, gap]
        if progress:
            progress((i + 1) / len(sents), desc=f"Kalimat {i + 1}/{len(sents)}")
    return np.concatenate(out) if out else np.zeros(0, np.float32)
