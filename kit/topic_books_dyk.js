const B={
 hook:SCN({bg:'library',items:[{ic:'book',at:'books',x:.24,y:0.24,s:0.55},{ic:'nose',at:'smell',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['THAT SMELL!','smell','#FFE27A']]}),
 sil_hook:SCN({bg:'library',items:[{ic:'book',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SNIFF...',.1]],push:false}),
 point:SCN({bg:'library',items:[{ic:'book',at:'paper',x:.24,y:0.24,s:0.50},{ic:'clock',at:'ages',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PAPER BREAKS DOWN','break','#FFFFFF']]}),
 sil_point:SCN({bg:'library',items:[{ic:'nose',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WHAT IS IT?',.1]],push:false}),
 point2:SCN({bg:'library',items:[{ic:'nose',at:'vanillin',x:.24,y:0.24,s:0.50},{ic:'icecream',at:'vanilla',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['VANILLIN!','vanillin','#FFE27A'],['LIKE VANILLA!','vanilla','#7BE07B']],src:'Source: Strlic et al., Analytical Chemistry (2009)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'library',items:[{ic:'book',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SWEET!',.1]],push:false}),
 cta:VSCTA({L:'LOVE IT',R:'NOT REALLY',icL:'book',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'smell',sL:.85,sR:.85,title:'DO YOU LOVE THAT SMELL?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO OLD', 'BOOKS SMELL', 'SO GOOD?']);
