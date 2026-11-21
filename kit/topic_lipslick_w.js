const B={
 hook:SCN({bg:'livingroom',items:[{ic:'drop',at:.05,x:.24,y:0.24,s:0.50},{ic:'sun',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LIP LICKER?','licked','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'drop',at:'dry',x:.24,y:0.24,s:0.50},{ic:'mouthYawn',at:'licked',x:.24,y:0.44,s:0.45},{ic:'check',at:'helps',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FEELS BETTER?','helps','#9FD8F5'],['SO DRY!','dry','#FFFFFF'],['NO OIL GLANDS','oil','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'drop',at:'Saliva',x:.24,y:0.24,s:0.50},{ic:'crack',at:'crack',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVEN DRIER!','drier','#FF8A8A'],['LIP BALM','balm','#9FD8F5'],['PETROLEUM JELLY','petroleum','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I DO IT',R:'NEVER',icL:'drop',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU LICK YOUR LIPS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','LICKED YOUR LIPS','ALL DAY?']);
