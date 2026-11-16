const B={
 hook:SCN({bg:'kitchen',items:[{ic:'corn',at:'popcorn',x:.24,y:0.24,s:0.50},{ic:'burst',at:'explode',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['POP!','explode','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HEAT IT UP...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'corn',at:'kernel',x:.24,y:0.24,s:0.45},{ic:'drop',at:'water',x:.24,y:0.44,s:0.40},{ic:'fire',at:'steam',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WATER TO STEAM','steam','#9FD8F5']],labels:[{t:'A DROP OF WATER INSIDE',at:'drop',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'thermo',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['PRESSURE...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'thermo',at:'degrees',x:.24,y:0.24,s:0.50},{ic:'burst',at:'starch',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['180°C!','Celsius','#FF8A8A'],['FOAM!','foam','#FFE27A']],src:'Source: Byrd & Perona, J. R. Soc. Interface (2015)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'corn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CRUNCH!',.1]],push:false}),
 cta:VSCTA({L:'SWEET',R:'SALTY',icL:'sugar',icR:'corn',cl:'#F4C542',cr:'#3B4A8A',atL:'Sweet',atR:'salty',atV:'or',sL:.85,sR:.85,title:'SWEET OR SALTY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES', 'POPCORN', 'EXPLODE?']);
