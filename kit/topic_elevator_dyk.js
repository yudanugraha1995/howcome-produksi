const B={
 hook:SCN({bg:'office',items:[{ic:'elevator',at:'elevators',x:.24,y:0.24,s:0.55},{ic:'mirror',at:'mirrors',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['WHY MIRRORS?','mirrors','#FFE27A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'elevator',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['DING!',.1]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'mirror',at:'check',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'hair',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['HAIR CHECK?','hair','#FFFFFF']]}),
 sil_point:SCN({bg:'office',items:[{ic:'clock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['WAITING...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'elevator',at:'spaces',x:.24,y:0.24,s:0.50},{ic:'clock',at:'wait',x:.24,y:0.44,s:0.45},{ic:'check',at:'wheelchair',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['FEELS BIGGER!','bigger','#7BE07B'],['SEE BEHIND!','behind','#9FD8F5']],labels:[{t:'WAIT FEELS SHORTER',at:'shorter',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: elevator industry & accessibility guides',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'office',items:[{ic:'mirror',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['SMART DESIGN!',.1]],push:false}),
 cta:VSCTA({L:'ALWAYS',R:'NEVER',icL:'mirror',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'check',atR:'Comment',atV:'mirror',sL:.85,sR:.85,title:'DO YOU CHECK THE MIRROR?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO', 'ELEVATORS HAVE', 'MIRRORS?']);
