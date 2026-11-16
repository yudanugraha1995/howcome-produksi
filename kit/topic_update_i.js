const B={
 hook:SCN({bg:'bedroom',items:[{ic:'phone',at:'phone',x:.24,y:0.24,s:0.50},{ic:'x',at:'never',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO UPDATES?','updated','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LATER...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'phone',at:'Updates',x:.24,y:0.24,s:0.45},{ic:'clock',at:'later',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['ANNOYING!','annoying','#FFFFFF']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'robot',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HACKERS KNOW...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'lock',at:'security',x:.24,y:0.24,s:0.50},{ic:'robot',at:'hackers',x:.24,y:0.44,s:0.45},{ic:'door',at:'door',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SECURITY FIXES','security','#7BE07B'],['DOOR WIDE OPEN!','open','#FF8A8A']]}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['UPDATE NOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'RIGHT AWAY',R:'LATER',icL:'check',icR:'clock',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'update',sL:.85,sR:.85,title:'DO YOU UPDATE RIGHT AWAY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'NEVER UPDATED', 'YOUR PHONE?']);
