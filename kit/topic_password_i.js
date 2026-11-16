const B={
 hook:SCN({bg:'office',items:[{ic:'phone',at:'same',x:.24,y:0.24,s:0.50},{ic:'warn',at:'everywhere',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SAME PASSWORD?','password','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['123456...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'check',at:'two',x:.24,y:0.24,s:0.45},{ic:'phone',at:'people',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['2 IN 3 PEOPLE','three','#FF8A8A']],src:'Source: Google / Harris Poll (2019)'}),
 sil_point:SCN({bg:'citynight',items:[{ic:'robot',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HACKERS WAITING...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'robot',at:'hacked',x:.24,y:0.24,s:0.50},{ic:'warn',at:'accounts',x:.24,y:0.44,s:0.45},{ic:'check',at:'manager',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALL ACCOUNTS!','accounts','#FF8A8A'],['PASSKEYS','passkeys','#7BE07B']],labels:[{t:'ONE LEAK = ALL OPEN',at:'hacked',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'office',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CHANGE IT!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GUILTY',R:'UNIQUE',icL:'warn',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Guilty',atR:'comments',atV:'Tell',sL:.85,sR:.85,title:'GUILTY?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'USED ONE PASSWORD', 'EVERYWHERE?']);
