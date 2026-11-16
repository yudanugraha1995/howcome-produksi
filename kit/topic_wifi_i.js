const B={
 hook:SCN({bg:'cafe',items:[{ic:'wifi',at:'Wi-Fi',x:.24,y:0.24,s:0.50},{ic:'phone',at:'everything',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FREE WI-FI!','free','#FFE27A']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'wifi',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CONNECTING...',.1]],push:false}),
 point:SCN({bg:'cafe',items:[{ic:'lock',at:'encrypted',x:.24,y:0.24,s:0.45},{ic:'check',at:'protects',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['ENCRYPTED','encrypted','#7BE07B']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'robot',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'robot',at:'hackers',x:.24,y:0.24,s:0.50},{ic:'wifi',at:'hotspots',x:.24,y:0.44,s:0.45},{ic:'warn',at:'trick',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FAKE HOTSPOTS!','fake','#FF8A8A']],labels:[{t:'CHECK THE NAME',at:'network',x:.5,y:.12,bg:'#3BB273'}],src:'Source: FTC, using public Wi-Fi'}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['DOUBLE CHECK!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALL THE TIME',R:'NEVER',icL:'wifi',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'public',sL:.85,sR:.85,title:'DO YOU USE PUBLIC WI-FI?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU USED', 'FREE WI-FI FOR', 'EVERYTHING?']);
