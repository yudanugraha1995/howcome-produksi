const B={
 hook:SCN({bg:'cafe',items:[{ic:'money',at:'dollars',x:.24,y:0.24,s:0.50},{ic:'calendar',at:'day',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['$5 A DAY','five','#7BE07B']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'coffee',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ONE COFFEE...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'calendar',at:'year',x:.24,y:0.24,s:0.45},{ic:'money',at:'hundred',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['$1,800 A YEAR','eighteen','#FFFFFF']]}),
 sil_point:SCN({bg:'office',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['45 YEARS LATER...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'money',at:'million',x:.24,y:0.24,s:0.55},{ic:'check',at:'math',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['7% A YEAR','seven','#9FD8F5'],['$500,000+!','million','#7BE07B']],labels:[{t:'JUST MATH, NOT ADVICE',at:'math',x:.5,y:.12,bg:'#5B8FD9'}],src:'Compound interest example (hypothetical)'}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['START SMALL!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I COULD',R:'NO WAY',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Could',atR:'Comment',atV:'do',sL:.85,sR:.85,title:'COULD YOU DO IT?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'SAVED $5 A DAY', 'FROM AGE 20?']);
