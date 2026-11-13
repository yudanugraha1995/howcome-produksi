const B={
 hook:SCN({bg:'sand',items:[{ic:'bread',at:0.1,x:.35,y:.45,s:.55},{ic:'mold',at:'green',x:.4,y:.4,s:.8},{ic:'scissors',at:'cut',x:.75,y:.45,s:.45}],komo:{x:.9,y:1.1,s:.5,expr:'surprised'},title:{t:'A GREEN SPOT!',at:0.1,fill:'#3BB273'},bot:{t:'CUT IT OFF AND EAT?',at:'cut'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'bread',at:2.6,x:.5,y:.45,s:.55},{ic:'mold',at:3.2,x:.52,y:.4,s:.9}],title:{t:'IS IT SAFE?',at:2.5},bot:{t:'LET\'S LOOK CLOSER',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'bread',at:.2,x:.3,y:.45,s:.5},{ic:'mold',at:'roots',x:.32,y:.42,s:1},{ic:'x',at:'trash',x:.72,y:.45,s:.5}],title:{t:'MOLD HAS HIDDEN ROOTS',at:'roots',fill:'#7BC96F'},sub:{t:'DEEP INTO SOFT BREAD',at:'deep',bg:'#5B6C8F'},bot:{t:'SOFT FOOD + MOLD = TRASH',at:'trash',bg:'#E5383B'},src:'Source: USDA Food Safety'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'bread',at:.5,x:.3,y:.45,s:.45},{ic:'x',at:1.2,x:.3,y:.2,s:.35},{ic:'cheese',at:1.8,x:.72,y:.45,s:.45}],title:{t:'SOFT VS HARD FOODS',at:.2},card:{lines:['Hard cheese: cut 1 inch away','Soft bread: throw it out'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'some',items:[{ic:'cheese',at:'cheese',x:.3,y:.45,s:.5},{ic:'hospital',at:'penicillin',x:.72,y:.45,s:.45}],sub:{t:'BLUE CHEESE = GOOD MOLD',at:'cheese',bg:'#5B8FD9'},bot:{t:'PENICILLIN CAME FROM MOLD',at:'penicillin',bg:'#3BB273'}}),
 sil_twist:CHECKS({title:'MOLD RULES',items:['SOFT FOOD: TOSS IT','HARD CHEESE: CUT','DON\'T SNIFF IT','SOME MOLD IS GOOD']}),
 cta:VSCTA({L:'CUT IT OFF',R:'TOSS IT',icL:'scissors',icR:'x',cl:'#F28C38',cr:'#3BB273',atL:'cut',atR:'toss',atV:'or',sL:.45,sR:.45,title:'YOUR PICK?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','ATE MOLDY','BREAD?']);
