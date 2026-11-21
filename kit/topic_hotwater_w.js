const B={
 hook:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:0.24,s:0.50},{ic:'sun',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HOT WATER?','hot','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'cup3',at:'water',x:.24,y:0.24,s:0.50},{ic:'alarm',at:'morning',x:.24,y:0.44,s:0.45},{ic:'stomach',at:'stomach',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EVERY MORNING','morning','#9FD8F5'],['WAKE UP!','wakes','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:'gut',x:.24,y:0.24,s:0.50},{ic:'thermo',at:'sixty',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LET IT COOL!','cool','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'HOT',R:'COLD',icL:'cup3',icR:'ice',cl:'#F4C542',cr:'#3B4A8A',atL:'Hot',atR:'Comment',atV:'Hot',sL:.85,sR:.85,title:'HOT OR COLD?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK HOT WATER','EVERY MORNING?']);
