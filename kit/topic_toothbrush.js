const B={
 hook:SCN({bg:'sky',items:[{ic:'toilet',at:0.1,x:.3,y:.45,s:.6},{ic:'toothbrush',at:'toothbrush',x:.72,y:.4,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},title:{t:'TOOTHBRUSH BY THE TOILET?',at:0.1,fill:'#E8505B'},bot:{t:'EVERY SINGLE DAY?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'toilet',at:2.6,x:.35,y:.45,s:.55},{ic:'germ',at:3.4,x:.7,y:.4,s:.5}],title:{t:'WHAT\'S IN THE AIR?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'toilet',at:.2,x:.3,y:.45,s:.5},{ic:'drop',at:'droplets',x:.3,y:.15,s:.3},{ic:'germ',at:'germs',x:.72,y:.42,s:.5}],title:{t:'EVERY FLUSH = SPRAY',at:'flush',fill:'#FF8A8A'},sub:{t:'MOST BRUSHES HAD POOP GERMS',at:'most',bg:'#E5383B'},src:'Source: Aber et al., ASM meeting (2015)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'toilet',at:.5,x:.3,y:.45,s:.5},{ic:'check',at:1.4,x:.3,y:.18,s:.4}],title:{t:'CLOSE THE LID',at:.2},card:{lines:['Lid down before','you flush'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'closed',items:[{ic:'toothbrush',at:'case',x:.3,y:.45,s:.45},{ic:'x',at:'worse',x:.3,y:.2,s:.35},{ic:'check',at:'dry',x:.72,y:.45,s:.5}],sub:{t:'CLOSED CASE = STAYS WET',at:'wet',bg:'#E5383B'},bot:{t:'LET IT AIR DRY',at:'dry',bg:'#3BB273'},src:'Source: American Dental Association'}),
 sil_twist:CHECKS({title:'TOOTHBRUSH RULES',items:['LID DOWN, FLUSH','STAND IT UP','LET IT AIR DRY','NEW ONE: 3 MONTHS']}),
 cta:VSCTA({L:'BY THE SINK',R:'NEAR TOILET',icL:'toothbrush',icR:'toilet',cl:'#3BB273',cr:'#E8505B',atL:'where',atR:'toothbrush',atV:'where',sL:.4,sR:.45,title:'WHERE IS YOURS?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOUR','TOOTHBRUSH SAT','BY THE TOILET?']);
