# usage: python3 tts.py <id> <text_file>
# ElevenLabs TTS (Alex v3, LOCKED) via API, 1 take. Saves audio/<id>.mp3, logs credit usage to audio/usage_log.md.
import json,sys,os,base64,urllib.request,time
VOICE='yl2ZDV1MzN4HbQJbMihG'; MODEL=os.environ.get('TTS_MODEL','eleven_v4')  # eleven_v4 from 14 Nov 2026 (older titles used eleven_v3)
id_,tf=sys.argv[1],sys.argv[2]; text=open(tf).read().strip()
root=os.path.dirname(os.path.abspath(__file__))+'/..'
def req(url,data=None):
    h={'Content-Type':'application/json','xi-api-key':'proxy-injected'}
    r=urllib.request.Request(url,data=json.dumps(data).encode() if data else None,headers=h,method='POST' if data else 'GET')
    return urllib.request.urlopen(r,timeout=600).read()
sub=lambda: json.loads(req('https://api.elevenlabs.io/v1/user/subscription'))
s0=sub()
import urllib.error
try:
    audio=req(f'https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_128',{'text':text,'model_id':MODEL})
except urllib.error.HTTPError as e:
    if e.code<500: raise
    audio=None; print('server error',e.code,'- looking for the generation in history (no retry, to avoid paying twice)')

import glob
known={open(f).read().strip() for f in glob.glob(f'{root}/audio/*.history_id')}
h=None
for _ in range(60):  # the newest history item that is not already assigned to another narration
    for it in json.loads(req('https://api.elevenlabs.io/v1/history?page_size=5'))['history']:
        if it['history_item_id'] not in known: h=it; break
    if h: break
    time.sleep(2)
used=h['character_count_change_to']-h['character_count_change_from']
if audio is None: audio=req(f"https://api.elevenlabs.io/v1/history/{h['history_item_id']}/audio")
open(f'{root}/audio/{id_}.mp3','wb').write(audio)
open(f'{root}/audio/{id_}.history_id','w').write(h['history_item_id'])
prev=0
lg=f'{root}/audio/usage_log.md'
if os.path.exists(lg):
    for l in open(lg).read().splitlines()[4:]:
        try: prev+=int(l.split('|')[4])
        except: pass
s1=sub(); s1['character_count']=prev+used
log=f'{root}/audio/usage_log.md'
if not os.path.exists(log): open(log,'w').write('# ElevenLabs usage log (Alex v3)\n\n| date (UTC) | id | script chars | credits used | total used | limit | remaining |\n|---|---|---|---|---|---|---|\n')
open(log,'a').write(f"| {time.strftime('%Y-%m-%d %H:%M',time.gmtime())} | {id_} | {len(text)} | {used} | {s1['character_count']} | {s1['character_limit']} | {s1['character_limit']-s1['character_count']} |\n")
print(id_,'chars',len(text),'used',used,'total',s1['character_count'],'/',s1['character_limit'])
