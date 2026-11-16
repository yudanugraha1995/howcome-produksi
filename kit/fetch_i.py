# Bot Instant: python3 fetch_i.py <id> <mp3_url> <words_url> <splits>
# downloads narration + Scribe words, writes ../audio/<id>.mp3, timing_<id>_full.json and ../naskah/blocks_<id>.json
# splits = sentence counts per block "1,1,1,rest" (block names hook,point,point2,cta)
import sys,json,subprocess,re,os
i,au,wu,sp=sys.argv[1:5];os.chdir(os.path.dirname(os.path.abspath(__file__)))
subprocess.check_call(['curl','-sS','-o',f'../audio/{i}.mp3',au])
d=json.loads(subprocess.check_output(['curl','-sS',wu]));W=d['words'] if isinstance(d,dict) else d
ws=[w for w in W if w.get('type','word')=='word' and not w['text'].startswith('[')]
json.dump({'words':[{'w':w['text'],'s':w['start'],'e':w['end']} for w in ws]},open(f'timing_{i}_full.json','w'))
sents=[];cur=[]
for w in ws:
    cur.append(w['text'])
    if re.search(r'[.!?]["”]?$',w['text']): sents.append(' '.join(cur));cur=[]
if cur: sents.append(' '.join(cur))
n=[int(x) for x in sp.split(',')[:-1]];names=['hook','point','point2','cta'];bl=[];k=0
for nm,c in zip(names,n): bl.append([nm,'short',' '.join(sents[k:k+c])]);k+=c
bl.append([names[len(n)],'short',' '.join(sents[k:])])
json.dump(bl,open(f'../naskah/blocks_{i}.json','w'),indent=1);print(i,len(ws),'words',[b[2][:40] for b in bl])
