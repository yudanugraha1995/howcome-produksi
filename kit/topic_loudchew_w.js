const B={
 hook:SCN({bg:'cafe',items:[{ic:'volume',at:.05,x:.24,y:0.24,s:0.50},{ic:'chips',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LOUD CHEWER?','chewed','#FFE27A']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'volume',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'cafe',items:[{ic:'chips',at:'chewed',x:.24,y:0.24,s:0.50},{ic:'volume',at:'loudly',x:.24,y:0.44,s:0.45},{ic:'x',at:'notice',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CRUNCH CRUNCH','loudly','#9FD8F5'],['DIDN\'T NOTICE','notice','#FFFFFF'],['CRUNCHY SNACKS','Crunchy','#FFE27A']]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'chips',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'cafe',items:[{ic:'brain',at:'brain',x:.24,y:0.24,s:0.50},{ic:'warn',at:'anger',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MISOPHONIA!','misophonia','#FF8A8A'],['TRIGGER SOUNDS','trigger','#9FD8F5'],['BRAIN REACTS','react','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'brain',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'IT BUGS ME',R:'I DON\'T CARE',icL:'volume',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Does',atR:'Comment',atV:'Does',sL:.85,sR:.85,title:'DOES IT BOTHER YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CHEWED LOUDLY','EVERY DAY?']);
