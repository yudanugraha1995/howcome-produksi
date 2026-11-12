// ===== HOWCOME? | What If You Drank Ice-Cold Water Every Day? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'water',at:0.1,x:.3,y:.45,s:.7},{ic:'ice',at:'ice',x:.3,y:.15,s:.35},{ic:'warn',at:'grandma',x:.72,y:.45,s:.5}],komo:{x:.9,y:1.1,s:.5,expr:'surprised',at2:'right',expr2:'think'},title:{t:'ICE COLD WATER EVERY DAY?',at:'what',fill:'#1C5D99'},bot:{t:'"IT\'S BAD FOR YOU!"',at:'grandma'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'water',at:2.6,x:.35,y:.45,s:.6},{ic:'stomach',at:3.4,x:.7,y:.45,s:.55}],title:{t:'WHO\'S RIGHT?',at:2.5},bot:{t:'LET\'S CHECK THE SCIENCE',at:8}}),
 context:SCN({bg:'sand',extra:(t,t0,t1,T)=>{let s='';[['HURTS YOUR STOMACH?','stomach','#E8505B'],['SLOWS DIGESTION?','digestion','#F4C542'],['MAKES YOU SICK?','sick','#9C7BE0']].forEach(([l,w,c],i)=>{const k=popS(t,T(w),.45);if(k>0)s+=label(l,{x:PX(.5),y:PY(.12+i*.3),size:isV?46:56,bg:c,fill:OL,sc:k,r:i%2?3:-3});});return s;},title:{t:'THE OLD WARNINGS',at:.1,fill:OL}}),
 sil_context:SCN({bg:'sky',items:[{ic:'water',at:.6,x:.3,y:.45,s:.6},{ic:'check',at:1.4,x:.72,y:.45,s:.5}],title:{t:'MYTH OR FACT?',at:.2},card:{lines:['Heard all over Asia','and beyond'],at:5}}),
 point1:SCN({bg:'plum',items:[{ic:'stomach',at:.3,x:.3,y:.45,s:.6},{ic:'thermo',at:'temperature',x:.72,y:.45,s:.55}],title:{t:'WARMED UP IN MINUTES',at:'minutes',fill:'#FF8A8A'},bot:{t:'NO FROZEN FOOD IN YOUR BELLY',at:'freeze',bg:'#5EC8FF',fill:OL}}),
 sil_point1:SCN({bg:'navy',items:[{ic:'stomach',at:.6,x:.5,y:.45,s:.7}],extra:(t,t0)=>t>t0+2&&t<t0+5.7?bigText('37 °C INSIDE',PX(.5),PY(.85),isV?64:76,{fill:'#FFE27A',sw:8}):'',title:{t:'YOUR BODY IS A HEATER',at:.2},card:{lines:['It warms the water','to body temperature'],at:6}}),
 point2:SCN({bg:'sky',items:[{ic:'check',at:.3,x:.25,y:.45,s:.5},{ic:'brain',at:'headache',x:.72,y:.45,s:.55},{ic:'burst',at:'migraines',x:.86,y:.3,s:.35}],title:{t:'MOSTLY SAFE',at:'dangerous'},sub:{t:'NO PROOF IT SLOWS DIGESTION',at:'digestion',bg:'#3BB273'},bot:{t:'MIGRAINE? IT CAN TRIGGER ONE',at:'migraines',bg:'#E5383B'},src:'Source: Mattsson, Headache (2001)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'water',at:.4,x:.3,y:.45,s:.55},{ic:'clock',at:1,x:.72,y:.45,s:.5}],title:{t:'SIP, DON\'T CHUG',at:.2},card:{lines:['Sipping slowly helps','avoid brain freeze'],at:IS_SHORT?.3:4}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'hot',items:[{ic:'sun',at:'hot',x:.25,y:.3,s:.45},{ic:'bike',at:'cycling',x:.3,y:.55,s:.5},{ic:'water',at:'cold',x:.75,y:.45,s:.55}],sub:{t:'COLD DRINKS = LASTED LONGER',at:'longer',bg:'#3BB273'},bot:{t:'HEADACHES? SIP SLOWLY',at:'sip',bg:'#9C7BE0'},src:'Source: Lee & Shirreffs, Med Sci Sports Exerc (2008)'}),
 sil_twist:CHECKS({title:'ICE WATER RULES',items:['SAFE FOR MOST','GREAT ON HOT DAYS','MIGRAINES? GO SLOW','SIP, DON\'T CHUG']}),
 cta:VSCTA({L:'ICE COLD',R:'ROOM TEMP',icL:'ice',icR:'water',cl:'#5EC8FF',cr:'#F28C38',atL:'ice',atR:'room',atV:'team',sL:.5,sR:.5,title:'YOUR PICK?'}),
 sil_outro:OUTRO(),
 pad:(t0,t1,it)=>it.name==='pad_end'?OUTRO()(t0,t1):B.sil_point2(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','DRANK ICE COLD WATER','EVERY DAY?']);
