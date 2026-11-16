const B={
 hook:SCN({bg:'office',items:[{ic:'note',at:'report',x:.24,y:0.24,s:0.50},{ic:'card',at:'credit',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER CHECKED?','checked','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['YOUR REPORT...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'warn',at:'error',x:.24,y:0.24,s:0.50},{ic:'note',at:'study',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['1 IN 5!','five','#FF8A8A']],labels:[{t:'HAD AN ERROR',at:'error',x:.5,y:.12,bg:'#E5383B'}],src:'Source: FTC study (2012)'}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HIDDEN MISTAKES...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'phone',at:'check',x:.24,y:0.24,s:0.45},{ic:'check',at:'free',x:.24,y:0.44,s:0.45},{ic:'calendar',at:'week',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SCORE HURT','hurt','#FF8A8A'],['FREE EVERY WEEK','free','#7BE07B']],src:'AnnualCreditReport.com'}),
 sil_point2:SCN({bg:'office',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CHECK IT!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'CHECKED',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Ever',atR:'Comment',atV:'yours',sL:.85,sR:.85,title:'EVER CHECKED YOURS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'NEVER CHECKED YOUR', 'CREDIT REPORT?']);
