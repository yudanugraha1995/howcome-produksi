const B={
 hook:SCN({bg:'office',items:[{ic:'water',at:.05,x:.24,y:0.24,s:0.50},{ic:'germ',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER WASHED?','washed','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'water',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'water',at:'water',x:.24,y:0.24,s:0.50},{ic:'check',at:'right',x:.24,y:0.44,s:0.45},{ic:'x',at:'never',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['JUST WATER?','just','#9FD8F5'],['NO WASH','never','#FFFFFF'],['REFILL, REFILL','refill','#FFE27A']]}),
 sil_point:SCN({bg:'office',items:[{ic:'water',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'mouthYawn',at:'mouth',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MILLIONS OF GERMS!','millions','#FF8A8A'],['BOTTLE BRUSH','brush','#9FD8F5'],['DRY IT FULLY','fully','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'mouthYawn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TODAY',R:'NO IDEA',icL:'check',icR:'germ',cl:'#F4C542',cr:'#3B4A8A',atL:'When',atR:'Comment',atV:'When',sL:.85,sR:.85,title:'WHEN DID YOU WASH IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER WASHED','YOUR WATER BOTTLE?']);
