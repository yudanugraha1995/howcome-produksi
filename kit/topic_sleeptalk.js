// ===== HOWCOME? (night Short) | What If You Talked in Your Sleep? =====
const B={
 hook:SCN({bg:'night',items:[{ic:'bed',at:0.1,x:.3,y:.55,s:1},{ic:'zzz',at:.5,x:.3,y:.2,s:.5},{ic:'speech',at:'mumble',x:.72,y:.4,s:.6}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},
   title:{t:'MUMBLE, MUMBLE...',at:0.1,fill:'#FFE27A'},bot:{t:'TALKING IN YOUR SLEEP?',at:'talked'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'moon',at:2.6,x:.3,y:.4,s:.6},{ic:'speech',at:3.4,x:.72,y:.45,s:.6}],
   title:{t:'WHY DO WE SLEEP TALK?',at:2.5},bot:{t:'LET\'S LISTEN IN',at:5}}),
 point2:SCN({bg:'sand',extra:(t,t0,t1,T)=>{let s='';for(let i=0;i<3;i++){const k=popS(t,T('two')+i*.15,.35);if(k<=0)continue;s+=`<g transform="${tr(PX(.2+i*.3),PY(.45),k*.7)}"><circle cy="-60" r="50" fill="#F6D2B8" stroke="${OL}" stroke-width="6"/><rect x="-55" y="-10" width="110" height="130" rx="40" fill="${i<2?'#9C7BE0':'#CDD6DE'}" stroke="${OL}" stroke-width="6"/></g>`;}return s;},
   title:{t:'2 IN 3 PEOPLE DO IT',at:'two',fill:OL},bot:{t:'USUALLY HARMLESS',at:'harmless',bg:'#3BB273'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'bed',at:.5,x:.5,y:.55,s:1},{ic:'check',at:1.5,x:.5,y:.2,s:.5}],
   title:{t:'NOTHING TO WORRY ABOUT',at:.2},card:{lines:['Most sleep talk is short','and makes no sense'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'scientists',items:[{ic:'speech',at:'no',x:.3,y:.45,s:.6},{ic:'warn',at:'swore',x:.72,y:.45,s:.5}],
   sub:{t:'#1 WORD: "NO"',at:'no',bg:'#E5383B'},bot:{t:'MORE SWEARING THAN AWAKE!',at:'swore',bg:'#9C7BE0'},src:'Source: Arnulf et al., Sleep (2017)'}),
 sil_twist:CHECKS({title:'SLEEP TALK FACTS',items:['2 IN 3 PEOPLE','USUALLY HARMLESS','TOP WORD: "NO"','LOTS OF SWEARING']}),
 cta:VSCTA({L:'I DO!',R:'NEVER',icL:'speech',icR:'zzz',cl:'#9C7BE0',cr:'#3BB273',atL:'talk',atR:'sleep',atV:'do',sL:.4,sR:.5,title:'DO YOU?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','TALKED IN','YOUR SLEEP?']);
