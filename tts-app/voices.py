"""Daftar suara Piper (offline) + downloader. Dijalankan sekali saat instal."""
import json
import sys
import urllib.request
from pathlib import Path

BASE = "https://huggingface.co/rhasspy/piper-voices/resolve/main/"
VOICE_DIR = Path(__file__).resolve().parent / "voices"

# nama tampilan -> (bahasa, path di repo piper-voices)
VOICES = {
    "Indonesia - Pria (news_tts)": ("id", "id/id_ID/news_tts/medium/id_ID-news_tts-medium"),
    "English - Ryan (male, US)": ("en", "en/en_US/ryan/high/en_US-ryan-high"),
    "English - Lessac (female, US)": ("en", "en/en_US/lessac/high/en_US-lessac-high"),
    "English - HFC Male (US)": ("en", "en/en_US/hfc_male/medium/en_US-hfc_male-medium"),
    "English - HFC Female (US)": ("en", "en/en_US/hfc_female/medium/en_US-hfc_female-medium"),
}


def local_path(repo_path: str) -> Path:
    return VOICE_DIR / (repo_path.rsplit("/", 1)[-1] + ".onnx")


def installed():
    """Suara yang sudah ada di disk: {nama: (lang, onnx_path)}"""
    out = {}
    for name, (lang, rp) in VOICES.items():
        p = local_path(rp)
        if p.exists() and Path(str(p) + ".json").exists():
            out[name] = (lang, p)
    return out


def _get(url: str, dest: Path):
    tmp = dest.with_suffix(dest.suffix + ".part")
    with urllib.request.urlopen(url) as r, open(tmp, "wb") as f:
        total = int(r.headers.get("Content-Length") or 0)
        done = 0
        while True:
            buf = r.read(1 << 20)
            if not buf:
                break
            f.write(buf)
            done += len(buf)
            if total:
                print(f"\r  {dest.name}: {done * 100 // total}%", end="", flush=True)
    tmp.rename(dest)
    print()


def download_all():
    VOICE_DIR.mkdir(exist_ok=True)
    for name, (_, rp) in VOICES.items():
        onnx = local_path(rp)
        for src, dst in ((rp + ".onnx.json", Path(str(onnx) + ".json")), (rp + ".onnx", onnx)):
            if dst.exists():
                continue
            print(f"Download {name} ...")
            _get(BASE + src, dst)
    print("Semua suara siap (offline).")


if __name__ == "__main__":
    download_all()
    sys.exit(0)
