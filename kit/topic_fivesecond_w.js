const B={
 hook:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:0.24,s:0.50},{ic:'clock',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['5 SECOND RULE?','five','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'pizza',at:'Grab',x:.24,y:0.24,s:0.50},{ic:'clock',at:'fast',x:.24,y:0.44,s:0.45},{ic:'check',at:'fine',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['GRAB IT FAST!','fast','#9FD8F5'],['IT\'S FINE?','fine','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:0.50},{ic:'watermelon',at:'watermelon',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LESS THAN 1 SECOND!','less','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I FOLLOW IT',R:'NOPE',icL:'clock',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU FOLLOW THE RULE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','FOLLOWED THE','5 SECOND RULE?']);
