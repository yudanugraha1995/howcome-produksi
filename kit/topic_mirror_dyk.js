const B={
 hook:SCN({bg:'bathroom',items:[{ic:'mirror',at:'mirrors',x:.24,y:0.24,s:0.55},{ic:'handIc',at:'flip',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FLIPPED?!','flip','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'mirror',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LEFT OR RIGHT?',.1]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'handIc',at:'right',x:.24,y:0.24,s:0.45},{ic:'mirror',at:'reflection',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['RIGHT = LEFT?','left','#FFFFFF']]}),
 sil_point:SCN({bg:'bedroom',items:[{ic:'mirror',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOK CLOSER...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'x',at:'all',x:.24,y:0.24,s:0.45},{ic:'mirror',at:'front',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO FLIP!','all','#FF8A8A'],['FRONT TO BACK!','back','#7BE07B']],labels:[{t:'IT FLIPS DEPTH',at:'front',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: optics basics (physics of reflection)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'brain',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['MIND = BLOWN',.1]],push:false}),
 cta:VSCTA({L:'BLOWN',R:'KNEW IT',icL:'burst',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Did',atR:'Comment',atV:'mind',sL:.85,sR:.85,title:'DID THIS BLOW YOUR MIND?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO MIRRORS', 'FLIP LEFT', 'AND RIGHT?']);
