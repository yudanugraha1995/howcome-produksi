const B={
 hook:SCN({bg:'bathroom',items:[{ic:'shower',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO SHOWER?','shower','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'shower',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'drop',at:'greasy',x:.24,y:0.24,s:0.50},{ic:'calendar',at:'week',x:.24,y:0.44,s:0.45},{ic:'x',at:'shower',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['7 DAYS','week','#9FD8F5'],['SO GREASY','greasy','#FFFFFF']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'drop',at:'Sweat',x:.24,y:0.24,s:0.50},{ic:'germ',at:'bacteria',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BACTERIA = SMELL','bacteria','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY DAY',R:'EVERY 2 DAYS',icL:'shower',icR:'calendar',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW OFTEN DO YOU SHOWER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DIDN\'T SHOWER','FOR A WEEK?']);
