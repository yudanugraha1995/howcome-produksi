const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'mouthYawn',at:.05,x:.24,y:0.24,s:0.50},{ic:'zzz',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MOUTH BREATHER?','mouth','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'mouthYawn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'mouthYawn',at:'breathed',x:.24,y:0.24,s:0.50},{ic:'drop',at:'dry',x:.24,y:0.44,s:0.45},{ic:'alarm',at:'wake',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DRY MOUTH','dry','#9FD8F5'],['ALL NIGHT','night','#FFFFFF'],['STUFFY NOSE','stuffy','#FFE27A']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'mouthYawn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'nose',at:'nose',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'cavities',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BAD BREATH!','breath','#FF8A8A'],['SLEEP APNEA','apnea','#9FD8F5'],['GET IT CHECKED','checking','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'nose',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'NOSE',R:'MOUTH',icL:'nose',icR:'mouthYawn',cl:'#F4C542',cr:'#3B4A8A',atL:'Nose',atR:'Comment',atV:'Nose',sL:.85,sR:.85,title:'NOSE OR MOUTH?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','BREATHED THROUGH','YOUR MOUTH?']);
