const B={
 hook:SCN({bg:'kitchen',items:[{ic:'candy',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'candy',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'leaf',at:'plant',x:.24,y:0.24,s:0.50},{ic:'drop',at:'blood',x:.24,y:0.44,s:0.45},{ic:'heart',at:'heart',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FLAVANOLS','flavanols','#9FD8F5'],['HEART HEALTH','heart','#FFFFFF'],['70%+ COCOA','seventy','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'leaf',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'warn',at:'lead',x:.24,y:0.24,s:0.50},{ic:'candy',at:'bars',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LEAD + CADMIUM','lead','#FF8A8A'],['1-2 SQUARES','square','#9FD8F5'],['HIGH CALORIES','calories','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'DARK',R:'MILK',icL:'candy',icR:'milk',cl:'#F4C542',cr:'#3B4A8A',atL:'Dark',atR:'Comment',atV:'Dark',sL:.85,sR:.85,title:'DARK OR MILK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE DARK CHOCOLATE','EVERY DAY?']);
