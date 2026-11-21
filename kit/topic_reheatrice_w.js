const B={
 hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:0.24,s:0.50},{ic:'fork',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LEFTOVER RICE?','rice','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'microwave',at:'reheated',x:.24,y:0.24,s:0.50},{ic:'money',at:'cheap',x:.24,y:0.44,s:0.45},{ic:'clock',at:'quick',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['QUICK','quick','#9FD8F5'],['CHEAP','cheap','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'germ',at:'spores',x:.24,y:0.24,s:0.50},{ic:'clock',at:'long',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FRIED RICE SYNDROME','syndrome','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES',R:'NOPE',icL:'microwave',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU EAT LEFTOVER RICE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','REHEATED RICE','EVERY DAY?']);
