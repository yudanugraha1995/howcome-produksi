const B={
 hook:SCN({bg:'kitchen',items:[{ic:'prism',at:'shiny',x:.24,y:0.24,s:0.50},{ic:'fire',at:'foil',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SHINY SIDE?','shiny','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WHICH SIDE?',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'fire',at:'cooking',x:.24,y:0.24,s:0.50},{ic:'check',at:'think',x:.24,y:0.44,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['FOR COOKING?','cooking','#FFFFFF']]}),
 sil_point:SCN({bg:'office',items:[{ic:'note',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['AT THE FACTORY...',.1]],push:false}),
 point2:SCN({bg:'office',items:[{ic:'note',at:'sheets',x:.24,y:0.24,s:0.45},{ic:'prism',at:'rollers',x:.24,y:0.44,s:0.50},{ic:'check',at:'same',x:.24,y:0.64,s:0.40}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['2 SHEETS AT ONCE','Two','#9FD8F5'],['COOKS THE SAME!','same','#7BE07B']],src:'Source: Reynolds Kitchens',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'kitchen',items:[{ic:'fire',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['EITHER SIDE!',.1]],push:false}),
 cta:VSCTA({L:'SHINY',R:'DULL',icL:'prism',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Which',atR:'Comment',atV:'side',sL:.85,sR:.85,title:'WHICH SIDE DO YOU USE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY IS FOIL', 'SHINY ON', 'ONE SIDE?']);
