// ===== HOWCOME? (noon Short) | What If You Slept Next to Your Phone Every Night? =====
const B={
 hook:SCN({bg:'night',items:[{ic:'pillow',at:0.1,x:.3,y:.5,s:.6},{ic:'phone',at:'phone',x:.3,y:.3,s:.35},{ic:'moon',at:'night',x:.75,y:.3,s:.45}],komo:{x:.85,y:1.1,s:.5,expr:'surprised'},title:{t:'PHONE ON YOUR PILLOW?',at:0.1,fill:'#FFE27A'},bot:{t:'EVERY SINGLE NIGHT?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'phone',at:2.6,x:.35,y:.45,s:.5},{ic:'brain',at:3.4,x:.7,y:.45,s:.55}],title:{t:'WHAT DOES IT DO TO SLEEP?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'phone',at:'screens',x:.3,y:.45,s:.45},{ic:'sun',at:'daytime',x:.72,y:.4,s:.45}],title:{t:'SCREEN = "IT\'S DAYTIME!"',at:'screens',fill:'#FF8A8A'},sub:{t:'LESS SLEEP HORMONE',at:'hormone',bg:'#9C7BE0'},bot:{t:'SLOWER TO FALL ASLEEP',at:'slower',bg:'#E5383B'},src:'Source: Chang et al., PNAS (2015)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'phone',at:.5,x:.3,y:.45,s:.45},{ic:'x',at:1.3,x:.3,y:.2,s:.35},{ic:'bed',at:1.8,x:.72,y:.55,s:.9}],title:{t:'SCREENS OFF BEFORE BED',at:.2},card:{lines:['Bright light at night','delays your body clock'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'even',items:[{ic:'phone',at:'silent',x:.3,y:.45,s:.45},{ic:'bell',at:'check',x:.72,y:.42,s:.45}],sub:{t:'EVEN ON SILENT...',at:'silent',bg:'#5B6C8F'},bot:{t:'IT TEMPTS YOU TO CHECK',at:'tempts',bg:'#E5383B'}}),
 sil_twist:CHECKS({title:'BETTER SLEEP TIPS',items:['PHONE FAR AWAY','NO SCREENS IN BED','USE A REAL ALARM','DARK, QUIET ROOM']}),
 cta:VSCTA({L:'ON MY PILLOW',R:'ACROSS THE ROOM',icL:'phone',icR:'check',cl:'#E8505B',cr:'#3BB273',atL:'where',atR:'sleep',atV:'phone',sL:.4,sR:.45,title:'WHERE IS YOUR PHONE?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT NEXT TO','YOUR PHONE?']);
