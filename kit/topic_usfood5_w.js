const B={
 hook:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:0.24,s:0.50},{ic:'fork',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WEIRD FOODS?','weirdest','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'bread',at:'sandwiches',x:.24,y:0.24,s:0.50},{ic:'bread',at:'biscuits',x:.24,y:0.44,s:0.45},{ic:'can2',at:'sauce',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['PB&J?!','peanut','#9FD8F5'],['BISCUITS + GRAVY','gravy','#FFFFFF'],['ROOT BEER','root','#FFE27A']]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'bread',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'pizza',at:'pizza',x:.24,y:0.24,s:0.50},{ic:'fork',at:'fries',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['RANCH ON PIZZA!','ranch','#FF8A8A'],['CORN DOGS','corn','#9FD8F5'],['20 BILLION HOT DOGS','billion','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'pizza',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'RANCH PIZZA',R:'CORN DOG',icL:'pizza',icR:'fork',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'Which',sL:.85,sR:.85,title:'WHICH FIRST?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 WEIRD','AMERICAN FOODS','EXPLAINED']);
