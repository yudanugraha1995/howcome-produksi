const B={
 hook:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:0.24,s:0.50},{ic:'hospital',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['AN APPLE A DAY?','apple','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'apple',at:'apple',x:.24,y:0.24,s:0.50},{ic:'hospital',at:'doctor',x:.24,y:0.44,s:0.45},{ic:'x',at:'away',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['KEEPS THE DOCTOR AWAY?','doctor','#9FD8F5'],['EVERY DAY','every','#FFFFFF'],['OLD WELSH SAYING','Welsh','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'hospital',at:'visit',x:.24,y:0.24,s:0.50},{ic:'check',at:'fewer',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FEWER MEDICINES!','fewer','#FF8A8A'],['FIBER','fiber','#9FD8F5'],['EAT THE SKIN','skin','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'hospital',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'APPLE FAN',R:'NO THANKS',icL:'apple',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Apple',atR:'Comment',atV:'Apple',sL:.85,sR:.85,title:'AN APPLE A DAY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE AN APPLE','EVERY DAY?']);
