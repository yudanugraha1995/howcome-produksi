const B={
 hook:SCN({bg:'livingroom',items:[{ic:'speaker',at:'speaker',x:.24,y:0.24,s:0.50},{ic:'ear',at:'listening',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['ALWAYS LISTENING?','listening','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'speaker',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['SHHH...',.1]],push:false}),
 point:SCN({bg:'livingroom',items:[{ic:'ear',at:'listen',x:.24,y:0.24,s:0.45},{ic:'speech',at:'wake',x:.24,y:0.44,s:0.45},{ic:'cloud',at:'cloud',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WAKE WORD ONLY','wake','#9FD8F5'],['SENT TO THE CLOUD','cloud','#FFFFFF']]}),
 sil_point:SCN({bg:'livingroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['OPEN THE APP...',.1]],push:false}),
 point2:SCN({bg:'livingroom',items:[{ic:'phone',at:'app',x:.24,y:0.24,s:0.50},{ic:'x',at:'delete',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['REVIEW + DELETE','delete','#7BE07B']],labels:[{t:'YOUR RECORDINGS',at:'recordings',x:.5,y:.12,bg:'#3B82C4'}]}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'check',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['YOU ARE IN CONTROL!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'I HAVE ONE',R:'NOPE',icL:'speaker',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'one',sL:.85,sR:.85,title:'DO YOU HAVE ONE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOUR', 'SMART SPEAKER', 'ALWAYS LISTENED?']);
