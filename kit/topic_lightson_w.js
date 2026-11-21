const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'lamp',at:.05,x:.24,y:0.24,s:0.50},{ic:'bed',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LIGHTS ON?','lights','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'lamp',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'moon',at:'darkness',x:.24,y:0.24,s:0.50},{ic:'brain',at:'brain',x:.24,y:0.44,s:0.45},{ic:'zzz',at:'melatonin',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DARKNESS','darkness','#9FD8F5'],['MELATONIN','melatonin','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'moon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'heart',at:'heart',x:.24,y:0.24,s:0.50},{ic:'sugar',at:'sugar',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['JUST ONE NIGHT!','one','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'heart',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'LIGHTS ON',R:'LIGHTS OFF',icL:'lamp',icR:'moon',cl:'#F4C542',cr:'#3B4A8A',atL:'Lights',atR:'Comment',atV:'Lights',sL:.85,sR:.85,title:'LIGHTS ON OR OFF?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT WITH','THE LIGHTS ON?']);
