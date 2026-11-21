const B={
 hook:SCN({bg:'office',items:[{ic:'crack',at:.05,x:.24,y:0.24,s:0.50},{ic:'warn',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NECK CRACK?','cracked','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'crack',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'crack',at:'pop',x:.24,y:0.24,s:0.50},{ic:'bubbles',at:'bubbles',x:.24,y:0.44,s:0.45},{ic:'brain',at:'joints',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['POP!','pop','#9FD8F5'],['GAS BUBBLES','bubbles','#FFFFFF']]}),
 sil_point:SCN({bg:'office',items:[{ic:'crack',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'warn',at:'ligaments',x:.24,y:0.24,s:0.50},{ic:'heart',at:'arteries',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GO GENTLE!','gentle','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I CRACK IT',R:'NEVER',icL:'crack',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU CRACK YOUR NECK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CRACKED YOUR NECK','EVERY DAY?']);
