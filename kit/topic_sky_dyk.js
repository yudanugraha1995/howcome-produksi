const B={
 hook:SCN({bg:'park',items:[{ic:'sun',at:'sky',x:.24,y:0.24,s:0.50},{ic:'cloud',at:'blue',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WHY BLUE?','blue','#9FD8F5']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'sun',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOK UP...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'sun',at:'Sunlight',x:.24,y:0.24,s:0.50},{ic:'prism',at:'scatter',x:.24,y:0.44,s:0.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BLUE SCATTERS!','scatter','#9FD8F5']],labels:[{t:'TINY GAS MOLECULES',at:'molecules',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'park',items:[{ic:'prism',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ALL COLORS...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'prism',at:'violet',x:.24,y:0.24,s:0.55},{ic:'eye',at:'eyes',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['VIOLET WINS!','more','#C9A0FF'],['EYES LOVE BLUE','sensitive','#9FD8F5']],src:'Source: NASA Space Place',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'citynight',items:[{ic:'moon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NATURE TRICK!',.1]],push:false}),
 cta:VSCTA({L:'SUNRISE',R:'SUNSET',icL:'alarm',icR:'moon',cl:'#F4C542',cr:'#3B4A8A',atL:'Sunrise',atR:'Comment',atV:'sunset',sL:.85,sR:.85,title:'SUNRISE OR SUNSET?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY IS', 'THE SKY', 'BLUE?']);
