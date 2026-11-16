const B={
 hook:SCN({bg:'office',items:[{ic:'money',at:'raise',x:.24,y:0.24,s:0.50},{ic:'warn',at:'less',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['LESS MONEY?!','less','#FF8A8A']]}),
 sil_hook:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['TAX BRACKET...',.1]],push:false}),
 point:SCN({bg:'office',items:[{ic:'note',at:'bracket',x:.24,y:0.24,s:0.45},{ic:'money',at:'income',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['ALL TAXED MORE?','taxes','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['MYTH!',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'check',at:'marginal',x:.24,y:0.24,s:0.45},{ic:'money',at:'extra',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MARGINAL!','marginal','#9FD8F5'],['ONLY EXTRA $','extra','#7BE07B']],labels:[{t:'A RAISE = MORE MONEY',at:'raise',x:.5,y:.12,bg:'#3BB273'}],src:'Source: IRS, federal income tax brackets'}),
 sil_point2:SCN({bg:'office',items:[{ic:'money',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['MYTH BUSTED!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'BELIEVED IT',R:'KNEW IT',icL:'x',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Did',atR:'Comment',atV:'believe',sL:.85,sR:.85,title:'DID YOU BELIEVE THIS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF A RAISE', 'MADE YOU EARN', 'LESS?']);
