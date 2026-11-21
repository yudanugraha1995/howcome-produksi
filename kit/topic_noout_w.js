const B={
 hook:SCN({bg:'livingroom',items:[{ic:'door',at:.05,x:.24,y:0.24,s:0.50},{ic:'tree',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER OUTSIDE?','outside','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'door',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'door',at:'outside',x:.24,y:0.24,s:0.50},{ic:'sun',at:'sunshine',x:.24,y:0.44,s:0.45},{ic:'x',at:'miss',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NO SUNSHINE','sunshine','#9FD8F5'],['STAY INSIDE','never','#FFFFFF']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'door',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'sun',at:'vitamin',x:.24,y:0.24,s:0.50},{ic:'eye',at:'nearsighted',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BETTER EYESIGHT!','nearsighted','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'A LOT',R:'BARELY',icL:'tree',icR:'tv',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW MUCH TIME OUTSIDE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER','WENT OUTSIDE?']);
