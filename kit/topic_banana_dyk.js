const B={
 hook:SCN({bg:'kitchen',items:[{ic:'banana',at:'bananas',x:.24,y:0.24,s:0.55},{ic:'clock',at:'brown',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BROWN?!','brown','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'banana',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DAY BY DAY...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'banana',at:'Ripe',x:.24,y:0.24,s:0.50},{ic:'cloud',at:'gas',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['ETHYLENE GAS','ethylene','#9FD8F5']],labels:[{t:'SPEEDS UP RIPENING',at:'speeds',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'kitchen',items:[{ic:'snow',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['INTO THE FRIDGE...',.1]],push:false}),
 point2:SCN({bg:'kitchen',items:[{ic:'snow',at:'fridge',x:.24,y:0.24,s:0.45},{ic:'banana',at:'peel',x:.24,y:0.44,s:0.50},{ic:'check',at:'fresh',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['BLACK PEEL!','black','#FF8A8A'],['FRESH INSIDE!','fresh','#7BE07B']],src:'Source: postharvest science (UC Davis)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'banana',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SMART TRICK!',.1]],push:false}),
 cta:VSCTA({L:'GREEN',R:'SPOTTY',icL:'banana',icR:'banana',cl:'#F4C542',cr:'#3B4A8A',atL:'Green',atR:'Comment',atV:'spotty',sL:.85,sR:.85,title:'GREEN OR SPOTTY?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO', 'BANANAS TURN', 'BROWN?']);
