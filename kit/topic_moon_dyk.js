const B={
 hook:SCN({bg:'citynight',items:[{ic:'moon',at:'moon',x:.24,y:0.24,s:0.55},{ic:'eye',at:'bigger',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SO BIG?!','bigger','#FFE27A']]}),
 sil_hook:SCN({bg:'citynight',items:[{ic:'moon',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['LOOK UP...',.1]],push:false}),
 point:SCN({bg:'citynight',items:[{ic:'moon',at:'closer',x:.24,y:0.24,s:0.50},{ic:'eye',at:'think',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['IS IT CLOSER?','closer','#FFFFFF']]}),
 sil_point:SCN({bg:'park',items:[{ic:'camera',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['TAKE A PHOTO...',.1]],push:false}),
 point2:SCN({bg:'citynight',items:[{ic:'camera',at:'photo',x:.24,y:0.24,s:0.50},{ic:'brain',at:'illusion',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['SAME SIZE!','same','#7BE07B'],['BRAIN ILLUSION!','illusion','#FFE27A']],src:'Source: NASA, moon illusion',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'citynight',items:[{ic:'brain',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['TRICKED!',.1]],push:false}),
 cta:VSCTA({L:'NOTICED',R:'NEVER',icL:'eye',icR:'x',cl:'#F4C542',cr:'#3B4A8A',atL:'Have',atR:'Comment',atV:'noticed',sL:.85,sR:.85,title:'HAVE YOU NOTICED THIS?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES THE', 'MOON LOOK BIGGER', 'AT THE HORIZON?']);
