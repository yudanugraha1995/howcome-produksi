# KOMO TTS - Text-to-Speech Offline (Indonesia + English)

Aplikasi TTS yang jalan **100% offline** di MacBook Air M1. Internet hanya dipakai sekali waktu instal.

- Mesin: **Piper** (neural TTS, ringan, cepat di M1: ~10x lebih cepat dari real-time).
- Bahasa: Indonesia, English, atau **Otomatis** (teks campur, bahasa dideteksi per kalimat).
- Suara bawaan: 1 suara Indonesia (pria) + 4 suara English (Ryan, Lessac, HFC Male, HFC Female).
  Di Mac juga otomatis muncul suara macOS yang terpasang (mis. *Damayanti* untuk Indonesia).
- Angka & persen otomatis dibaca jadi kata (25 -> "dua puluh lima" / "twenty-five").
- Atur kecepatan dan jeda antar kalimat. Hasil WAV (+ MP3 kalau ada ffmpeg) tersimpan di `output/`.

## Instal (sekali saja)

1. Buka **Terminal**, lalu:
   ```bash
   cd ~/Downloads/howcome-produksi/tts-app    # sesuaikan lokasi folder
   bash install.sh
   ```
2. (Opsional, untuk MP3) `brew install ffmpeg`
3. (Opsional, suara Indonesia tambahan dari macOS) System Settings -> Accessibility -> Spoken Content
   -> System Voice -> Manage Voices -> Indonesian -> download **Damayanti**.

## Pakai

Double-click **`run.command`** (pertama kali: klik kanan -> Open, karena macOS minta izin).
Browser terbuka di `http://127.0.0.1:7860`. Tulis teks -> pilih bahasa/suara -> **Buat Suara**.

## File

| File | Isi |
|---|---|
| `app.py` | Tampilan aplikasi (Gradio, lokal) |
| `engine.py` | Mesin TTS, deteksi bahasa, angka -> kata, pemotongan kalimat |
| `voices.py` | Daftar suara + downloader (`python voices.py`) |
| `install.sh` / `run.command` | Instal & jalankan di macOS |

## Rencana berikutnya
Clone suara dari sampel kamu (voice cloning offline) - menunggu sampel audionya.

Lisensi: Piper GPL-3.0; tiap model suara punya lisensi sendiri (lihat `voices/*.onnx.json` /
model card di huggingface.co/rhasspy/piper-voices) - cek dulu sebelum dipakai komersial.
