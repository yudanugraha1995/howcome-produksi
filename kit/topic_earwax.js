// ===== HOWCOME? (night Short) | What If You Never Cleaned Your Ears? =====
const B={
 hook:SCN({bg:'sand',items:[{ic:'ear',at:0.1,x:.3,y:.45,s:.6},{ic:'swab',at:'cleaned',x:.72,y:.45,s:.6}],komo:{x:.88,y:1.1,s:.5,expr:'think'},title:{t:'EAR WAX. GROSS?',at:0.1,fill:OL},bot:{t:'NEVER CLEAN YOUR EARS?',at:'never'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'ear',at:2.6,x:.5,y:.45,s:.8}],title:{t:'WHAT IS EAR WAX FOR?',at:2.5},bot:{t:'LET\'S LOOK INSIDE',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'ear',at:.2,x:.3,y:.45,s:.55},{ic:'mouthYawn',at:'chew',x:.72,y:.45,s:.45},{ic:'swab',at:'cotton',x:.5,y:.85,s:.5},{ic:'x',at:'deeper',x:.5,y:.7,s:.35}],title:{t:'EARS CLEAN THEMSELVES',at:'ears',fill:'#FF8A8A'},sub:{t:'CHEW + TALK = WAX MOVES OUT',at:'chew',bg:'#3BB273'}}),
 sil_point2:SCN({bg:'sky',items:[{ic:'swab',at:.5,x:.5,y:.4,s:.7},{ic:'x',at:1.3,x:.5,y:.2,s:.45}],title:{t:'SKIP THE COTTON SWABS',at:.2},card:{lines:['They can push the wax','deeper into your ear'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'wet',items:[{ic:'drop',at:'wet',x:.3,y:.45,s:.45},{ic:'dna',at:'gene',x:.72,y:.45,s:.5}],sub:{t:'WET OR DRY = ONE GENE',at:'gene',bg:'#9C7BE0'},bot:{t:'EAST ASIA: MOSTLY DRY',at:'asia',bg:'#F28C38'},src:'Source: Yoshiura et al., Nature Genetics (2006)'}),
 sil_twist:CHECKS({title:'EAR WAX FACTS',items:['IT PROTECTS EARS','MOVES OUT ITSELF','SWABS PUSH IT IN','WET OR DRY: ONE GENE']}),
 cta:VSCTA({L:'WET',R:'DRY',icL:'drop',icR:'ear',cl:'#F28C38',cr:'#5EC8FF',atL:'wet',atR:'dry',atV:'or',sL:.45,sR:.45,title:'WET OR DRY?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER CLEANED','YOUR EARS?']);
