const B={
 hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:0.24,s:0.50},{ic:'spoon',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['RAW DOUGH?','dough','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'spoon',at:'tastes',x:.24,y:0.24,s:0.50},{ic:'heart',at:'amazing',x:.24,y:0.44,s:0.45},{ic:'bread',at:'dough',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO GOOD','amazing','#9FD8F5'],['JUST ONE SPOON','tastes','#FFFFFF'],['SALMONELLA','salmonella','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'bread',at:'flour',x:.24,y:0.24,s:0.50},{ic:'germ',at:'coli',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['RAW FLOUR RISK!','flour','#FF8A8A'],['HEAT TREATED','Heat','#9FD8F5'],['SAFE TO EAT','safe','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I SNEAK IT',R:'NEVER',icL:'spoon',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU SNEAK COOKIE DOUGH?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE RAW','COOKIE DOUGH?']);
