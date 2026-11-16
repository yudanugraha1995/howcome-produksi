const B={
 hook:SCN({bg:'office',items:[{ic:'card',at:'credit',x:.24,y:0.24,s:0.50},{ic:'note',at:'minimum',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MINIMUM ONLY?','minimum','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'card',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PAY LESS...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'note',at:'bill',x:.24,y:0.24,s:0.45},{ic:'check',at:'safe',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['FEELS SAFE','safe','#7BE07B']]}),
 sil_point:SCN({bg:'office',items:[{ic:'calendar',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['MONTHS PASS...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'warn',at:'interest',x:.24,y:0.24,s:0.50},{ic:'calendar',at:'years',x:.24,y:0.44,s:0.45},{ic:'money',at:'borrowed',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['INTEREST PILES UP','interest','#FF8A8A'],['YEARS TO PAY!','years','#FFE27A']],labels:[{t:'CHECK YOUR STATEMENT',at:'statement',x:.5,y:.12,bg:'#3BB273'}],src:'Source: CFPB, minimum payment warning'}),
 sil_point2:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['READ THE BOX!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'KNEW IT',R:'NO IDEA',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Did',atR:'Comment',atV:'know',sL:.85,sR:.85,title:'DID YOU KNOW?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'ONLY PAID', 'THE MINIMUM?']);
