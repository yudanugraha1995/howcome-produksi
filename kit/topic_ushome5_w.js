const B={
 hook:SCN({bg:'livingroom',items:[{ic:'door',at:.05,x:.24,y:0.24,s:0.50},{ic:'tv',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['AMERICAN HOME?','home','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'door',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'pillow',at:'bedrooms',x:.24,y:0.24,s:0.50},{ic:'toilet',at:'bathroom',x:.24,y:0.44,s:0.45},{ic:'spoon',at:'sink',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CARPET?!','carpet','#9FD8F5'],['GARBAGE DISPOSAL','disposal','#FFFFFF'],['DRYER, NOT LINES','dryer','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'pillow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'plug',at:'switches',x:.24,y:0.24,s:0.50},{ic:'battery',at:'voltage',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['UP = ON','up','#FF8A8A'],['NO KETTLE?','kettle','#9FD8F5'],['MICROWAVE TEA','microwave','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'plug',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'CARPET',R:'NO KETTLE',icL:'door',icR:'cup3',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'Which',sL:.85,sR:.85,title:'WHICH IS WORSE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 WEIRD THINGS','IN EVERY','AMERICAN HOME']);
