const B={
 hook:SCN({bg:'bathroom',items:[{ic:'shower',at:.05,x:.24,y:0.24,s:0.50},{ic:'fire',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SUPER HOT?','hot','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'shower',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'shower',at:'showers',x:.24,y:0.24,s:0.50},{ic:'snow',at:'winter',x:.24,y:0.44,s:0.45},{ic:'heart',at:'amazing',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO GOOD','amazing','#9FD8F5'],['WINTER!','winter','#FFFFFF'],['SORE MUSCLES','muscles','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'shower',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'drop',at:'oils',x:.24,y:0.24,s:0.50},{ic:'warn',at:'itchy',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['DRY + ITCHY!','itchy','#FF8A8A'],['5-10 MINUTES','five','#9FD8F5'],['MOISTURIZE','moisturizer','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'HOT',R:'WARM',icL:'fire',icR:'shower',cl:'#F4C542',cr:'#3B4A8A',atL:'Hot',atR:'Comment',atV:'Hot',sL:.85,sR:.85,title:'HOT OR WARM?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','TOOK HOT SHOWERS','EVERY DAY?']);
