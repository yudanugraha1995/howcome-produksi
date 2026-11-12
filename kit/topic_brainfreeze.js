// ===== HOWCOME? (night Short) | What If You Got Brain Freeze Every Time? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'icecream',at:0.1,x:.3,y:.45,s:.6},{ic:'brain',at:'what',x:.72,y:.45,s:.5},{ic:'snow',at:'freeze',x:.72,y:.2,s:.35}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},title:{t:'OW! BRAIN FREEZE!',at:0.1,fill:'#1C5D99'},bot:{t:'EVERY SINGLE TIME?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'icecream',at:2.6,x:.35,y:.45,s:.6},{ic:'brain',at:3.4,x:.7,y:.45,s:.55}],title:{t:'WHY DOES IT HURT?',at:2.5},bot:{t:'LET\'S CHILL AND SEE',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'snow',at:'cold',x:.3,y:.45,s:.5},{ic:'heart',at:'blood',x:.72,y:.45,s:.5,bob:1}],title:{t:'COLD ROOF OF YOUR MOUTH',at:'cold',fill:'#9FD8F5'},sub:{t:'BLOOD VESSELS WIDEN FAST',at:'widen',bg:'#E5383B'},bot:{t:'= SHARP HEADACHE',at:'headache',bg:'#9C7BE0'},src:'Source: Serrador et al., FASEB J (2012)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'clock',at:.5,x:.5,y:.45,s:.6}],title:{t:'USUALLY UNDER A MINUTE',at:.2},card:{lines:['It hurts fast','and leaves fast'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'quick',items:[{ic:'mouthYawn',at:'tongue',x:.3,y:.45,s:.5},{ic:'check',at:'fades',x:.72,y:.45,s:.5}],sub:{t:'TONGUE ON THE ROOF OF YOUR MOUTH',at:'press',bg:'#3BB273'},bot:{t:'WARMS IT UP = PAIN FADES',at:'warm',bg:'#F28C38'}}),
 sil_twist:CHECKS({title:'BRAIN FREEZE FIX',items:['EAT COLD SLOWER','TONGUE TO THE ROOF','SIP SOMETHING WARM','WAIT A FEW SECONDS']}),
 cta:VSCTA({L:'FAST',R:'SLOW',icL:'icecream',icR:'clock',cl:'#E8505B',cr:'#3BB273',atL:'fast',atR:'slow',atV:'ice',sL:.45,sR:.45,title:'HOW DO YOU EAT IT?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','GOT BRAIN FREEZE','EVERY TIME?']);
