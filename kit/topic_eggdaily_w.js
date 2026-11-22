const B={
 hook:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'fork',at:'protein',x:.24,y:0.24,s:0.50},{ic:'sun',at:'vitamin',x:.24,y:0.44,s:0.45},{ic:'brain',at:'brain',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['6G PROTEIN','protein','#9FD8F5'],['CHOLINE','choline','#FFFFFF'],['EAT THE YOLK!','yolk','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'warn',at:'feared',x:.24,y:0.24,s:0.50},{ic:'heart',at:'heart',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT SO SCARY','research','#FF8A8A'],['BACON + BUTTER','bacon','#9FD8F5'],['ASK YOUR DOCTOR','doctor','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'BOILED',R:'FRIED',icL:'fork',icR:'fire',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'BOILED OR FRIED?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE AN EGG','EVERY DAY?']);
