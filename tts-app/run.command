#!/bin/bash
# Double-click file ini di Finder untuk membuka KOMO TTS di browser.
cd "$(dirname "$0")"
if [ ! -x .venv/bin/python ]; then
  echo "Belum diinstal. Jalankan dulu: bash install.sh"; read -r -p "Tekan Enter..."; exit 1
fi
echo "KOMO TTS berjalan di http://127.0.0.1:7860  (tutup jendela ini untuk berhenti)"
exec .venv/bin/python app.py
