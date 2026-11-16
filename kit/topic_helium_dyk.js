const B={
 hook:SCN({bg:'livingroom',items:[{ic:'cloud',at:'helium',x:.24,y:0.24,s:0.50},{ic:'speech',at:'voice',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SQUEAKY!','squeaky','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HELLO?!',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'speech',at:'vocal',x:.24,y:0.24,s:0.45},{ic:'volume',at:'vibrate',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FASTER CORDS?','vibrate','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'volume',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NOPE!',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'volume',at:'Sound',x:.24,y:0.24,s:0.50},{ic:'cloud',at:'helium',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['CORDS STAY THE SAME','same','#7BE07B'],['3X FASTER SOUND','three','#FFE27A']],labels:[{t:'THE TONE CHANGES',at:'tone',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: physics of sound in gases',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['MIND BLOWN!',.1]],push:false}),
 cta:VSCTA({L:'TRIED IT',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Have',atR:'Comment',atV:'tried',sL:.85,sR:.85,title:'HAVE YOU TRIED IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES HELIUM', 'MAKE YOUR VOICE', 'SQUEAKY?']);
