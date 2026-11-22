const B={
 hook:SCN({bg:'bathroom',items:[{ic:'hairLong',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'hairLong',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'hairLong',at:'hair',x:.24,y:0.24,s:0.50},{ic:'warn',at:'tension',x:.24,y:0.44,s:0.45},{ic:'handIc',at:'roots',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PULLING!','Pulling','#9FD8F5'],['TENSION','tension','#FFFFFF'],['HEADACHES','headaches','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'hairLong',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'hairCell',at:'loss',x:.24,y:0.24,s:0.50},{ic:'mirror',at:'hairline',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TRACTION ALOPECIA','traction','#FF8A8A'],['LOOSEN IT!','loosening','#9FD8F5'],['IT CAN GROW BACK','early','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'hairCell',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'PONYTAIL',R:'HAIR DOWN',icL:'hairLong',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'PONYTAIL OR HAIR DOWN?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WORE A TIGHT','PONYTAIL DAILY?']);
