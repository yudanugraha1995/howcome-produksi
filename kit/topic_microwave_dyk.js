const B={
 hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:'microwaves',x:.24,y:0.24,s:0.55},{ic:'fire',at:'unevenly',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HOT AND COLD?!','unevenly','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BEEP!',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'microwave',at:'bounce',x:.24,y:0.24,s:0.50},{ic:'fire',at:'hot',x:.24,y:0.44,s:0.40},{ic:'ice',at:'cold',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HOT SPOTS','spots','#FF8A8A'],['THE PLATE SPINS','spins','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'noodles',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['INSIDE OUT?',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'x',at:'inside',x:.24,y:0.24,s:0.45},{ic:'noodles',at:'outer',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT INSIDE OUT!','inside','#FF8A8A'],['OUTER LAYER FIRST','outer','#7BE07B']],src:'Source: FDA, microwave oven basics',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'fork',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['STIR IT!',.1]],push:false}),
 cta:VSCTA({L:'I STIR',R:'NEVER',icL:'fork',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'stir',sL:.85,sR:.85,title:'DO YOU STIR?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO MICROWAVES', 'HEAT FOOD', 'UNEVENLY?']);
