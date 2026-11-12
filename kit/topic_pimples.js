// ===== HOWCOME? | What If You Popped Every Pimple? =====
const B={
 hook:SCN({bg:'sand',items:[{ic:'pimple',at:0.1,x:.3,y:.45,s:.6},{ic:'calendar',at:'party',x:.72,y:.45,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},title:{t:'POP IT OR NOT?',at:'what',fill:'#E8505B'},bot:{t:'THE DAY BEFORE A PARTY!',at:'party'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'pimple',at:2.6,x:.5,y:.45,s:.7}],title:{t:'WHAT\'S INSIDE A PIMPLE?',at:2.5},bot:{t:'LET\'S ZOOM IN',at:8}}),
 context:SCN({bg:'sky',items:[{ic:'phone',at:'videos',x:.5,y:.45,s:.6}],title:{t:'SO SATISFYING...',at:'satisfying',fill:OL},bot:{t:'MILLIONS OF VIEWS',at:'millions',bg:'#E8505B'}}),
 sil_context:SCN({bg:'sky',extra:(t,t0)=>{let s='';[0,1,2,3,4,5].forEach(i=>{const k=popS(t,t0+.6+i*.5,.35);if(k>0)s+=g(tr(PX(.12+(i%3)*.38),PY(.25+Math.floor(i/3)*.4),k*.35),IC.pimple(t));});return s;},title:{t:'ALMOST EVERYONE GETS THEM',at:.2},card:{lines:['Teens, adults,','even babies'],at:5}}),
 point1:SCN({bg:'plum',items:[{ic:'pimple',at:.3,x:.3,y:.45,s:.6},{ic:'germ',at:'bacteria',x:.72,y:.35,s:.45},{ic:'virus',at:'cells',x:.72,y:.65,s:.4}],title:{t:'OIL + DEAD SKIN + BACTERIA',at:'clogged',fill:'#FF8A8A'},bot:{t:'PUS = YOUR BODY FIGHTING',at:'pus',bg:'#9C7BE0'}}),
 sil_point1:SCN({bg:'navy',items:[{ic:'pimple',at:.6,x:.5,y:.45,s:.7}],extra:(t,t0)=>t>t0+2&&t<t0+5.7?bigText('A TINY BATTLEFIELD',PX(.5),PY(.85),isV?60:72,{fill:'#FFE27A',sw:8}):'',title:{t:'INSIDE THE PORE',at:.2},card:{lines:['White blood cells','rush in to help'],at:6}}),
 point2:SCN({bg:'sky',items:[{ic:'handIc',at:'squeeze',x:.25,y:.45,s:.5},{ic:'x',at:'deeper',x:.25,y:.18,s:.4},{ic:'patch',at:'patch',x:.72,y:.45,s:.5},{ic:'check',at:'alone',x:.72,y:.18,s:.4}],title:{t:'SQUEEZING PUSHES IT DEEPER',at:'squeeze',fill:'#E5383B'},sub:{t:'SWELLING · SCARS · DARK SPOTS',at:'swelling',bg:'#E5383B'},bot:{t:'HANDS OFF · WARM COMPRESS · PATCH',at:'alone',bg:'#3BB273'},src:'Source: American Academy of Dermatology'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'patch',at:.4,x:.3,y:.45,s:.5},{ic:'check',at:1,x:.72,y:.45,s:.5}],title:{t:'TRY A PIMPLE PATCH',at:.2},card:{lines:['Big and painful?','See a doctor'],at:IS_SHORT?.3:4}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'blackheads',items:[{ic:'pimple',at:'blackheads',x:.3,y:.45,s:.5},{ic:'apple',at:'apple',x:.72,y:.45,s:.5}],sub:{t:'BLACKHEADS AREN\'T DIRT',at:'dirt',bg:'#5B6C8F'},bot:{t:'OIL TURNS DARK IN AIR',at:'dark',bg:'#F28C38'}}),
 sil_twist:CHECKS({title:'CLEAR SKIN TIPS',items:['DON\'T SQUEEZE','PIMPLE PATCHES HELP','WASH GENTLY','BIG ONES: DOCTOR']}),
 cta:VSCTA({L:'POPPER',R:'HANDS OFF',icL:'handIc',icR:'patch',cl:'#E8505B',cr:'#3BB273',atL:'popper',atR:'hands',atV:'honest',sL:.45,sR:.45,title:'BE HONEST!'}),
 sil_outro:OUTRO(),
 pad:(t0,t1,it)=>it.name==='pad_end'?OUTRO()(t0,t1):B.sil_point2(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','POPPED EVERY','PIMPLE?']);
