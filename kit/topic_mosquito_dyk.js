const B={
 hook:SCN({bg:'park',items:[{ic:'mosquito',at:'mosquito',x:.24,y:0.24,s:0.55},{ic:'pimple',at:'itch',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SO ITCHY!','itch','#FFE27A']]}),
 sil_hook:SCN({bg:'park',items:[{ic:'mosquito',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},kw:[['BZZZ...',.1]],push:false}),
 point:SCN({bg:'park',items:[{ic:'mosquito',at:'injects',x:.24,y:0.24,s:0.50},{ic:'drop',at:'saliva',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['SALIVA','saliva','#9FD8F5']],labels:[{t:'KEEPS BLOOD FLOWING',at:'flowing',x:.5,y:.12,bg:'#5B8FD9'}]}),
 sil_point:SCN({bg:'classroom',items:[{ic:'germ',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['YOUR BODY REACTS...',.1]],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'germ',at:'immune',x:.24,y:0.24,s:0.50},{ic:'pimple',at:'histamine',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT THE BITE!','bite','#FF8A8A'],['HISTAMINE!','histamine','#FFE27A']],labels:[{t:'YOUR IMMUNE SYSTEM',at:'immune',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: CDC / Mayo Clinic',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'park',items:[{ic:'mosquito',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['DO NOT SCRATCH!',.1]],push:false}),
 cta:VSCTA({L:'THEY LOVE ME',R:'NOT ME',icL:'mosquito',icR:'check',cl:'#F4C542',cr:'#3B4A8A',atL:'Do',atR:'Comment',atV:'love',sL:.85,sR:.85,title:'DO MOSQUITOES LOVE YOU?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DO', 'MOSQUITO BITES', 'ITCH?']);
