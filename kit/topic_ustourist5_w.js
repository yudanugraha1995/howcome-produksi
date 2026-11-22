const B={
 hook:SCN({bg:'park',items:[{ic:'plane',at:.05,x:.24,y:0.24,s:0.50},{ic:'money',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FIRST TIME?','first','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'plane',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'pizza',at:'portions',x:.24,y:0.24,s:0.50},{ic:'cup3',at:'drink',x:.24,y:0.44,s:0.45},{ic:'soda',at:'refills',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HUGE PORTIONS','huge','#9FD8F5'],['FREE REFILLS','refills','#FFFFFF'],['NO SIDEWALKS','sidewalks','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'pizza',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'heart',at:'flag',x:.24,y:0.24,s:0.50},{ic:'tv',at:'TV',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FLAGS EVERYWHERE','flag','#FF8A8A'],['DRUG ADS ON TV','ads','#9FD8F5'],['ONLY USA + NZ','Zealand','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'heart',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES!',R:'NO WAY',icL:'plane',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Would',atR:'Comment',atV:'Would',sL:.85,sR:.85,title:'WOULD YOU VISIT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 THINGS','THAT SHOCK','TOURISTS IN USA']);
