const B={
 hook:SCN({bg:'bathroom',items:[{ic:'towel',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['30 DAYS?','month','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'towel',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'towel',at:'dry',x:.24,y:0.24,s:0.50},{ic:'drop',at:'moisture',x:.24,y:0.44,s:0.45},{ic:'handIc',at:'skin',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DEAD SKIN','skin','#9FD8F5'],['MOISTURE','moisture','#FFFFFF']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'towel',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:0.50},{ic:'mold',at:'mold',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WASH EVERY 3 USES','three','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY WEEK',R:'RARELY',icL:'calendar',icR:'mold',cl:'#F4C542',cr:'#3B4A8A',atL:'How',atR:'Comment',atV:'How',sL:.85,sR:.85,title:'HOW OFTEN DO YOU WASH IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','USED ONE TOWEL','FOR A MONTH?']);
