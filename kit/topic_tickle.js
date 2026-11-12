// ===== HOWCOME? (night Short) | What If You Tried to Tickle Yourself? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'handIc',at:0.1,x:.3,y:.45,s:.6},{ic:'burst',at:'tickle#1',x:.72,y:.4,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'happy'},title:{t:'TICKLE, TICKLE!',at:0.1,fill:'#E8505B'},bot:{t:'CAN YOU TICKLE YOURSELF?',at:'yourself'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'handIc',at:2.6,x:.35,y:.45,s:.6},{ic:'brain',at:3.4,x:.7,y:.45,s:.55}],title:{t:'TRY IT RIGHT NOW!',at:2.5},bot:{t:'...NOTHING, RIGHT?',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'brain',at:'brain',x:.3,y:.45,s:.6},{ic:'handIc',at:'touch',x:.72,y:.45,s:.5}],title:{t:'YOUR BRAIN SEES IT COMING',at:'brain',fill:'#FF8A8A'},bot:{t:'NO SURPRISE = NO TICKLE',at:'surprise#1',bg:'#9C7BE0'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'brain',at:.5,x:.5,y:.45,s:.7}],title:{t:'THE PREDICTION TRICK',at:.2},card:{lines:['Your brain cancels out','touches it expects'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'robot',items:[{ic:'robot',at:'robot',x:.3,y:.45,s:.5},{ic:'clock',at:'delay',x:.72,y:.45,s:.5}],sub:{t:'A ROBOT ADDED A TINY DELAY',at:'delay',bg:'#5B6C8F'},bot:{t:'SELF TICKLING WORKED!',at:'worked',bg:'#3BB273'},src:'Source: Blakemore et al., J Cognitive Neuroscience (1999)'}),
 sil_twist:CHECKS({title:'TICKLE FACTS',items:['YOU CAN\'T TICKLE YOU','BRAIN PREDICTS IT','SURPRISE IS THE KEY','A DELAY FOOLS IT']}),
 cta:VSCTA({L:'SUPER TICKLISH',R:'NOT AT ALL',icL:'burst',icR:'check',cl:'#E8505B',cr:'#3BB273',atL:'super',atR:'ticklish',atV:'are',sL:.45,sR:.45,title:'ARE YOU TICKLISH?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','TICKLED','YOURSELF?']);
