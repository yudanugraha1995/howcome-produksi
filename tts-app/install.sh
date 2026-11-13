#!/bin/bash
# Instal KOMO TTS di macOS (M1/M2/M3). Butuh internet SEKALI saja, setelah itu 100% offline.
set -e
cd "$(dirname "$0")"

echo "== 1/3  Menyiapkan Python (via uv) =="
if ! command -v uv >/dev/null 2>&1 && [ ! -x "$HOME/.local/bin/uv" ]; then
  curl -LsSf https://astral.sh/uv/install.sh | sh
fi
UV="$(command -v uv || echo "$HOME/.local/bin/uv")"
"$UV" venv --python 3.12 .venv

echo "== 2/3  Instal library =="
"$UV" pip install --python .venv/bin/python -r requirements.txt

echo "== 3/3  Download suara (sekitar 400 MB) =="
.venv/bin/python voices.py

chmod +x run.command
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo
  echo "Catatan: ffmpeg belum ada, jadi hasil hanya WAV. Kalau mau MP3 juga: brew install ffmpeg"
fi
echo
echo "SELESAI! Double-click 'run.command' untuk membuka aplikasi."
