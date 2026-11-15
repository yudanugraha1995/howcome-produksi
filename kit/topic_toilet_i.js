const B={
 hook:SCN({bg:'bathroom',items:[{ic:'phone',at:'scrolled',x:.24,y:0.24,s:.5,r:-6},{ic:'toilet',at:'toilet',x:.24,y:0.44,s:.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},title:{t:'PHONE ON THE TOILET?',at:0.1},kw:[['EVERY DAY?','day','#FFE27A']]}),
 sil_hook:SCN({bg:'bathroom',items:[{ic:'clock',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['5 MORE MINUTES...',.2]],push:false}),
 point:SCN({bg:'bathroom',items:[{ic:'clock',at:'longer',x:.24,y:0.24,s:.42},{ic:'warn',at:'pressure',x:.24,y:0.44,s:.42},{ic:'heart',at:'veins',x:.24,y:0.64,s:.38}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},labels:[{t:'TOO LONG = PRESSURE',at:'pressure',x:.5,y:.12,bg:'#E5383B'}],kw:[['HEMORRHOIDS!','hemorrhoids','#FF8A8A']],src:'Source: Harvard Health Publishing; Cleveland Clinic'}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'warn',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['OUCH!',.2,'#FF8A8A']],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'phone',at:'phone',x:.24,y:0.24,s:.45},{ic:'germ',at:'germs',x:.24,y:0.44,s:.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},labels:[{t:'GERMY PHONE',at:'germs',x:.5,y:.12,bg:'#5B8FD9'}],kw:[['GERMS!','germs','#7BE07B']]}),
 sil_point2:SCN({bg:'bathroom',items:[{ic:'soap',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['LEAVE IT OUTSIDE!',.2]],push:false}),
 cta:VSCTA({L:'PHONE COMES',R:'NO PHONE',icL:'phone',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'bring',atR:'comments',atV:'phone',sL:.85,sR:.85,title:'PHONE IN THE BATHROOM?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','SCROLLED ON','THE TOILET?']);
