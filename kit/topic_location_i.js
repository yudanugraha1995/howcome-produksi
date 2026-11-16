const B={
 hook:SCN({bg:'park',items:[{ic:'phone',at:'location',x:.24,y:0.24,s:0.50},{ic:'warn',at:'time',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALWAYS ON?','time','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['TRACKING...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'phone',at:'apps',x:.24,y:0.24,s:0.45},{ic:'money',at:'sell',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['DATA SOLD','sell','#FF8A8A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'camera',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SNAP A PHOTO...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'camera',at:'photos',x:.24,y:0.24,s:0.50},{ic:'warn',at:'GPS',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HIDDEN GPS!','GPS','#FF8A8A']],labels:[{t:'EXACT LOCATION',at:'exactly',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CHECK SETTINGS!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SHARE IT',R:'KEEP IT OFF',icL:'phone',icR:'lock',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'share',sL:.85,sR:.85,title:'DO YOU SHARE YOURS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'SHARED YOUR', 'LOCATION 24/7?']);
