// ===== HOWCOME? (night Short) | What If You Never Cut Your Hair? =====
const B={
 hook:SCN({bg:'sand',items:[{ic:'scissors',at:0.1,x:.3,y:.45,s:.6},{ic:'x',at:'never',x:.3,y:.2,s:.4},{ic:'hairLong',at:'hair',x:.72,y:.45,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},
   title:{t:'NO HAIRCUT. EVER.',at:0.1,fill:OL},bot:{t:'HOW LONG WOULD IT GET?',at:'never'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'hairLong',at:2.6,x:.5,y:.45,s:.6}],
   title:{t:'HOW DOES HAIR GROW?',at:2.5},bot:{t:'LET\'S MEASURE IT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'calendar',at:'month',x:.3,y:.45,s:.55},{ic:'hairLong',at:'years',x:.72,y:.45,s:.45}],
   title:{t:'~1 CM A MONTH',at:'centimeter',fill:'#FF8A8A'},sub:{t:'EACH HAIR GROWS A FEW YEARS',at:'few',bg:'#9C7BE0'},bot:{t:'MOST STOP AROUND THE WAIST',at:'stops',bg:'#F28C38'}}),
 sil_point2:SCN({bg:'sky',extra:(t,t0)=>{let s='';['1 MONTH: 1 CM','1 YEAR: 12 CM','5 YEARS: 60 CM'].forEach((x,i)=>{const k=popS(t,t0+.6+i*1.2,.4);if(k>0)s+=label(x,{x:PX(.5),y:PY(.05+i*.22),size:isV?52:60,bg:['#5EC8FF','#F4C542','#3BB273'][i],fill:OL,sc:k,r:i%2?3:-3});});return s;},
   title:{t:'DO THE MATH',at:.2},card:{lines:['Then the hair falls out','and a new one starts'],at:5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'woman',items:[{ic:'hairLong',at:'woman',x:.3,y:.45,s:.5},{ic:'trophy',at:'record',x:.72,y:.45,s:.6}],
   sub:{t:'OVER 5 METERS LONG!',at:'five',bg:'#E5383B'},src:'Source: Guinness World Records (Xie Qiuping, 2004)'}),
 sil_twist:CHECKS({title:'HAIR FACTS',items:['~1 CM PER MONTH','GROWS A FEW YEARS','THEN FALLS OUT','RECORD: 5.6 METERS']}),
 cta:VSCTA({L:'LONG HAIR',R:'SHORT HAIR',icL:'hairLong',icR:'scissors',cl:'#9C7BE0',cr:'#F28C38',atL:'long',atR:'short',atV:'hair',sL:.35,sR:.5,title:'YOUR PICK?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER CUT','YOUR HAIR?']);
