const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'phone',at:'charged',x:.24,y:0.24,s:0.50},{ic:'moon',at:'overnight',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALL NIGHT?','overnight','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'battery',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['100%...',.1]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'battery',at:'Batteries',x:.24,y:0.24,s:0.50},{ic:'thermo',at:'warm',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['100% + HEAT','hundred','#FF8A8A']],labels:[{t:'BATTERY AGES FASTER',at:'faster',x:.5,y:.12,bg:'#E5383B'}],src:'Source: Apple & Battery University'}),
 sil_point:SCN({bg:'bedroom',items:[{ic:'thermo',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['TOO WARM!',.1]],push:false}),
 point2:SCN({bg:'bedroom',items:[{ic:'battery',at:'eighty',x:.24,y:0.24,s:0.50},{ic:'clock',at:'wake',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['STOPS AT 80%','eighty','#7BE07B']],labels:[{t:'SMART CHARGING',at:'pause',x:.5,y:.12,bg:'#3BB273'}]}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['TURN IT ON!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'ALL NIGHT',R:'DAYTIME',icL:'moon',icR:'sun',cl:'#F4C542',cr:'#3B4A8A',atL:'charge',atR:'below',atV:'overnight',sL:.85,sR:.85,title:'DO YOU CHARGE OVERNIGHT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'CHARGED OVERNIGHT', 'EVERY NIGHT?']);
