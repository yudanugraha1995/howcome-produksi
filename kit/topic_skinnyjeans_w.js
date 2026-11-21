const B={
 hook:SCN({bg:'citynight',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'check',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TIGHT JEANS?','tight','#FFE27A']]}),
 sil_hook:SCN({bg:'citynight',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'check',at:'sharp',x:.24,y:0.24,s:0.50},{ic:'mirror',at:'look',x:.24,y:0.44,s:0.45},{ic:'heart',at:'every',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOKS SHARP','sharp','#9FD8F5'],['SUPER TIGHT','tight','#FFFFFF']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'warn',at:'numb',x:.24,y:0.24,s:0.50},{ic:'clock',at:'hours',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SKINNY JEANS SYNDROME','syndrome','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'citynight',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TIGHT',R:'LOOSE',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Tight',atR:'Comment',atV:'Tight',sL:.85,sR:.85,title:'TIGHT OR LOOSE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WORE TIGHT JEANS','EVERY DAY?']);
