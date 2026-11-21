const B={
 hook:SCN({bg:'bedroom',items:[{ic:'bed',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SLEEP IN?','slept','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'bed',at:'weekend',x:.24,y:0.24,s:0.50},{ic:'zzz',at:'catching',x:.24,y:0.44,s:0.45},{ic:'clock',at:'sleep',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WEEKEND!','weekend','#9FD8F5'],['CATCHING UP','catching','#FFFFFF'],['ALARM','alarm','#FFE27A']]}),
 sil_point:SCN({bg:'bedroom',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroom',items:[{ic:'plane',at:'flew',x:.24,y:0.24,s:0.50},{ic:'alarm',at:'Monday',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SOCIAL JET LAG','jet','#FF8A8A'],['WITHIN 1 HOUR','hour','#9FD8F5'],['SAME WAKE TIME','wake','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'plane',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'bed',icR:'alarm',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU SLEEP IN?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT IN','EVERY WEEKEND?']);
