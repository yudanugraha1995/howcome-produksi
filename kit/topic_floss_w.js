const B={
 hook:SCN({bg:'bathroom',items:[{ic:'tooth',at:.05,x:.24,y:0.24,s:0.50},{ic:'x',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NEVER FLOSS?','flossed','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'tooth',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'toothbrush',at:'toothbrush',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'teeth',x:.24,y:0.44,s:0.45},{ic:'x',at:'reach',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CAN\'T REACH','reach','#9FD8F5'],['BETWEEN TEETH','between','#FFFFFF'],['FOOD HIDES HERE','hide','#FFE27A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'toothbrush',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'germ',at:'Plaque',x:.24,y:0.24,s:0.50},{ic:'heart',at:'heart',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['GUM DISEASE!','gum','#FF8A8A'],['NO PAIN = SNEAKY','pain','#9FD8F5'],['ONCE A DAY','once','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY DAY',R:'NEVER',icL:'check',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'Do',sL:.85,sR:.85,title:'DO YOU FLOSS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER','FLOSSED?']);
