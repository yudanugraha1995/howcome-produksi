const B={
 hook:SCN({bg:'citynight',items:[{ic:'car',at:'drove',x:.24,y:0.24,s:0.55},{ic:'zzz',at:'awake',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO SLEEP?','night','#FFE27A']]}),
 sil_hook:SCN({bg:'citynight',items:[{ic:'car',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['I AM FINE...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'check',at:'fine',x:.24,y:0.24,s:0.45},{ic:'car',at:'feel',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['FEELS FINE','fine','#7BE07B']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['24 HOURS AWAKE...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'clock',at:'hours',x:.24,y:0.24,s:0.45},{ic:'car',at:'driving',x:.24,y:0.44,s:0.50},{ic:'warn',at:'limit',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LIKE 0.1% BAC','percent','#FF8A8A'],['OVER THE LIMIT!','limit','#FF8A8A']],src:'Source: CDC, drowsy driving'}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'zzz',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SLEEP FIRST!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GUILTY',R:'NEVER',icL:'car',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Ever',atR:'Comment',atV:'tired',sL:.85,sR:.85,title:'EVER DRIVEN TIRED?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'DROVE AFTER', 'NO SLEEP?']);
