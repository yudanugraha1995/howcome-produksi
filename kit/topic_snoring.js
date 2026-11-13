const B={
 hook:SCN({bg:'night',items:[{ic:'bed',at:0.1,x:.3,y:.55,s:1},{ic:'zzz',at:'snore',x:.3,y:.2,s:.7},{ic:'burst',at:'snore',x:.72,y:.4,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},title:{t:'ZZZ... SNORE!',at:0.1,fill:'#FFE27A'},bot:{t:'JUST NOISE OR A WARNING?',at:'warning'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'nose',at:2.6,x:.35,y:.45,s:.5},{ic:'lungs',at:3.4,x:.7,y:.45,s:.5}],title:{t:'WHY DO WE SNORE?',at:2.5},bot:{t:'LET\'S LISTEN',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'nose',at:.2,x:.3,y:.45,s:.45},{ic:'warn',at:'apnea',x:.72,y:.45,s:.5}],title:{t:'SHAKING THROAT TISSUE',at:'shaking',fill:'#FF8A8A'},sub:{t:'GASPS + PAUSES?',at:'gasps',bg:'#E5383B'},bot:{t:'COULD BE SLEEP APNEA',at:'apnea',bg:'#9C7BE0'},src:'Source: American Academy of Sleep Medicine'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'hospital',at:.5,x:.5,y:.45,s:.55}],title:{t:'WHEN TO SEE A DOCTOR',at:.2},card:{lines:['Loud snoring, gasping,','or sleepy all day'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'some',items:[{ic:'volume',at:'ninety',x:.3,y:.45,s:.55},{ic:'burst',at:'mower',x:.72,y:.42,s:.5}],sub:{t:'90+ DECIBELS!',at:'ninety',bg:'#E5383B'},bot:{t:'AS LOUD AS A LAWN MOWER',at:'mower',bg:'#F28C38'}}),
 sil_twist:CHECKS({title:'SNORING TIPS',items:['SLEEP ON YOUR SIDE','LIMIT LATE ALCOHOL','GASPING? SEE A DOC','KEEP NOSE CLEAR']}),
 cta:VSCTA({L:'I SNORE',R:'NOT ME!',icL:'volume',icR:'zzz',cl:'#E8505B',cr:'#3BB273',atL:'snore',atR:'snore',atV:'do',sL:.45,sR:.5,title:'DO YOU SNORE?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SNORED EVERY','NIGHT?']);
