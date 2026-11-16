const B={
 hook:SCN({bg:'kitchen',items:[{ic:'bread',at:'bread',x:.24,y:0.24,s:0.55},{ic:'crack',at:'stale',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STALE?!','stale','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['A DAY LATER...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'bread',at:'dries',x:.24,y:0.24,s:0.50},{ic:'drop',at:'out',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DRIED OUT?','dries','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NOPE!',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'ice',at:'crystallizes',x:.24,y:0.24,s:0.45},{ic:'bread',at:'water',x:.24,y:0.44,s:0.50},{ic:'snow',at:'fridge',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STARCH CRYSTALS','crystallizes','#9FD8F5'],['FRIDGE = FASTER!','fridge','#FF8A8A']],src:'Source: food science, starch retrogradation',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['FREEZE IT INSTEAD!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TOAST',R:'FRESH',icL:'fire',icR:'bread',cl:'#F4C542',cr:'#3B4A8A',atL:'Toast',atR:'Comment',atV:'fresh',sL:.85,sR:.85,title:'TOAST OR FRESH?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES', 'BREAD GO', 'STALE?']);
