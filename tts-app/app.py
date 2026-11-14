"""KOMO TTS - aplikasi text-to-speech offline (Indonesia + English).
Jalankan:  ./run.command   (atau: .venv/bin/python app.py)
"""
import os

os.environ.setdefault("GRADIO_ANALYTICS_ENABLED", "False")
os.environ.setdefault("HF_HUB_OFFLINE", "1")

import time
from pathlib import Path

import gradio as gr
import soundfile as sf

import clone as C
import engine as E

OUT_DIR = Path(__file__).resolve().parent / "output"
OUT_DIR.mkdir(exist_ok=True)

LANGS = {"Otomatis (campur ID/EN)": "auto", "Bahasa Indonesia": "id", "English": "en"}
TAG_HELP = ("**Tag ekspresi** (taruh di kalimatnya): " + " ".join(f"`[{t}]`" for t in
            ["excited", "cheerful", "curious", "surprised", "gasps", "laughs", "sighs", "scoffs",
             "whispers", "mysterious", "dramatic", "serious", "calm", "sad", "angry", "fast", "slow"])
            + " · jeda: `[pause]` `[short pause]` `[long pause]` · bebas juga, mis. `[slow, dramatic narrator]`")


def save(audio, sr, name):
    stem = name.strip().replace(" ", "_") if name and name.strip() else time.strftime("tts_%Y%m%d_%H%M%S")
    wav = OUT_DIR / f"{stem}.wav"
    sf.write(wav, audio, sr)
    files = [str(wav)]
    mp3 = E.to_mp3(wav)
    if mp3:
        files.append(str(mp3))
    return wav, files


# ---------------------------------------------------------------- Piper
def run_fast(text, lang_label, voice_id, voice_en, speed, pause, name, progress=gr.Progress()):
    if not text or not text.strip():
        raise gr.Error("Teksnya masih kosong.")
    t0 = time.time()
    audio = E.synthesize(text, LANGS[lang_label], voice_id, voice_en, speed, pause, progress)
    wav, files = save(audio, E.SR, name)
    return str(wav), files, f"Selesai: {len(audio) / E.SR:.1f} detik audio dalam {time.time() - t0:.1f} detik → `output/{wav.name}`"


# ---------------------------------------------------------------- Clone
def run_clone(text, voice, mode, expr, speed, pause, quality, cfg, name, progress=gr.Progress()):
    if not C.installed():
        raise gr.Error("Fitur clone belum diinstal. Jalankan: bash install.sh clone")
    if not text or not text.strip():
        raise gr.Error("Teksnya masih kosong.")
    if not voice:
        raise gr.Error("Pilih suara dulu (atau tambah suara di tab 'Suaraku').")
    t0 = time.time()
    progress(0, desc="Memuat model (pertama kali agak lama)...")
    try:
        audio, sr = C.synthesize(text, voice, expr, speed, pause, int(quality), float(cfg), progress, mode)
    except ValueError as e:
        raise gr.Error(str(e))
    wav, files = save(audio, sr, name)
    return str(wav), files, f"Selesai: {len(audio) / sr:.1f} detik audio dalam {time.time() - t0:.0f} detik → `output/{wav.name}`"


def add_voice(f, name, start, length):
    if not f:
        raise gr.Error("Upload sampel suaranya dulu.")
    try:
        n, txt = C.add_voice(f, name, start, length)
    except ValueError as e:
        raise gr.Error(str(e))
    v = C.voices()
    msg = (f"Suara **{n}** tersimpan. Dengarkan potongannya, lalu **cek transkripnya**: harus persis sama dengan "
           "yang diucapkan (angka tulis sebagai kata). Kalau ada yang salah, perbaiki lalu klik 'Simpan transkrip'.")
    return gr.update(choices=v, value=n), msg, str(C.VOICE_DIR / f"{n}.wav"), txt, gr.update(choices=v, value=n)


def save_tr(v, txt):
    if not v:
        raise gr.Error("Pilih suaranya dulu.")
    C.save_transcript(v, txt)
    return f"Transkrip **{v}** disimpan."


def load_voice(v):
    return preview_voice(v), C.get_transcript(v) if v else ""


def preview_voice(v):
    p = C.VOICE_DIR / f"{v}.wav"
    return str(p) if v and p.exists() else None


