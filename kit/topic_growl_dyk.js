const B={
 hook:SCN({bg:'classroom',items:[{ic:'stomach',at:'stomach',x:.24,y:0.24,s:0.55},{ic:'volume',at:'growl',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GRRRR!','growl','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['SO LOUD...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'pizza',at:'hungry',x:.24,y:0.24,s:0.50},{ic:'stomach',at:'happens',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HUNGRY?','hungry','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'stomach',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ALWAYS MOVING...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'stomach',at:'gut',x:.24,y:0.24,s:0.50},{ic:'volume',at:'louder',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['RUMBLES ALL DAY','rumbles','#9FD8F5'],['EMPTY = LOUDER','empty','#FF8A8A']],labels:[{t:'NOTHING MUFFLES IT',at:'muffles',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: gut motility basics',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SNACK TIME!',.1]],push:false}),
 cta:VSCTA({L:'ALL THE TIME',R:'RARELY',icL:'volume',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Does',atR:'Comment',atV:'growl',sL:.85,sR:.85,title:'DOES YOURS GROWL?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES YOUR', 'STOMACH', 'GROWL?']);
