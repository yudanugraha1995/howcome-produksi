const B={
 hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'fork',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['AFTER EVERY MEAL?','meal','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'shoe',at:'walking',x:.24,y:0.24,s:0.50},{ic:'clock',at:'minutes',x:.24,y:0.44,s:0.45},{ic:'sugar',at:'sugar',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['10 MINUTES','minutes','#9FD8F5'],['USES SUGAR','sugar','#FFFFFF'],['BETTER DIGESTION','digestion','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'clock',at:'two',x:.24,y:0.24,s:0.50},{ic:'heart',at:'blood',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['2-5 MINUTES!','two','#FF8A8A'],['EASY HABIT','easiest','#9FD8F5'],['GENTLE, NOT A RUN','gentle','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES',R:'NOPE, NAP',icL:'shoe',icR:'bed',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU WALK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WALKED AFTER','EVERY MEAL?']);
