const B={
 hook:SCN({bg:'livingroom',items:[{ic:'shoe',at:'foot',x:.24,y:0.24,s:0.50},{ic:'zzz',at:'asleep',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FOOT ASLEEP?','asleep','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['TINGLING...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'brain',at:'nerves',x:.24,y:0.24,s:0.45},{ic:'heart',at:'blood',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SQUEEZED NERVES','squeezes','#FF8A8A']],labels:[{t:'SIGNALS BLOCKED',at:'signals',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'brain',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WAKING UP...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'brain',at:'pins',x:.24,y:0.24,s:0.50},{ic:'burst',at:'firing',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['PINS AND NEEDLES','needles','#FFE27A'],['NERVES WAKING UP!','waking','#7BE07B']],src:'Source: Cleveland Clinic, paresthesia',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SHAKE IT OFF!',.1]],push:false}),
 cta:VSCTA({L:'ALL THE TIME',R:'NEVER',icL:'shoe',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Does',atR:'Comment',atV:'happen',sL:.85,sR:.85,title:'DOES THIS HAPPEN TO YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES YOUR', 'FOOT FALL', 'ASLEEP?']);
