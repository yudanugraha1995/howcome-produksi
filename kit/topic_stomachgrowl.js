// ===== HOWCOME? (night Short) | What If Your Stomach Growled All Day? =====
const B={
 hook:SCN({bg:'sand',items:[{ic:'stomach',at:0.1,x:.3,y:.45,s:.6},{ic:'burst',at:'grrrr',x:.72,y:.4,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},title:{t:'GRRRR!',at:0.1,fill:'#E8505B'},bot:{t:'ALL DAY LONG?',at:'all'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'stomach',at:2.6,x:.5,y:.45,s:.7}],title:{t:'WHAT IS THAT SOUND?',at:2.5},bot:{t:'LET\'S LISTEN',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'stomach',at:.2,x:.3,y:.45,s:.55},{ic:'clock',at:'hour',x:.72,y:.45,s:.5}],title:{t:'YOUR GUT SQUEEZING AIR',at:'squeezing',fill:'#FF8A8A'},sub:{t:'EMPTY = CLEANING WAVE',at:'cleaning',bg:'#3BB273'},bot:{t:'EVERY 1-2 HOURS',at:'hour',bg:'#F28C38'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'stomach',at:.5,x:.3,y:.45,s:.55},{ic:'check',at:1.5,x:.72,y:.45,s:.5}],title:{t:'IT\'S CALLED BORBORYGMI',at:.2},card:{lines:['A totally normal','gut noise'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'stomach',items:[{ic:'pizza',at:'full',x:.3,y:.45,s:.5},{ic:'stomach',at:'quieter',x:.72,y:.45,s:.5}],sub:{t:'IT GROWLS WHEN FULL TOO',at:'full',bg:'#E5383B'},bot:{t:'FOOD JUST MUFFLES IT',at:'quieter',bg:'#5B6C8F'}}),
 sil_twist:CHECKS({title:'TUMMY NOISE FACTS',items:['GUT MOVES AIR','LOUDER WHEN EMPTY','CLEANING WAVES','EVEN WHEN FULL']}),
 cta:VSCTA({L:'IN CLASS',R:'AT NIGHT',icL:'calendar',icR:'moon',cl:'#F28C38',cr:'#9C7BE0',atL:'when',atR:'loudest',atV:'growl',sL:.45,sR:.45,title:'WHEN IS IT LOUDEST?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOUR','STOMACH GROWLED','ALL DAY?']);
