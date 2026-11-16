const B={
 hook:SCN({bg:'livingroom',items:[{ic:'money',at:'cash',x:.24,y:0.24,s:0.55},{ic:'door',at:'home',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALL IN CASH?','cash','#7BE07B']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['UNDER THE BED...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'check',at:'safe',x:.24,y:0.24,s:0.45},{ic:'money',at:'easy',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SAFE AND EASY','safe','#7BE07B']]}),
 sil_point:SCN({bg:'office',items:[{ic:'calendar',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['YEARS PASS...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'warn',at:'inflation',x:.24,y:0.24,s:0.45},{ic:'money',at:'less',x:.24,y:0.44,s:0.45},{ic:'lock',at:'insured',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BUYS LESS!','less','#FF8A8A'],['INSURED TO $250K','insured','#7BE07B']],src:'Source: FDIC'}),
 sil_point2:SCN({bg:'office',items:[{ic:'lock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['KEEP IT SAFE!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'CASH',R:'BANK',icL:'money',icR:'lock',cl:'#F4C542',cr:'#3B4A8A',atL:'Cash',atR:'Comment',atV:'bank',sL:.85,sR:.85,title:'CASH OR BANK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'KEPT ALL YOUR', 'MONEY IN CASH?']);
