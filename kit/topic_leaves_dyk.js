const B={
 hook:SCN({bg:'park',items:[{ic:'leaf',at:'leaves',x:.24,y:0.24,s:0.55},{ic:'tree',at:'color',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ORANGE?!','color','#F4A261']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'tree',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['AUTUMN...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'tree',at:'green',x:.24,y:0.24,s:0.50},{ic:'sun',at:'sunlight',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CHLOROPHYLL','chlorophyll','#7BE07B']],labels:[{t:'MAKES FOOD FROM SUN',at:'food',x:.5,y:.12,bg:'#3BB273'}]}),
 sil_point:SCN({bg:'park',items:[{ic:'leaf',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['HIDDEN COLORS...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'leaf',at:'yellow',x:.24,y:0.24,s:0.55},{ic:'calendar',at:'summer',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['THERE ALL SUMMER!','summer','#FFE27A'],['GREEN FADES','fades','#F4A261']],src:'Source: USDA Forest Service',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'leaf',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NATURE MAGIC!',.1]],push:false}),
 cta:VSCTA({L:'FALL',R:'SPRING',icL:'leaf',icR:'tree',cl:'#F4C542',cr:'#3B4A8A',atL:'Fall',atR:'Comment',atV:'spring',sL:.85,sR:.85,title:'FALL OR SPRING?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO LEAVES', 'CHANGE COLOR', 'IN FALL?']);