# ---------------------------------------------------------------- UI
def build():
    vid = [n for n, (l, _, _) in E.all_voices().items() if l == "id"]
    ven = [n for n, (l, _, _) in E.all_voices().items() if l == "en"]
    my = C.voices()
    clone_ok = C.installed()
    with gr.Blocks(title="KOMO TTS (offline)") as ui:
        gr.Markdown("# KOMO TTS\nText-to-speech **offline** - Bahasa Indonesia & English. Semua diproses di laptop, tanpa internet.")
        with gr.Tab("Clone + Ekspresi"):
            if not clone_ok:
                gr.Markdown("> Fitur ini belum diinstal. Di Terminal jalankan `bash install.sh clone` (download ~5 GB, sekali saja).")
            with gr.Row():
                with gr.Column(scale=3):
                    c_text = gr.Textbox(label="Teks", lines=12, placeholder=(
                        "[excited] Gimana jadinya kalau kamu nggak tidur 3 hari? [curious] Kedengarannya mustahil, kan?\n"
                        "[whispers] Tapi ada orang yang pernah coba. [pause] [dramatic] Dan hasilnya... bikin merinding."))
                    gr.Markdown(TAG_HELP)
                    c_name = gr.Textbox(label="Nama file hasil (opsional)", placeholder="misal: narasi_episode1")
                with gr.Column(scale=2):
                    with gr.Row():
                        c_voice = gr.Dropdown(my, value=my[0] if my else None, label="Suara", scale=4)
                        c_refresh = gr.Button("↻", scale=1, min_width=40)
                    c_ref = gr.Audio(label="Contoh suara referensi", type="filepath", value=preview_voice(my[0]) if my else None)
                    c_mode = gr.Radio(C.MODES, value=C.MODE_MIX, label="Mode")
                    c_expr = gr.Dropdown(C.EXPRESSIONS, value="(tanpa)", label="Ekspresi default (kalimat tanpa tag)")
                    c_speed = gr.Slider(0.8, 1.2, value=1.0, step=0.1, label="Tempo (lambat - normal - cepat)")
                    c_pause = gr.Slider(0.0, 1.5, value=0.3, step=0.05, label="Jeda antar kalimat (detik)")
                    with gr.Accordion("Lanjutan", open=False):
                        c_quality = gr.Slider(4, 20, value=10, step=1, label="Kualitas (langkah; kecil = lebih cepat)")
                        c_cfg = gr.Slider(1.0, 3.5, value=2.0, step=0.1, label="Kepatuhan ke teks/gaya (CFG)")
                    c_btn = gr.Button("Buat Suara", variant="primary", size="lg")
            c_info = gr.Markdown()
            c_out = gr.Audio(label="Hasil", type="filepath")
            c_files = gr.File(label="Download (WAV / MP3)", file_count="multiple")

        with gr.Tab("Suaraku (tambah suara)"):
            gr.Markdown("Upload rekaman suara **15-30 detik**, satu orang, bersih tanpa musik/noise. "
                        "Gaya bicara di sampel ikut ter-clone (sampel semangat → hasil semangat). "
                        "Pakai hanya suara milikmu sendiri atau yang kamu punya izinnya.")
            with gr.Row():
                s_file = gr.Audio(label="Sampel (mp3/wav/m4a)", type="filepath")
                with gr.Column():
                    s_name = gr.Textbox(label="Nama suara", placeholder="misal: suara_aku_semangat")
                    s_start = gr.Number(value=0, label="Mulai dari detik")
                    s_len = gr.Slider(5, 30, value=20, step=1, label="Panjang potongan (detik)")
                    s_btn = gr.Button("Simpan suara", variant="primary")
            s_info = gr.Markdown()
            s_prev = gr.Audio(label="Potongan yang disimpan", type="filepath")
            gr.Markdown("### Transkrip sampel\nDipakai mode *paling mirip*. Harus persis sama dengan isi potongan suara.")
            with gr.Row():
                s_pick = gr.Dropdown(my, value=my[0] if my else None, label="Suara", scale=1)
                s_tr = gr.Textbox(label="Transkrip", lines=4, scale=3, value=C.get_transcript(my[0]) if my else "")
            s_trbtn = gr.Button("Simpan transkrip")
            s_trinfo = gr.Markdown()

        with gr.Tab("Cepat (suara bawaan)"):
            with gr.Row():
                with gr.Column(scale=3):
                    text = gr.Textbox(label="Teks", lines=12, placeholder="Tulis atau tempel teks di sini...")
                    name = gr.Textbox(label="Nama file hasil (opsional)")
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

        c_btn.click(run_clone, [c_text, c_voice, c_mode, c_expr, c_speed, c_pause, c_quality, c_cfg, c_name],
                    [c_out, c_files, c_info])
        c_voice.change(preview_voice, c_voice, c_ref)
        c_refresh.click(lambda: gr.update(choices=C.voices()), None, c_voice)
        s_btn.click(add_voice, [s_file, s_name, s_start, s_len], [c_voice, s_info, s_prev, s_tr, s_pick])
        s_pick.change(load_voice, s_pick, [s_prev, s_tr])
        s_trbtn.click(save_tr, [s_pick, s_tr], s_trinfo)
        btn.click(run_fast, [text, lang, voice_id, voice_en, speed, pause, name], [player, files, info])
    return ui


if __name__ == "__main__":
    build().launch(server_name="127.0.0.1", server_port=int(os.environ.get("PORT", 7860)),
                   inbrowser=True, share=False)
