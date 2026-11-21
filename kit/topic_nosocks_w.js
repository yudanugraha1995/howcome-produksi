const B={
 hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:0.24,s:0.50},{ic:'sock',at:.6,x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NO SOCKS?','socks','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['HMM...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'shoe',at:'feet',x:.24,y:0.24,s:0.50},{ic:'drop',at:'sweat',x:.24,y:0.44,s:0.45},{ic:'drop',at:'glands',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['250,000','quarter','#9FD8F5'],['SWEAT GLANDS','glands','#FFFFFF'],['CLOSED SHOES','closed','#FFE27A']]}),
 sil_point:SCN({bg:'park',items:[{ic:'shoe',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['BUT WAIT...',.1]],push:false}),
 point2:SCN({bg:'park',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:0.50},{ic:'fungus',at:'athlete',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['THE SMELL!','smell','#FF8A8A'],['ROTATE SHOES','Rotate','#9FD8F5'],['WICKING SOCKS','wick','#7BE07B']],labels:[{t:'PLOT TWIST!',at:'twist',x:.5,y:.12,bg:'#E5383B'}]}),
 sil_point2:SCN({bg:'park',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['NOW YOU KNOW!',.1,'#7BE07B']],push:false}),
 cta:VSCTA({L:'SOCKS',R:'NO SOCKS',icL:'sock',icR:'shoe',cl:'#F4C542',cr:'#3B4A8A',atL:'Socks',atR:'Comment',atV:'Socks',sL:.85,sR:.85,title:'SOCKS OR NO SOCKS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','WORE SHOES','WITHOUT SOCKS?']);
