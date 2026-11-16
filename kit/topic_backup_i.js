const B={
 hook:SCN({bg:'bedroom',items:[{ic:'camera',at:'photos',x:.24,y:0.24,s:0.50},{ic:'phone',at:'backed',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO BACKUP?','backed','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['CRACK!',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'crack',at:'breaks',x:.24,y:0.24,s:0.45},{ic:'camera',at:'memories',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['GONE IN A SECOND','vanish','#FF8A8A']]}),
 sil_point:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['THE RULE...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'note',at:'rule',x:.24,y:0.24,s:0.45},{ic:'phone',at:'copies',x:.24,y:0.44,s:0.45},{ic:'cloud',at:'somewhere',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['3-2-1 RULE','rule','#7BE07B'],['3 COPIES','copies','#9FD8F5'],['1 OFFSITE','else','#FFE27A']]}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['BACK IT UP!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TODAY',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'When',atR:'Comment',atV:'up',sL:.85,sR:.85,title:'WHEN DID YOU LAST BACK UP?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'NEVER BACKED UP', 'YOUR PHOTOS?']);
