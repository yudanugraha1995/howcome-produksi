const B={
 hook:SCN({bg:'kitchen',items:[{ic:'bread',at:'toast',x:.24,y:0.24,s:0.55},{ic:'burst',at:'down',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SPLAT!','down','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['EVERY TIME...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'x',at:'luck',x:.24,y:0.24,s:0.45},{ic:'bread',at:'bad',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NOT BAD LUCK','luck','#FFFFFF']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DO THE MATH...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'note',at:'physicist',x:.24,y:0.24,s:0.45},{ic:'bread',at:'flip',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TABLE HEIGHT','table','#9FD8F5'],['ONLY HALF A FLIP!','half','#FFE27A']],src:'Source: Robert Matthews, European Journal of Physics (1995)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['PHYSICS!',.1]],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'bread',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Has',atR:'Comment',atV:'happened',sL:.85,sR:.85,title:'HAS THIS HAPPENED TO YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES TOAST', 'LAND BUTTER', 'SIDE DOWN?']);
