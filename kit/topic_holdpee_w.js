const B={
 hook:SCN({bg:'bathroom',items:[{ic:'toilet',at:.05,x:.24,y:0.24,s:0.50},{ic:'clock',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HOLD IT?','held','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'toilet',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'drop',at:'bladder',x:.24,y:0.24,s:0.50},{ic:'water',at:'cups',x:.24,y:0.44,s:0.45},{ic:'clock',at:'hold',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LIKE A BALLOON','balloon','#9FD8F5'],['~2 CUPS','cups','#FFFFFF'],['HALF FULL','half','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'warn',at:'weaken',x:.24,y:0.24,s:0.50},{ic:'germ',at:'infections',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['UTI RISK!','infections','#FF8A8A'],['6-8 TIMES A DAY','six','#9FD8F5'],['JUST GO!','urge','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'FOR HOURS',R:'I GO NOW',icL:'clock',icR:'toilet',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW LONG CAN YOU HOLD IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','HELD YOUR PEE','EVERY DAY?']);
