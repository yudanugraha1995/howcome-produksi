const B={
 hook:SCN({bg:'office',items:[{ic:'clock',at:'hours',x:.24,y:0.24,s:0.50},{ic:'calendar',at:'week',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['55 HOURS?!','hours','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['STILL WORKING...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'check',at:'productive',x:.24,y:0.24,s:0.45},{ic:'clock',at:'Long',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SO PRODUCTIVE!','productive','#7BE07B']]}),
 sil_point:SCN({bg:'office',items:[{ic:'heart',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['BUT YOUR BODY...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'note',at:'study',x:.24,y:0.24,s:0.45},{ic:'brain',at:'stroke',x:.24,y:0.44,s:0.45},{ic:'heart',at:'heart',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STROKE RISK','stroke','#FF8A8A'],['HEART DISEASE','disease','#FF8A8A']],labels:[{t:'55+ HOURS A WEEK',at:'more',x:.5,y:.12,bg:'#E5383B'}],src:'Source: WHO/ILO study (2021)'}),
 sil_point2:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['TAKE A BREAK!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'UNDER 40',R:'40 PLUS',icL:'check',icR:'clock',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'work',sL:.85,sR:.85,title:'HOW MANY HOURS DO YOU WORK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'WORKED 55 HOURS', 'EVERY WEEK?']);
