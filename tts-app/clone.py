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
WHISPER_DIR = ROOT / "models" / "whisper-medium"
WHISPER_REPO = "Systran/faster-whisper-medium"

# Mode clone
MODE_MIX = "Campur: kalimat ber-tag ekspresif, sisanya paling mirip"
MODE_SIMILAR = "Paling mirip (tag ekspresi diabaikan)"
MODE_STYLE = "Ekspresif semua (sedikit kurang mirip)"
MODES = [MODE_MIX, MODE_SIMILAR, MODE_STYLE]

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

# Di Mac Apple Silicon pakai MLX 4-bit (2,3 GB, muat di RAM 8 GB, jalan di GPU M1).
# Di komputer lain pakai VoxCPM PyTorch (4,7 GB).
IS_APPLE_SILICON = platform.system() == "Darwin" and platform.machine() == "arm64"
MLX_DIR = ROOT / "models" / "VoxCPM2-mlx-4bit"
MLX_REPO = "mlx-community/VoxCPM2-4bit"


def backend() -> str:
    if IS_APPLE_SILICON or os.environ.get("KOMO_BACKEND") == "mlx":
        return "mlx"
    return "torch"


def installed() -> bool:
    if backend() == "mlx":
        try:
            import mlx_audio  # noqa: F401
        except ImportError:
            return False
        return (MLX_DIR / "model.safetensors").exists()
    try:
        import voxcpm  # noqa: F401
    except ImportError:
        return False
    return (MODEL_DIR / "model.safetensors").exists()


def download_model():
    from huggingface_hub import snapshot_download
    if backend() == "mlx":
        MLX_DIR.mkdir(parents=True, exist_ok=True)
        snapshot_download(MLX_REPO, local_dir=str(MLX_DIR))
    else:
        MODEL_DIR.mkdir(parents=True, exist_ok=True)
        snapshot_download(REPO, local_dir=str(MODEL_DIR))
    snapshot_download(WHISPER_REPO, local_dir=str(WHISPER_DIR))
    print("Model clone + Whisper siap (offline):", ROOT / "models")


class _MLX:
    def __init__(self):
        from mlx_audio.tts.utils import load_model
        self.m = load_model(str(MLX_DIR))
        self.sample_rate = self.m.sample_rate

    def gen(self, text, ref, prompt_text=None, cfg=2.0, steps=10):
        kw = dict(ref_audio=ref)
        if prompt_text:
            kw.update(prompt_audio=ref, prompt_text=prompt_text)
        parts = [np.array(r.audio, dtype=np.float32)
                 for r in self.m.generate(text=text, cfg_value=cfg, inference_timesteps=steps, **kw)]
        return np.concatenate(parts) if parts else np.zeros(0, np.float32)


class _Torch:
    def __init__(self):
        from voxcpm import VoxCPM
        # di GPU Mac model dipaksa float32 (~9 GB) -> pakai CPU; di NVIDIA otomatis CUDA
        self.m = VoxCPM.from_pretrained(str(MODEL_DIR), load_denoiser=False, optimize=False,
                                        device=None if not platform.system() == "Darwin" else "cpu")
        self.sample_rate = self.m.tts_model.sample_rate

    def gen(self, text, ref, prompt_text=None, cfg=2.0, steps=10):
        kw = dict(reference_wav_path=ref)
        if prompt_text:
            kw.update(prompt_wav_path=ref, prompt_text=prompt_text)
        return np.asarray(self.m.generate(text=text, cfg_value=cfg, inference_timesteps=steps, **kw), np.float32)


def model():
    global _model
    if _model is None:
        _model = _MLX() if backend() == "mlx" else _Torch()
    return _model


# ---------------------------------------------------------------- suara referensi
def voices():
    return sorted(p.stem for p in VOICE_DIR.glob("*.wav"))


def transcribe(wav: Path) -> str:
    """Transkrip otomatis sampel (dipakai untuk mode 'paling mirip')."""
    try:
        from faster_whisper import WhisperModel
    except ImportError:
        return ""
    src = str(WHISPER_DIR) if (WHISPER_DIR / "model.bin").exists() else "medium"
    w = WhisperModel(src, device="cpu", compute_type="int8")
    import librosa
    x, _ = librosa.load(str(wav), sr=16000, mono=True)
    segs, info = w.transcribe(x, beam_size=5)
    return " ".join(s.text.strip() for s in segs).strip()


def get_transcript(name: str) -> str:
    p = VOICE_DIR / f"{name}.txt"
    return p.read_text(encoding="utf-8").strip() if p.exists() else ""


def save_transcript(name: str, text: str):
    (VOICE_DIR / f"{name}.txt").write_text((text or "").strip(), encoding="utf-8")


def add_voice(src: str, name: str, start: float = 0.0, length: float = 15.0):
    """Potong sampel (mp3/wav/m4a) jadi referensi mono, maks 30 detik, volume dinormalkan,
    lalu buat transkripnya. Hasil: (nama, transkrip)."""
    import librosa
    import soundfile as sf
    name = re.sub(r"[^\w\- ]", "", name or "").strip().replace(" ", "_")
    if not name:
        raise ValueError("Kasih nama suaranya dulu.")
    length = max(3.0, min(float(length), 30.0))
    x, sr = librosa.load(src, sr=None, mono=True, offset=float(start), duration=length)
    if len(x) < sr * 3:
        raise ValueError("Sampel terlalu pendek (minimal 3 detik).")
    x, _ = librosa.effects.trim(x, top_db=35)
    x = x / (np.abs(x).max() + 1e-9) * 0.9
    out = VOICE_DIR / f"{name}.wav"
    sf.write(out, x, sr)
    text = transcribe(out)
    save_transcript(name, text)
    return name, text


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
               pause: float = 0.3, quality: int = 10, cfg: float = 2.0, progress=None,
               mode: str = MODE_MIX):
    """Kembalikan (audio float32, sample_rate)."""
    import engine as E
    ref = VOICE_DIR / f"{voice}.wav"
    if not ref.exists():
        raise ValueError(f"Suara '{voice}' belum ada. Tambahkan dulu di bagian 'Tambah suara'.")
    m = model()
    sr = m.sample_rate
    base = "" if default_expr in ("", "(tanpa)") else TAGS.get(default_expr, default_expr)
    pace = "slightly faster" if speed > 1.1 else "slower, unhurried" if speed < 0.9 else ""
    ref_text = get_transcript(voice)
    if ref_text:
        ref_text = E.normalize(ref_text, E.detect_lang(ref_text))
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
        use_style = not ref_text or mode == MODE_STYLE or (mode == MODE_MIX and bool(style))
        style = ", ".join(s for s in (style, pace) if s)
        if use_style:
            # mode gaya: referensi saja + instruksi gaya (ekspresif)
            prompt = f"({style}){sent}" if style else sent
            a = m.gen(prompt, str(ref), None, cfg, int(quality))
        else:
            # mode paling mirip: lanjutan dari sampel + transkripnya (logat & warna suara paling dekat)
            a = m.gen(sent, str(ref), ref_text, cfg, int(quality))
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
