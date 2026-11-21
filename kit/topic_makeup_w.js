const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'mirror',at:.05,x:.24,y:0.24,s:0.50},{ic:'bed',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MAKEUP ON?','makeup','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'mirror',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'clock',at:'long',x:.24,y:0.24,s:0.50},{ic:'bed',at:'sleep',x:.24,y:0.44,s:0.45},{ic:'check',at:'harmless',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LONG DAY...','long','#9FD8F5'],['TOO TIRED','harmless','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'pimple',at:'breakouts',x:.24,y:0.24,s:0.50},{ic:'eyeRed',at:'eyes',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['CLOGGED PORES!','clog','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'pimple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALWAYS WASH',R:'SOMETIMES',icL:'soap',icR:'bed',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU WASH YOUR FACE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT WITH','MAKEUP ON?']);
