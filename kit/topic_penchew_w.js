const B={
 hook:SCN({bg:'office',items:[{ic:'pen',at:.05,x:.24,y:0.24,s:0.50},{ic:'book',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'pen',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'pen',at:'Lots',x:.24,y:0.24,s:0.50},{ic:'brain',at:'thinking',x:.24,y:0.44,s:0.45},{ic:'heart',at:'calming',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['THINKING...','thinking','#9FD8F5'],['CALMING?','calming','#FFFFFF'],['NERVOUS ENERGY','nervous','#FFE27A']]}),
 sil_point:SCN({bg:'office',items:[{ic:'pen',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'germ',at:'germs',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'teeth',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['CRACKED TEETH','crack','#FF8A8A'],['CHOKING RISK','choking','#9FD8F5'],['THE TINY HOLE!','hole','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GUILTY',R:'NEVER',icL:'pen',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'PEN CHEWER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CHEWED YOUR PEN','EVERY DAY?']);
