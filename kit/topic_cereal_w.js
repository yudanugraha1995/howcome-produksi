const B={
 hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:0.24,s:0.50},{ic:'sun',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY MORNING?','morning','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'fork',at:'iron',x:.24,y:0.24,s:0.50},{ic:'sun',at:'vitamins',x:.24,y:0.44,s:0.45},{ic:'milk',at:'milk',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FORTIFIED','fortified','#9FD8F5'],['+ CALCIUM','calcium','#FFFFFF'],['WHOLE GRAIN','grain','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'sugar',at:'sugar',x:.24,y:0.24,s:0.50},{ic:'spoon',at:'pour',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HALF SUGAR!','half','#FF8A8A'],['2-3 SERVINGS','servings','#9FD8F5'],['UNDER 6G SUGAR','six','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'sugar',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'CEREAL FIRST',R:'MILK FIRST',icL:'spoon',icR:'milk',cl:'#F4C542',cr:'#3B4A8A',atL:'Cereal',atR:'Comment',atV:'Cereal',sL:.85,sR:.85,title:'WHICH FIRST?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE CEREAL','EVERY MORNING?']);
