const B={
 hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:'spoon',x:.24,y:0.24,s:0.55},{ic:'water',at:'water',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BENT?!','bent','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOK CLOSER...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'prism',at:'Light',x:.24,y:0.24,s:0.50},{ic:'water',at:'direction',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LIGHT CHANGES DIRECTION','direction','#9FD8F5']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'prism',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HOW FAST?',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'clock',at:'slows',x:.24,y:0.24,s:0.45},{ic:'water',at:'quarter',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SLOWS 25%!','quarter','#FFE27A'],['THAT BENDS IT','bends','#7BE07B']],src:'Source: physics of refraction (index of water 1.33)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['TRY IT!',.1]],push:false}),
 cta:VSCTA({L:'TRIED IT',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Did',atR:'Comment',atV:'kid',sL:.85,sR:.85,title:'DID YOU TRY THIS AS A KID?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES A', 'SPOON LOOK BENT', 'IN WATER?']);
