// ===== HOWCOME? (night Short) | What If Your Hiccups Never Stopped? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'lungs',at:0.1,x:.3,y:.45,s:.6},{ic:'burst',at:'hic#1',x:.72,y:.4,s:.6}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},
   title:{t:'HIC! HIC! HIC!',at:0.1,fill:'#E8505B'},bot:{t:'WHAT IF THEY NEVER STOPPED?',at:'never'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'diaphragm',at:2.6,x:.5,y:.5,s:1}],
   title:{t:'WHAT IS A HICCUP?',at:2.5},bot:{t:'A SURPRISE MUSCLE JUMP',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'diaphragm',at:'diaphragm',x:.3,y:.5,s:.8},{ic:'calendar',at:'charles',x:.72,y:.45,s:.55}],
   title:{t:'DIAPHRAGM + VOCAL CORDS',at:'diaphragm',fill:'#FF8A8A'},sub:{t:'"HIC!" = CORDS SNAP SHUT',at:'snap',bg:'#9C7BE0'},bot:{t:'~68 YEARS OF HICCUPS!',at:'sixty',bg:'#E5383B'},src:'Source: Guinness World Records (Charles Osborne)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'trophy',at:.5,x:.5,y:.4,s:.8}],extra:(t,t0)=>t>t0+1.5?bigText('1922 → 1990',PX(.5),PY(.75),isV?80:90,{fill:OL}):'',
   title:{t:'THE WORLD RECORD',at:.2},card:{lines:['Charles Osborne hiccuped','for about 68 years'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'babies',items:[{ic:'baby',at:'babies',x:.5,y:.45,s:.7}],
   sub:{t:'BABIES HICCUP IN THE WOMB',at:'born',bg:'#F28C38'}}),
 sil_twist:CHECKS({title:'HICCUP FACTS',items:['IT\'S YOUR DIAPHRAGM','"HIC" = VOCAL CORDS','RECORD: ~68 YEARS','BABIES DO IT TOO']}),
 cta:VSCTA({L:'HOLD BREATH',R:'DRINK WATER',icL:'lungs',icR:'water',cl:'#9C7BE0',cr:'#5EC8FF',atL:'best',atR:'cure',atV:'what\'s',sL:.45,sR:.5,title:'BEST CURE?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOUR','HICCUPS NEVER','STOPPED?']);
