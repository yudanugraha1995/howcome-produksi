// ===== HOWCOME? (night Short) | What If You Swallowed a Watermelon Seed? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'watermelon',at:0.1,x:.3,y:.45,s:.65},{ic:'seed',at:'seed',x:.72,y:.45,s:.5},{ic:'sprout',at:'grew',x:.72,y:.15,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},
   title:{t:'OOPS! YOU SWALLOWED IT',at:0.1,fill:'#E8505B'},bot:{t:'A WATERMELON IN YOUR TUMMY?',at:'grew'}}),
 point2:SCN({bg:'plum',items:[{ic:'stomach',at:.2,x:.3,y:.45,s:.6},{ic:'seed',at:'seed',x:.72,y:.45,s:.4},{ic:'x',at:'soil',x:.72,y:.2,s:.4}],
   title:{t:'NO LIGHT, NO SOIL, JUST ACID',at:'dark',fill:'#FF8A8A'},bot:{t:'IT LEAVES IN A DAY OR SO',at:'leaves',bg:'#3BB273'}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'many',items:[{ic:'seed',at:'roasted',x:.3,y:.45,s:.45},{ic:'check',at:'protein',x:.72,y:.45,s:.5}],
   sub:{t:'ROASTED SEEDS = A SNACK',at:'snack',bg:'#F28C38'},bot:{t:'PACKED WITH PROTEIN',at:'protein',bg:'#3BB273'}}),
 cta:VSCTA({L:'SPIT IT OUT',R:'SWALLOW IT',icL:'x',icR:'seed',cl:'#E8505B',cr:'#3BB273',atL:'spit',atR:'swallow',atV:'do',sL:.45,sR:.45,title:'SPIT OR SWALLOW?'}),
 pad:(t0,t1,it)=>it.name==='pad_end'?OUTRO()(t0,t1):SCN({bg:'sky',items:[{ic:'seed',at:.2,x:.3,y:.45,s:.4},{ic:'check',at:.8,x:.72,y:.45,s:.5}],title:{t:'TOTALLY HARMLESS',at:.1}})(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SWALLOWED A','WATERMELON SEED?']);
