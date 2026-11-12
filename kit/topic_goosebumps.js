// ===== HOWCOME? (night Short) | What If You Got Goosebumps Every Day? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'handIc',at:0.1,x:.3,y:.45,s:.6},{ic:'snow',at:'brr',x:.72,y:.35,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},title:{t:'BRR! GOOSEBUMPS!',at:0.1,fill:'#1C5D99'},bot:{t:'EVERY SINGLE DAY?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'hairCell',at:2.6,x:.5,y:.5,s:1.2}],title:{t:'WHAT IS A GOOSEBUMP?',at:2.5},bot:{t:'LET\'S ZOOM IN',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'hairCell',at:'muscle',x:.3,y:.5,s:.9},{ic:'dog',at:'furry',x:.72,y:.45,s:.5}],title:{t:'A TINY MUSCLE PULLS A HAIR',at:'muscle',fill:'#FF8A8A'},bot:{t:'FUR PUFFED UP = WARMER',at:'puffed',bg:'#F28C38'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'snow',at:.5,x:.3,y:.4,s:.6},{ic:'burst',at:1.5,x:.72,y:.4,s:.6}],title:{t:'COLD OR SCARED?',at:.2},card:{lines:['Both can switch on','those tiny muscles'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'mice',items:[{ic:'hairCell',at:'mice',x:.3,y:.5,s:.8},{ic:'headphones',at:'song',x:.72,y:.45,s:.5}],sub:{t:'THEY HELP HAIR GROW (IN MICE)',at:'wake',bg:'#3BB273'},bot:{t:'MUSIC CHILLS ARE REAL',at:'song',bg:'#9C7BE0'},src:'Source: Shwartz et al., Cell (2020)'}),
 sil_twist:CHECKS({title:'GOOSEBUMP FACTS',items:['TINY HAIR MUSCLES','FURRY ANCESTORS','HAIR GROWTH (MICE)','GREAT SONGS DO IT']}),
 cta:VSCTA({L:'COLD',R:'MUSIC',icL:'snow',icR:'headphones',cl:'#5EC8FF',cr:'#9C7BE0',atL:'gives',atR:'goosebumps',atV:'what',sL:.5,sR:.45,title:'WHAT GIVES YOU CHILLS?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','GOT GOOSEBUMPS','EVERY DAY?']);
