const B={
 hook:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO SUNSCREEN?','sunscreen','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'sun',at:'tan',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'skin',x:.24,y:0.44,s:0.45},{ic:'check',at:'nice',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NICE TAN?','tan','#9FD8F5'],['UV RAYS','sun','#FFFFFF'],['CLOUDY DAYS TOO','cloudy','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'warn',at:'wrinkles',x:.24,y:0.24,s:0.50},{ic:'sun',at:'sun',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['90% OF AGING!','ninety','#FF8A8A'],['SPF 30+','SPF','#9FD8F5'],['REAPPLY','reapply','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY DAY',R:'NEVER',icL:'sun',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU WEAR SUNSCREEN?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER WORE','SUNSCREEN?']);
