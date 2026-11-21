const B={
 hook:SCN({bg:'livingroom',items:[{ic:'patch',at:.05,x:.24,y:0.24,s:0.50},{ic:'handIc',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SCAB PICKER?','picked','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'patch',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'patch',at:'bandage',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'body',x:.24,y:0.44,s:0.45},{ic:'check',at:'natural',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NATURAL BANDAGE','bandage','#9FD8F5'],['DON\'T TOUCH','natural','#FFFFFF'],['DRIED BLOOD','blood','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'patch',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'germ',at:'germs',x:.24,y:0.24,s:0.50},{ic:'warn',at:'scar',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MORE SCARS!','scar','#FF8A8A'],['KEEP IT CLEAN','clean','#9FD8F5'],['A LITTLE MOIST','moist','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I PICK',R:'NEVER',icL:'handIc',icR:'patch',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'ARE YOU A SCAB PICKER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','PICKED','EVERY SCAB?']);
