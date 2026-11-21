const B={
 hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:0.24,s:0.50},{ic:'fire',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BURNT TOAST?','burnt','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'bread',at:'toast',x:.24,y:0.24,s:0.50},{ic:'check',at:'crunch',x:.24,y:0.44,s:0.45},{ic:'fire',at:'burnt',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EXTRA CRUNCH','crunch','#9FD8F5'],['A BIT BURNT','burnt','#FFFFFF'],['DARK + CRISPY','crispy','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'warn',at:'acrylamide',x:.24,y:0.24,s:0.50},{ic:'bread',at:'golden',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GO FOR GOLDEN!','golden','#FF8A8A'],['HIGH HEAT','heat','#9FD8F5'],['FRIES TOO','fries','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'LIGHT',R:'DARK',icL:'bread',icR:'fire',cl:'#F4C542',cr:'#3B4A8A',atL:'Light',atR:'Comment',atV:'Light',sL:.85,sR:.85,title:'LIGHT OR DARK TOAST?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE BURNT TOAST','EVERY DAY?']);
