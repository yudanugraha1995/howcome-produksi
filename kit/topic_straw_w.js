const B={
 hook:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:0.24,s:0.50},{ic:'tooth',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STRAW ALWAYS?','straw','#FFE27A']]}),
 sil_hook:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'cafe',items:[{ic:'cup3',at:'drank',x:.24,y:0.24,s:0.50},{ic:'tooth',at:'teeth',x:.24,y:0.44,s:0.45},{ic:'check',at:'protect',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FEWER STAINS','stains','#9FD8F5'],['PROTECT TEETH','protect','#FFFFFF']]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'cup3',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'cafe',items:[{ic:'warn',at:'lines',x:.24,y:0.24,s:0.50},{ic:'bubbles',at:'air',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BLOATED!','bloated','#FF8A8A']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'warn',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'STRAW',R:'NO STRAW',icL:'cup3',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Straw',atR:'Comment',atV:'Straw',sL:.85,sR:.85,title:'STRAW OR NO STRAW?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK EVERYTHING','THROUGH A STRAW?']);
