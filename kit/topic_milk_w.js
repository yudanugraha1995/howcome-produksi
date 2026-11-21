const B={
 hook:SCN({bg:'kitchen',items:[{ic:'milk',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MILK EVERY DAY?','milk','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'milk',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'milk',at:'milk',x:.24,y:0.24,s:0.50},{ic:'check',at:'calcium',x:.24,y:0.44,s:0.45},{ic:'trophy',at:'protein',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CALCIUM','calcium','#9FD8F5'],['PROTEIN','protein','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'milk',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:'digesting',x:.24,y:0.24,s:0.50},{ic:'warn',at:'trouble',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['2/3 OF ADULTS!','thirds','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES',R:'NOPE',icL:'milk',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Does',atR:'Comment',atV:'Does',sL:.85,sR:.85,title:'DOES MILK WORK FOR YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK MILK','EVERY DAY?']);
