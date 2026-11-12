// ===== HOWCOME? (night Short) | What If You Cried Every Day? =====
const B={
 hook:SCN({bg:'navy',items:[{ic:'tv',at:0.1,x:.3,y:.45,s:.55},{ic:'drop',at:'tears',x:.72,y:.45,s:.45}],komo:{x:.88,y:1.1,s:.5,expr:'think'},title:{t:'SAD MOVIE. TEARS!',at:0.1,fill:'#9FD8F5'},bot:{t:'CRY EVERY SINGLE DAY?',at:'cried'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'eye',at:2.6,x:.4,y:.45,s:.6},{ic:'drop',at:3.4,x:.7,y:.5,s:.4}],title:{t:'WHY DO WE CRY?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'eye',at:.2,x:.3,y:.45,s:.55},{ic:'heart',at:'emotional',x:.72,y:.45,s:.5}],title:{t:'TEARS ALL DAY, EVERY DAY',at:'tears',fill:'#9FD8F5'},sub:{t:'EMOTIONAL TEARS ARE DIFFERENT',at:'emotional',bg:'#9C7BE0'},bot:{t:'CRYING CAN CALM YOU DOWN',at:'calm',bg:'#3BB273'},src:'Source: Gračanin et al., Frontiers in Psychology (2014)'}),
 sil_point2:SCN({bg:'sky',extra:(t,t0)=>{let s='';['EVERYDAY TEARS','REFLEX TEARS','EMOTIONAL TEARS'].forEach((x,i)=>{const k=popS(t,t0+.6+i*1.2,.4);if(k>0)s+=label(x,{x:PX(.5),y:PY(.05+i*.22),size:isV?52:60,bg:['#5EC8FF','#F4C542','#9C7BE0'][i],fill:OL,sc:k,r:i%2?3:-3});});return s;},title:{t:'3 KINDS OF TEARS',at:.2},card:{lines:['Each kind has a','different job'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'onions',items:[{ic:'onion',at:'onions',x:.3,y:.45,s:.5},{ic:'eyeRed',at:'stings',x:.72,y:.45,s:.5}],sub:{t:'ONIONS RELEASE A STINGING GAS',at:'gas',bg:'#9C7BE0'},bot:{t:'TEARS FLUSH IT OUT',at:'flush',bg:'#3BB273'}}),
 sil_twist:CHECKS({title:'TEAR FACTS',items:['TEARS NONSTOP','3 KINDS OF TEARS','CRYING CALMS YOU','ONIONS USE A GAS']}),
 cta:VSCTA({L:'CRIED A LOT',R:'NOT ONE TEAR',icL:'drop',icR:'check',cl:'#5EC8FF',cr:'#3BB273',atL:'movie',atR:'cry',atV:'what',sL:.45,sR:.45,title:'WHICH MOVIE?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CRIED','EVERY DAY?']);
