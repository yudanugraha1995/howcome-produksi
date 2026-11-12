// ===== HOWCOME? (night Short) | What If You Had No Fingerprints? =====
const B={
 hook:SCN({bg:'sky',items:[{ic:'fingerprint',at:0.1,x:.3,y:.45,s:.6},{ic:'x',at:'disappeared',x:.3,y:.2,s:.4}],komo:{x:.88,y:1.1,s:.5,expr:'surprised'},title:{t:'LOOK AT YOUR FINGERTIPS',at:0.1,fill:OL},bot:{t:'WHAT IF THEY DISAPPEARED?',at:'disappeared'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'fingerprint',at:2.6,x:.5,y:.45,s:.8}],title:{t:'WHY DO WE HAVE THEM?',at:2.5},bot:{t:'LET\'S TAKE A CLOSER LOOK',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'fingerprint',at:.2,x:.3,y:.45,s:.5},{ic:'dna',at:'gene',x:.72,y:.45,s:.5}],title:{t:'SOME ARE BORN WITHOUT',at:'born',fill:'#FF8A8A'},sub:{t:'A VERY RARE GENE CHANGE',at:'rare',bg:'#9C7BE0'},bot:{t:'GRIP + FEEL TEXTURES',at:'grip',bg:'#3BB273'},src:'Source: Nousbeck et al., Am J Hum Genet (2011)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'fingerprint',at:.5,x:.3,y:.45,s:.5},{ic:'phone',at:1.5,x:.72,y:.45,s:.5}],title:{t:'NO PRINTS = NO PHONE UNLOCK',at:.2},card:{lines:['Every fingerprint','is unique'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'koalas',items:[{ic:'koala',at:'koalas',x:.3,y:.45,s:.5},{ic:'fingerprint',at:'ours',x:.72,y:.45,s:.45}],sub:{t:'KOALAS HAVE FINGERPRINTS!',at:'fingerprints',bg:'#5B6C8F'},bot:{t:'THEY COULD FOOL AN EXPERT',at:'fool',bg:'#E5383B'},src:'Source: Henneberg et al., Nature (1996)'}),
 sil_twist:CHECKS({title:'FINGERPRINT FACTS',items:['EVERY PRINT UNIQUE','HELP GRIP + FEEL','RARE: NONE AT ALL','KOALAS HAVE THEM']}),
 cta:VSCTA({L:'LOOPS',R:'WHIRLS',icL:'fingerprint',icR:'fingerprint',cl:'#9C7BE0',cr:'#F28C38',atL:'loops',atR:'whirls',atV:'check',sL:.4,sR:.4,title:'CHECK YOUR FINGERS!'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','HAD NO','FINGERPRINTS?']);
