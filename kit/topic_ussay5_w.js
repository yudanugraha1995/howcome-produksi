const B={
 hook:SCN({bg:'cafe',items:[{ic:'speech',at:.05,x:.24,y:0.24,s:0.50},{ic:'book',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['AMERICAN ENGLISH?','American','#FFE27A']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'cafe',items:[{ic:'speech',at:'hello',x:.24,y:0.24,s:0.50},{ic:'heart',at:'good',x:.24,y:0.44,s:0.45},{ic:'calendar',at:'sometime',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['JUST HELLO!','hello','#9FD8F5'],['I\'M GOOD...','good','#FFFFFF'],['NOT A REAL PLAN','plan','#FFE27A']]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'cafe',items:[{ic:'toilet',at:'restroom',x:.24,y:0.24,s:0.50},{ic:'clock',at:'quarter',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO BATH, NO REST','bath','#FF8A8A'],['QUARTER TILL 4','till','#9FD8F5'],['1ST FLOOR = GROUND','floor','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'toilet',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'BATHROOM',R:'TOILET',icL:'door',icR:'toilet',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'WHAT DO YOU SAY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 THINGS','AMERICANS SAY','THAT CONFUSE US']);
