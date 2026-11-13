const B={
 hook:SCN({bg:'night',items:[{ic:'bed',at:0.1,x:.3,y:.55,s:1},{ic:'cloud',at:'dream',x:.72,y:.35,s:.45}],komo:{x:.88,y:1.1,s:.5,expr:'think',at2:'remembered',expr2:'surprised'},title:{t:'A WILD DREAM... GONE!',at:0.1,fill:'#FFE27A'},bot:{t:'REMEMBER EVERY DREAM?',at:'remembered'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'brain',at:2.6,x:.35,y:.45,s:.55},{ic:'cloud',at:3.4,x:.7,y:.4,s:.45}],title:{t:'WHERE DO DREAMS GO?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'moon',at:.2,x:.3,y:.45,s:.45},{ic:'brain',at:'brain',x:.72,y:.45,s:.5}],title:{t:'SEVERAL DREAMS A NIGHT',at:'several',fill:'#FF8A8A'},sub:{t:'MOSTLY IN REM SLEEP',at:'rem',bg:'#9C7BE0'},bot:{t:'FORGOTTEN IN MINUTES',at:'forgets',bg:'#5B6C8F'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'calendar',at:.5,x:.3,y:.45,s:.45},{ic:'check',at:1.4,x:.72,y:.45,s:.5}],title:{t:'TRY A DREAM JOURNAL',at:.2},card:{lines:['Write it down','right after waking'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'people',items:[{ic:'ear',at:'sounds',x:.25,y:.45,s:.4},{ic:'nose',at:'smells',x:.5,y:.45,s:.4},{ic:'handIc',at:'touch',x:.75,y:.45,s:.4}],sub:{t:'BORN BLIND = STILL DREAM',at:'blind',bg:'#5B6C8F'},bot:{t:'SOUNDS, SMELLS, TOUCH',at:'sounds',bg:'#9C7BE0'}}),
 sil_twist:CHECKS({title:'DREAM FACTS',items:['DREAMS EVERY NIGHT','MOSTLY IN REM','FORGOTTEN FAST','BLIND PEOPLE TOO']}),
 cta:VSCTA({L:'I REMEMBER',R:'ALL GONE',icL:'cloud',icR:'x',cl:'#9C7BE0',cr:'#5B6C8F',atL:'weirdest',atR:'dream',atV:'your',sL:.4,sR:.45,title:'WEIRDEST DREAM?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','REMEMBERED','EVERY DREAM?']);
