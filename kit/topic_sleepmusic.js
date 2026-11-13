const B={
 hook:SCN({bg:'night',items:[{ic:'headphones',at:0.1,x:.3,y:.45,s:.5},{ic:'note',at:'playlist',x:.72,y:.42,s:.45}],komo:{x:.88,y:1.1,s:.5,expr:'happy'},title:{t:'MUSIC TO FALL ASLEEP?',at:0.1,fill:'#FFE27A'},bot:{t:'EVERY SINGLE NIGHT?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'note',at:2.6,x:.35,y:.45,s:.45},{ic:'brain',at:3.4,x:.7,y:.45,s:.55}],title:{t:'GOOD OR BAD FOR SLEEP?',at:2.5},bot:{t:'LET\'S LISTEN IN',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'note',at:.2,x:.3,y:.45,s:.45},{ic:'brain',at:'heads',x:.72,y:.45,s:.5}],title:{t:'RELAXING... BUT',at:'relax',fill:'#FF8A8A'},sub:{t:'SONGS STUCK AT NIGHT',at:'stuck',bg:'#9C7BE0'},bot:{t:'= WORSE SLEEP',at:'worse',bg:'#E5383B'},src:'Source: Scullin et al., Psychological Science (2021)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'headphones',at:.5,x:.3,y:.45,s:.45},{ic:'clock',at:1.4,x:.72,y:.45,s:.5}],title:{t:'THE EARWORM EFFECT',at:.2},card:{lines:['Your brain keeps','replaying the tune'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'even',items:[{ic:'note',at:'calm',x:.3,y:.45,s:.45},{ic:'zzz',at:'earworms',x:.72,y:.35,s:.55}],sub:{t:'EVEN CALM SONGS',at:'calm',bg:'#5B6C8F'},bot:{t:'CAUSED NIGHT EARWORMS',at:'earworms',bg:'#9C7BE0'}}),
 sil_twist:CHECKS({title:'SLEEP SOUND TIPS',items:['MUSIC OFF IN BED','TRY QUIET OR NOISE','NO NEW SONGS LATE','RELAX BEFORE BED']}),
 cta:VSCTA({L:'MUSIC ON',R:'SILENCE',icL:'note',icR:'zzz',cl:'#9C7BE0',cr:'#5B6C8F',atL:'music',atR:'off',atV:'or',sL:.45,sR:.5,title:'YOUR PICK?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT TO MUSIC','EVERY NIGHT?']);
