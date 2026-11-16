const B={
 hook:SCN({bg:'park',items:[{ic:'salt',at:'salt',x:.24,y:0.24,s:0.55},{ic:'ice',at:'ice',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SALT ON ICE?','salt','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WINTER ROADS...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'drop',at:'water',x:.24,y:0.24,s:0.45},{ic:'thermo',at:'freezing',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOWER FREEZING POINT','lowers','#9FD8F5']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['COLDER...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'thermo',at:'minus',x:.24,y:0.24,s:0.50},{ic:'salt',at:'rock',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['-10°C','Celsius','#9FD8F5'],['BARELY WORKS!','barely','#FF8A8A']],src:'Source: road salt science (US DOT / chemistry basics)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['STAY WARM!',.1]],push:false}),
 cta:VSCTA({L:'SNOW',R:'SUNSHINE',icL:'snow',icR:'sun',cl:'#F4C542',cr:'#3B4A8A',atL:'Snow',atR:'Comment',atV:'sunshine',sL:.85,sR:.85,title:'SNOW OR SUNSHINE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES', 'SALT MELT', 'ICE?']);
