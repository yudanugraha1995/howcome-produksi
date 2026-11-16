const B={
 hook:SCN({bg:'kitchen',items:[{ic:'ice',at:'ice',x:.24,y:0.24,s:0.50},{ic:'water',at:'float',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['IT FLOATS?!','float','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'drop',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SINK OR FLOAT?',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'drop',at:'solids',x:.24,y:0.24,s:0.40},{ic:'check',at:'sink',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SOLIDS SINK','sink','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'ice',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT ICE...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'snow',at:'freezes',x:.24,y:0.24,s:0.45},{ic:'ice',at:'lighter',x:.24,y:0.44,s:0.50},{ic:'water',at:'lakes',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['9% LIGHTER','percent','#9FD8F5'],['LAKES STAY LIQUID','lakes','#7BE07B']],labels:[{t:'OPEN CRYSTAL PATTERN',at:'pattern',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: USGS Water Science School',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NATURE HACK!',.1]],push:false}),
 cta:VSCTA({L:'I KNEW IT',R:'NO IDEA',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Knew',atR:'Comment',atV:'that',sL:.85,sR:.85,title:'KNEW THAT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES ICE', 'FLOAT INSTEAD', 'OF SINK?']);
