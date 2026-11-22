const B={
 hook:SCN({bg:'bedroom',items:[{ic:'bed',at:.05,x:.24,y:0.24,s:0.50},{ic:'calendar',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['EVERY DAY?','every','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'bubbles',at:'bubbles',x:.24,y:0.24,s:0.50},{ic:'drop',at:'fluid',x:.24,y:0.44,s:0.45},{ic:'handIc',at:'joints',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['POP!','pop','#9FD8F5'],['GAS BUBBLES','gas','#FFFFFF'],['LIKE KNUCKLES','knuckles','#FFE27A']]}),
 sil_point:SCN({bg:'bedroom',items:[{ic:'bubbles',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroom',items:[{ic:'warn',at:'forcing',x:.24,y:0.24,s:0.50},{ic:'crack',at:'ligaments',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LOOSE JOINTS?','stable','#FF8A8A'],['TIGHT MUSCLES','tight','#9FD8F5'],['STRETCH INSTEAD','stretching','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES, DAILY',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU CRACK IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CRACKED YOUR BACK','EVERY DAY?']);
