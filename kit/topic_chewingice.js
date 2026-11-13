const B={
 hook:SCN({bg:'sky',items:[{ic:'ice',at:0.1,x:.3,y:.45,s:.5},{ic:'tooth',at:'chewed',x:.72,y:.45,s:.45}],komo:{x:.9,y:1.1,s:.5,expr:'happy'},title:{t:'CRUNCH, CRUNCH!',at:0.1,fill:'#1C5D99'},bot:{t:'ICE EVERY SINGLE DAY?',at:'every'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'ice',at:2.6,x:.35,y:.45,s:.45},{ic:'tooth',at:3.4,x:.7,y:.45,s:.45}],title:{t:'IS IT BAD FOR YOU?',at:2.5},bot:{t:'LET\'S BITE INTO IT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'tooth',at:.2,x:.3,y:.45,s:.5},{ic:'crack',at:'crack',x:.3,y:.42,s:.8},{ic:'warn',at:'filling',x:.72,y:.45,s:.45}],title:{t:'TEETH AREN\'T BUILT FOR IT',at:'teeth',fill:'#FF8A8A'},sub:{t:'CRACKED ENAMEL',at:'crack',bg:'#E5383B'},bot:{t:'BROKEN FILLINGS',at:'filling',bg:'#9C7BE0'},src:'Source: American Dental Association'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'tooth',at:.5,x:.3,y:.45,s:.45},{ic:'water',at:1.4,x:.72,y:.45,s:.5}],title:{t:'LET IT MELT INSTEAD',at:.2},card:{lines:['Sip cold drinks,','don\'t crunch the cubes'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'strong',items:[{ic:'ice',at:'craving',x:.3,y:.45,s:.45},{ic:'drop',at:'iron',x:.72,y:.45,s:.4}],sub:{t:'ICE CRAVING = LOW IRON?',at:'iron',bg:'#E5383B'},bot:{t:'CAN\'T STOP? SEE A DOCTOR',at:'doctor',bg:'#3BB273'},src:'Source: Uchida & Kawati, Am J Med (2014)'}),
 sil_twist:CHECKS({title:'ICE FACTS',items:['CAN CRACK TEETH','LET IT MELT','CRAVING? CHECK IRON','SIP, DON\'T CRUNCH']}),
 cta:VSCTA({L:'ICE CHEWER',R:'NEVER',icL:'ice',icR:'check',cl:'#5EC8FF',cr:'#3BB273',atL:'ice',atR:'chewer',atV:'ice',sL:.45,sR:.45,title:'ARE YOU ONE?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','CHEWED ICE','EVERY DAY?']);
