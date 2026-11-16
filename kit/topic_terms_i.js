const B={
 hook:SCN({bg:'office',items:[{ic:'phone',at:'read',x:.24,y:0.24,s:0.50},{ic:'note',at:'conditions',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TERMS?!','conditions','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['I AGREE...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'phone',at:'taps',x:.24,y:0.24,s:0.45},{ic:'check',at:'agree',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['*TAP*','taps','#FFFFFF']],labels:[{t:'NOBODY READS IT',at:'everyone',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['THE FINE PRINT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'toilet',at:'toilets',x:.24,y:0.24,s:0.50},{ic:'warn',at:'agreed',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['22,000 PEOPLE!','thousand','#FF8A8A']],labels:[{t:'CLEAN PUBLIC TOILETS',at:'clean',x:.5,y:.12,bg:'#E5383B'}],src:'Source: Purple WiFi experiment (2017)'}),
 sil_point2:SCN({bg:'library',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['READ IT!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I READ IT',R:'I AGREE',icL:'note',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'read',atR:'comments',atV:'ever',sL:.85,sR:.85,title:'DO YOU READ THEM?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'NEVER READ', 'THE TERMS?']);
