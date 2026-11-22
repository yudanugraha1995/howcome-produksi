const B={
 hook:SCN({bg:'livingroom',items:[{ic:'nose',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'nose',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'nose',at:'boogers',x:.24,y:0.24,s:0.50},{ic:'cloud',at:'dust',x:.24,y:0.44,s:0.45},{ic:'germ',at:'germs',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EVERYONE DOES IT','everyone','#9FD8F5'],['JUST MUCUS','mucus','#FFFFFF'],['9 IN 10 ADULTS','nine','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'nose',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'drop',at:'nosebleeds',x:.24,y:0.24,s:0.50},{ic:'germ',at:'spread',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOSEBLEEDS','nosebleeds','#FF8A8A'],['USE A TISSUE','tissue','#9FD8F5'],['MUCOPHAGY?!','mucophagy','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GUILTY',R:'NEVER',icL:'nose',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Be',atR:'Comment',atV:'Be',sL:.85,sR:.85,title:'DO YOU PICK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','PICKED YOUR NOSE','EVERY DAY?']);
