const B={
 hook:SCN({bg:'livingroom',items:[{ic:'crack',at:'cracked',x:.3,y:.4,s:.5,r:-8},{ic:'burst',at:'neck',x:.7,y:.32,s:.45}],komo:{x:.75,y:1.1,s:.55,expr:'surprised'},title:{t:'CRACK! EVERY DAY?',at:0.1},kw:[['POP!','neck','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'clock',at:.1,x:.5,y:.45,s:.6}],kw:[['SAFE OR NOT?',.2]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'burst',at:'pop',x:.3,y:.4,s:.5},{ic:'drop',at:'bubbles',x:.7,y:.4,s:.4},{ic:'check',at:'harmless',x:.5,y:.62,s:.45}],komo:{x:.85,y:1.1,s:.5,expr:'happy'},labels:[{t:'GAS BUBBLES',at:'gas',x:.5,y:.15,bg:'#5B8FD9'}],kw:[['HARMLESS','harmless','#7BE07B']],src:'Source: Harvard Health Publishing'}),
 sil_point:SCN({bg:'park',items:[{ic:'check',at:.1,x:.5,y:.45,s:.6}],kw:[['PHEW!',.2,'#7BE07B']],push:false}),
 point2:SCN({bg:'office',chapter:['BUT WAIT!'],chapterEnd:'hard',items:[{ic:'warn',at:'strain',x:.3,y:.42,s:.5},{ic:'heart',at:'artery',x:.7,y:.42,s:.45}],komo:{x:.85,y:1.1,s:.5,expr:'worried'},labels:[{t:'RARE: ARTERY INJURY',at:'artery',x:.5,y:.15,bg:'#E5383B'}],kw:[['TOO HARD = RISK','twisting','#FF8A8A']],src:'Source: Cleveland Clinic'}),
 sil_point2:SCN({bg:'bedroom',items:[{ic:'hospital',at:.1,x:.5,y:.45,s:.6}],kw:[['BE GENTLE!',.2]],push:false}),
 cta:VSCTA({L:'I CRACK IT',R:'NEVER',icL:'crack',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'neck',atR:'comments',atV:'cracker',sL:.85,sR:.85,title:'NECK CRACKER?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CRACKED YOUR','NECK DAILY?']);
