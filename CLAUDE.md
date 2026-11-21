# HOWCOME? production: fixed rules

Talk to the owner in casual Indonesian. Everything in the videos is in **English** (international audience).

## CURRENT FORMAT (owner approved 14 Nov 2026, overrides older rules below for NEW productions; finished videos stay as they are)
- **Shorts only.** No more 16:9 YouTube videos and no upload packages.
- 4 Shorts a day via Buffer at **22:00, 02:00, 06:00, 10:00 WITA** (21:00, 01:00, 05:00, 09:00 WIB). No more _short/_noon/_night split; all Shorts are equal. Bot A manages the queue and posting.
- Narration **max 400 characters incl. audio tags** (owner, 15 Nov 2026; was 500, before that 600), 1 take, ElevenLabs Alex voice with model **eleven_v4**. Video length **max 35 s** (owner, 15 Nov 2026; was exactly 40 s): the length follows the narration, with short tight beats between lines and no padding just to reach a length; never slow the voice. Build with `python3 kit/compose_night.py <id> max35 short`. Finished videos stay as they are.
- Retention style: strong hook in the first 1-2 s, visual change every 2-3 s, varied transitions (zoom punch-in, slide, flash cut, whoosh), big pop-up keyword text, gentle motion on still images (Ken Burns), SFX on every transition and key moment (pop for text, ding for facts, riser/boom for the plot twist) kept below the voice, ending that loops back to the start + comment CTA. Title cover in the first frame.
- Files: `videos/<id>_short.mp4` + `meta/<id>.md` (SHORT title + description). Topics: still never repeat, check `meta/USED_TOPICS.md`.
- Hook (owner, 14 Nov): the first 3 s are a question that starts with "What if..." (or "They say if...", "Is it true that if..."); the title follows the same pattern.
- Audio on every video: background music bed under the voice, SFX, a pop sound for every text/element that appears, a transition sound on every scene change (pipeline v2 does this).
- Title cover for the feed: the first 0-0.5 s show the hook/title big (2-3 lines, max 6-8 words), white/yellow text with thick dark outline, centered in the 9:16 safe area (not in the top/bottom 20%); KOMO may sit behind; the narration starts at 0 s.
- KOMO's shirt shows "HOW COME" on the chest (owner approved 14 Nov 2026, new videos only; older videos keep "HowCome").
- New Shorts set `window.NEWFX=true;` in `kit/scenes_<id>_short.js` before `loadTopic`: this switches on the v2 transitions, keyword pop-ups, 0.5 s cover and the "HOW COME" shirt.
- Backgrounds (owner, 14 Nov 2026, new videos only): scenes use illustrated place backgrounds instead of plain colours, mostly bright, sometimes dark for variety: `bg:'classroom' | 'livingroom' | 'library' | 'kitchen' | 'bedroom' | 'bathroom' | 'park' | 'office' | 'cafe'` (bright) and `'bedroomnight' | 'citynight'` (dark), defined in `kit/places.js`. Pick places that fit the topic and vary them across scenes.
- Popup close-up (owner, 14 Nov 2026, NEWFX only): items, labels and keyword pop-ups are drawn bigger (items x1.4, labels x1.35, keywords 175 px; leave room for this when placing them), slam in from big to their size, and the camera pushes in toward each new item/label for ~1 s, then eases back (`push:false` on a scene turns the camera push off).
- Ending (owner, 15 Nov 2026, new Shorts only): the narration ends with (1) a comment question in English that fits the video's title/topic (e.g. snoozing: "Are you a snoozer or an early riser? Tell us in the comments!"), then (2) a subscribe line (e.g. "Subscribe for more facts like this!"). Vary the wording on every video. Both also appear as on-screen text: the question in the `VSCTA` (L/R choices + title), the subscribe line via `VSCTA({... subT:'SUBSCRIBE FOR MORE!', atSub:'Subscribe'})`. Still max 400 characters and max 35 s.
- Short metadata (owner, 14 Nov 2026; for new Shorts and for every Short in stock that is not aired or scheduled yet): in `meta/<id>.md` the section `## SHORT METADATA (current)` holds the Title, a long YouTube **Description** (as full as useful, up to YouTube's 5,000 characters, never filler or repeated text: hook/summary, how it works, key facts, myth vs fact or tips, plot twist, questions for the comments, sources, disclaimer, about HOWCOME + subscribe CTA) with **3-5 hashtags incl. #shorts** at the end. No YouTube tags (owner, 15 Nov 2026: Buffer cannot set them), so no `## Tags` section. Build it with `python3 meta/build_meta.py` from `meta/longmeta_*.py`.
- Stock (owner, 15 Nov 2026; was 16): keep **at least 4 Shorts** ready that are neither aired nor scheduled in Buffer (one day = the 4 main slots 22/02/06/10 WITA). Bot A schedules once a day at 11:04 WITA. A daily scheduled task at **11:01 WITA** checks the stock; if fewer than 4, make the missing ones right away and tell Bot A (session_011yJCQ71889A6a32AdsqkWa) once they are pushed. If there are 4 or more, make nothing (save tokens). Report to Bot C only on problems.


## STORAGE + UPLOAD (owner 21 Nov 2026, overrides Hosting below)
- Every How Come video goes to Buffer via **Cloudinary** (cloud u5zqiuc2, public_id `howcome/<id>`), exactly like Masa Sih: mcp Cloudinary sign-upload -> curl upload -> Buffer uses `secure_url`. Never use raw GitHub links, never push mp4/mp3 to GitHub (repo .git ~3.5 GB, guard 3.8 GB).
- Voice: Speechify "henry" (`kit/speechify_i.py`). Schedule only through the Buffer connector (api.buffer.com via the proxy is a different Buffer account, do not use it).
- Narration length (owner 21 Nov 2026, overrides 400 chars / 35 s): 50-55 s, max 800 characters, dense (batch b4: ~520-710 chars incl. extra facts from `naskah/b4/extra.py`; compose T = min(55, max(50, speech+4.2))).
- NO zoom pop-up effect (owner 21 Nov 2026): `window.NOZOOM=true;` in every scenes file (turns off the slam-zoom pop-ups and the camera push-in).
- Batch 22-28 Nov: `naskah/b4/` (spec.py, gen.py, run.sh, desc.py); scene server for How Come runs on port 8766.

## Channel
- Name: **HOWCOME?** Mascot: **KOMO** (locked, see `maskot/KOMO.md` and `maskot/KOMO_official.png`). Do not change the design.
- Narrator: young male voice, US accent. Owner sends only the audio (mp3).

## Title theme (LOCKED)
- Every title is a **"What if..."** question about everyday life: things we see all the time or habits we do without noticing (e.g. What If You Cracked Your Knuckles Every Day?). Universal, debate-friendly, international.

## Video
- Style = MASA SIH **Style A** (`kit/STYLE_A.md`), but replace YUMA with KOMO and translate all on-screen text to English.
- Workflow: mp3 -> transcribe (faster-whisper, English) -> `subs_<id>.json` -> write `scenes_<id>.js` -> `kit/runone.sh <id>`.
- Sound effects (owner request, 11 Nov 2026, new videos from batch 5 on): after `compose.py`, run `python3 kit/sfx.py <id>_short v` and `python3 kit/sfx.py <id>_yt h` (scene server on :8765) before `runone.sh`. Whoosh on every scene change, pop when items appear, ding on the HOW COME / PLOT TWIST cards; louder in silent scenes, soft under the voice. Self-made, royalty-free.
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
- Scripts live in `naskah/`. **Narration rule (LOCKED, from 11 Nov 2026):** ONE narration per title, MAX 1200 characters incl. audio tags (~60 s; changed from 1500 on 11 Nov 2026 for new productions only, older videos stay as they are), generated once (1 take) with ElevenLabs Alex v3. YouTube video (16:9) = **144 s**: the ~60 s narration plus silent visual scenes (KOMO animation, on-screen fact text, chapter cards, sound effects) spread between blocks (silent scenes may explain the situation purely with visuals + on-screen text), with a self-made royalty-free background music bed under the whole video. The Short (9:16) is **55 s**, CUT from that same audio with ffmpeg (0 extra credits): drop the weakest block(s), and pad with short silent visual beats if needed to reach exactly 55 s. Write the script in blocks: hook -> SHORT, context -> YT only, point 1 -> YT only, point 2 (strongest) -> SHORT, plot twist -> SHORT, CTA -> SHORT; each SHORT block must make sense on its own, and the SHORT blocks together must be about 850-1000 characters (~45-52 s; the rest of the 55 s is padded with silent beats), leaving ~200-350 characters for the YT-only blocks. Use ElevenLabs v3 tags ([excited] [curious] [laughs] [sighs] [surprised] [scoffs] [gasps]...). Save in `naskah/`. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).

