const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'pillow',at:'slept',x:.24,y:0.24,s:.5},{ic:'moon',at:'stomach',x:.24,y:0.44,s:.42}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},title:{t:'FACE DOWN?!',at:0.1},kw:[['EVERY NIGHT?','night','#FFE27A']]}),
 sil_hook:SCN({bg:'bedroom',items:[{ic:'zzz',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['GOOD OR BAD?',.2]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'warn',at:'twisted',x:.24,y:0.24,s:.42},{ic:'clock',at:'hours',x:.24,y:0.44,s:.42},{ic:'burst',at:'sags',x:.24,y:0.64,s:.4}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},labels:[{t:'NECK TWISTED FOR HOURS',at:'twisted',x:.5,y:.12,bg:'#E5383B'}],kw:[['BACK PAIN!','pain','#FF8A8A']],src:'Source: Cleveland Clinic, sleep positions'}),
 sil_point:SCN({bg:'office',items:[{ic:'warn',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['OUCH!',.2,'#FF8A8A']],push:false}),
 point2:SCN({bg:'bedroomnight',chapter:['PLOT TWIST!'],chapterEnd:'help',items:[{ic:'zzz',at:'snore',x:.24,y:0.24,s:.45},{ic:'check',at:'less',x:.24,y:0.44,s:.45}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},labels:[{t:'LESS SNORING',at:'snore',x:.5,y:.12,bg:'#3BB273'}],kw:[['SNORE LESS!','less','#7BE07B']],src:'Source: Sleep Foundation'}),
 sil_point2:SCN({bg:'park',items:[{ic:'pillow',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['YOUR POSITION?',.2]],push:false}),
 cta:VSCTA({L:'STOMACH',R:'BACK / SIDE',icL:'pillow',icR:'zzz',cl:'#F4C542',cr:'#3B4A8A',atL:'stomach',atR:'below',atV:'sleeper',sL:.85,sR:.85,title:'STOMACH SLEEPER?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SLEPT ON YOUR','STOMACH?']);
