const B={
 hook:SCN({bg:'navy',items:[{ic:'shower',at:0.1,x:.3,y:.4,s:.7},{ic:'moon',at:'bed',x:.72,y:.35,s:.45}],komo:{x:.88,y:1.1,s:.5,expr:'happy'},title:{t:'WARM SHOWER BEFORE BED',at:0.1,fill:'#9FD8F5'},bot:{t:'EVERY NIGHT?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'shower',at:2.6,x:.35,y:.4,s:.6},{ic:'bed',at:3.4,x:.7,y:.55,s:.9}],title:{t:'DOES IT HELP YOU SLEEP?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'clock',at:'hours',x:.3,y:.45,s:.5},{ic:'zzz',at:'faster',x:.72,y:.35,s:.6}],title:{t:'1-2 HOURS BEFORE BED',at:'hours',fill:'#FF8A8A'},sub:{t:'~10 MIN FASTER TO SLEEP',at:'ten',bg:'#3BB273'},src:'Source: Haghayegh et al., Sleep Med Rev (2019)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'shower',at:.5,x:.3,y:.4,s:.55},{ic:'check',at:1.4,x:.72,y:.45,s:.5}],title:{t:'A BIG REVIEW OF STUDIES',at:.2},card:{lines:['Warm, not hot,','and not right in bed'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'warmth',items:[{ic:'thermo',at:'cooling',x:.3,y:.45,s:.5},{ic:'snow',at:'cooling',x:.72,y:.4,s:.45}],sub:{t:'THE COOL DOWN = SLEEPY',at:'cooling',bg:'#5EC8FF',fill:OL}}),
 sil_twist:CHECKS({title:'NIGHT SHOWER TIPS',items:['WARM, NOT HOT','1-2 H BEFORE BED','COOL ROOM AFTER','DIM THE LIGHTS']}),
 cta:VSCTA({L:'MORNING',R:'NIGHT',icL:'sun',icR:'moon',cl:'#F4C542',cr:'#5B6C8F',atL:'morning',atR:'night',atV:'or',sL:.45,sR:.45,title:'WHEN DO YOU SHOWER?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SHOWERED BEFORE','BED EVERY NIGHT?']);
