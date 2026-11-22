const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'battery',at:.05,x:.24,y:0.24,s:0.50},{ic:'moon',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['OVERNIGHT?','overnight','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'battery',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'phone',at:'phones',x:.24,y:0.24,s:0.50},{ic:'battery',at:'full',x:.24,y:0.44,s:0.45},{ic:'fire',at:'explode',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['AUTO STOP','stop','#9FD8F5'],['NO EXPLOSION','explode','#FFFFFF'],['OPTIMIZED CHARGING','optimized','#FFE27A']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'battery',at:'battery',x:.24,y:0.24,s:0.50},{ic:'thermo',at:'warm',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['100% = WEAR','hundred','#FF8A8A'],['20-80% RULE','twenty','#9FD8F5'],['NOT UNDER PILLOW!','pillow','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'battery',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'AT NIGHT',R:'DAYTIME',icL:'moon',icR:'sun',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'WHEN DO YOU CHARGE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CHARGED OVERNIGHT','EVERY NIGHT?']);
