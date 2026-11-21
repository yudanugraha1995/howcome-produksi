const B={
 hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BAREFOOT?','barefoot','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'tree',at:'free',x:.24,y:0.24,s:0.50},{ic:'check',at:'walked',x:.24,y:0.44,s:0.45},{ic:'heart',at:'feels',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SO FREE','free','#9FD8F5'],['NO SHOES','barefoot','#FFFFFF']]}),
 sil_point:SCN({bg:'park',items:[{ic:'tree',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'check',at:'stronger',x:.24,y:0.24,s:0.50},{ic:'fungus',at:'fungus',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WARTS + FUNGUS!','warts','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'BAREFOOT',R:'SHOES',icL:'tree',icR:'shoe',cl:'#F4C542',cr:'#3B4A8A',atL:'Barefoot',atR:'Comment',atV:'Barefoot',sL:.85,sR:.85,title:'BAREFOOT OR SHOES?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WALKED BAREFOOT','EVERY DAY?']);
