const B={
 hook:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:0.24,s:0.50},{ic:'banana',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ONLY FRUIT?','fruit','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'apple',at:'fruit',x:.24,y:0.24,s:0.50},{ic:'heart',at:'healthy',x:.24,y:0.44,s:0.45},{ic:'calendar',at:'month',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SUPER HEALTHY?','healthy','#9FD8F5'],['30 DAYS','month','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'x',at:'protein',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'teeth',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO PROTEIN!','protein','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'x',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'APPLE',R:'BANANA',icL:'apple',icR:'banana',cl:'#F4C542',cr:'#3B4A8A',atL:'What\'s',atR:'Comment',atV:'What\'s',sL:.85,sR:.85,title:'FAVORITE FRUIT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE ONLY FRUIT','FOR A MONTH?']);
