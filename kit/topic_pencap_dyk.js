const B={
 hook:SCN({bg:'classroom',items:[{ic:'pen',at:'pen',x:.24,y:0.24,s:0.55},{ic:'eye',at:'hole',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['A HOLE?!','hole','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'pen',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOK AT THE TOP...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'pen',at:'ink',x:.24,y:0.24,s:0.50},{ic:'drop',at:'drying',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['STOPS DRYING?','drying','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'pen',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NOT QUITE...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'check',at:'safety',x:.24,y:0.24,s:0.45},{ic:'lungs',at:'air',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SAFETY FEATURE!','safety','#7BE07B'],['AIR CAN PASS','air','#9FD8F5']],src:'Source: BIC, pen cap safety design',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'classroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SMART DESIGN!',.1]],push:false}),
 cta:VSCTA({L:'I CHEW',R:'NEVER',icL:'pen',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'caps',sL:.85,sR:.85,title:'DO YOU CHEW PEN CAPS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO PEN CAPS', 'HAVE A', 'TINY HOLE?']);
