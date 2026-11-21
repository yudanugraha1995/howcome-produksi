const B={
 hook:SCN({bg:'park',items:[{ic:'bubbles',at:.05,x:.24,y:0.24,s:0.50},{ic:'shoe',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['POP IT?','popped','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'bubbles',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'bubbles',at:'blister',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'tempting',x:.24,y:0.44,s:0.45},{ic:'shoe',at:'every',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO TEMPTING','tempting','#9FD8F5'],['POP!','popped','#FFFFFF'],['NEW SHOES','shoes','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'bubbles',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'drop',at:'fluid',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LEAVE IT ALONE!','alone','#FF8A8A'],['WASH GENTLY','gently','#9FD8F5'],['KEEP THE FLAP','flap','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I POP',R:'NEVER',icL:'bubbles',icR:'patch',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU POP BLISTERS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','POPPED','EVERY BLISTER?']);
