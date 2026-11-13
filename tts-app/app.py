"""KOMO TTS - aplikasi text-to-speech offline (Indonesia + English).
Jalankan:  ./run.command   (atau: .venv/bin/python app.py)
"""
import os

os.environ.setdefault("GRADIO_ANALYTICS_ENABLED", "False")
os.environ.setdefault("HF_HUB_OFFLINE", "1")

import time
from pathlib import Path

import gradio as gr

import engine as E

OUT_DIR = Path(__file__).resolve().parent / "output"
OUT_DIR.mkdir(exist_ok=True)

LANGS = {"Otomatis (campur ID/EN)": "auto", "Bahasa Indonesia": "id", "English": "en"}


def voice_lists():
    v = E.all_voices()
    vid = [n for n, (l, _, _) in v.items() if l == "id"]
    ven = [n for n, (l, _, _) in v.items() if l == "en"]
    return vid, ven


def run(text, lang_label, voice_id, voice_en, speed, pause, name, progress=gr.Progress()):
    if not text or not text.strip():
        raise gr.Error("Teksnya masih kosong.")
    t0 = time.time()
    audio = E.synthesize(text, LANGS[lang_label], voice_id, voice_en, speed, pause, progress)
    stem = (name.strip().replace(" ", "_") if name and name.strip() else time.strftime("tts_%Y%m%d_%H%M%S"))
    wav = OUT_DIR / f"{stem}.wav"
    E.save_wav(wav, audio)
    files = [str(wav)]
    mp3 = E.to_mp3(wav)
    if mp3:
        files.append(str(mp3))
    dur = len(audio) / E.SR
    info = f"Selesai: {dur:.1f} detik audio dalam {time.time() - t0:.1f} detik. Tersimpan di folder output/{wav.name}"
    return str(wav), files, info


def build():
    vid, ven = voice_lists()
    with gr.Blocks(title="KOMO TTS (offline)") as ui:
        gr.Markdown("# KOMO TTS\nText-to-speech **offline** - Bahasa Indonesia & English. Semua diproses di laptop, tanpa internet.")
        with gr.Row():
            with gr.Column(scale=3):
                text = gr.Textbox(label="Teks", lines=12, placeholder="Tulis atau tempel teks di sini...\nBisa campur: 'Halo semuanya! What if you cracked your knuckles every day?'")
                with gr.Row():
                    upload = gr.File(label="Atau buka file .txt", file_types=[".txt"], height=120)
                    name = gr.Textbox(label="Nama file hasil (opsional)", placeholder="misal: narasi_episode1")
            with gr.Column(scale=2):
                lang = gr.Dropdown(list(LANGS), value=list(LANGS)[0], label="Bahasa")
                voice_id = gr.Dropdown(vid, value=vid[0] if vid else None, label="Suara Bahasa Indonesia")
                voice_en = gr.Dropdown(ven, value=ven[0] if ven else None, label="Suara English")
                speed = gr.Slider(0.6, 1.6, value=1.0, step=0.05, label="Kecepatan")
                pause = gr.Slider(0.0, 1.5, value=0.35, step=0.05, label="Jeda antar kalimat (detik)")
                btn = gr.Button("Buat Suara", variant="primary", size="lg")
        info = gr.Markdown()
        player = gr.Audio(label="Hasil", type="filepath")
        files = gr.File(label="Download (WAV / MP3)", file_count="multiple")

        upload.change(lambda f: Path(f).read_text(encoding="utf-8", errors="ignore") if f else gr.update(),
                      upload, text)
        btn.click(run, [text, lang, voice_id, voice_en, speed, pause, name], [player, files, info])
    return ui


if __name__ == "__main__":
    build().launch(server_name="127.0.0.1", server_port=int(os.environ.get("PORT", 7860)),
                   inbrowser=True, share=False)
