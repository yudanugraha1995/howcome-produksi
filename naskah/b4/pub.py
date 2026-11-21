# pub.py <id_w> -> slot (dueAt WITA, old id) + title + text ; pub.py <id_w> done <newid>
import json,sys
from datetime import datetime,timedelta,timezone
B='/home/user/howcome-produksi/naskah/';S=json.load(open(B+'hc_slots_all.json'));O=open(B+'b4/order.txt').read().split()
v=sys.argv[1]
if len(sys.argv)>2:
    s=next(x for x in S if x.get('plan')==v);s['new']=sys.argv[3];s['vid']=v;json.dump(S,open(B+'hc_slots_all.json','w'),indent=0);print('saved');sys.exit()
for j,x in enumerate(S): x['plan']=O[j] if j<len(O) else None
json.dump(S,open(B+'hc_slots_all.json','w'),indent=0)
s=S[O.index(v)];w=datetime.fromisoformat(s['dueUTC'].replace('Z','+00:00')).astimezone(timezone(timedelta(hours=8))).strftime('%Y-%m-%dT%H:%M:00+08:00')
sys.path.insert(0,B+'b4');import os;os.chdir(B+'b4');from desc import text,NAR
print('DUE',w,'OLD',s['old']);print('TITLE',NAR[v][0]);print('TEXT');print(text(v))
