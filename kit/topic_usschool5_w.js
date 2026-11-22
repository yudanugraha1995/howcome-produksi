const B={
 hook:SCN({bg:'classroom',items:[{ic:'book',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SCHOOL IN THE USA?','America','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'book',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'speech',at:'Pledge',x:.24,y:0.24,s:0.50},{ic:'door',at:'classrooms',x:.24,y:0.44,s:0.45},{ic:'clock',at:'period',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['THE PLEDGE','Pledge','#9FD8F5'],['SWITCH ROOMS','switch','#FFFFFF'],['LOCKERS','lockers','#FFE27A']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'speech',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'shoe',at:'sports',x:.24,y:0.24,s:0.50},{ic:'volume',at:'fans',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['10,000+ SEATS','thousand','#FF8A8A'],['YELLOW BUSES','yellow','#9FD8F5'],['PROM $$$','prom','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'classroom',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'AMERICA',R:'AT HOME',icL:'book',icR:'heart',cl:'#F4C542',cr:'#3B4A8A',atL:'Would',atR:'Comment',atV:'Would',sL:.85,sR:.85,title:'WHERE WOULD YOU STUDY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 THINGS ONLY','AMERICAN SCHOOLS','DO']);
