# Build the NIGHT Short timeline (~55 s) from ONE short narration (<=400 chars).
# usage: python3 compose_night.py <id> [seconds=55] [suffix=night|noon]
# Silent visual beats are spread after every block except the CTA; the CTA/outro is held at the end.
# needs: ../audio/<id>.mp3, timing_<id>_full.json (fa2words), ../naskah/blocks_<id>.json ([[name, short|yt, text], ...])
# writes (for SC in <id>_yt, <id>_short): narasi_<SC>.mp3 (narration + silent beats + music bed),
#        plan_<SC>.json (items with times), timing_<SC>.json (words on the new timeline), subs_<SC>.json
import json, re, subprocess, sys, os
import numpy as np

ID = sys.argv[1]; TOTAL = float(sys.argv[2]) if len(sys.argv) > 2 else 55.0; SUF = sys.argv[3] if len(sys.argv) > 3 else 'night'
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
SR = 44100
blocks = json.load(open(f'../naskah/blocks_{ID}.json'))
words = json.load(open(f'timing_{ID}_full.json'))['words']

def load(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768

voice = load(f'../audio/{ID}.mp3')
dur_voice = len(voice) / SR

# ---- block time ranges in the narration ----
spans = []; wi = 0
for name, dest, text in blocks:
    n = len(re.sub(r'\[[^\]]+\]', '', text).split())
    ws = words[wi:wi + n]; wi += n
    spans.append({'name': name, 'dest': dest, 'w0': wi - n, 'w1': wi, 's': ws[0]['s'], 'e': ws[-1]['e']})
for i, b in enumerate(spans):  # cut points in the pauses between blocks
    b['a'] = 0.0 if i == 0 else (spans[i - 1]['e'] + b['s']) / 2
    b['b'] = dur_voice if i == len(spans) - 1 else (b['e'] + spans[i + 1]['s']) / 2

def build(SC, items, total):
    """items: list of ('block', name) or ('sil', name, seconds)"""
    out = []; t = 0.0; segs = []; plan = []; neww = []
    for it in items:
        if it[0] == 'block':
            b = next(x for x in spans if x['name'] == it[1])
            seg = voice[int(b['a'] * SR):int(b['b'] * SR)]
            plan.append({'name': b['name'], 'kind': 'voice', 't0': round(t, 3), 't1': round(t + len(seg) / SR, 3)})
            for w in words[b['w0']:b['w1']]:
                neww.append({'w': w['w'], 's': round(w['s'] - b['a'] + t, 3), 'e': round(w['e'] - b['a'] + t, 3), 'block': b['name']})
            segs.append(seg); t += len(seg) / SR
        else:
            n = int(it[2] * SR); segs.append(np.zeros(n, np.float32))
            plan.append({'name': it[1], 'kind': 'silent', 't0': round(t, 3), 't1': round(t + it[2], 3)}); t += it[2]
    v = np.concatenate(segs)
    v = np.pad(v, (0, max(0, int(total * SR) - len(v))))[:int(total * SR)]
    # music bed, louder where nobody talks
    subprocess.run(['python3', 'music.py', str(total + 0.5), f'.music_{SC}.wav'], check=True, capture_output=True)
    m = load(f'.music_{SC}.wav')[:len(v)]; m = np.pad(m, (0, len(v) - len(m)))
    talk = np.zeros(len(v), np.float32)
    for p in plan:
        if p['kind'] == 'voice': talk[int(p['t0'] * SR):int(p['t1'] * SR)] = 1
    k = int(0.4 * SR); talk = np.convolve(talk, np.ones(k) / k, mode='same')  # smooth ducking
    gain = 0.55 - 0.40 * talk  # 0.55 in silent scenes, 0.15 under the voice
    mix = v * 1.0 + m * gain
    mix = mix / max(1.0, np.max(np.abs(mix)) / 0.98)
    pcm = (np.clip(mix, -1, 1) * 32767).astype(np.int16).tobytes()
    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-', '-c:a', 'libmp3lame', '-b:a', '192k', f'narasi_{SC}.mp3'], input=pcm, check=True)
    json.dump({'id': ID, 'SC': SC, 'total': total, 'items': plan}, open(f'plan_{SC}.json', 'w'), indent=1)
    json.dump({'words': neww}, open(f'timing_{SC}.json', 'w'))
    subprocess.run(['python3', 'mksubs.py', f'timing_{SC}.json', f'subs_{SC}.json'], check=True, capture_output=True)
    print(SC, 'total', total, 'voice', round(sum(p['t1'] - p['t0'] for p in plan if p['kind'] == 'voice'), 2), [(p['name'], p['t0'], p['t1']) for p in plan])

# ---- night Short: every block, a silent beat after each block except the CTA, CTA held at the end ----
names = [b['name'] for b in spans]
voice_len = sum(b['b'] - b['a'] for b in spans)
end = 5.0 if TOTAL >= 50 else 2.5
gaps = len(names) - 1
g = max(0.0, (TOTAL - voice_len - end) / gaps)
items = []
for i, nm in enumerate(names):
    items.append(('block', nm))
    if i < gaps: items.append(('sil', f'sil_{nm}', round(g, 3)))
items.append(('sil', 'pad_end', round(TOTAL - voice_len - g * gaps, 3)))
build(f'{ID}_{SUF}', items, TOTAL)
