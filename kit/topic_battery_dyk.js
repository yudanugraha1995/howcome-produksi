const B={
 hook:SCN({bg:'park',items:[{ic:'battery',at:'batteries',x:.24,y:0.24,s:0.55},{ic:'snow',at:'cold',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['DEAD IN THE COLD?','cold','#9FD8F5']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['1% BATTERY...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'battery',at:'chemical',x:.24,y:0.24,s:0.50},{ic:'thermo',at:'freezing',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SLOW REACTIONS','slow','#9FD8F5']],labels:[{t:'LESS POWER OUT',at:'less',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'battery',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WARM IT UP...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'battery',at:'energy',x:.24,y:0.24,s:0.50},{ic:'fire',at:'Warm',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT GONE!','gone','#7BE07B'],['IT COMES BACK!','back','#FFE27A']],src:'Source: Battery University',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['POCKET IT!',.1]],push:false}),
 cta:VSCTA({L:'YES',R:'NEVER',icL:'battery',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Has',atR:'Comment',atV:'cold',sL:.85,sR:.85,title:'HAS YOUR PHONE DIED IN THE COLD?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO BATTERIES', 'DIE FASTER', 'IN THE COLD?']);
