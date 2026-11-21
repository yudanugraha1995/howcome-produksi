const B={
 hook:SCN({bg:'livingroom',items:[{ic:'dryer',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER WASH?','washed','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'dryer',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'dryer',at:'jeans',x:.24,y:0.24,s:0.50},{ic:'trophy',at:'boss',x:.24,y:0.44,s:0.45},{ic:'x',at:'never',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LEVI\'S BOSS!','boss','#9FD8F5'],['ALMOST NEVER','almost','#FFFFFF'],['SHAPE + COLOR','shape','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'dryer',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'snow',at:'Freezing',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FREEZING = MYTH','Freezing','#FF8A8A'],['LESS WASHING','Washing','#9FD8F5'],['SAVES WATER','saves','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY WEAR',R:'RARELY',icL:'dryer',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW OFTEN DO YOU WASH THEM?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER WASHED','YOUR JEANS?']);
