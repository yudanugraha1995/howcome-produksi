const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:0.24,s:0.50},{ic:'pillow',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STOMACH SLEEPER?','stomach','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'bed',at:'slept',x:.24,y:0.24,s:0.50},{ic:'heart',at:'love',x:.24,y:0.44,s:0.45},{ic:'zzz',at:'night',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO COMFY','love','#9FD8F5'],['FACE DOWN','stomach','#FFFFFF'],['LESS SNORING','snoring','#FFE27A']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'clock',at:'hours',x:.24,y:0.24,s:0.50},{ic:'warn',at:'spine',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NECK TWIST!','twists','#FF8A8A'],['THIN PILLOW','thin','#9FD8F5'],['UNDER YOUR HIPS','hips','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'STOMACH',R:'BACK/SIDE',icL:'bed',icR:'pillow',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW DO YOU SLEEP?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT ON YOUR','STOMACH?']);
