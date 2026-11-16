const B={
 hook:SCN({bg:'livingroom',items:[{ic:'phone',at:'text',x:.24,y:0.24,s:0.50},{ic:'warn',at:'link',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['CLICK IT?','link','#FFE27A']]}),
 sil_hook:SCN({bg:'livingroom',items:[{ic:'phone',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NEW MESSAGE...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'phone',at:'bank',x:.24,y:0.24,s:0.45},{ic:'note',at:'package',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['SCAM TEXTS','Scam','#FF8A8A']]}),
 sil_point:SCN({bg:'citynight',items:[{ic:'robot',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['ONE TAP...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'robot',at:'steal',x:.24,y:0.24,s:0.50},{ic:'lock',at:'passwords',x:.24,y:0.44,s:0.45},{ic:'x',at:'never',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['STOLEN!','steal','#FF8A8A'],['BANKS NEVER ASK','never','#7BE07B']],labels:[{t:'NO CODES BY TEXT',at:'code',x:.5,y:.12,bg:'#3BB273'}],src:'Source: FTC, how to spot text scams'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'lock',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['DO NOT CLICK!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'GOT ONE',R:'NEVER',icL:'phone',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Ever',atR:'Comment',atV:'these',sL:.85,sR:.85,title:'EVER GOT ONE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU', 'CLICKED EVERY', 'TEXT LINK?']);
