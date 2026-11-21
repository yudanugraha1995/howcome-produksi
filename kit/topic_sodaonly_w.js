const B={
 hook:SCN({bg:'kitchen',items:[{ic:'soda',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['30 DAYS?','thirty','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'soda',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'soda',at:'can',x:.24,y:0.24,s:0.50},{ic:'sugar',at:'sugar',x:.24,y:0.44,s:0.45},{ic:'spoon',at:'teaspoons',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['39 G SUGAR','grams','#9FD8F5'],['10 TEASPOONS','teaspoons','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'soda',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'heart',at:'Heart',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'enamel',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['OVER THE LIMIT!','limit','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'heart',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'DAILY',R:'RARELY',icL:'soda',icR:'water',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW MUCH SODA DO YOU DRINK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK ONLY SODA','FOR 30 DAYS?']);
