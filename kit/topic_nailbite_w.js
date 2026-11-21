const B={
 hook:SCN({bg:'livingroom',items:[{ic:'longnail',at:.05,x:.24,y:0.24,s:0.50},{ic:'germ',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NAIL BITER?','bit','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'longnail',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'handIc',at:'fingers',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45},{ic:'mouthYawn',at:'mouth',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['GERMS!','germs','#9FD8F5'],['STRAIGHT IN!','straight','#FFFFFF'],['UNDER YOUR NAILS','under','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'tooth',at:'teeth',x:.24,y:0.24,s:0.50},{ic:'crack',at:'damage',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['CHIPPED TEETH!','chip','#FF8A8A'],['BUMPY NAILS','bumpy','#9FD8F5'],['BITTER POLISH','bitter','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'tooth',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES, I BITE',R:'NOPE',icL:'longnail',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'NAIL BITER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','BIT YOUR NAILS','EVERY DAY?']);
