#!/bin/bash
# Instal KOMO TTS di macOS (M1/M2/M3). Butuh internet SEKALI saja, setelah itu 100% offline.
#   bash install.sh          -> suara bawaan (cepat, ~400 MB)
#   bash install.sh clone    -> + clone suara & ekspresi (VoxCPM2, ~5 GB)
set -e
cd "$(dirname "$0")"

echo "== Menyiapkan Python (via uv) =="
if ! command -v uv >/dev/null 2>&1 && [ ! -x "$HOME/.local/bin/uv" ]; then
  curl -LsSf https://astral.sh/uv/install.sh | sh
fi
UV="$(command -v uv || echo "$HOME/.local/bin/uv")"
[ -x .venv/bin/python ] || "$UV" venv --python 3.12 .venv

echo "== Instal library =="
"$UV" pip install --python .venv/bin/python -r requirements.txt

echo "== Download suara bawaan (~400 MB) =="
.venv/bin/python voices.py

if [ "$1" = "clone" ]; then
  echo "== Instal fitur clone + ekspresi =="
  "$UV" pip install --python .venv/bin/python -r requirements-clone.txt
  echo "== Download model VoxCPM2 (~5 GB, sabar ya) =="
  .venv/bin/python clone.py
fi

chmod +x run.command
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo
  echo "Catatan: ffmpeg belum ada, jadi hasil hanya WAV. Kalau mau MP3 juga: brew install ffmpeg"
fi
echo
echo "SELESAI! Double-click 'run.command' untuk membuka aplikasi."
