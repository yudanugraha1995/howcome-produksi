const B={
 hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'sun',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FLIP FLOPS?','flip','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'shoe',at:'easy',x:.24,y:0.24,s:0.50},{ic:'sun',at:'breezy',x:.24,y:0.44,s:0.45},{ic:'check',at:'every',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EASY','easy','#9FD8F5'],['BREEZY','breezy','#FFFFFF'],['BEACH + POOL','beach','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'shoe',at:'toes',x:.24,y:0.24,s:0.50},{ic:'warn',at:'heel',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HEEL PAIN!','heel','#FF8A8A'],['SHORT WALKS ONLY','short','#9FD8F5'],['SUPPORTIVE SHOES','supportive','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'FLIP FLOPS',R:'SNEAKERS',icL:'sun',icR:'shoe',cl:'#F4C542',cr:'#3B4A8A',atL:'Flip',atR:'Comment',atV:'Flip',sL:.85,sR:.85,title:'FLIP FLOPS OR SNEAKERS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WORE FLIP FLOPS','EVERY DAY?']);
