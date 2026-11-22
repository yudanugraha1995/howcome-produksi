const B={
 hook:SCN({bg:'kitchen',items:[{ic:'banana',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'banana',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'banana',at:'potassium',x:.24,y:0.24,s:0.50},{ic:'leaf',at:'fiber',x:.24,y:0.44,s:0.45},{ic:'fire',at:'energy',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['POTASSIUM','potassium','#9FD8F5'],['ENERGY BOOST','energy','#FFFFFF'],['MUSCLES + HEART','muscles','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'banana',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'radiation',at:'radioactive',x:.24,y:0.24,s:0.50},{ic:'banana',at:'millions',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['RADIOACTIVE?!','radioactive','#FF8A8A'],['BANANA DOSE','equivalent','#9FD8F5'],['BODY BALANCES IT','balanced','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'radiation',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GREEN',R:'YELLOW',icL:'banana',icR:'sun',cl:'#F4C542',cr:'#3B4A8A',atL:'Green',atR:'Comment',atV:'Green',sL:.85,sR:.85,title:'GREEN OR YELLOW?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE A BANANA','EVERY DAY?']);
