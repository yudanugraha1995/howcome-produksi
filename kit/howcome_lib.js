// HOWCOME shared scene helpers (loaded by scene.html after komo_engine.js)
const isV=ASP==='v';
// ---------- shared helpers (HOWCOME) ----------
function komo(o){return KOMO.full(o);}
function srcText(txt,k=1){return `<text x="40" y="${H-(isV?60:34)}" font-family="B2" font-weight="600" font-size="${isV?26:22}" fill="#fff" opacity="${fmt(.85*k)}">${txt}</text>`;}
function hudTitle(txt,y,k,{size=isV?96:80,fill='#fff',r=-3}={}){if(k<=0)return '';return g(tr(W/2,y,k,r),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${size}" fill="${fill}" stroke="${OL}" stroke-width="${size*0.14}" paint-order="stroke" stroke-linejoin="round">${txt}</text>`);}
function chapter(t,t0,t1,lines){ // gold chapter card: darken + letterbox + gold caps
  const a=ss((t-t0)/.25)*(1-ss((t-(t1-.25))/.25));if(a<=0)return '';
  const lb=(isV?230:120)*eout((t-t0)/.3);const n=lines.length,fs=isV?118:110;
  let s=`<rect width="${W}" height="${H}" fill="#06121C" opacity="${fmt(.55*a)}"/><rect width="${W}" height="${fmt(lb)}" fill="#000" opacity="${fmt(a)}"/><rect y="${fmt(H-lb)}" width="${W}" height="${fmt(lb)}" fill="#000" opacity="${fmt(a)}"/>`;
  const k=popS(t,t0+.05,.5);
  lines.forEach((l,i)=>{const y=H*(isV?0.36:0.42)+(i-(n-1)/2)*fs*1.08+fs*.35;
    s+=g(tr(W/2,y,k),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" stroke="#1C1730" stroke-width="${fs*.13}" paint-order="stroke" stroke-linejoin="round">${l}</text>`,`opacity="${fmt(a)}" filter="url(#tsh)"`);});
  return s;}
function bedroom(t,light=0){
  const wall=light>0.5?'#E9E4D2':'#2B3350', fl=light>0.5?'#B89B7E':'#3A3448';
  let s=`<rect width="1920" height="1920" fill="${wall}"/><rect y="1300" width="1920" height="620" fill="${fl}"/>`;
  s+=`<rect x="1230" y="420" width="420" height="440" rx="18" fill="#1B2347" stroke="#7D6F60" stroke-width="16"/>`;
  for(let i=0;i<9;i++)s+=`<circle cx="${fmt(1260+rnd(i)*360)}" cy="${fmt(450+rnd(i+30)*360)}" r="${fmt(2+rnd(i+7)*3)}" fill="#fff" opacity="${fmt(0.5+0.5*Math.sin(t*3+i))}"/>`;
  s+=`<circle cx="1540" cy="530" r="48" fill="#F6E7A8"/><circle cx="1562" cy="516" r="44" fill="#1B2347"/><path d="M1440,420L1440,860M1230,640L1650,640" stroke="#7D6F60" stroke-width="12"/>`;
  return s;}
function bed(x,y,s=1,inner=''){
  return g(tr(x,y,s),`<rect x="-520" y="-80" width="1040" height="200" rx="30" fill="#8C6A52" stroke="${OL}" stroke-width="6"/>
  <rect x="-560" y="-340" width="70" height="460" rx="24" fill="#7A5A44" stroke="${OL}" stroke-width="6"/>
  <rect x="-490" y="-130" width="980" height="90" rx="40" fill="#F4F1EA" stroke="${OL}" stroke-width="5"/>
  <rect x="-470" y="-215" width="260" height="110" rx="50" fill="#fff" stroke="${OL}" stroke-width="5"/>${inner}
  <path d="M-260,-170Q120,-230 500,-150L500,-30Q120,-60 -260,-40Z" fill="#F28C38" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M-220,-120Q120,-170 470,-110" stroke="#D9712A" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function lyingHead(expr,blink){return g('translate(-330 -190) rotate(-78) scale(.62)',KOMO.head(expr,blink));}
function alarmClock(x,y,s,t,txt='4:00',shake=0){const r=Math.sin(t*40)*shake;
  return g(tr(x,y,s,r),`<path d="M-120,-110L-170,-170M120,-110L170,-170" stroke="${OL}" stroke-width="16" stroke-linecap="round"/><circle cx="-130" cy="-130" r="44" fill="#E8505B" stroke="${OL}" stroke-width="7"/><circle cx="130" cy="-130" r="44" fill="#E8505B" stroke="${OL}" stroke-width="7"/>
  <rect x="-170" y="-100" width="340" height="230" rx="60" fill="#F28C38" stroke="${OL}" stroke-width="8"/><rect x="-130" y="-60" width="260" height="150" rx="24" fill="#10202E"/>
  <text x="0" y="45" text-anchor="middle" font-family="B2" font-weight="800" font-size="104" fill="#FF5A5A">${txt}</text>`,'filter="url(#dsh)"');}
function warn(s=1){return g(`scale(${s})`,`<path d="M0,-110L120,90L-120,90Z" fill="#F4C542" stroke="${OL}" stroke-width="10" stroke-linejoin="round"/><rect x="-12" y="-50" width="24" height="80" rx="10" fill="${OL}"/><circle cx="0" cy="60" r="14" fill="${OL}"/>`);}
function gauge(x,y,name,sub,val,col,up){ // vertical hormone meter, val 0..1
  const h=360,fill=h*val;
  return g(tr(x,y),`<rect x="-70" y="${-h}" width="140" height="${h}" rx="40" fill="#1B2A3F" stroke="${OL}" stroke-width="8"/>
  <rect x="-56" y="${fmt(-14-fill+14)}" width="112" height="${fmt(Math.max(0,fill-14))}" rx="30" fill="${col}"/>
  <text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="52" fill="#fff" stroke="${OL}" stroke-width="9" paint-order="stroke">${name}</text>`,'filter="url(#dsh)"');}
function arrowUD(up,col,s=1){return g(`scale(${s}) rotate(${up?0:180})`,`<path d="M0,-90L70,0L28,0L28,80L-28,80L-28,0L-70,0Z" fill="${col}" stroke="${OL}" stroke-width="8" stroke-linejoin="round"/>`);}
function pizza(s=1){return g(`scale(${s})`,`<path d="M0,-110L95,70Q0,105 -95,70Z" fill="#F7C46C" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/><path d="M-95,70Q0,105 95,70L105,92Q0,132 -105,92Z" fill="#C9813E" stroke="${OL}" stroke-width="6"/><circle cx="-20" cy="10" r="20" fill="#D8483F"/><circle cx="30" cy="45" r="18" fill="#D8483F"/><circle cx="2" cy="-45" r="15" fill="#D8483F"/>`);}
function chips(s=1){return g(`scale(${s})`,`<path d="M-80,-110L80,-110L95,110L-95,110Z" fill="#E8505B" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/><path d="M-80,-110Q0,-80 80,-110" stroke="${OL}" stroke-width="6" fill="none"/><ellipse cx="0" cy="10" rx="58" ry="40" fill="#FFD25E" stroke="${OL}" stroke-width="5"/><text x="0" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="${OL}">CHIPS</text>`);}
function candy(s=1){return g(`scale(${s})`,`<path d="M-60,0L-115,-40L-115,40Z M60,0L115,-40L115,40Z" fill="#9C7BE0" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><circle r="62" fill="#C9B6F2" stroke="${OL}" stroke-width="7"/><path d="M-40,-30Q0,10 40,-30M-40,10Q0,50 40,10" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function drop(s=1,col='#E5383B'){return g(`scale(${s})`,`<path d="M0,-150C60,-60 110,0 110,60A110,110 0 0 1 -110,60C-110,0 -60,-60 0,-150Z" fill="${col}" stroke="${OL}" stroke-width="8"/><ellipse cx="-45" cy="30" rx="22" ry="34" fill="#fff" opacity=".35"/>`);}
function virus(s=1,r=0,col='#7BC96F'){let sp='';for(let i=0;i<8;i++){sp+=`<g transform="rotate(${i*45})"><path d="M0,-50L0,-74" stroke="${OL}" stroke-width="8"/><circle cy="-80" r="12" fill="${col}" stroke="${OL}" stroke-width="5"/></g>`;}return g(`rotate(${fmt(r)}) scale(${s})`,sp+`<circle r="52" fill="${col}" stroke="${OL}" stroke-width="7"/><circle cx="-16" cy="-12" r="9" fill="${OL}" opacity=".5"/><circle cx="18" cy="14" r="7" fill="${OL}" opacity=".5"/>`);}
function dna(t,s=1){let p='';for(let i=0;i<12;i++){const y=-330+i*60,ph=t*2+i*0.55,a=Math.sin(ph)*120,b=-a,z=Math.cos(ph);
  p+=`<path d="M${fmt(a)},${y}L${fmt(b)},${y}" stroke="#ffffff" stroke-opacity=".5" stroke-width="10"/><circle cx="${fmt(a)}" cy="${y}" r="${fmt(20+6*z)}" fill="#5EC8FF" stroke="${OL}" stroke-width="5"/><circle cx="${fmt(b)}" cy="${y}" r="${fmt(20-6*z)}" fill="#F28C38" stroke="${OL}" stroke-width="5"/>`;}
  return g(`scale(${s})`,p);}
function checkCard(t,items){ // items [{txt,t}]
  let s=`<rect x="-420" y="-230" width="840" height="${120+items.length*150}" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/>`;
  items.forEach((it,i)=>{const y=-110+i*150;const k=popS(t,it.t,.45);
    s+=`<rect x="-360" y="${y-50}" width="100" height="100" rx="22" fill="#EEF3F7" stroke="${OL}" stroke-width="6"/>`;
    if(k>0)s+=g(tr(-310,y,k*.85),check(1));
    s+=`<text x="-220" y="${y+22}" font-family="B2" font-weight="800" font-size="62" fill="${OL}">${it.txt}</text>`;});
  return g('',s,'filter="url(#dsh)"');}


// ---------- plan-driven timelines (compose.py) ----------
function syncGet(u){const x=new XMLHttpRequest();x.open('GET',u,false);x.send();return x.responseText;}
let PLAN={items:[]},WORDS=[];try{PLAN=JSON.parse(syncGet('plan_'+(Q.get('s')||'')+'.json'));WORDS=JSON.parse(syncGet('timing_'+(Q.get('s')||'')+'.json')).words;}catch(e){} // older videos have no plan
const IS_SHORT=(Q.get('s')||'').endsWith('_short');
const norm=w=>w.toLowerCase().replace(/[^a-z0-9']/g,'');
// time of the k-th occurrence of a word (optionally inside one block) on this timeline
function WT(w,block,k=0){const L=WORDS.filter(x=>norm(x.w)===norm(w)&&(!block||x.block===block));return L.length?L[Math.min(k,L.length-1)].s:-99;}
function ITEM(name){return PLAN.items.find(x=>x.name===name);}
// B: {itemName: (t0,t1,item)=>({world,cam,hud})}; silent items fall back to B.sil, pads to B.pad
function buildFromPlan(B){PLAN.items.forEach((it,i)=>{const f=B[it.name]||(it.name.startsWith('sil_')?B.sil:null)||B.pad;if(!f)return;const sc=f(it.t0,it.t1,it);S.push(Object.assign({t0:it.t0,t1:i===PLAN.items.length-1?it.t1+2:it.t1},sc));});}
function loadTopic(id){(0,eval)(syncGet('topic_'+id+'.js'));}
// generic pieces for silent "explain" scenes
function factCard(t,t0,lines,{bg='#fff',col=OL,size=isV?60:58,w=isV?900:1300}={}){const k=popS(t,t0,.5);if(k<=0)return '';const h=lines.length*size*1.35+90;
  let s=`<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="40" fill="${bg}" stroke="${OL}" stroke-width="8"/>`;
  lines.forEach((l,i)=>{const kk=fadeIn(t,t0+0.35+i*0.5,.35);s+=`<text x="0" y="${fmt(-h/2+75+i*size*1.35+size*0.3)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${size}" fill="${col}" opacity="${fmt(kk)}">${l}</text>`;});
  return g(tr(0,0,k),s,'filter="url(#dsh)"');}
function subscribeEnd(t,t0,t1){return {world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="900" r="560" fill="#5EC8FF" opacity=".22" filter="url(#glowf)"/>`+rays(960,300,9,1600,10,.35,Math.sin(t)*2);
  s+=komo({x:isV?960:700,y:isV?1300:1400,s:isV?.9:.8,expr:'happy',aL:70,aR:-60+Math.sin(t*9)*14,blink:blinkAt(t,14)});
  const k=popS(t,t0+.3,.5);if(k>0)s+=g(tr(isV?960:1280,isV?640:900,k*(isV?.9:1)),`<rect x="-300" y="-90" width="600" height="180" rx="40" fill="#E5383B" stroke="${OL}" stroke-width="10"/><text x="0" y="34" text-anchor="middle" font-family="B2" font-weight="800" font-size="96" fill="#fff">SUBSCRIBE</text>`,'filter="url(#dsh)"');return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.05]),hud:t=>hudTitle('SEE YOU IN THE NEXT HOWCOME!',isV?470:150,popS(t,t0+.6,.45),{fill:'#FFE27A',size:isV?60:66})};}

const grid=c=>{let s=`<rect width="1920" height="1920" fill="${c}"/>`;for(let i=0;i<20;i++)s+=`<path d="M${i*100},0V1920M0,${i*100}H1920" stroke="#fff" stroke-opacity=".05" stroke-width="3"/>`;return s;};

// =================== HOWCOME kit v2: shared icons + generic scenes (batch 3+) ===================
const IC={
 phone:(t)=>`<rect x="-80" y="-150" width="160" height="300" rx="28" fill="#2B3350" stroke="${OL}" stroke-width="8"/><rect x="-66" y="-128" width="132" height="240" rx="12" fill="#5EC8FF"/><circle cy="132" r="8" fill="#CDD6DE"/><rect x="-46" y="-100" width="92" height="22" rx="8" fill="#fff" opacity=".85"/><rect x="-46" y="-66" width="70" height="16" rx="6" fill="#fff" opacity=".6"/>`,
 bell:(t)=>`<path d="M-80,40C-80,-60 -50,-100 0,-100C50,-100 80,-60 80,40L100,60L-100,60Z" fill="#F4C542" stroke="${OL}" stroke-width="8" stroke-linejoin="round"/><circle cy="78" r="20" fill="#F4C542" stroke="${OL}" stroke-width="7"/><circle cx="62" cy="-80" r="26" fill="#E8505B" stroke="${OL}" stroke-width="6"/>`,
 brain:(t)=>`<path d="M-160,30C-210,0 -200,-90 -136,-104C-136,-170 -48,-192 0,-152C48,-192 136,-170 136,-104C200,-90 210,0 160,30C184,96 112,144 56,120C24,160 -32,160 -56,120C-112,144 -184,96 -160,30Z" fill="#F4A6B8" stroke="${OL}" stroke-width="8"/><path d="M0,-148C-16,-80 16,-30 0,112M-120,-72C-72,-64 -64,-16 -104,16M120,-72C72,-64 64,-16 104,16" stroke="#D97C93" stroke-width="8" fill="none" stroke-linecap="round"/>`,
 eye:(t)=>`<path d="M-170,0Q0,-130 170,0Q0,130 -170,0Z" fill="#fff" stroke="${OL}" stroke-width="8"/><circle r="62" fill="#5B8FD9" stroke="${OL}" stroke-width="6"/><circle r="28" fill="${OL}"/><circle cx="-18" cy="-18" r="12" fill="#fff"/>`,
 eyeRed:(t)=>`<path d="M-170,0Q0,-130 170,0Q0,130 -170,0Z" fill="#FFE1E1" stroke="${OL}" stroke-width="8"/>${[0,1,2,3].map(i=>`<path d="M${-150+i*20},${-10+i*8}q30,10 50,-6" stroke="#E5383B" stroke-width="5" fill="none"/><path d="M${150-i*20},${10-i*8}q-30,-10 -50,6" stroke="#E5383B" stroke-width="5" fill="none"/>`).join('')}<circle r="62" fill="#5B8FD9" stroke="${OL}" stroke-width="6"/><circle r="28" fill="${OL}"/>`,
 clock:(t)=>`<circle r="130" fill="#fff" stroke="${OL}" stroke-width="10"/><path d="M0,0L0,-90" stroke="${OL}" stroke-width="12" stroke-linecap="round" transform="rotate(${fmt(t*60%360)})"/><path d="M0,0L60,0" stroke="${OL}" stroke-width="12" stroke-linecap="round" transform="rotate(${fmt(t*5%360)})"/><circle r="12" fill="#E5383B"/>`,
 moon:(t)=>`<circle r="110" fill="#1B2347" stroke="${OL}" stroke-width="8"/><path d="M30,-80A85,85 0 1 0 70,45A68,68 0 1 1 30,-80Z" fill="#F6E7A8"/>`,
 soda:(t)=>`<rect x="-80" y="-180" width="160" height="340" rx="26" fill="#E5383B" stroke="${OL}" stroke-width="8"/><rect x="-70" y="-194" width="140" height="28" rx="12" fill="#CDD6DE" stroke="${OL}" stroke-width="6"/><path d="M-80,-40Q0,0 80,-40" stroke="#fff" stroke-width="16" fill="none"/><text x="0" y="90" text-anchor="middle" font-family="B2" font-weight="800" font-size="44" fill="#fff">SODA</text>`,
 water:(t)=>g('translate(0 110) scale(1.15)',glass('cold',t,1)),
 kidney:(t)=>`<path d="M-40,-140C-140,-140 -150,-20 -110,60C-80,120 0,150 30,90C50,50 10,30 20,0C30,-30 70,-40 60,-90C50,-130 10,-140 -40,-140Z" fill="#C9586A" stroke="${OL}" stroke-width="8"/>`,
 finger:(t)=>`<rect x="-60" y="-220" width="120" height="360" rx="60" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><rect x="-44" y="-212" width="88" height="96" rx="36" fill="#FDE9EC" stroke="${OL}" stroke-width="6"/>`,
 longnail:(t)=>`<rect x="-60" y="-120" width="120" height="300" rx="60" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><path d="M-44,-110C-60,-260 40,-380 160,-360C120,-330 70,-250 44,-110Z" fill="#FDE9EC" stroke="${OL}" stroke-width="7"/>`,
 scissors:(t)=>`<circle cx="-50" cy="90" r="40" fill="none" stroke="#E8505B" stroke-width="18"/><circle cx="50" cy="90" r="40" fill="none" stroke="#E8505B" stroke-width="18"/><path d="M-30,60L60,-140M30,60L-60,-140" stroke="#CDD6DE" stroke-width="22" stroke-linecap="round"/><circle cy="20" r="10" fill="${OL}"/>`,
 tissue:(t)=>`<rect x="-130" y="-40" width="260" height="140" rx="20" fill="#5EC8FF" stroke="${OL}" stroke-width="8"/><path d="M-50,-40Q-20,-140 0,-90Q30,-150 50,-40Z" fill="#fff" stroke="${OL}" stroke-width="6"/>`,
 nose:(t)=>`<path d="M-20,-150Q-30,-20 -90,40Q-110,80 -60,90Q-20,100 0,80Q20,100 60,90Q110,80 90,40Q30,-20 20,-150Z" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><ellipse cx="-40" cy="70" rx="16" ry="10" fill="#B07A66"/><ellipse cx="40" cy="70" rx="16" ry="10" fill="#B07A66"/>`,
 burst:(t)=>`<path d="M0,-130L30,-50L120,-70L60,0L120,70L30,50L0,130L-30,50L-120,70L-60,0L-120,-70L-30,-50Z" fill="#FFE27A" stroke="${OL}" stroke-width="7"/>`,
 ear:(t)=>`<path d="M-30,-140C70,-160 120,-60 80,20C60,60 20,60 20,110C20,150 -40,150 -50,100C-60,40 -100,0 -90,-60C-80,-110 -60,-130 -30,-140Z" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><path d="M-30,-70Q30,-90 40,-30Q40,10 0,20" stroke="#D9A88C" stroke-width="10" fill="none"/>`,
 gum:(t)=>`<path d="M-90,-40C-110,-90 -40,-110 0,-80C40,-110 110,-90 90,-40C130,0 90,70 30,60C0,90 -60,80 -70,40C-120,40 -120,-10 -90,-40Z" fill="#F49AC2" stroke="${OL}" stroke-width="8"/><path d="M-40,-30Q0,-50 40,-20" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity=".6"/>`,
 stomach:(t)=>`<path d="M-60,-160C-60,-100 -140,-80 -140,20C-140,120 -40,160 40,140C130,120 150,40 110,-20C80,-60 20,-40 0,-90L0,-160Z" fill="#F29AA8" stroke="${OL}" stroke-width="8"/><path d="M40,140Q60,180 20,200" stroke="${OL}" stroke-width="12" fill="none"/>`,
 corn:(t)=>`<ellipse rx="70" ry="150" fill="#F4C542" stroke="${OL}" stroke-width="8"/>${[...Array(12)].map((_,i)=>`<circle cx="${(i%3-1)*36}" cy="${-110+Math.floor(i/3)*70}" r="16" fill="#FFE27A" stroke="#D99A2B" stroke-width="4"/>`).join('')}`,
 pillow:(t)=>`<path d="M-220,-90Q0,-130 220,-90Q250,0 220,90Q0,130 -220,90Q-250,0 -220,-90Z" fill="#fff" stroke="${OL}" stroke-width="8"/>`,
 wetpillow:(t)=>IC.pillow(t)+`<ellipse cx="40" cy="10" rx="110" ry="50" fill="#9FD8F5" opacity=".7"/>`+[0,1,2].map(i=>`<path d="M${-40+i*60},${fmt(-150-((t*.8+i/3)%1)*60)}c20,30 20,50 0,60c-20,-10 -20,-30 0,-60z" fill="#5EC8FF" stroke="${OL}" stroke-width="4" opacity="${fmt(1-((t*.8+i/3)%1))}"/>`).join(''),
 fungus:(t)=>`<path d="M-90,0Q-90,-90 0,-90Q90,-90 90,0Z" fill="#9C7BE0" stroke="${OL}" stroke-width="7"/><rect x="-24" y="-4" width="48" height="80" rx="18" fill="#F3E9D8" stroke="${OL}" stroke-width="7"/><circle cx="-40" cy="-40" r="12" fill="#fff" opacity=".7"/><circle cx="30" cy="-55" r="9" fill="#fff" opacity=".7"/>`,
 drop:(t)=>`<path d="M0,-130C50,-50 90,0 90,50A90,90 0 0 1 -90,50C-90,0 -50,-50 0,-130Z" fill="#5EC8FF" stroke="${OL}" stroke-width="8"/><ellipse cx="-34" cy="30" rx="16" ry="26" fill="#fff" opacity=".5"/>`,
 snow:(t)=>`<g stroke="#9FD8F5" stroke-width="16" stroke-linecap="round">${[0,60,120].map(a=>`<path d="M0,-110V110" transform="rotate(${a})"/>`).join('')}</g><circle r="22" fill="#fff" stroke="${OL}" stroke-width="5"/>`,
 thermo:(t,v=.3)=>`<rect x="-34" y="-160" width="68" height="240" rx="34" fill="#fff" stroke="${OL}" stroke-width="8"/><circle cy="110" r="56" fill="#5EC8FF" stroke="${OL}" stroke-width="8"/><rect x="-16" y="${fmt(80-200*v)}" width="32" height="${fmt(200*v)}" fill="#5EC8FF"/>`,
 mouthYawn:(t)=>`<ellipse rx="140" ry="${fmt(110+20*Math.sin(t*2))}" fill="#7A2E3A" stroke="${OL}" stroke-width="9"/><path d="M-90,60Q0,110 90,60" fill="#E8707C"/><rect x="-80" y="${fmt(-110-20*Math.sin(t*2))}" width="160" height="26" rx="10" fill="#fff"/>`,
 dog:(t)=>`<ellipse cy="40" rx="130" ry="100" fill="#E7A85A" stroke="${OL}" stroke-width="8"/><path d="M-120,-20Q-170,60 -110,90Z M120,-20Q170,60 110,90Z" fill="#B5704A" stroke="${OL}" stroke-width="7"/><circle cx="-45" cy="20" r="14" fill="${OL}"/><circle cx="45" cy="20" r="14" fill="${OL}"/><ellipse cy="70" rx="30" ry="20" fill="${OL}"/>`,
 baby:(t)=>`<circle r="120" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><path d="M-40,-118Q0,-150 20,-110" stroke="${OL}" stroke-width="8" fill="none"/><path d="M-60,-10Q-45,0 -30,-10M30,-10Q45,0 60,-10" stroke="${OL}" stroke-width="7" fill="none"/><ellipse cy="50" rx="34" ry="30" fill="#7A2E3A" stroke="${OL}" stroke-width="5"/>`,
 noodles:(t)=>`<path d="M-160,-20L160,-20Q150,120 0,130Q-150,120 -160,-20Z" fill="#F28C38" stroke="${OL}" stroke-width="8"/><ellipse cy="-20" rx="160" ry="34" fill="#F7D79A" stroke="${OL}" stroke-width="7"/>${[0,1,2,3].map(i=>`<path d="M${-90+i*50},-24q15,-20 0,-40q-15,-20 0,-40" stroke="#F7D79A" stroke-width="10" fill="none"/>`).join('')}<path d="M40,-140L120,-30M70,-150L140,-40" stroke="#8C5A3C" stroke-width="10" stroke-linecap="round"/>`,
 fire:(t)=>`<path d="M0,-150C60,-80 110,-30 90,40C80,100 30,130 0,130C-30,130 -80,100 -90,40C-110,-30 -60,-80 0,-150Z" fill="#F28C38" stroke="${OL}" stroke-width="8"/><path d="M0,-60C30,-20 50,10 40,50C35,80 15,95 0,95C-15,95 -35,80 -40,50C-50,10 -30,-20 0,-60Z" fill="#FFE27A"/>`,
 yogurt:(t)=>`<path d="M-110,-60L110,-60L90,110Q0,130 -90,110Z" fill="#fff" stroke="${OL}" stroke-width="8"/><ellipse cy="-60" rx="110" ry="26" fill="#F49AC2" stroke="${OL}" stroke-width="6"/><circle cx="-30" cy="-66" r="12" fill="#E5383B"/><circle cx="20" cy="-62" r="10" fill="#9C7BE0"/>`,
 handIc:(t)=>`<path d="M-110,-40Q-120,120 -30,150L60,150Q140,110 130,-40Z" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/>${[-75,-25,25,75].map((x,i)=>`<rect x="${x-24}" y="${-200+Math.abs(i-1.5)*20}" width="48" height="${180-Math.abs(i-1.5)*20}" rx="24" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/>`).join('')}<rect x="-180" y="-60" width="60" height="150" rx="30" fill="#F6D2B8" stroke="${OL}" stroke-width="8" transform="rotate(-30 -150 10)"/>`,
 soap:(t)=>`<rect x="-120" y="-60" width="240" height="120" rx="50" fill="#9FD8F5" stroke="${OL}" stroke-width="8"/>${[0,1,2,3].map(i=>{const ph=(t*.6+i/4)%1;return `<circle cx="${-60+i*40}" cy="${fmt(-80-ph*120)}" r="${14+i*3}" fill="#fff" stroke="#9FD8F5" stroke-width="4" opacity="${fmt(1-ph)}"/>`;}).join('')}`,
 towel:(t)=>`<rect x="-110" y="-150" width="220" height="300" rx="16" fill="#3BB273" stroke="${OL}" stroke-width="8"/><path d="M-110,90H110M-110,110H110" stroke="#fff" stroke-width="10"/>`,
 dryer:(t)=>`<rect x="-150" y="-110" width="300" height="160" rx="30" fill="#CDD6DE" stroke="${OL}" stroke-width="8"/><rect x="-110" y="50" width="220" height="40" rx="10" fill="#2B3350" stroke="${OL}" stroke-width="6"/>${[0,1,2].map(i=>`<path d="M${-60+i*60},${fmt(110+((t*2+i/3)%1)*120)}v40" stroke="#9FD8F5" stroke-width="10" stroke-linecap="round"/>`).join('')}`,
 toilet:(t)=>`<rect x="-60" y="-200" width="200" height="110" rx="16" fill="#fff" stroke="${OL}" stroke-width="8"/><path d="M-150,-90L150,-90Q160,30 40,70L50,160L-90,160L-80,70Q-170,30 -150,-90Z" fill="#fff" stroke="${OL}" stroke-width="8"/><ellipse cy="-90" rx="150" ry="30" fill="#EEF3F7" stroke="${OL}" stroke-width="6"/>`,
 door:(t)=>`<rect x="-110" y="-200" width="220" height="400" rx="10" fill="#B5704A" stroke="${OL}" stroke-width="8"/><circle cx="70" cy="10" r="18" fill="#F4C542" stroke="${OL}" stroke-width="5"/>`,
 skullIc:(t)=>`<path d="M-120,40C-160,-60 -120,-170 0,-170C120,-170 160,-60 120,40L90,60L90,110L-90,110L-90,60Z" fill="#F3E9D8" stroke="${OL}" stroke-width="8"/><circle cx="-50" cy="-30" r="34" fill="${OL}"/><circle cx="50" cy="-30" r="34" fill="${OL}"/>`,
 hospital:(t)=>`<rect x="-150" y="-140" width="300" height="280" rx="14" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="-26" y="-100" width="52" height="140" fill="#E5383B"/><rect x="-70" y="-56" width="140" height="52" fill="#E5383B"/>`,
 lungs:(t)=>`<path d="M-20,-150V-40M20,-150V-40" stroke="${OL}" stroke-width="16"/><path d="M-30,-40C-60,-100 -170,-60 -170,40C-170,130 -100,150 -40,120C-20,100 -30,20 -30,-40Z" fill="#F29AA8" stroke="${OL}" stroke-width="8"/><path d="M30,-40C60,-100 170,-60 170,40C170,130 100,150 40,120C20,100 30,20 30,-40Z" fill="#F29AA8" stroke="${OL}" stroke-width="8"/>`,
 germ:(t)=>`<ellipse rx="56" ry="44" fill="#7BC96F" stroke="${OL}" stroke-width="6"/><circle cx="-18" cy="-8" r="9" fill="${OL}"/><circle cx="18" cy="-8" r="9" fill="${OL}"/><path d="M-12,14Q0,22 12,14" stroke="${OL}" stroke-width="5" fill="none"/>${[0,1,2,3].map(k=>`<path d="M${-48+k*32},36l-8,20" stroke="${OL}" stroke-width="5"/>`).join('')}`,
 can2:(t)=>IC.soda(t),
 calendar:(t)=>`<rect x="-150" y="-150" width="300" height="300" rx="30" fill="#fff" stroke="${OL}" stroke-width="9"/><rect x="-150" y="-150" width="300" height="90" rx="30" fill="#E8505B" stroke="${OL}" stroke-width="9"/>${[...Array(9)].map((_,i)=>`<rect x="${-110+(i%3)*80}" y="${-40+Math.floor(i/3)*60}" width="50" height="40" rx="8" fill="#CDD6DE"/>`).join('')}`,
 sugar:(t)=>sugarCube(0,0,60),
 virus:(t)=>virus(1.6,t*30),
 dna:(t)=>dna(t,.7),
 heart:(t)=>`<path d="M0,60C-120,-20 -110,-120 -50,-120C-20,-120 0,-95 0,-75C0,-95 20,-120 50,-120C110,-120 120,-20 0,60Z" transform="scale(1.4)" fill="#E5383B" stroke="${OL}" stroke-width="5"/>`,
 warn:(t)=>warn(1.3), check:(t)=>check(1.4), x:(t)=>xmark(1.4), trophy:(t)=>g('',`<path d="M-90,-120L90,-120L70,10Q0,70 -70,10Z" fill="#F4C542" stroke="${OL}" stroke-width="8"/><rect x="-20" y="40" width="40" height="60" fill="#F4C542" stroke="${OL}" stroke-width="7"/><rect x="-80" y="96" width="160" height="40" rx="10" fill="#D99A2B" stroke="${OL}" stroke-width="7"/>`),
 pizza:(t)=>pizza(1.3), chips:(t)=>chips(1.2), candy:(t)=>candy(1.3), bed:(t)=>bed(0,80,.35,''),
};
const BG={night:'#0F2A3A',grid:'G#3B3A7A',plum:'#2A1F2B',brown:'#2B1B14',sky:'#CDEBF5',sand:'#E9C9A3',green:'#1F2E25',navy:'G#2B3350',sage:'#C9CFC4'};
const GLOW={night:'#5EC8FF',grid:'#9C7BE0',plum:'#E5383B',brown:'#F4C542',sky:'#ffffff',sand:'#ffffff',green:'#7BC96F',navy:'#5EC8FF',sage:'#ffffff'};
const DARKBG=k=>!['sky','sand','sage'].includes(k);
function bgDraw(k){const c=BG[k]||k;let s=c.startsWith('G')?grid(c.slice(1)):`<rect width="1920" height="1920" fill="${c}"/>`;s+=`<circle cx="960" cy="900" r="580" fill="${GLOW[k]||'#fff'}" opacity="${DARKBG(k)?.2:.45}" filter="url(#glowf)"/>`;return s;}
// normalized layout -> world coords (safe area for both formats)
const PX=fx=>isV?450+fx*1020:280+fx*1360, PY=fy=>isV?600+fy*760:720+fy*560;
// time spec: number (seconds after scene start), 'word' / 'word@block' / 'word#k' (k-th occurrence)
function TS(spec,t0,block){if(typeof spec==='number')return t0+spec;let w=spec,b=block,k=0;if(w.includes('#')){[w,k]=w.split('#');k=+k;}if(w.includes('@'))[w,b]=w.split('@');const r=WT(w,b,k);return r<0?t0+.2:r;}
const HY={top:()=>isV?460:150,sub:()=>isV?610:270,bot:()=>isV?1330:815};
// generic scene: o={bg, items:[{ic,at,x,y,s,r,bob,until}], labels:[{t,at,x,y,bg,fill,size,until}], komo:{x,y,s,expr,expr2,at2,aR,mag}, title:{t,at,fill,size}, sub:{t,at,bg,fill}, bot:{t,at,bg,fill,until}, card:{lines,at,y}, src, chapter:[lines], chapterEnd, zoom:[z0,z1]}
function SCN(o){return (t0,t1,it)=>{const blk=it&&it.kind==='voice'?it.name:undefined;const T=s=>TS(s,t0,blk);
 return {world:t=>{let s=bgDraw(o.bg||'night');
   (o.items||[]).forEach((m,i)=>{const ta=T(m.at??0.1);if(m.until!==undefined&&t>T(m.until))return;const k=popS(t,ta,.45);if(k<=0)return;const bob=m.bob?Math.sin(t*2.4+i)*10:0;
     s+=g(tr(PX(m.x??.5),PY(m.y??.5)+bob,k*(m.s??1)*(isV?(m.sv??1):(m.sh??1)),m.r??0),(IC[m.ic]||(()=>''))(t,m.v),'filter="url(#dsh)"');});
   (o.labels||[]).forEach(l=>{if(l.until!==undefined&&t>T(l.until))return;const k=popS(t,T(l.at??0.1),.45);if(k>0)s+=label(l.t,{x:PX(l.x??.5),y:PY(l.y??.5),size:l.size||(isV?50:56),bg:l.bg||'#E8505B',fill:l.fill||'#fff',sc:k,r:l.r??-3});});
   if(o.komo){const K=o.komo;const ex=K.at2!==undefined&&t>T(K.at2)?K.expr2:(K.expr||'smile');const kk=K.at!==undefined?popS(t,T(K.at),.45):1;if(kk>0)s+=komo({x:PX(K.x??.5),y:isV?Math.min(PY(K.y??1.0),1370):PY(K.y??1.1)+40,s:(K.s??(isV?.8:.62))*kk,expr:ex,aL:K.aL??70,aR:K.wave?-60+Math.sin(t*9)*14:(K.aR??70),holdR:K.mag?KOMO.magnifier:(K.hold?g('scale(.35)',IC[K.hold](t)):''),blink:blinkAt(t,K.seed||3)});}
   if(o.extra)s+=o.extra(t,t0,t1,T);
   return s;},
  cam:t=>{const z=o.zoom||[1.0,1.06];const c=camV(t,t0,t1,[960,960,z[0]],[960,940,z[1]]);return isV?c:[c[0],c[1]+90,c[2]];},
  hud:t=>{let h='';if(o.chapter)h+=chapter(t,t0,o.chapterEnd!==undefined?T(o.chapterEnd):t0+2.4,o.chapter);
   if(o.title&&t>=T(o.title.at??0.1)-.05)h+=hudTitle(o.title.t,HY.top(),popS(t,T(o.title.at??0.1),.45),{fill:o.title.fill||(DARKBG(o.bg||'night')?'#fff':OL),size:o.title.size||(isV?(o.title.t.length>22?52:72):(o.title.t.length>26?58:72))});
   if(o.sub&&t>=T(o.sub.at)-.05)h+=label(o.sub.t,{x:W/2,y:HY.sub(),size:o.sub.size||(isV?46:54),bg:o.sub.bg||'#5B6C8F',fill:o.sub.fill||'#fff',sc:popS(t,T(o.sub.at),.45)});
   (Array.isArray(o.bot)?o.bot:o.bot?[o.bot]:[]).forEach(b=>{if(t>=T(b.at)-.05&&(b.until===undefined||t<T(b.until)))h+=label(b.t,{x:W/2,y:HY.bot(),size:b.size||(isV?(b.t.length>22?40:50):52),bg:b.bg||'#E8505B',fill:b.fill||'#fff',sc:popS(t,T(b.at),.45)});});
   const CA=o.card?(typeof o.card.at==='number'?t0+Math.min(o.card.at,(t1-t0)*.4):T(o.card.at)):0;
   if(o.card&&t>=CA-.05)h+=g(tr(W/2,o.card.y==='top'?(isV?620:300):HY.bot()),factCard(t,CA,o.card.lines,{size:isV?40:44,w:isV?940:1150}));
   if(o.src)h+=srcText(o.src,fadeIn(t,t0+.4));
   return h;}};};}
function CHECKS(o){return (t0,t1)=>({world:t=>bgDraw('sky')+g(tr(960,isV?900:880,popS(t,t0+.1,.5)*(isV?.9:.8)),checkCard(t,o.items.map((x,i)=>({txt:x,t:t0+1.2+i*1.8})))),cam:t=>{const c=camV(t,t0,t1,[960,960,1.0],[960,940,1.04]);return isV?c:[c[0],c[1]+90,c[2]];},hud:t=>hudTitle(o.title,isV?400:150,popS(t,t0+.2,.45),{fill:OL,size:isV?74:72})+(o.src?srcText(o.src,fadeIn(t,t0+.4)):'')});}
function VSCTA(o){return (t0,t1)=>({world:t=>{const sl=eout((t-t0)/.5);
   let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="${o.cl||'#F28C38'}"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="${o.cr||'#3BB273'}"/>`;
   const L=isV?680:560,R=isV?1240:1360,y=isV?900:1010;const T=s2=>TS(s2,t0,'cta');
   const k1=popS(t,T(o.atL||t0+.6),.5),k2=popS(t,T(o.atR||t0+1.2),.5);
   if(k1>0&&o.icL)s+=g(tr(L,y,k1*(o.sL||.6)),IC[o.icL](t));if(k2>0&&o.icR)s+=g(tr(R,y,k2*(o.sR||.6)),IC[o.icR](t));
   s+=bigText(o.L,L,isV?720:820,isV?(o.L.length>14?40:50):(o.L.length>14?56:66),{sw:10})+bigText(o.R,R,isV?720:820,isV?(o.R.length>14?40:50):(o.R.length>14?56:66),{sw:10});
   const kv=popS(t,T(o.atV||t0+.9),.4);if(kv>0)s+=g(tr(960,isV?800:900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
   const kc=popS(t,T('comments'),.45);if(kc>0)s+=g(tr(isV?1150:1290,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>{const c=camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]);return isV?c:[c[0],c[1]+90,c[2]];},
  hud:t=>hudTitle(o.title||'YOUR PICK?',isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A',size:isV?(o.title&&o.title.length>18?56:72):76})});}
function OUTRO(){return (t0,t1)=>{const r=subscribeEnd(null,t0,t1);const c=r.cam;r.cam=t=>{const v=c(t);return isV?v:[v[0],v[1]+90,v[2]];};return r;};}
function buildTopic(B,thumb){buildFromPlan(B);var th={t:ITEM('hook').t1-0.3,lines:thumb};return th;}
// =================== kit v3 icons (batch 4: snooze, steps, headphones, coldshower, nap, spicy) ===================
Object.assign(IC,{
 alarm:(t)=>{const r=Math.sin(t*40)*4;return g(`rotate(${fmt(r)})`,`<circle cx="-95" cy="-120" r="45" fill="#F4C542" stroke="${OL}" stroke-width="8"/><circle cx="95" cy="-120" r="45" fill="#F4C542" stroke="${OL}" stroke-width="8"/><path d="M-80,120L-110,170M80,120L110,170" stroke="${OL}" stroke-width="14" stroke-linecap="round"/><circle r="150" fill="#E8505B" stroke="${OL}" stroke-width="10"/><circle r="115" fill="#fff" stroke="${OL}" stroke-width="6"/><path d="M0,0L0,-80M0,0L55,25" stroke="${OL}" stroke-width="12" stroke-linecap="round"/><circle r="12" fill="#E5383B"/>`);},
 snoozeBtn:(t)=>`<rect x="-200" y="-90" width="400" height="180" rx="40" fill="#9C7BE0" stroke="${OL}" stroke-width="10"/><text x="0" y="28" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="#fff">SNOOZE</text>`,
 zzz:(t)=>[0,1,2].map(i=>`<text x="${i*60-60}" y="${fmt(-i*70+Math.sin(t*2+i)*8)}" font-family="B2" font-weight="800" font-size="${90+i*30}" fill="#9FD8F5" stroke="${OL}" stroke-width="7" paint-order="stroke">z</text>`).join(''),
 shoe:(t)=>`<path d="M-170,40L-160,-60Q-150,-100 -110,-90L-40,-70Q0,-20 60,-10L150,10Q190,20 190,60L190,80L-170,80Z" fill="#5EC8FF" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/><rect x="-175" y="70" width="370" height="36" rx="16" fill="#fff" stroke="${OL}" stroke-width="8"/><path d="M-60,-50L-30,-20M-30,-60L0,-30M0,-60L30,-30" stroke="#fff" stroke-width="10" stroke-linecap="round"/>`,
 watch:(t)=>`<rect x="-60" y="-210" width="120" height="420" rx="40" fill="#2B3350" stroke="${OL}" stroke-width="8"/><rect x="-120" y="-130" width="240" height="260" rx="50" fill="#1B2347" stroke="${OL}" stroke-width="10"/><text x="0" y="-20" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="#7BC96F">10,000</text><text x="0" y="50" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#fff">STEPS</text>`,
 headphones:(t)=>`<path d="M-150,40V-20A150,150 0 0 1 150,-20V40" fill="none" stroke="${OL}" stroke-width="34" stroke-linecap="round"/><path d="M-150,40V-20A150,150 0 0 1 150,-20V40" fill="none" stroke="#E8505B" stroke-width="20" stroke-linecap="round"/><rect x="-200" y="10" width="90" height="150" rx="36" fill="#E8505B" stroke="${OL}" stroke-width="9"/><rect x="110" y="10" width="90" height="150" rx="36" fill="#E8505B" stroke="${OL}" stroke-width="9"/>`,
 volume:(t)=>`<path d="M-160,-50L-100,-50L-30,-120L-30,120L-100,50L-160,50Z" fill="#fff" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/>${[0,1,2].map(i=>`<path d="M${10+i*50},${-60-i*30}Q${50+i*70},0 ${10+i*50},${60+i*30}" fill="none" stroke="${i==2?'#E5383B':OL}" stroke-width="14" stroke-linecap="round" opacity="${fmt(.5+.5*Math.sin(t*6-i))}"/>`).join('')}`,
 hairCell:(t)=>`<rect x="-120" y="20" width="240" height="70" rx="30" fill="#F4A6B8" stroke="${OL}" stroke-width="7"/>${[...Array(7)].map((_,i)=>`<path d="M${-90+i*30},20Q${fmt(-90+i*30+Math.sin(t*3+i)*14)},-60 ${-90+i*30},-130" stroke="${OL}" stroke-width="9" fill="none" stroke-linecap="round"/>`).join('')}`,
 shower:(t)=>{let d='';for(let i=0;i<9;i++){const ph=(t*1.6+i*0.37)%1;d+=`<path d="M${-90+(i%5)*45},${fmt(20+ph*240)}l0,30" stroke="#5EC8FF" stroke-width="12" stroke-linecap="round" opacity="${fmt(1-ph)}"/>`;}return `<path d="M120,-200L120,-150Q120,-110 80,-110L20,-110" fill="none" stroke="#CDD6DE" stroke-width="26" stroke-linecap="round"/><path d="M-130,0Q-130,-110 20,-110Q170,-110 170,0Z" fill="#CDD6DE" stroke="${OL}" stroke-width="9" transform="translate(-20 0) scale(.8)"/>`+d;},
 ice:(t)=>`<rect x="-110" y="-110" width="220" height="220" rx="30" fill="#BFE8FA" stroke="${OL}" stroke-width="9" transform="rotate(-8)"/><path d="M-60,-60L-10,-60" stroke="#fff" stroke-width="16" stroke-linecap="round" transform="rotate(-8)"/>`,
 chili:(t)=>`<path d="M-160,-40Q-40,-120 120,-40Q190,0 170,80Q100,10 -20,30Q-120,40 -160,-40Z" fill="#E5383B" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/><path d="M-160,-40Q-200,-70 -190,-120" fill="none" stroke="#3BB273" stroke-width="20" stroke-linecap="round"/><path d="M-80,-60Q0,-90 80,-50" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" opacity=".7"/>`,
 milk:(t)=>`<path d="M-90,-120L90,-120L90,180L-90,180Z" fill="#fff" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/><path d="M-90,-120L-50,-200L50,-200L90,-120Z" fill="#9FD8F5" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/><rect x="-70" y="-20" width="140" height="90" rx="14" fill="#5EC8FF"/><text x="0" y="45" text-anchor="middle" font-family="B2" font-weight="800" font-size="50" fill="#fff">MILK</text>`,
 coffee:(t)=>`${[0,1,2].map(i=>`<path d="M${-50+i*50},-110q-20,-40 0,-70q20,-30 0,-60" fill="none" stroke="#CDD6DE" stroke-width="10" stroke-linecap="round" opacity="${fmt(.4+.4*Math.sin(t*3+i))}"/>`).join('')}<path d="M-120,-90L120,-90L100,120Q100,150 70,150L-70,150Q-100,150 -100,120Z" fill="#F28C38" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/><path d="M115,-40Q190,-40 180,30Q170,90 105,80" fill="none" stroke="${OL}" stroke-width="18"/><ellipse cy="-90" rx="120" ry="22" fill="#6B3E26" stroke="${OL}" stroke-width="7"/>`,
 sun:(t)=>`${[...Array(10)].map((_,i)=>`<path d="M0,-150L0,-210" stroke="#F4C542" stroke-width="18" stroke-linecap="round" transform="rotate(${fmt(i*36+t*20)})"/>`).join('')}<circle r="120" fill="#F4C542" stroke="${OL}" stroke-width="9"/>`,
 plane:(t)=>`<path d="M-200,0Q-200,-30 -160,-30L150,-30Q210,-30 220,0Q210,30 150,30L-160,30Q-200,30 -200,0Z" fill="#fff" stroke="${OL}" stroke-width="9"/><path d="M-20,-28L-90,-150L-40,-150L60,-28ZM-20,28L-90,150L-40,150L60,28ZM-170,-28L-200,-100L-160,-100L-120,-28Z" fill="#5EC8FF" stroke="${OL}" stroke-width="8" stroke-linejoin="round"/>`,
 battery:(t)=>{const f=.2+.8*((t*0.4)%1);return `<rect x="-160" y="-80" width="300" height="160" rx="26" fill="#fff" stroke="${OL}" stroke-width="10"/><rect x="140" y="-34" width="34" height="68" rx="10" fill="${OL}"/><rect x="-140" y="-60" width="${fmt(260*f)}" height="120" rx="14" fill="#7BC96F"/>`;},
 bird:(t)=>`<ellipse rx="120" ry="90" fill="#5EC8FF" stroke="${OL}" stroke-width="9"/><circle cx="90" cy="-70" r="60" fill="#5EC8FF" stroke="${OL}" stroke-width="9"/><path d="M140,-80L200,-60L140,-45Z" fill="#F4C542" stroke="${OL}" stroke-width="7"/><circle cx="105" cy="-80" r="10" fill="${OL}"/><path d="M-40,-30Q-120,${fmt(-120+Math.sin(t*10)*30)} -170,-40" fill="#9FD8F5" stroke="${OL}" stroke-width="8"/>`,
});
// =================== kit v3 icons (batch 5: coffee, tvclose) ===================
Object.assign(IC,{
 tv:(t)=>`<rect x="-230" y="-150" width="460" height="290" rx="26" fill="#2B3350" stroke="${OL}" stroke-width="10"/><rect x="-205" y="-125" width="410" height="240" rx="14" fill="#5EC8FF"/><rect x="-205" y="${fmt(-125+((t*80)%240))}" width="410" height="16" fill="#fff" opacity=".25"/><path d="M-80,140L-120,200M80,140L120,200" stroke="${OL}" stroke-width="14" stroke-linecap="round"/>`,
 glasses:(t)=>`<circle cx="-90" r="70" fill="#BFE8FA" fill-opacity=".5" stroke="${OL}" stroke-width="12"/><circle cx="90" r="70" fill="#BFE8FA" fill-opacity=".5" stroke="${OL}" stroke-width="12"/><path d="M-20,-10Q0,-30 20,-10M-160,-10L-200,-30M160,-10L200,-30" stroke="${OL}" stroke-width="12" fill="none" stroke-linecap="round"/>`,
 tree:(t)=>`<rect x="-26" y="40" width="52" height="150" rx="12" fill="#8B5A3C" stroke="${OL}" stroke-width="8"/><circle cy="-40" r="130" fill="#3BB273" stroke="${OL}" stroke-width="9"/><circle cx="-60" cy="-70" r="30" fill="#7BC96F"/>`,
 radiation:(t)=>`<circle r="150" fill="#F4C542" stroke="${OL}" stroke-width="10"/>${[0,120,240].map(a=>`<path d="M0,0L-50,-110A120,120 0 0 1 50,-110Z" fill="${OL}" transform="rotate(${a+fmt(t*20)})"/>`).join('')}<circle r="28" fill="#F4C542" stroke="${OL}" stroke-width="10"/>`,
 cup3:(t)=>[-1,0,1].map(i=>g(`translate(${i*190} 0) scale(.55)`,IC.coffee(t))).join(''),
});
// =================== kit v3 icons (night Shorts) ===================
Object.assign(IC,{
 watermelon:(t)=>`<path d="M-200,-20A200,200 0 0 0 200,-20Z" fill="#3BB273" stroke="${OL}" stroke-width="10"/><path d="M-176,-20A176,176 0 0 0 176,-20Z" fill="#E8505B"/>${[[-90,30],[-30,70],[40,60],[100,25],[0,20],[-130,5],[140,0]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="15" fill="${OL}"/>`).join('')}`,
 seed:(t)=>`<ellipse rx="60" ry="95" fill="#2B1B14" stroke="${OL}" stroke-width="8"/><ellipse cx="-18" cy="-30" rx="14" ry="26" fill="#fff" opacity=".35"/>`,
 sprout:(t)=>`<path d="M0,120L0,-20" stroke="#3BB273" stroke-width="16" stroke-linecap="round"/><path d="M0,-10Q-90,-40 -110,-120Q-20,-110 0,-10Z M0,10Q90,-20 110,-90Q20,-90 0,10Z" fill="#7BC96F" stroke="${OL}" stroke-width="7"/>`,
});
