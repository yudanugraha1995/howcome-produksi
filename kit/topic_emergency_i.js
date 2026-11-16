const B={
 hook:SCN({bg:'livingroom',items:[{ic:'note',at:'bill',x:.24,y:0.24,s:0.50},{ic:'money',at:'dollar',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['$400 SURPRISE!','bill','#FF8A8A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['UH OH...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'note',at:'survey',x:.24,y:0.24,s:0.45},{ic:'x',at:'cover',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['1 IN 3 ADULTS','three','#FFE27A']],labels:[{t:'COULD NOT PAY CASH',at:'cash',x:.5,y:.12,bg:'#E5383B'}],src:'Source: Federal Reserve SHED report'}),
 sil_point:SCN({bg:'office',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PLAN AHEAD...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'money',at:'fund',x:.24,y:0.24,s:0.50},{ic:'calendar',at:'week',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['EMERGENCY FUND','emergency','#7BE07B'],['A LITTLE EACH WEEK','little','#9FD8F5']]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['START TODAY!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES',R:'NOT YET',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Could',atR:'Comment',atV:'cover',sL:.85,sR:.85,title:'COULD YOU COVER IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF A', '$400 BILL CAME', 'TOMORROW?']);
