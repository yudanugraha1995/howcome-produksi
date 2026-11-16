const B={
 hook:SCN({bg:'park',items:[{ic:'plane',at:'plane',x:.24,y:0.24,s:0.55},{ic:'ear',at:'ears',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['POP!','pop','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'plane',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['TAKING OFF...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'plane',at:'climbs',x:.24,y:0.24,s:0.50},{ic:'cloud',at:'pressure',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PRESSURE CHANGES','pressure','#9FD8F5']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'ear',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['INSIDE YOUR EAR...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'ear',at:'tube',x:.24,y:0.24,s:0.50},{ic:'mouthYawn',at:'Yawning',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['A TINY TUBE OPENS','tube','#7BE07B'],['YAWN OR SWALLOW','swallowing','#FFE27A']],labels:[{t:'BALANCES THE PRESSURE',at:'balance',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: Mayo Clinic, airplane ear',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'plane',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['HAPPY FLYING!',.1]],push:false}),
 cta:VSCTA({L:'WINDOW',R:'AISLE',icL:'plane',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Window',atR:'Comment',atV:'seat',sL:.85,sR:.85,title:'WINDOW OR AISLE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO YOUR', 'EARS POP ON', 'A PLANE?']);
