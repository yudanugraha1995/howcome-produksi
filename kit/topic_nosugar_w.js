const B={
 hook:SCN({bg:'kitchen',items:[{ic:'candy',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO SUGAR?','quit','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'candy',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'candy',at:'cravings',x:.24,y:0.24,s:0.50},{ic:'brain',at:'headaches',x:.24,y:0.44,s:0.45},{ic:'calendar',at:'days',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CRAVINGS!','cravings','#9FD8F5'],['HEADACHES','headaches','#FFFFFF'],['SAUCES + BREAD','sauces','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'candy',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'apple',at:'fruit',x:.24,y:0.24,s:0.50},{ic:'check',at:'adjusts',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['TASTES SWEETER!','sweeter','#FF8A8A'],['AHA LIMIT','Heart','#9FD8F5'],['6-9 TEASPOONS','six','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'apple',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I COULD',R:'NO WAY',icL:'check',icR:'candy',cl:'#F4C542',cr:'#3B4A8A',atL:'Could',atR:'Comment',atV:'Could',sL:.85,sR:.85,title:'COULD YOU QUIT SUGAR?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','QUIT SUGAR','FOR 30 DAYS?']);
