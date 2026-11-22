const B={
 hook:SCN({bg:'livingroom',items:[{ic:'bird',at:.05,x:.24,y:0.24,s:0.50},{ic:'fork',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['THANKSGIVING!','Thanksgiving','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'bird',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'fire',at:'calories',x:.24,y:0.24,s:0.50},{ic:'bird',at:'turkey',x:.24,y:0.44,s:0.45},{ic:'tree',at:'farm',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['~3,000 CALORIES','calories','#9FD8F5'],['TURKEY PARDON','pardons','#FFFFFF'],['1621','sixteen','#FFE27A']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'bird',at:'turkeys',x:.24,y:0.24,s:0.50},{ic:'phone',at:'Talk',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['46 MILLION TURKEYS','million','#FF8A8A'],['TURKEY HOTLINE','Butterball','#9FD8F5'],['MOVED IN 1939','moved','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'bird',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'TURKEY',R:'SIDE DISHES',icL:'bird',icR:'fork',cl:'#F4C542',cr:'#3B4A8A',atL:'Are',atR:'Comment',atV:'Are',sL:.85,sR:.85,title:'TURKEY OR SIDES?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 CRAZY FACTS','ABOUT','THANKSGIVING']);
