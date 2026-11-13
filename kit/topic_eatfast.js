const B={
 hook:SCN({bg:'sand',items:[{ic:'noodles',at:0.1,x:.3,y:.45,s:.5},{ic:'clock',at:'three',x:.72,y:.45,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},title:{t:'PLATE EMPTY IN 3 MINUTES!',at:0.1,fill:OL},bot:{t:'EVERY SINGLE DAY?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'stomach',at:2.6,x:.35,y:.45,s:.5},{ic:'brain',at:3.4,x:.7,y:.45,s:.5}],title:{t:'WHY SPEED MATTERS',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'stomach',at:.2,x:.3,y:.45,s:.5},{ic:'clock',at:'twenty',x:.72,y:.45,s:.5}],title:{t:'"FULL" TAKES ~20 MINUTES',at:'twenty',fill:'#FF8A8A'},sub:{t:'FAST = EAT TOO MUCH',at:'keep',bg:'#E5383B'},bot:{t:'LINKED TO WEIGHT GAIN',at:'weight',bg:'#9C7BE0'},src:'Source: Ohkuma et al., Int J Obesity (2015)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'stomach',at:.5,x:.3,y:.45,s:.5},{ic:'brain',at:1.4,x:.72,y:.45,s:.5}],title:{t:'THE "I\'M FULL" SIGNAL',at:.2},card:{lines:['Your gut talks to your brain,','but slowly'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'putting',items:[{ic:'fork',at:'fork',x:.3,y:.45,s:.5},{ic:'check',at:'full',x:.72,y:.45,s:.5}],sub:{t:'FORK DOWN BETWEEN BITES',at:'fork',bg:'#3BB273'},bot:{t:'FEEL FULL SOONER',at:'full',bg:'#5EC8FF',fill:OL}}),
 sil_twist:CHECKS({title:'SLOW EATING TIPS',items:['FORK DOWN OFTEN','CHEW MORE','NO PHONE AT MEALS','GIVE IT 20 MIN']}),
 cta:VSCTA({L:'FAST EATER',R:'SLOW EATER',icL:'clock',icR:'fork',cl:'#E8505B',cr:'#3BB273',atL:'fast',atR:'slow',atV:'or',sL:.45,sR:.45,title:'WHICH ONE ARE YOU?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE SUPER FAST','EVERY DAY?']);
