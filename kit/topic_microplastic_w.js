const B={
 hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:0.24,s:0.50},{ic:'warn',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['PLASTIC IN THE MICROWAVE?','plastic','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'microwave',at:'microwaved',x:.24,y:0.24,s:0.50},{ic:'clock',at:'convenient',x:.24,y:0.44,s:0.45},{ic:'check',at:'super',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO EASY','convenient','#9FD8F5'],['2 MINUTES','super','#FFFFFF'],['MICROWAVE SAFE?','containers','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'microwave',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'fire',at:'Heat',x:.24,y:0.24,s:0.50},{ic:'warn',at:'particles',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['USE GLASS!','glass','#FF8A8A'],['WON\'T MELT','melt','#9FD8F5'],['BUT LEAKS?','leaks','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'PLASTIC',R:'GLASS',icL:'microwave',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'PLASTIC OR GLASS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','MICROWAVED','IN PLASTIC?']);
