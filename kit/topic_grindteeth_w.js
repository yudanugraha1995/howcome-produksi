const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'tooth',at:.05,x:.24,y:0.24,s:0.50},{ic:'zzz',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TEETH GRINDING?','ground','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'tooth',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'tooth',at:'teeth',x:.24,y:0.24,s:0.50},{ic:'zzz',at:'night',x:.24,y:0.44,s:0.45},{ic:'x',at:'know',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EVERY NIGHT','night','#9FD8F5'],['NO IDEA!','know','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'tooth',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'crack',at:'crack',x:.24,y:0.24,s:0.50},{ic:'brain',at:'headaches',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WORN TEETH!','wear','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'crack',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SORE JAW',R:'I\'M FINE',icL:'tooth',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU WAKE UP SORE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','GROUND YOUR TEETH','EVERY NIGHT?']);
