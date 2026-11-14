# HOWCOME sound effects (self-made, royalty-free): whoosh on every scene change, pop when things appear on screen.
# Louder in silent scenes (no narration), soft under the voice.
# usage: python3 sfx.py <SC> <v|h>   (needs the scene server on :8765; run after compose.py, before runone.sh)
# Keeps the mix without sfx in narasi_<SC>.dry.mp3, so running it again never stacks sounds twice.
import json, os, shutil, subprocess, sys
import numpy as np
SC, A = sys.argv[1], sys.argv[2]
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
SR = 44100; rng = np.random.default_rng(7)
dry = f'narasi_{SC}.dry.mp3'
if not os.path.exists(dry): shutil.copy(f'narasi_{SC}.mp3', dry)
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', dry, '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True, check=True).stdout
mix = np.frombuffer(raw, np.int16).astype(np.float32) / 32768
plan = json.load(open(f'plan_{SC}.json'))['items']
ev = f'.sfx_{SC}.json'
subprocess.run(['node', 'sfxscan.js', A, ev], check=True, env=dict(os.environ, SC=SC))
pops = json.load(open(ev))

def pop(f0):
    n = int(0.09 * SR); t = np.arange(n) / SR
    f = f0 * np.exp(-t * 9); ph = 2 * np.pi * np.cumsum(f) / SR
    return (np.sin(ph) + 0.3 * np.sin(2 * ph)) * np.exp(-t * 45)
def whoosh(d=0.45):
    n = int(d * SR); t = np.arange(n) / SR; x = rng.standard_normal(n)
    y = np.zeros(n); a = 0.0; c = np.linspace(0.02, 0.35, n) ** 1.5  # rising cutoff sweep (one-pole low-pass)
    for i in range(n): a += c[i] * (x[i] - a); y[i] = a
    env = np.sin(np.pi * t / d) ** 2
    return y * env / (np.max(np.abs(y)) + 1e-9)
def ding():
    n = int(0.9 * SR); t = np.arange(n) / SR
    return sum(w * np.sin(2 * np.pi * f * t) for f, w in [(1320, 1), (2640, .4), (3960, .15)]) * np.exp(-t * 5)

def voiced(t): return any(p['kind'] == 'voice' and p['t0'] <= t < p['t1'] for p in plan)
def add(sig, t, g):
    a = int(t * SR); b = min(len(mix), a + len(sig))
    if 0 <= a < len(mix): mix[a:b] += g * sig[:b - a]

W = whoosh()
for p in plan[1:]: add(W, max(0, p['t0'] - 0.2), 0.10 if p['kind'] == 'voice' else 0.18)
for p in plan:
    if p['name'] in ('twist',) or p['name'].startswith('sil_hook'): add(ding(), p['t0'] + 0.1, 0.10)
def riser(d=0.9):
    n = int(d * SR); tt = np.arange(n) / SR; f = 200 + 900 * (tt / d) ** 2
    return (0.6 * np.sin(2 * np.pi * np.cumsum(f) / SR) + 0.4 * rng.standard_normal(n) * (tt / d)) * (tt / d) ** 1.5
def boom(d=0.8):
    n = int(d * SR); tt = np.arange(n) / SR; f = 90 * np.exp(-tt * 3) + 35
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 4)
if os.environ.get('NEWFX', '1') == '1':
    for p in plan:
        if p['name'] == 'twist':
            add(riser(), max(0, p['t0'] - 0.9), 0.10); add(boom(), p['t0'], 0.35)
last = -1
for t in pops:
    if t - last < 0.12: continue
    last = t; add(pop(rng.uniform(520, 900)), t, 0.06 if voiced(t) else 0.16)
mix = mix / max(1.0, np.max(np.abs(mix)) / 0.98)
pcm = (np.clip(mix, -1, 1) * 32767).astype(np.int16).tobytes()
subprocess.run(['ffmpeg', '-y', '-v', 'error', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-', '-c:a', 'libmp3lame', '-b:a', '192k', f'narasi_{SC}.mp3'], input=pcm, check=True)
print(SC, 'sfx: whooshes', len(plan) - 1, 'pops', len(pops))
