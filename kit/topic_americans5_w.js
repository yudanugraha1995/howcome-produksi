const B={
 hook:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:0.24,s:0.50},{ic:'money',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LIKE AN AMERICAN?','American','#FFE27A']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'cafe',items:[{ic:'cup3',at:'drink',x:.24,y:0.24,s:0.50},{ic:'snow',at:'winter',x:.24,y:0.44,s:0.45},{ic:'speech',at:'hello',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ICE IN EVERYTHING!','ice','#9FD8F5'],['"HOW ARE YOU?"','hello','#FFFFFF'],['2 FRIDGES!','second','#FFE27A']]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'cafe',items:[{ic:'card',at:'tag',x:.24,y:0.24,s:0.50},{ic:'money',at:'register',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['+ SALES TAX','tax','#FF8A8A'],['TIP 15-20%','tip','#9FD8F5'],['$10 MEAL = $13','costing','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'card',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TIPPING',R:'HIDDEN TAX',icL:'money',icR:'card',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'Which',sL:.85,sR:.85,title:'WHICH IS WORSE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 WEIRD THINGS','AMERICANS DO','EVERY DAY']);
