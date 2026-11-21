# gen.py: spec.py -> kit/topic_<id>_w.js + kit/scenes_<id>_w_short.js + nar.json (id_w: title, narration, splits)
import json,re
exec(open('spec.py').read());exec(open('extra.py').read())
K='/home/user/howcome-produksi/kit/'
q=lambda s:s.replace("\\","\\\\").replace("'","\\'")
COL=['#FFE27A','#9FD8F5','#FFFFFF','#7BE07B','#FFB3C7']
def sents(t):
    ws=t.split();out=[];cur=[]
    for w in ws:
        cur.append(w)
        if re.search(r'[.!?]["”]?$',w): out.append(' '.join(cur));cur=[]
    if cur: out.append(' '.join(cur))
    return out
NAR={}
for k,(title,nar,bg,hic,hkw,pic,pkw,p2ic,p2kw,cta,thumb,src,tag) in S.items():
    i=k+'_w';ss0=sents(nar);xp,xt,xk=X[k]
    b0=next(j for j,s in enumerate(ss0) if s.startswith("But here"));q0=max(j for j,s in enumerate(ss0) if s.endswith('?'))
    ss=ss0[:1]+sents(Y[k])+ss0[1:b0]+sents(xp)+ss0[b0:q0]+sents(xt)+sents(Z[k])+ss0[q0:];nar=' '.join(ss)
    def inblk(w,a,bb):
        import re as _r
        return any(_r.sub('[^a-z0-9]','',x.lower()).startswith(_r.sub('[^a-z0-9]','',w.lower())) for x in ' '.join(ss[a:bb]).split())
    b=next(j for j,s in enumerate(ss) if s.startswith("But here"))
    qn=max(j for j,s in enumerate(ss) if s.endswith('?'))
    sp=f"1,{b-1},{qn-b},rest"
    NAR[i]=(title,nar,sp,src,tag)
    if not inblk(xk[0][1],1,b): print('MISS point',i,xk[0][1])
    for kk in xk[1:]:
        if not inblk(kk[1],b,qn): print('MISS twist',i,kk[1])
    def it(lst,ys=(0.24,0.44,0.64)):
        return ','.join("{ic:'%s',at:'%s',x:.24,y:%s,s:%s}"%(ic,q(a),y,'0.50' if n==0 else '0.45') for n,((ic,a),y) in enumerate(zip(lst,ys)))
    L,R,icL,icR,ct=cta
    atq=ss[qn].split()[0]
    js=f"""const B={{
 hook:SCN({{bg:'{bg}',items:[{{ic:'{hic[0]}',at:.05,x:.24,y:0.24,s:0.50}},{{ic:'{hic[1]}',at:.6,x:.24,y:0.44,s:0.45}}],komo:{{x:.64,y:1.2,s:.95,expr:'surprised'}},kw:[['{q(hkw[0])}','{q(hkw[1])}','#FFE27A']]}}),
 sil_hook:SCN({{bg:'{bg}',items:[{{ic:'{hic[0]}',at:.05,x:.24,y:.3,s:.55}}],komo:{{x:.64,y:1.2,s:.95,expr:'worried'}},kw:[['HMM...',.1]],push:false}}),
 point:SCN({{bg:'{bg}',items:[{it(pic)}],komo:{{x:.64,y:1.2,s:.95,expr:'think'}},kw:[['{q(pkw[0][0])}','{q(pkw[0][1])}','#9FD8F5'],['{q(pkw[1][0])}','{q(pkw[1][1])}','#FFFFFF'],['{q(xk[0][0])}','{q(xk[0][1])}','#FFE27A']]}}),
 sil_point:SCN({{bg:'{bg}',items:[{{ic:'{pic[0][0]}',at:.05,x:.24,y:.3,s:.55}}],komo:{{x:.64,y:1.2,s:.95,expr:'think'}},kw:[['BUT WAIT...',.1]],push:false}}),
 point2:SCN({{bg:'{bg}',items:[{it(p2ic)}],komo:{{x:.64,y:1.2,s:.95,expr:'surprised'}},kw:[['{q(p2kw[0])}','{q(p2kw[1])}','#FF8A8A'],['{q(xk[1][0])}','{q(xk[1][1])}','#9FD8F5'],['{q(xk[2][0])}','{q(xk[2][1])}','#7BE07B']],labels:[{{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}}]}}),
 sil_point2:SCN({{bg:'{bg}',items:[{{ic:'{p2ic[0][0]}',at:.05,x:.24,y:.3,s:.55}}],komo:{{x:.64,y:1.2,s:.95,expr:'happy'}},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}}),
 cta:VSCTA({{L:'{q(L)}',R:'{q(R)}',icL:'{icL}',icR:'{icR}',cl:'#F4C542',cr:'#3B4A8A',atL:'{q(atq)}',atR:'Comment',atV:'{q(atq)}',sL:.85,sR:.85,title:'{q(ct)}',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
}};
var THUMB=buildTopic(B,['{q(thumb[0])}','{q(thumb[1])}','{q(thumb[2])}']);
"""
    open(K+f'topic_{i}.js','w').write(js)
    open(K+f'scenes_{i}_short.js','w').write(f"window.NOZOOM=true;\nwindow.NEWFX=true;\nloadTopic('{i}');\n")
json.dump(NAR,open('nar.json','w'),indent=0,ensure_ascii=False)
print(len(NAR),[v[2] for v in list(NAR.values())[:5]])
