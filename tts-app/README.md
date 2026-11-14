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
   Mau fitur clone + ekspresi juga? Pakai `bash install.sh clone` (Mac: tambahan ~4 GB, sekali saja).
2. (Opsional, untuk MP3) `brew install ffmpeg`
3. (Opsional, suara Indonesia tambahan dari macOS) System Settings -> Accessibility -> Spoken Content
   -> System Voice -> Manage Voices -> Indonesian -> download **Damayanti**.

## Pakai

Double-click **`run.command`** (pertama kali: klik kanan -> Open, karena macOS minta izin).
Browser terbuka di `http://127.0.0.1:7860`. Tulis teks -> pilih bahasa/suara -> **Buat Suara**.

## Clone suara + ekspresi

1. Tab **Suaraku**: upload sampel (mp3/wav/m4a), kasih nama, atur "Mulai dari detik" supaya potongannya
   bersih (satu orang, tanpa musik, 15-30 detik), lalu **Simpan suara**. Transkripnya dibuat otomatis (Whisper);
   cek dan perbaiki kalau ada yang salah: transkrip yang persis = suara paling mirip.
2. Tab **Clone + Ekspresi**: pilih suara, tulis teks + tag, **Buat Suara**. Output 48 kHz.

Mode:
- **Campur** (default): kalimat tanpa tag pakai mode *paling mirip* (melanjutkan sampel + transkrip, logat &
  warna suara paling dekat); kalimat ber-tag pakai mode *ekspresif* (referensi + arahan gaya).
- **Paling mirip**: semua kalimat mirip maksimal, tag ekspresi diabaikan (jeda tetap jalan).
- **Ekspresif semua**: semua pakai arahan gaya.

Hasil tes (skor kemiripan suara 0-1; dua rekaman asli orang yang sama = 0,68-0,78):
mode ekspresif 0,63-0,71, mode paling mirip 0,72-0,88.

Tag: `[excited] [cheerful] [curious] [surprised] [gasps] [laughs] [sighs] [scoffs] [whispers] [mysterious]
[dramatic] [serious] [calm] [sad] [angry] [fast] [slow]`, jeda `[pause] [short pause] [long pause]`.
Tag lain bebas dalam bahasa Inggris (mis. `[slow, dramatic narrator]`). Tag berlaku untuk kalimat tempatnya.

Catatan:
- **Mac M1/M2/M3**: otomatis pakai versi **MLX 4-bit** (2,3 GB, jalan di GPU M1, muat di RAM 8 GB).
  Komputer lain pakai versi PyTorch (4,7 GB). Whisper (1,5 GB) dipakai hanya saat menambah suara.
  Butuh macOS 13.5 atau lebih baru.
- Kecepatan di M1 belum diukur. Versi PyTorch di Mac 8 GB terlalu lambat (~1 jam per kalimat) - karena itu Mac pakai MLX.
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
