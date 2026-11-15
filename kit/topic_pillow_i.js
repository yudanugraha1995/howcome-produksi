const B={
 hook:SCN({bg:'bedroom',items:[{ic:'pillow',at:'washed',x:.24,y:0.24,s:.5,r:-6},{ic:'germ',at:'pillowcase',x:.24,y:0.44,s:.42}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},title:{t:'NEVER WASHED?',at:0.1},kw:[['EWW!','pillowcase','#7BE07B']]}),
 sil_hook:SCN({bg:'bedroomnight',items:[{ic:'moon',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['EVERY NIGHT...',.2]],push:false}),
 point:SCN({bg:'bedroom',items:[{ic:'drop',at:'sweat',x:.24,y:0.24,s:.4},{ic:'pillow',at:'drool',x:.24,y:0.44,s:.45},{ic:'fungus',at:'skin',x:.24,y:0.64,s:.4}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},labels:[{t:'SWEAT + SKIN + OIL',at:'oil',x:.5,y:.12,bg:'#5B8FD9'}],kw:[['GROSS!','dead','#FF8A8A']]}),
 sil_point:SCN({bg:'bathroom',items:[{ic:'germ',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['1 WEEK LATER...',.2]],push:false}),
 point2:SCN({bg:'bathroom',items:[{ic:'germ',at:'bacteria',x:.24,y:0.24,s:.45},{ic:'toilet',at:'toilet',x:.24,y:0.44,s:.45},{ic:'pimple',at:'pimples',x:.24,y:0.64,s:.4}],komo:{x:.64,y:1.2,s:.95,expr:'worried'},labels:[{t:'MORE GERMS THAN A TOILET SEAT',at:'toilet',x:.5,y:.12,bg:'#E5383B'}],kw:[['PIMPLES!','pimples','#FF8A8A']],src:'Source: Amerisleep bedding bacteria study (2022)'}),
 sil_point2:SCN({bg:'livingroom',items:[{ic:'soap',at:.1,x:.24,y:0.24,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['WASH WEEKLY!',.2,'#7BE07B']],push:false}),
 cta:VSCTA({L:'EVERY WEEK',R:'UMM... NEVER',icL:'soap',icR:'germ',cl:'#3BB273',cr:'#E5383B',atL:'often',atR:'comments',atV:'wash',sL:.85,sR:.85,title:'HOW OFTEN?',subT:'SUBSCRIBE FOR MORE!',atSub:'Subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU','NEVER WASHED','YOUR PILLOW?']);
