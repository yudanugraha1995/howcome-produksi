const B={
 hook:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:0.24,s:0.50},{ic:'soap',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALL DAY?','day','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'handIc',at:'hands',x:.24,y:0.24,s:0.50},{ic:'germ',at:'germs',x:.24,y:0.44,s:0.45},{ic:'clock',at:'seconds',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['KILLS GERMS','kills','#9FD8F5'],['~30 SECONDS','seconds','#FFFFFF'],['60%+ ALCOHOL','sixty','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'virus',at:'norovirus',x:.24,y:0.24,s:0.50},{ic:'soap',at:'soap',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT ON DIRTY HANDS','dirty','#FF8A8A'],['DRY, CRACKED SKIN','dry','#9FD8F5'],['20 SECOND WASH','twenty','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'virus',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SANITIZER',R:'SOAP',icL:'handIc',icR:'soap',cl:'#F4C542',cr:'#3B4A8A',atL:'Sanitizer',atR:'Comment',atV:'Sanitizer',sL:.85,sR:.85,title:'SANITIZER OR SOAP?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','USED SANITIZER','ALL DAY?']);
