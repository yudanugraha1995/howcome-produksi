const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:0.24,s:0.50},{ic:'moon',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LEFT SIDE?','left','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'stomach',at:'stomach',x:.24,y:0.24,s:0.50},{ic:'fire',at:'acid',x:.24,y:0.44,s:0.45},{ic:'bed',at:'lying',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['STOMACH SHAPE','stomach','#9FD8F5'],['LESS ACID','acid','#FFFFFF'],['LESS HEARTBURN','heartburn','#FFE27A']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'baby',at:'pregnancy',x:.24,y:0.24,s:0.50},{ic:'heart',at:'blood',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['PREGNANCY','pregnancy','#FF8A8A'],['LESS SNORING','snoring','#9FD8F5'],['NO PAIN = BEST','pain','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'baby',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'LEFT',R:'RIGHT',icL:'bed',icR:'pillow',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'Which',sL:.85,sR:.85,title:'WHICH SIDE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT ON YOUR','LEFT SIDE?']);
