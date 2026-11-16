const B={
 hook:SCN({bg:'park',items:[{ic:'car',at:'driving',x:.24,y:0.24,s:0.55},{ic:'phone',at:'texted',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TEXT AND DRIVE?','texted','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['JUST ONE TEXT...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'eye',at:'eyes',x:.24,y:0.24,s:0.45},{ic:'clock',at:'seconds',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['5 SECONDS','five','#FF8A8A']],labels:[{t:'EYES OFF THE ROAD',at:'road',x:.5,y:.12,bg:'#E5383B'}],src:'Source: NHTSA, distracted driving'}),
 sil_point:SCN({bg:'park',items:[{ic:'car',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['55 MPH...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'car',at:'miles',x:.24,y:0.24,s:0.50},{ic:'eye',at:'closed',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['A FOOTBALL FIELD!','football','#FFE27A'],['EYES CLOSED!','closed','#FF8A8A']]}),
 sil_point2:SCN({bg:'park',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['PHONE AWAY!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'PHONE AWAY',R:'GUILTY',icL:'check',icR:'phone',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'away',sL:.85,sR:.85,title:'DO YOU PUT IT AWAY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'TEXTED WHILE', 'DRIVING?']);
