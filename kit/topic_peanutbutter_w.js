const B={
 hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'spoon',at:'tablespoons',x:.24,y:0.24,s:0.50},{ic:'fork',at:'protein',x:.24,y:0.44,s:0.45},{ic:'heart',at:'fats',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['7G PROTEIN','protein','#9FD8F5'],['HEALTHY FATS','fats','#FFFFFF'],['FIBER + VITAMIN E','fiber','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'spoon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'fire',at:'calories',x:.24,y:0.24,s:0.50},{ic:'sugar',at:'sugar',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['~200 CALORIES','calories','#FF8A8A'],['JUST PEANUTS!','just','#9FD8F5'],['STRAIGHT FROM THE JAR','straight','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'CRUNCHY',R:'SMOOTH',icL:'bread',icR:'spoon',cl:'#F4C542',cr:'#3B4A8A',atL:'Crunchy',atR:'Comment',atV:'Crunchy',sL:.85,sR:.85,title:'CRUNCHY OR SMOOTH?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE PEANUT BUTTER','EVERY DAY?']);
