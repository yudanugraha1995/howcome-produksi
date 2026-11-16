const B={
 hook:SCN({bg:'kitchen',items:[{ic:'soda',at:'soda',x:.24,y:0.24,s:0.55},{ic:'bubbles',at:'fizz',x:.24,y:0.44,s:0.50}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['PSSST!','fizz','#FFE27A']]}),
 sil_hook:SCN({bg:'kitchen',items:[{ic:'soda',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['OPEN IT...',.1]],push:false}),
 point:SCN({bg:'kitchen',items:[{ic:'soda',at:'packed',x:.24,y:0.24,s:0.45},{ic:'bubbles',at:'carbon',x:.24,y:0.44,s:0.45},{ic:'burst',at:'escapes',x:.24,y:0.64,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['CO2 + PRESSURE','pressure','#9FD8F5'],['GAS ESCAPES!','escapes','#FFFFFF']]}),
 sil_point:SCN({bg:'cafe',items:[{ic:'bubbles',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'think'},kw:[['WHERE DO BUBBLES START?',.1]],push:false}),
 point2:SCN({bg:'cafe',items:[{ic:'bubbles',at:'bubbles',x:.24,y:0.24,s:0.50},{ic:'crack',at:'scratches',x:.24,y:0.44,s:0.45}],komo:{x:.64,y:1.2,s:.95,expr:'surprised'},kw:[['NOT ANYWHERE!','anywhere','#FF8A8A'],['TINY SCRATCHES!','scratches','#7BE07B']],labels:[{t:'SPECKS OF DUST',at:'dust',x:.5,y:.12,bg:'#5B8FD9'}],src:'Source: nucleation science (American Chemical Society)',chapter:['PLOT TWIST!'],chapterEnd:'part'}),
 sil_point2:SCN({bg:'cafe',items:[{ic:'soda',at:.05,x:.24,y:.3,s:.55}],komo:{x:.64,y:1.2,s:.95,expr:'happy'},kw:[['FIZZ SCIENCE!',.1]],push:false}),
 cta:VSCTA({L:'CAN',R:'BOTTLE',icL:'can2',icR:'soda',cl:'#F4C542',cr:'#3B4A8A',atL:'Can',atR:'Comment',atV:'bottle',sL:.85,sR:.85,title:'CAN OR BOTTLE?',subT:'SUBSCRIBE FOR MORE!',atSub:'subscribe'}),
 pad:(t0,t1,it)=>OUTRO()(t0,t1),
};
var THUMB=buildTopic(B,['WHY DOES SODA', 'FIZZ WHEN', 'YOU OPEN IT?']);
