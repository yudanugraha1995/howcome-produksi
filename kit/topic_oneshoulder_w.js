const B={
 hook:SCN({bg:'classroom',items:[{ic:'book',at:.05,x:.24,y:0.24,s:0.50},{ic:'warn',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ONE SHOULDER?','shoulder','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'book',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'book',at:'bag',x:.24,y:0.24,s:0.50},{ic:'check',at:'easy',x:.24,y:0.44,s:0.45},{ic:'clock',at:'quick',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['QUICK + EASY','easy','#9FD8F5'],['EVERY DAY','every','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'book',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'warn',at:'straining',x:.24,y:0.24,s:0.50},{ic:'book',at:'weight',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['UNDER 10%!','ten','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'classroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'LEFT',R:'RIGHT',icL:'book',icR:'book',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'Which',sL:.85,sR:.85,title:'WHICH SHOULDER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CARRIED YOUR BAG','ON ONE SHOULDER?']);
