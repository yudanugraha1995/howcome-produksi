const B={
 hook:SCN({bg:'night',items:[{ic:'bed',at:0.1,x:.3,y:.55,s:1},{ic:'dog',at:'dog',x:.72,y:.45,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'happy'},title:{t:'YOUR DOG TOOK YOUR SPOT!',at:0.1,fill:'#FFE27A'},bot:{t:'IN YOUR BED EVERY NIGHT?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'dog',at:2.6,x:.35,y:.45,s:.5},{ic:'zzz',at:3.4,x:.7,y:.35,s:.6}],title:{t:'GOOD OR BAD FOR SLEEP?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'dog',at:'dogs',x:.3,y:.45,s:.5},{ic:'bed',at:'bed',x:.72,y:.55,s:.9}],title:{t:'A REAL SLEEP STUDY',at:'study',fill:'#FF8A8A'},sub:{t:'BEDROOM = FINE',at:'fine',bg:'#3BB273'},bot:{t:'ON THE BED = WORSE SLEEP',at:'worse',bg:'#E5383B'},src:'Source: Patel et al., Mayo Clinic Proceedings (2017)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'dog',at:.5,x:.3,y:.45,s:.45},{ic:'bed',at:1.4,x:.72,y:.55,s:.9}],title:{t:'A PET BED NEXT TO YOURS',at:.2},card:{lines:['Pets move around','all night long'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'many',items:[{ic:'heart',at:'happier',x:.5,y:.4,s:.6,bob:1}],sub:{t:'HAPPIER WITH THEIR PET',at:'happier',bg:'#E8505B'}}),
 sil_twist:CHECKS({title:'PET SLEEP TIPS',items:['PET BED NEARBY','WALK BEFORE BED','CLEAN BEDDING','COMFORT COUNTS']}),
 cta:VSCTA({L:'PET IN BED',R:'OWN BED',icL:'dog',icR:'bed',cl:'#F28C38',cr:'#5EC8FF',atL:'pet',atR:'bed',atV:'does',sL:.45,sR:.7,title:'WHERE DOES IT SLEEP?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOUR PET','SLEPT IN YOUR BED','EVERY NIGHT?']);
