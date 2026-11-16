const B={
 hook:SCN({bg:'livingroom',items:[{ic:'phone',at:'voice',x:.24,y:0.24,s:0.50},{ic:'speech',at:'recordings',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['IS THAT ME?!','weird','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['*CRINGE*',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'ear',at:'air',x:.24,y:0.24,s:0.45},{ic:'brain',at:'skull',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['AIR + SKULL','skull','#9FD8F5']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'ear',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['TWO PATHS...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'volume',at:'deep',x:.24,y:0.24,s:0.50},{ic:'phone',at:'recording',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['DEEPER INSIDE','deep','#FF8A8A'],['REAL YOU!','everyone','#7BE07B']],labels:[{t:'BONES BOOST BASS',at:'bones',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: Acoustical Society of America',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'headphones',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['THAT IS YOU!',.1]],push:false}),
 cta:VSCTA({L:'I HATE IT',R:'I LOVE IT',icL:'x',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Hate',atR:'Comment',atV:'voice',sL:.85,sR:.85,title:'HATE YOUR RECORDED VOICE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES YOUR', 'VOICE SOUND', 'WEIRD?']);
