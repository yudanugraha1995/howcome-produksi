const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'phone',at:'emails',x:.24,y:0.24,s:0.50},{ic:'moon',at:'night',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WORK EMAILS?','emails','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ONE MORE EMAIL...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'check',at:'ahead',x:.24,y:0.24,s:0.45},{ic:'phone',at:'feels',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['GETTING AHEAD','ahead','#7BE07B']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'zzz',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['CANNOT SLEEP...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'phone',at:'screen',x:.24,y:0.24,s:0.45},{ic:'zzz',at:'sleep',x:.24,y:0.44,s:0.45},{ic:'note',at:'law',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HARDER TO SLEEP','harder','#FF8A8A'],['RIGHT TO DISCONNECT','disconnect','#7BE07B']],labels:[{t:'FRANCE HAS A LAW!',at:'France',x:.5,y:.12,bg:'#3B82C4'}],src:'Source: French labor law (2017)'}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'moon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['LOG OFF!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'phone',icR:'zzz',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'check',sL:.85,sR:.85,title:'DO YOU CHECK YOURS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'CHECKED WORK EMAILS', 'EVERY NIGHT?']);
