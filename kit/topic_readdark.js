const B={
 hook:SCN({bg:'bedroomnight',items:[{ic:'book',at:'read',x:.3,y:.42,s:.55,r:-6},{ic:'eyeRed',at:'ruin',x:.7,y:.3,s:.45}],komo:{x:.75,y:1.1,s:.55,expr:'surprised',at2:'Mom',expr2:'worried'},title:{t:'READING IN THE DARK?',at:0.1},kw:[['RUIN?!','ruin','#FF8A8A']]}),
 sil_hook:SCN({bg:'library',items:[{ic:'eye',at:.15,x:.5,y:.45,s:.75}],kw:[['MYTH OR FACT?',.25]],push:false}),
 point:SCN({bg:'library',items:[{ic:'eye',at:'doctors',x:.3,y:.38,s:.5},{ic:'check',at:'won\'t',x:.7,y:.38,s:.45},{ic:'eyeRed',at:'tired',x:.5,y:.62,s:.5}],komo:{x:.85,y:1.1,s:.5,expr:'happy'},title:{t:'GOOD NEWS!',at:'Good',fill:'#7BE07B'},labels:[{t:'NO LASTING DAMAGE',at:'damage',x:.5,y:.15,bg:'#3BB273'}],kw:[['TIRED & BLURRY','tired']],src:'Source: American Academy of Ophthalmology'}),
 sil_point:SCN({bg:'bedroom',items:[{ic:'lamp',at:.1,x:.5,y:.45,s:.7}],kw:[['PHEW!',.2,'#7BE07B']],push:false}),
 point2:SCN({bg:'classroom',items:[{ic:'eye',at:'blink',x:.3,y:.4,s:.5},{ic:'drop',at:'dry',x:.7,y:.4,s:.4},{ic:'clock',at:'twenty',x:.5,y:.6,s:.45}],komo:{x:.85,y:1.1,s:.5,expr:'think',at2:'Rest',expr2:'happy'},labels:[{t:'20 MIN BREAK',at:'Rest',x:.5,y:.85,bg:'#5B8FD9'}],kw:[['BLINK LESS','blink'],['DRY EYES','dry','#9FD8F5']]}),
 sil_point2:SCN({bg:'office',items:[{ic:'clock',at:.1,x:.5,y:.45,s:.6}],kw:[['LOOK AWAY!',.2]],push:false}),
 twist:SCN({bg:'park',chapter:['PLOT TWIST!'],chapterEnd:'real',items:[{ic:'sun',at:'outside',x:.25,y:.45,s:.45},{ic:'glasses',at:'likely',x:.68,y:.45,s:.55},{ic:'x',at:'glasses',x:.68,y:.45,s:.4}],komo:{x:.8,y:1.1,s:.55,expr:'happy',wave:true},labels:[{t:'STAYING INDOORS',at:'indoors',x:.5,y:.15,bg:'#E5383B'}],kw:[['PLAY OUTSIDE!','outside','#FFE27A']],bot:{t:'FEWER KIDS NEED GLASSES',at:'less',bg:'#3BB273'}}),
 sil_twist:SCN({bg:'park',items:[{ic:'sun',at:.1,x:.5,y:.4,s:.6}],kw:[['GO OUTSIDE!',.2]],push:false}),
 cta:VSCTA({L:'LAMP ON',R:'IN THE DARK',icL:'lamp',icR:'moon',cl:'#F4C542',cr:'#3B4A8A',atL:'Lamp',atR:'dark',atV:'or',sL:.85,sR:.85,title:'YOUR PICK?'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','READ IN','THE DARK?']);
