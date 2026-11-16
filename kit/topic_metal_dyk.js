const B={
 hook:SCN({bg:'kitchen',items:[{ic:'handIc',at:'metal',x:.24,y:0.24,s:0.45},{ic:'snow',at:'colder',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SO COLD!','colder','#9FD8F5']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'thermo',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['METAL VS WOOD',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'thermo',at:'think',x:.24,y:0.24,s:0.45},{ic:'snow',at:'colder',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['COLDER?','colder','#FFFFFF']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'thermo',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['MEASURE IT...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'thermo',at:'temperature',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'heat',x:.24,y:0.44,s:0.45},{ic:'fire',at:'faster',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SAME TEMP!','temperature','#7BE07B'],['HEAT LEAVES FAST','faster','#FF8A8A']],labels:[{t:'METAL STEALS YOUR HEAT',at:'pulls',x:.5,y:.12,bg:'#E5383B'}],src:'Source: thermal conductivity basics (NIST)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['MIND = BLOWN',.1]],push:false}),
 cta:VSCTA({L:'FOOLED',R:'KNEW IT',icL:'x',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Fooled',atR:'Comment',atV:'you',sL:.85,sR:.85,title:'FOOLED YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES METAL', 'FEEL COLDER', 'THAN WOOD?']);
