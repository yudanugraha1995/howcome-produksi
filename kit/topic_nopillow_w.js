const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'pillow',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO PILLOW?','pillow','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'pillow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'bed',at:'slept',x:.24,y:0.24,s:0.50},{ic:'check',at:'swear',x:.24,y:0.44,s:0.45},{ic:'x',at:'without',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NO PILLOW','without','#9FD8F5'],['PEOPLE SWEAR BY IT','swear','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'bed',at:'stomach',x:.24,y:0.24,s:0.50},{ic:'warn',at:'stiff',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STIFF NECK!','stiff','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'PILLOW',R:'NO PILLOW',icL:'pillow',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Pillow',atR:'Comment',atV:'Pillow',sL:.85,sR:.85,title:'PILLOW OR NO PILLOW?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT WITHOUT','A PILLOW?']);
