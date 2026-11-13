const B={
 hook:SCN({bg:'night',items:[{ic:'bed',at:0.1,x:.3,y:.55,s:1},{ic:'sock',at:'socks',x:.72,y:.42,s:.5}],komo:{x:.88,y:1.1,s:.5,expr:'think',at2:'weird',expr2:'surprised'},title:{t:'COLD FEET IN BED?',at:0.1,fill:'#9FD8F5'},bot:{t:'SOCKS EVERY NIGHT?',at:'socks'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[{ic:'sock',at:2.6,x:.35,y:.45,s:.5},{ic:'thermo',at:3.4,x:.7,y:.45,s:.5}],title:{t:'WARM FEET = BETTER SLEEP?',at:2.5},bot:{t:'LET\'S FIND OUT',at:5}}),
 point2:SCN({bg:'plum',items:[{ic:'sock',at:.2,x:.3,y:.45,s:.45},{ic:'thermo',at:'heat',x:.72,y:.45,s:.5}],title:{t:'WARM FEET RELEASE HEAT',at:'warm',fill:'#FF8A8A'},sub:{t:'COOLER BODY = SLEEP SOONER',at:'cooler',bg:'#5EC8FF',fill:OL},bot:{t:'SOCKS: FELL ASLEEP FASTER',at:'sock',bg:'#3BB273'},src:'Source: Ko & Lee, J Physiol Anthropol (2018)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'sock',at:.5,x:.3,y:.45,s:.45},{ic:'zzz',at:1.4,x:.72,y:.35,s:.6}],title:{t:'YOUR BODY\'S COOL DOWN',at:.2},card:{lines:['Your core temperature','drops before sleep'],at:4.5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'warm',items:[{ic:'sock',at:'feet',x:.3,y:.45,s:.45},{ic:'check',at:'signs',x:.72,y:.45,s:.5}],sub:{t:'WARM FEET = SLEEP IS COMING',at:'signs',bg:'#9C7BE0'},src:'Source: Kräuchi et al., Nature (1999)'}),
 sil_twist:CHECKS({title:'SOCK FACTS',items:['WARM FEET HELP','BODY COOLS DOWN','FALL ASLEEP FASTER','SOFT, CLEAN SOCKS']}),
 cta:VSCTA({L:'SOCKS ON',R:'BARE FEET',icL:'sock',icR:'bed',cl:'#E8505B',cr:'#5EC8FF',atL:'socks',atR:'bare',atV:'or',sL:.45,sR:.5,title:'YOUR PICK?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT IN SOCKS','EVERY NIGHT?']);