## Buffer (posting)
- Only channel: YouTube **How Come Entertainment** (`6af4253462b70b94b0f20af7`, org `6ae70fdb1bfb2511a8a3e891`, Asia/Jakarta). Never post HOWCOME videos to the MASA SIH channels.
- Slots: **08:00 and 16:00 WIB** daily, one video per slot; fill the earliest free slot, else the next day. Check list_posts (scheduled + sent) first so nothing is posted twice.
- Buffer's YouTube integration accepts **Shorts only** (vertical). 16:9 videos need another upload route.
- YouTube metadata: title from `meta/<id>.md`, categoryId "27" (Education), public, madeForKids false. Free plan: max 10 scheduled posts per channel. Keep `meta/buffer_schedule.md` up to date.
- Night slot (owner approved 12 Nov 2026): a 3rd Short every day at **20:00 WIB** (posted by Bot A from the repo). One NEW title per night, Short only (no 16:9 video, no upload package). Narration MAX 400 characters incl. audio tags (1 take), still with hook, fact, plot twist and comment CTA. From the 13 Nov stock on: ~55 s long; the rest of the time is visuals (pauses between lines, longer scenes, fact/title cards held longer, CTA held at the end), never slow the voice down. Sound effects on every scene change, title cover in the first frame. Build with `kit/compose_night.py <id>` then `kit/sfx.py <id>_night v`, `kit/runone.sh <id>_night v`. Files: `videos/<id>_night.mp4` + `meta/<id>.md` (NIGHT SHORT title + description). Keep at least 10 days of night stock ready (owner, 12 Nov 2026; a daily scheduled task at 08:47 WIB checks this).
- Noon slot (owner approved 13 Nov 2026): a 4th Short every day at **11:00 WIB** (posted by Bot A from the repo), same rules as the night slot (NEW title, Short only, max 400 chars, ~55 s, SFX, title cover). Build with `kit/compose_night.py <id> 55 noon`, then `kit/sfx.py <id>_noon v`, `kit/runone.sh <id>_noon v`. Files: `videos/<id>_noon.mp4` + `meta/<id>.md` (NOON SHORT section); table "Noon slot 11:00 WIB" in `meta/buffer_schedule.md`. Keep at least 10 days of noon stock ready (same daily task).
- Thumbnails: every 16:9 YouTube video gets a custom 1280x720 thumbnail `thumbnails/<id>_yt.jpg` (cover rendered at t=0) in its upload package; every Short shows the title cover in its first frame.
- Topics: never repeat a title/topic on How Come. Check `meta/USED_TOPICS.md` before writing and add every new title there. Same topic as a Masa Sih video is allowed only with a different narration (angle, facts, twist).
- Autopilot (owner approved 11 Nov 2026): when Bot C (posting manager session) reports an empty slot, fill it straight away with no need to ask the owner. First use a finished Short from the queue; if none is left, produce a new title (ElevenLabs credits allowed; follow all rules above: unique "What if" title, max 1200 chars, 1 take) and schedule it. Long 16:9 videos are uploaded manually by the owner. Always report what was done to the owner + Bot C.
