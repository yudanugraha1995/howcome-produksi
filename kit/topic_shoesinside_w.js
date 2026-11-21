const B={
 hook:SCN({bg:'livingroom',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'door',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SHOES INSIDE?','inside','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'shoe',at:'shoes',x:.24,y:0.24,s:0.50},{ic:'clock',at:'time',x:.24,y:0.44,s:0.45},{ic:'door',at:'inside',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SAVES TIME','time','#9FD8F5'],['STRAIGHT IN','inside','#FFFFFF'],['SHOES OFF AT THE DOOR','door','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:0.50},{ic:'warn',at:'fecal',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALMOST EVERY SHOE!','almost','#FF8A8A'],['BABIES + PETS','babies','#9FD8F5'],['SHOE RACK','rack','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SHOES ON',R:'SHOES OFF',icL:'shoe',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Shoes',atR:'Comment',atV:'Shoes',sL:.85,sR:.85,title:'SHOES ON OR OFF?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WORE SHOES','INSIDE?']);
