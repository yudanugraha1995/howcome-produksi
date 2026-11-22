const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:0.24,s:0.50},{ic:'moon',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WHILE YOU SLEEP?','sleep','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'bed',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'bedroomnight',items:[{ic:'brain',at:'brain',x:.24,y:0.24,s:0.50},{ic:'zzz',at:'asleep',x:.24,y:0.44,s:0.45},{ic:'heart',at:'muscles',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BRAIN CLEANING','cleans','#9FD8F5'],['PARALYZED!','paralyzed','#FFFFFF'],['LIGHTER IN THE AM','lighter','#FFE27A']]}),
 sil_point:SCN({bg:'bedroomnight',items:[{ic:'brain',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'bedroomnight',items:[{ic:'thermo',at:'temperature',x:.24,y:0.24,s:0.50},{ic:'alarm',at:'drops',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['-1°C','degree','#FF8A8A'],['HYPNIC JERK','hypnic','#9FD8F5'],['TALLER!','taller','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'bedroomnight',items:[{ic:'thermo',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'YES, OFTEN',R:'NEVER',icL:'bed',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Have',atR:'Comment',atV:'Have',sL:.85,sR:.85,title:'FELT THE JERK?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['5 WEIRD THINGS','YOUR BODY DOES','WHILE YOU SLEEP']);
