const B={
 hook:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:0.24,s:0.50},{ic:'sun',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY MORNING?','morning','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'cup3',at:'glass',x:.24,y:0.24,s:0.50},{ic:'sun',at:'vitamin',x:.24,y:0.44,s:0.45},{ic:'check',at:'day',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['100%+ VITAMIN C','vitamin','#9FD8F5'],['ONE GLASS','glass','#FFFFFF'],['POTASSIUM','potassium','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'sugar',at:'sugar',x:.24,y:0.24,s:0.50},{ic:'soda',at:'soda',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SODA LEVEL SUGAR?','soda','#FF8A8A'],['3 ORANGES = 1 GLASS','three','#9FD8F5'],['EAT THE FRUIT','eating','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'sugar',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'JUICE',R:'WHOLE FRUIT',icL:'cup3',icR:'apple',cl:'#F4C542',cr:'#3B4A8A',atL:'Juice',atR:'Comment',atV:'Juice',sL:.85,sR:.85,title:'JUICE OR FRUIT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK OJ','EVERY MORNING?']);
