const B={
 hook:SCN({bg:'office',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'check',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LEGS CROSSED?','crossed','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'check',at:'comfy',x:.24,y:0.24,s:0.50},{ic:'heart',at:'polite',x:.24,y:0.44,s:0.45},{ic:'shoe',at:'legs',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO COMFY','comfy','#9FD8F5'],['POLITE','polite','#FFFFFF']]}),
 sil_point:SCN({bg:'office',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'heart',at:'blood',x:.24,y:0.24,s:0.50},{ic:'warn',at:'nerve',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TINGLY FOOT!','tingle','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'heart',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU CROSS YOUR LEGS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CROSSED YOUR LEGS','EVERY DAY?']);
