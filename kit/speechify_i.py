# Bot Instant (owner 21 Nov 2026): English narration via Speechify, voice "henry" (How Come + DYK).
# usage: python3 speechify_i.py <id> <splits e.g. 1,1,2,rest> "<narration text>"
# writes ../audio/<id>.mp3, timing_<id>_full.json and ../naskah/blocks_<id>.json (same format as fetch_i.py)
# API key = network secret for api.sws.speechify.com (proxy injects it; never put it here).
import sys, json, subprocess, base64, re, os
i, sp, text = sys.argv[1], sys.argv[2], sys.argv[3]
os.chdir(os.path.dirname(os.path.abspath(__file__)))
body = json.dumps({"input": text, "voice_id": "henry", "audio_format": "mp3", "model": "simba-3.5"})
r = subprocess.run(['curl', '-s', '-X', 'POST', 'https://api.sws.speechify.com/v1/audio/speech',
                    '-H', 'Authorization: Bearer proxy-injected', '-H', 'Content-Type: application/json', '-d', body],
                   capture_output=True, text=True, check=True).stdout
d = json.loads(r)
open(f'../audio/{i}.mp3', 'wb').write(base64.b64decode(d['audio_data']))
ws = []
def walk(m):
    if m.get('type') == 'word': ws.append({'w': m['value'], 's': m['start_time'] / 1000, 'e': m['end_time'] / 1000})
    for c in m.get('chunks', []) or []: walk(c)
walk(d['speech_marks'])
json.dump({'words': ws}, open(f'timing_{i}_full.json', 'w'))
sents = []; cur = []
for w in ws:
    cur.append(w['w'])
    if re.search(r'[.!?]["”]?$', w['w']): sents.append(' '.join(cur)); cur = []
if cur: sents.append(' '.join(cur))
n = [int(x) for x in sp.split(',')[:-1]]; names = ['hook', 'point', 'point2', 'cta']; bl = []; k = 0
for nm, c in zip(names, n): bl.append([nm, 'short', ' '.join(sents[k:k + c])]); k += c
bl.append([names[len(n)], 'short', ' '.join(sents[k:])])
json.dump(bl, open(f'../naskah/blocks_{i}.json', 'w'), indent=1)
print(i, len(ws), 'words', d.get('billable_characters_count'), 'chars', [b[2][:40] for b in bl])
