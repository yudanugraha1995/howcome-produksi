const B={
 hook:SCN({bg:'livingroom',items:[{ic:'plug',at:'unplugged',x:.24,y:0.24,s:0.50},{ic:'phone',at:'chargers',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALWAYS PLUGGED?','chargers','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'plug',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PLUGGED IN...',.1]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'phone',at:'phone',x:.24,y:0.24,s:0.45},{ic:'check',at:'barely',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['TINY POWER','barely','#7BE07B']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'tv',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT THE TV...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'tv',at:'TVs',x:.24,y:0.24,s:0.50},{ic:'battery',at:'standby',x:.24,y:0.44,s:0.45},{ic:'warn',at:'percent',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STANDBY POWER','standby','#FF8A8A'],['5-10%!','percent','#FFE27A']],labels:[{t:'OF HOME ELECTRICITY',at:'electricity',x:.5,y:.12,bg:'#E5383B'}],src:'Source: U.S. Department of Energy'}),
 sil_point2:SCN({bg:'office',items:[{ic:'plug',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['UNPLUG IT!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I UNPLUG',R:'NEVER',icL:'plug',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'comments',atV:'unplug',sL:.85,sR:.85,title:'DO YOU UNPLUG?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'NEVER UNPLUGGED', 'YOUR CHARGERS?']);
