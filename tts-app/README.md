# KOMO TTS - Text-to-Speech Offline (Indonesia + English)

Aplikasi TTS yang jalan **100% offline** di MacBook Air M1. Internet hanya dipakai sekali waktu instal.

- Mesin: **Piper** (neural TTS, ringan, cepat di M1: ~10x lebih cepat dari real-time).
- Bahasa: Indonesia, English, atau **Otomatis** (teks campur, bahasa dideteksi per kalimat).
- Suara bawaan: 1 suara Indonesia (pria) + 4 suara English (Ryan, Lessac, HFC Male, HFC Female).
  Di Mac juga otomatis muncul suara macOS yang terpasang (mis. *Damayanti* untuk Indonesia).
- Angka & persen otomatis dibaca jadi kata (25 -> "dua puluh lima" / "twenty-five").
- Atur kecepatan dan jeda antar kalimat. Hasil WAV (+ MP3 kalau ada ffmpeg) tersimpan di `output/`.
- **Clone suara + ekspresi** (opsional): pakai model **VoxCPM2** (Apache-2.0, boleh komersial). Cukup sampel
  10-20 detik, lalu tulis teks dengan tag gaya ElevenLabs, misalnya
  `[excited] Gimana jadinya kalau...? [whispers] Tapi tunggu dulu. [pause] [dramatic] Hasilnya...`

## Instal (sekali saja)

1. Buka **Terminal**, lalu:
   ```bash
   cd ~/Downloads/howcome-produksi/tts-app    # sesuaikan lokasi folder
   bash install.sh
   ```
   Mau fitur clone + ekspresi juga? Pakai `bash install.sh clone` (tambahan ~5 GB, sekali saja).
2. (Opsional, untuk MP3) `brew install ffmpeg`
3. (Opsional, suara Indonesia tambahan dari macOS) System Settings -> Accessibility -> Spoken Content
   -> System Voice -> Manage Voices -> Indonesian -> download **Damayanti**.

## Pakai

Double-click **`run.command`** (pertama kali: klik kanan -> Open, karena macOS minta izin).
Browser terbuka di `http://127.0.0.1:7860`. Tulis teks -> pilih bahasa/suara -> **Buat Suara**.

## Clone suara + ekspresi

1. Tab **Suaraku**: upload sampel (mp3/wav/m4a), kasih nama, atur "Mulai dari detik" supaya potongannya
   bersih (satu orang, tanpa musik), lalu **Simpan suara**. Gaya bicara di sampel ikut ter-clone.
2. Tab **Clone + Ekspresi**: pilih suara, tulis teks + tag, **Buat Suara**. Output 48 kHz.

Tag: `[excited] [cheerful] [curious] [surprised] [gasps] [laughs] [sighs] [scoffs] [whispers] [mysterious]
[dramatic] [serious] [calm] [sad] [angry] [fast] [slow]`, jeda `[pause] [short pause] [long pause]`.
Tag lain bebas dalam bahasa Inggris (mis. `[slow, dramatic narrator]`). Tag berlaku untuk kalimat tempatnya.

Catatan:
- Model 4,7 GB. MacBook Air M1 **16 GB** aman; versi **8 GB** bisa jalan tapi lambat (memori swap).
  Jalan di GPU M1 (MPS) otomatis; kalau gagal, pindah ke CPU.
- Kecepatan: di server tes (CPU 4 core) sekitar 4-7 detik proses per 1 detik audio. Di M1 belum diukur.
- Ekspresi berupa "arahan gaya", bukan efek suara: `[laughs]` bikin nada tertawa/geli, belum tentu ada "hahaha".
- Clone hanya suara milikmu sendiri atau yang kamu punya izinnya.

## File

| File | Isi |
|---|---|
| `app.py` | Tampilan aplikasi (Gradio, lokal) |
| `engine.py` | Mesin TTS, deteksi bahasa, angka -> kata, pemotongan kalimat |
| `clone.py` | Clone suara + tag ekspresi (VoxCPM2) |
| `voices.py` | Daftar suara + downloader (`python voices.py`) |
| `install.sh` / `run.command` | Instal & jalankan di macOS |

Lisensi: Piper GPL-3.0; tiap model suara punya lisensi sendiri (lihat `voices/*.onnx.json` /
model card di huggingface.co/rhasspy/piper-voices) - cek dulu sebelum dipakai komersial.
