const B={
 hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'leaf',at:'antioxidants',x:.24,y:0.24,s:0.50},{ic:'mouthYawn',at:'throat',x:.24,y:0.44,s:0.45},{ic:'drop',at:'cough',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ANTIOXIDANTS','antioxidants','#9FD8F5'],['SORE THROAT','throat','#FFFFFF'],['~60 CALORIES','calories','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'leaf',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'clock',at:'spoils',x:.24,y:0.24,s:0.50},{ic:'book',at:'tombs',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER SPOILS!','spoils','#FF8A8A'],['LOW WATER','water','#9FD8F5'],['NOT FOR BABIES','babies','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'HONEY',R:'SUGAR',icL:'spoon',icR:'sugar',cl:'#F4C542',cr:'#3B4A8A',atL:'Honey',atR:'Comment',atV:'Honey',sL:.85,sR:.85,title:'HONEY OR SUGAR?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE HONEY','EVERY DAY?']);
