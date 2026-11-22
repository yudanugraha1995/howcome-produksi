const B={
 hook:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:0.24,s:0.50},{ic:'dryer',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['HAND DRYER?','dryer','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'handIc',at:'cleaner',x:.24,y:0.24,s:0.50},{ic:'check',at:'touch',x:.24,y:0.44,s:0.45},{ic:'leaf',at:'planet',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FEELS CLEANER','cleaner','#9FD8F5'],['NO TOUCHING','touch','#FFFFFF'],['LESS PAPER WASTE','paper','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'germ',at:'germs',x:.24,y:0.24,s:0.50},{ic:'dryer',at:'jet',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GERMS FLY 1M+','meter','#FF8A8A'],['TOWELS WIPE GERMS','wipes','#9FD8F5'],['DRY THEM FULLY','damp','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'PAPER',R:'DRYER',icL:'towel',icR:'dryer',cl:'#F4C542',cr:'#3B4A8A',atL:'Paper',atR:'Comment',atV:'Paper',sL:.85,sR:.85,title:'PAPER OR DRYER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ONLY USED','HAND DRYERS?']);
