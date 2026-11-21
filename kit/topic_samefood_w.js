const B={
 hook:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SAME FOOD?','same','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'fork',at:'food',x:.24,y:0.24,s:0.50},{ic:'clock',at:'time',x:.24,y:0.44,s:0.45},{ic:'check',at:'easy',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO EASY','easy','#9FD8F5'],['SAVES TIME','time','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:'gut',x:.24,y:0.24,s:0.50},{ic:'leaf',at:'plants',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['30 PLANTS A WEEK','thirty','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'LOTS',R:'NOT MANY',icL:'leaf',icR:'fork',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW MANY PLANTS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE THE SAME FOOD','EVERY DAY?']);
