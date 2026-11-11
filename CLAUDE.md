# HOWCOME? production: fixed rules

Talk to the owner in casual Indonesian. Everything in the videos is in **English** (international audience).

## Channel
- Name: **HOWCOME?** Mascot: **KOMO** (locked, see `maskot/KOMO.md` and `maskot/KOMO_official.png`). Do not change the design.
- Narrator: young male voice, US accent. Owner sends only the audio (mp3).

## Title theme (LOCKED)
- Every title is a **"What if..."** question about everyday life: things we see all the time or habits we do without noticing (e.g. What If You Cracked Your Knuckles Every Day?). Universal, debate-friendly, international.

## Video
- Style = MASA SIH **Style A** (`kit/STYLE_A.md`), but replace YUMA with KOMO and translate all on-screen text to English.
- Workflow: mp3 -> transcribe (faster-whisper, English) -> `subs_<id>.json` -> write `scenes_<id>.js` -> `kit/runone.sh <id>`.
- Default output: Short 9:16, 1080x1920 (Short = 55 s, cut from the narration). Title thumbnail in the first 0.1 s (`THUMB`).
- Audio is used as-is; never re-generate or change the narration.
- Always check a frame sheet before delivering.

## Delivery
- With every finished video, ALWAYS give the owner a ready-to-paste English title + description (hook, key facts, CTA, sources, hashtags; YouTube gets chapters). Save it in `meta/<id>.md`.
- Narration audio: ElevenLabs, voice **Alex - Upbeat, Energetic and Clear** (`yl2ZDV1MzN4HbQJbMihG`), model **eleven_v3** (LOCKED). Download via `https://api.elevenlabs.io/v1/history/<historyItemId>/audio`; word timings via `/v1/forced-alignment` + `kit/fa2words.py`.

## Hosting
- Final Shorts: `videos/<id>_short.mp4`, YouTube 16:9: `videos/<id>_yt.mp4`. Commit, push to `main`.
- Repo (from 11 Nov 2026): **yudanugraha1995/howcome-produksi**; public raw links `https://raw.githubusercontent.com/yudanugraha1995/howcome-produksi/main/videos/<file>`. The old repo HowComeEntertainment/howcome-produksi stays untouched (Shorts scheduled before 11 Nov use its links).
- Watermark `kit/wm.png`: KOMO avatar + "Subscribe Me Please" (locked; changed from "Please Subscribe Me" on 11 Nov 2026, new videos only, old videos stay as they are).
- Subtitles: ALL CAPS (locked from 11 Nov 2026, new videos only).
- Scripts live in `naskah/`. **Narration rule (LOCKED, from 11 Nov 2026):** ONE narration per title, MAX 1500 characters incl. audio tags (~75 s; changed from 1800 on 11 Nov 2026, earlier 1200), generated once (1 take) with ElevenLabs Alex v3. YouTube video (16:9) = **144 s**: the ~75 s narration plus silent visual scenes (KOMO animation, on-screen fact text, chapter cards, sound effects) spread between blocks (silent scenes may explain the situation purely with visuals + on-screen text), with a self-made royalty-free background music bed under the whole video. The Short (9:16) is **55 s**, CUT from that same audio with ffmpeg (0 extra credits): drop the weakest block(s), and pad with short silent visual beats if needed to reach exactly 55 s. Write the script in blocks: hook -> SHORT, context -> YT only, point 1 -> YT only, point 2 (strongest) -> SHORT, plot twist -> SHORT, CTA -> SHORT; each SHORT block must make sense on its own, and the SHORT blocks together must fit in ~52 s (about 1000-1050 characters). Use ElevenLabs v3 tags ([excited] [curious] [laughs] [sighs] [surprised] [scoffs] [gasps]...). Save in `naskah/`. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).

## Buffer (posting)
- Only channel: YouTube **How Come Entertainment** (`6af4253462b70b94b0f20af7`, org `6ae70fdb1bfb2511a8a3e891`, Asia/Jakarta). Never post HOWCOME videos to the MASA SIH channels.
- Slots: **08:00 and 16:00 WIB** daily, one video per slot; fill the earliest free slot, else the next day. Check list_posts (scheduled + sent) first so nothing is posted twice.
- Buffer's YouTube integration accepts **Shorts only** (vertical). 16:9 videos need another upload route.
- YouTube metadata: title from `meta/<id>.md`, categoryId "27" (Education), public, madeForKids false. Free plan: max 10 scheduled posts per channel. Keep `meta/buffer_schedule.md` up to date.
- Autopilot (owner approved 11 Nov 2026): when Bot C (posting manager session) reports an empty slot, fill it straight away with no need to ask the owner. First use a finished Short from the queue; if none is left, produce a new title (ElevenLabs credits allowed; follow all rules above: unique "What if" title, max 1500 chars, 1 take) and schedule it. Long 16:9 videos are uploaded manually by the owner. Always report what was done to the owner + Bot C.
