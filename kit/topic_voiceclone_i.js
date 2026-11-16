const B={
 hook:SCN({bg:'office',items:[{ic:'robot',at:'AI',x:.24,y:0.24,s:0.50},{ic:'speech',at:'voice',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['3 SECONDS?!','seconds','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'robot',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['COPYING...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'robot',at:'tools',x:.24,y:0.24,s:0.45},{ic:'phone',at:'calls',x:.24,y:0.44,s:0.45},{ic:'money',at:'money',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['FAKE CALLS!','fake','#FF8A8A']],labels:[{t:'SCAMMERS USE IT',at:'scammers',x:.5,y:.12,bg:'#E5383B'}],src:'Source: FTC consumer alert on voice cloning'}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['MOM? IS THAT YOU?',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'lock',at:'safe',x:.24,y:0.24,s:0.50},{ic:'check',at:'agree',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['FAMILY SAFE WORD','safe','#7BE07B']]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'lock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['STAY SAFE!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SCARY',R:'NOT WORRIED',icL:'warn',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Scary',atR:'Comment',atV:'right',sL:.85,sR:.85,title:'SCARY, RIGHT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF AI', 'CLONED YOUR', 'VOICE?']);
