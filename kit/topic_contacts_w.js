const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'eye',at:.05,x:.24,y:0.24,s:0.50},{ic:'zzz',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SLEEP IN CONTACTS?','contact','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'eye',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'eye',at:'eyes',x:.24,y:0.24,s:0.50},{ic:'drop',at:'dry',x:.24,y:0.44,s:0.45},{ic:'alarm',at:'morning',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DRY EYES','dry','#9FD8F5'],['EVERY NIGHT','night','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'eye',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'germ',at:'infections',x:.24,y:0.24,s:0.50},{ic:'eyeRed',at:'damage',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['6-8X RISK!','six','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GLASSES',R:'CONTACTS',icL:'glasses',icR:'eye',cl:'#F4C542',cr:'#3B4A8A',atL:'Glasses',atR:'Comment',atV:'Glasses',sL:.85,sR:.85,title:'GLASSES OR CONTACTS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT IN YOUR','CONTACTS?']);
