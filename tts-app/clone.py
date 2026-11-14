"""Clone suara + ekspresi (offline) dengan VoxCPM2 (Apache-2.0, 30 bahasa termasuk Indonesia & English).

Pakai:
- Simpan sampel suara (10-20 detik, bersih, tanpa musik) di my_voices/<nama>.wav  (UI bisa bikinin).
- Tulis teks dengan tag ekspresi gaya ElevenLabs: "[excited] Wah, gila banget! [whispers] Tapi tunggu dulu..."
  Tag berlaku untuk kalimat tempat tag itu berada. Tag yang tidak dikenal dikirim apa adanya
  sebagai instruksi gaya (bahasa Inggris paling bagus), mis. [slow, dramatic narrator].
"""
import os
import platform
import re
import time
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent
MODEL_DIR = ROOT / "models" / "VoxCPM2"
VOICE_DIR = ROOT / "my_voices"
VOICE_DIR.mkdir(exist_ok=True)
REPO = "openbmb/VoxCPM2"

# tag -> instruksi gaya untuk model
TAGS = {
    "excited": "excited, energetic",
    "cheerful": "cheerful, happy",
    "happy": "happy, bright",
    "curious": "curious, wondering",
    "surprised": "surprised, amazed",
    "gasps": "gasping, shocked",
    "shocked": "shocked",
    "laughs": "laughing, amused",
    "laughing": "laughing, amused",
    "chuckles": "chuckling softly",
    "sighs": "sighing, tired",
    "sad": "sad, melancholic",
    "scoffs": "scoffing, sarcastic",
    "sarcastic": "sarcastic",
    "angry": "angry, intense",
    "serious": "serious, firm",
    "calm": "calm, relaxed",
    "whispers": "whispering softly",
    "whisper": "whispering softly",
    "mysterious": "mysterious, suspenseful",
    "dramatic": "dramatic, intense",
    "fast": "fast pace",
    "slow": "slow pace",
    "shouts": "shouting loudly",
}
PAUSES = {"pause": 0.6, "short pause": 0.3, "long pause": 1.2}

EXPRESSIONS = ["(tanpa)", "excited", "cheerful", "curious", "surprised", "serious", "calm",
               "mysterious", "dramatic", "whispers", "sad", "laughs"]

_model = None


def device():
    try:
        import torch
        if torch.backends.mps.is_available():
            return "mps"
    except Exception:
        pass
    return "cpu"


def installed() -> bool:
    try:
        import voxcpm  # noqa: F401
    except ImportError:
        return False
    return (MODEL_DIR / "model.safetensors").exists()


def download_model():
    from huggingface_hub import snapshot_download
    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    snapshot_download(REPO, local_dir=str(MODEL_DIR))
    print("Model VoxCPM2 siap (offline):", MODEL_DIR)


def model():
    global _model
    if _model is None:
        from voxcpm import VoxCPM
        dev = device()
        try:
            _model = VoxCPM.from_pretrained(str(MODEL_DIR), load_denoiser=False, optimize=False, device=dev)
        except Exception:
            if dev == "cpu":
                raise
            _model = VoxCPM.from_pretrained(str(MODEL_DIR), load_denoiser=False, optimize=False, device="cpu")
    return _model


# ---------------------------------------------------------------- suara referensi
def voices():
    return sorted(p.stem for p in VOICE_DIR.glob("*.wav"))


def add_voice(src: str, name: str, start: float = 0.0, length: float = 15.0) -> str:
    """Potong sampel (mp3/wav/m4a) jadi referensi mono 16 kHz, maks 20 detik, volume dinormalkan."""
    import librosa
    import soundfile as sf
    name = re.sub(r"[^\w\- ]", "", name or "").strip().replace(" ", "_")
    if not name:
        raise ValueError("Kasih nama suaranya dulu.")
    length = max(3.0, min(float(length), 20.0))
    x, sr = librosa.load(src, sr=16000, mono=True, offset=float(start), duration=length)
    if len(x) < sr * 3:
        raise ValueError("Sampel terlalu pendek (minimal 3 detik).")
    x, _ = librosa.effects.trim(x, top_db=35)
    x = x / (np.abs(x).max() + 1e-9) * 0.9
    out = VOICE_DIR / f"{name}.wav"
    sf.write(out, x, sr)
    return name


# ---------------------------------------------------------------- teks -> segmen
def parse(text: str, default_style: str = ""):
    """Hasil: list of (jenis, isi): ("speech", (style, kalimat)) atau ("pause", detik)."""
    import engine as E
    segs = []
    for sent in E.split_sentences(text):
        styles, rest, pos = [], [], 0
        for m in re.finditer(r"\[([^\]]+)\]", sent):
            rest.append(sent[pos:m.start()])
            pos = m.end()
            tag = m.group(1).strip().lower()
            if tag in PAUSES:
                chunk = " ".join(rest).strip()
                if chunk:
                    segs.append(("speech", (", ".join(styles) or default_style, chunk)))
                    rest = []
                segs.append(("pause", PAUSES[tag]))
            else:
                styles.append(TAGS.get(tag, tag))
        rest.append(sent[pos:])
        chunk = re.sub(r"\s+", " ", " ".join(rest)).strip()
        if re.search(r"\w", chunk):
            segs.append(("speech", (", ".join(styles) or default_style, chunk)))
    return segs


def synthesize(text: str, voice: str, default_expr: str = "", speed: float = 1.0,
               pause: float = 0.3, quality: int = 10, cfg: float = 2.0, progress=None):
    """Kembalikan (audio float32, sample_rate)."""
    import engine as E
    ref = VOICE_DIR / f"{voice}.wav"
    if not ref.exists():
        raise ValueError(f"Suara '{voice}' belum ada. Tambahkan dulu di bagian 'Tambah suara'.")
    m = model()
    sr = m.tts_model.sample_rate
    base = "" if default_expr in ("", "(tanpa)") else TAGS.get(default_expr, default_expr)
    pace = "slightly faster" if speed > 1.1 else "slower, unhurried" if speed < 0.9 else ""
    segs = parse(text, base)
    gap = np.zeros(int(sr * pause), np.float32)
    out = []
    n_speech = sum(k == "speech" for k, _ in segs) or 1
    done = 0
    for kind, val in segs:
        if kind == "pause":
            out.append(np.zeros(int(sr * val), np.float32))
            continue
        style, sent = val
        lang = E.detect_lang(sent)
        sent = E.normalize(sent, lang)
        style = ", ".join(s for s in (style, pace) if s)
        prompt = f"({style}){sent}" if style else sent
        a = m.generate(text=prompt, reference_wav_path=str(ref), cfg_value=cfg,
                       inference_timesteps=int(quality))
        out += [np.asarray(a, np.float32), gap]
        done += 1
        if progress:
            progress(done / n_speech, desc=f"Kalimat {done}/{n_speech}")
    audio = np.concatenate(out) if out else np.zeros(0, np.float32)
    peak = np.abs(audio).max() if len(audio) else 0
    if peak > 0.99:
        audio = audio / peak * 0.97
    return audio, sr


if __name__ == "__main__":
    download_model()
