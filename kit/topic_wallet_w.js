const B={
 hook:SCN({bg:'office',items:[{ic:'money',at:.05,x:.24,y:0.24,s:0.50},{ic:'card',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WALLET IN BACK?','wallet','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'money',at:'thick',x:.24,y:0.24,s:0.50},{ic:'card',at:'wallet',x:.24,y:0.44,s:0.45},{ic:'x',at:'notice',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['THICK WALLET','thick','#9FD8F5'],['DIDN\'T NOTICE','notice','#FFFFFF'],['CARDS + CASH','cards','#FFE27A']]}),
 sil_point:SCN({bg:'office',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'warn',at:'hips',x:.24,y:0.24,s:0.50},{ic:'brain',at:'nerve',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WALLET NEURITIS!','neuritis','#FF8A8A'],['FRONT POCKET','front','#9FD8F5'],['EASY FIX','easy','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'FRONT',R:'BACK',icL:'card',icR:'money',cl:'#F4C542',cr:'#3B4A8A',atL:'Front',atR:'Comment',atV:'Front',sL:.85,sR:.85,title:'FRONT OR BACK POCKET?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SAT ON YOUR WALLET','EVERY DAY?']);
