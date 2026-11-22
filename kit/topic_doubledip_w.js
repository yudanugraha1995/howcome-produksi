const B={
 hook:SCN({bg:'livingroom',items:[{ic:'chips',at:.05,x:.24,y:0.24,s:0.50},{ic:'fork',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['DOUBLE DIP?','double','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'chips',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'handIc',at:'feels',x:.24,y:0.24,s:0.50},{ic:'check',at:'harmless',x:.24,y:0.44,s:0.45},{ic:'chips',at:'dip',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HARMLESS?','harmless','#9FD8F5'],['ONE MORE DIP','more','#FFFFFF'],['FLIP THE CHIP','flip','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:0.50},{ic:'mouthYawn',at:'mouth',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['THOUSANDS OF BACTERIA','thousands','#FF8A8A'],['THICK DIP = SAFER','Thick','#9FD8F5'],['SICK? STOP!','sick','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'DOUBLE DIP',R:'ONE DIP',icL:'chips',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'DOUBLE DIPPER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DOUBLE DIPPED','EVERY TIME?']);
