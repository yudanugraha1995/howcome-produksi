const B={
 hook:SCN({bg:'citynight',items:[{ic:'car',at:'car',x:.24,y:0.24,s:0.55},{ic:'cloud',at:'fog',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FOGGY!','fog','#FFE27A']]}),
 sil_hook:SCN({bg:'citynight',items:[{ic:'car',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['CANNOT SEE...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'cloud',at:'breath',x:.24,y:0.24,s:0.45},{ic:'drop',at:'drops',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WARM BREATH','breath','#9FD8F5'],['COLD GLASS','glass','#FFFFFF']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['IN WINTER...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'snow',at:'air',x:.24,y:0.24,s:0.45},{ic:'car',at:'winter',x:.24,y:0.44,s:0.50},{ic:'drop',at:'dries',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['USE THE A/C!','conditioning','#7BE07B'],['DRIES THE AIR','dries','#9FD8F5']],src:'Source: AAA, defogging tips',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'car',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CLEAR VIEW!',.1]],push:false}),
 cta:VSCTA({L:'USE IT',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'trick',sL:.85,sR:.85,title:'DO YOU USE THIS TRICK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO', 'CAR WINDOWS', 'FOG UP?']);
