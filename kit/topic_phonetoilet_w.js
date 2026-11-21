const B={
 hook:SCN({bg:'bathroom',items:[{ic:'phone',at:.05,x:.24,y:0.24,s:0.50},{ic:'toilet',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['PHONE ON THE TOILET?','phone','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'phone',at:'phone',x:.24,y:0.24,s:0.50},{ic:'clock',at:'time',x:.24,y:0.44,s:0.45},{ic:'toilet',at:'toilet',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['JUST SCROLLING','time','#9FD8F5'],['5 MORE MINUTES','pass','#FFFFFF']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'warn',at:'pressure',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HEMORRHOID RISK!','hemorrhoids','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'phone',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU BRING YOUR PHONE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','USED YOUR PHONE','ON THE TOILET?']);
