const B={
 hook:SCN({bg:'park',items:[{ic:'snow',at:'cold',x:.24,y:0.24,s:0.50},{ic:'thermo',at:'shiver',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BRRR!','shiver','#9FD8F5']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['FREEZING...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'heart',at:'muscles',x:.24,y:0.24,s:0.45},{ic:'burst',at:'shaking',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['MUSCLES SHAKE','shaking','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WHY SHAKE?',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'fire',at:'heat',x:.24,y:0.24,s:0.50},{ic:'heart',at:'Shivering',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MAKING HEAT!','heat','#FF8A8A'],['SEVERAL TIMES MORE','several','#FFE27A']],src:'Source: human thermoregulation physiology',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['WARM UP!',.1]],push:false}),
 cta:VSCTA({L:'COLD',R:'HOT',icL:'snow',icR:'sun',cl:'#F4C542',cr:'#3B4A8A',atL:'Cold',atR:'Comment',atV:'weather',sL:.85,sR:.85,title:'COLD OR HOT WEATHER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO WE', 'SHIVER WHEN', 'WE ARE COLD?']);
