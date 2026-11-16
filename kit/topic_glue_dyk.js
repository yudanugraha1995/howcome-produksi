const B={
 hook:SCN({bg:'classroom',items:[{ic:'glue',at:'glue',x:.24,y:0.24,s:0.55},{ic:'x',at:'stick',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO STICKING?','stick','#FFE27A']]}),
 sil_hook:SCN({bg:'classroom',items:[{ic:'glue',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['INSIDE THE BOTTLE...',.1]],push:false}),
 point:SCN({bg:'classroom',items:[{ic:'drop',at:'water',x:.24,y:0.24,s:0.45},{ic:'cloud',at:'evaporate',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['NEEDS AIR','air','#9FD8F5'],['CLOSED = WET','closed','#FFFFFF']]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'glue',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT SUPER GLUE...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'glue',at:'super',x:.24,y:0.24,s:0.50},{ic:'handIc',at:'skin',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['MOISTURE HARDENS IT','moisture','#FFE27A'],['EVEN ON SKIN!','skin','#FF8A8A']],src:'Source: cyanoacrylate chemistry',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'classroom',items:[{ic:'handIc',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['CAREFUL!',.1]],push:false}),
 cta:VSCTA({L:'YES OOPS',R:'NEVER',icL:'handIc',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Glued',atR:'Comment',atV:'fingers',sL:.85,sR:.85,title:'GLUED YOUR FINGERS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,["WHY DOESN'T GLUE", 'STICK INSIDE', 'THE BOTTLE?']);
