const B={
 hook:SCN({bg:'livingroom',items:[{ic:'calendar',at:'cancel',x:.24,y:0.24,s:0.45},{ic:'phone',at:'trials',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FREE TRIAL?','trials','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'calendar',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['30 DAYS LATER...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'warn',at:'charges',x:.24,y:0.24,s:0.45},{ic:'calendar',at:'fast',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['$$$','charges','#7BE07B']],labels:[{t:'AUTO-RENEW',at:'add',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['CHECK YOUR BANK!',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'phone',at:'subscriptions',x:.24,y:0.24,s:0.50},{ic:'burst',at:'hundred',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GUESS: $86','eighty-six','#FFFFFF'],['REAL: $219','hundred','#FF8A8A']],src:'Source: C+R Research subscription survey (2022)'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CANCEL NOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'1-3 APPS',R:'TOO MANY',icL:'phone',icR:'warn',cl:'#F4C542',cr:'#3B4A8A',atL:'many',atR:'below',atV:'pay',sL:.85,sR:.85,title:'HOW MANY DO YOU PAY FOR?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'FORGOT YOUR', 'FREE TRIALS?']);
