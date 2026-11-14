// KOMO for the Style A engine (generated from maskot/komo.js; design LOCKED, see maskot/KOMO.md)
const KOMO=(function(){
let _BLINK=false;
// KOMO mascot drawing library (HOWCOME?). Locked design: see KOMO.md
const OL='#22335A';
const C={skin:'#F6D2B8',hair:'#3A2A28',hood:'#F28C38',hoodD:'#D9712A',hoodL:'#FFB26B',pants:'#3E4A7A',shoe:'#2B2F45',lens:'#CFF1FF'};
const g=(t,i,e='')=>`<g transform="${t}" ${e}>${i}</g>`;

function eyes(expr){
  if(_BLINK && expr!=='happy') return `<path d="M-62,0Q-44,8 -26,0M26,0Q44,8 62,0" stroke="${OL}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  if(expr==='happy') return `<path d="M-62,-6Q-44,-30 -26,-6M26,-6Q44,-30 62,-6" stroke="${OL}" stroke-width="10" fill="none" stroke-linecap="round"/>`;
  const r=expr==='surprised'?20:16, dy=expr==='think'?-8:0;
  let s=`<ellipse cx="-44" cy="0" rx="${r}" ry="${r+4}" fill="${OL}"/><ellipse cx="44" cy="0" rx="${r}" ry="${r+4}" fill="${OL}"/>
  <circle cx="${-38}" cy="${-8+dy}" r="6" fill="#fff"/><circle cx="${50}" cy="${-8+dy}" r="6" fill="#fff"/>`;
  return s;
}
function mouth(expr){
  if(expr==='surprised') return `<ellipse cx="0" cy="56" rx="16" ry="20" fill="#7A2E3A" stroke="${OL}" stroke-width="5"/>`;
  if(expr==='happy') return `<path d="M-30,40Q0,80 30,40Z" fill="#7A2E3A" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/><path d="M-14,58Q0,68 14,58" stroke="#E8707C" stroke-width="8" fill="none" stroke-linecap="round"/>`;
  if(expr==='think') return `<path d="M-14,52Q6,44 22,54" stroke="${OL}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  return `<path d="M-20,46Q0,62 20,46" stroke="${OL}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
}
function brows(expr){
  if(expr==='surprised') return `<path d="M-66,-50Q-44,-64 -24,-52M24,-52Q44,-64 66,-50" stroke="${C.hair}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  if(expr==='think') return `<path d="M-66,-40Q-44,-52 -24,-44M24,-50Q44,-40 66,-46" stroke="${C.hair}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  return '';
}
// head origin = center of face
function head(expr){
  return `
  <!-- ears -->
  <ellipse cx="-138" cy="20" rx="24" ry="30" fill="${C.skin}" stroke="${OL}" stroke-width="5"/><ellipse cx="138" cy="20" rx="24" ry="30" fill="${C.skin}" stroke="${OL}" stroke-width="5"/>
  <path d="M-142,12q8,10 0,20M142,12q-8,10 0,20" stroke="#E0A88C" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- face -->
  <ellipse cx="0" cy="10" rx="140" ry="130" fill="${C.skin}" stroke="${OL}" stroke-width="5"/>
  <!-- short spiky hair -->
  <path d="M-142,10C-150,-60 -130,-110 -96,-128L-104,-150L-62,-140L-50,-172L-12,-150L8,-182L38,-150L74,-170L80,-134L120,-138L110,-104C138,-80 148,-40 142,10C128,-30 110,-48 96,-50L84,-30L66,-62C40,-56 10,-60 -10,-70L-26,-42L-40,-72C-70,-70 -100,-60 -118,-30L-126,-10Z" fill="${C.hair}" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M-60,-120Q-20,-140 30,-128" stroke="#5A4440" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>
  <!-- question-mark cowlick -->
  <path d="M6,-170L6,-200C6,-220 52,-224 52,-260C52,-292 -22,-298 -30,-260" stroke="${OL}" stroke-width="30" fill="none" stroke-linecap="round"/>
  <path d="M6,-170L6,-200C6,-220 52,-224 52,-260C52,-292 -22,-298 -30,-260" stroke="${C.hair}" stroke-width="18" fill="none" stroke-linecap="round"/>
  <!-- thick boyish brows default -->
  ${expr==='smile'||expr==='happy'?`<path d="M-70,-42L-22,-46M22,-46L70,-42" stroke="${C.hair}" stroke-width="12" stroke-linecap="round"/>`:''}
  <!-- cheeks -->
  <ellipse cx="-84" cy="40" rx="20" ry="11" fill="#F29A9A" opacity=".45"/><ellipse cx="84" cy="40" rx="20" ry="11" fill="#F29A9A" opacity=".45"/>
  ${brows(expr)}${g('translate(0 10)',eyes(expr))}${mouth(expr)}
  ${expr==='surprised'?`<path d="M150,-90q14,24 0,34q-14,-10 0,-34z" fill="#8ED1F3" stroke="${OL}" stroke-width="4"/>`:''}
  ${expr==='think'?`<text x="170" y="-120" font-family="B2" font-weight="800" font-size="90" fill="#F4C542" stroke="${OL}" stroke-width="8" paint-order="stroke">?</text>`:''}`;
}
function arm(ang,hand=''){
  return g(`rotate(${ang})`,`<path d="M40,0L130,0" stroke="${OL}" stroke-width="44" stroke-linecap="round"/><path d="M40,0L130,0" stroke="${C.skin}" stroke-width="34" stroke-linecap="round"/>
  <path d="M0,0L56,0" stroke="${OL}" stroke-width="70" stroke-linecap="round"/><path d="M0,0L56,0" stroke="${C.hood}" stroke-width="60" stroke-linecap="round"/><path d="M52,-24L52,24" stroke="${C.hoodD}" stroke-width="8" stroke-linecap="round"/>
  <path d="M108,0L118,0" stroke="${C.hoodL}" stroke-width="54" stroke-linecap="butt" opacity=".0"/>
  <circle cx="146" cy="0" r="30" fill="${C.skin}" stroke="${OL}" stroke-width="5"/>${hand}`);
}
const magnifier=g('translate(150 0) rotate(-20)',`<path d="M0,0L0,70" stroke="${OL}" stroke-width="26" stroke-linecap="round"/><path d="M0,0L0,70" stroke="#B5704A" stroke-width="16" stroke-linecap="round"/>
 <circle cx="0" cy="-60" r="58" fill="${C.lens}" fill-opacity=".55" stroke="${OL}" stroke-width="8"/><circle cx="0" cy="-60" r="58" fill="none" stroke="#F4C542" stroke-width="5"/>
 <path d="M-26,-84Q-10,-100 12,-96" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round"/>`);
function body(){
  return `
  <!-- legs -->
  <rect x="-62" y="-150" width="54" height="140" rx="18" fill="${C.pants}" stroke="${OL}" stroke-width="5"/>
  <rect x="8" y="-150" width="54" height="140" rx="18" fill="${C.pants}" stroke="${OL}" stroke-width="5"/>
  <path d="M-80,0Q-82,-34 -48,-34L-12,-34Q-4,-34 -4,-22L-4,0Q-4,10 -14,10L-70,10Q-80,10 -80,0Z" fill="${C.shoe}" stroke="${OL}" stroke-width="4"/>
  <path d="M80,0Q82,-34 48,-34L12,-34Q4,-34 4,-22L4,0Q4,10 14,10L70,10Q80,10 80,0Z" fill="${C.shoe}" stroke="${OL}" stroke-width="4"/>
  <path d="M-82,-2L-4,-2L-4,8Q-4,14 -12,14L-74,14Q-82,14 -82,6Z M82,-2L4,-2L4,8Q4,14 12,14L74,14Q82,14 82,6Z" fill="#F28C38" stroke="${OL}" stroke-width="3"/>
  <!-- t-shirt -->
  <path d="M-92,-336C-104,-300 -104,-200 -96,-150Q-94,-134 -76,-134L76,-134Q94,-134 96,-150C104,-200 104,-300 92,-336Q60,-350 0,-350Q-60,-350 -92,-336Z" fill="${C.hood}" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M-94,-150L94,-150" stroke="${C.hoodD}" stroke-width="10" stroke-linecap="round"/>
  <!-- crew neck -->
  <path d="M-40,-348Q0,-310 40,-348" stroke="${C.hoodD}" stroke-width="12" fill="none" stroke-linecap="round"/>
  <!-- chest print: HowCome -->
  <text x="${(typeof window!=="undefined"&&window.NEWFX)?-6:0}" y="${(typeof window!=="undefined"&&window.NEWFX)?-236:-232}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${(typeof window!=="undefined"&&window.NEWFX)?27:50}" letter-spacing="${(typeof window!=="undefined"&&window.NEWFX)?0:-1}" fill="#FFE08A" stroke="${OL}" stroke-width="9" paint-order="stroke">${(typeof window!=="undefined"&&window.NEWFX)?"HOW COME":"HowCome"}</text>
  <path d="M-62,-214Q0,-200 62,-214" stroke="#FFE08A" stroke-width="7" fill="none" stroke-linecap="round"/>`;
}
function komo(x,y,s,expr,aL,aR,handR=''){
  const inner=`<ellipse cx="0" cy="14" rx="130" ry="20" fill="#000" opacity=".25"/>
   ${g('translate(-86 -310) scale(-1 1)',arm(aL))}${body()}${g('translate(0 -470)',head(expr))}${g('translate(86 -310)',arm(aR,handR))}`;
  return g(`translate(${x} ${y}) scale(${s})`,inner,'filter="url(#dsh)"');
}

return {
  // o: {x,y,s,expr:'smile'|'happy'|'surprised'|'think',aL,aR (deg, 90=down), holdR (svg at right hand), flip, blink}
  full(o){_BLINK=!!o.blink;const sc=o.s||1;
    const inner=`<ellipse cx="0" cy="14" rx="130" ry="20" fill="#000" opacity=".25"/>`+g('translate(-86 -310) scale(-1 1)',arm(o.aL??70))+body()+g('translate(0 -470)',head(o.expr||'smile'))+g('translate(86 -310)',arm(o.aR??70,o.holdR||''));
    const r=g(`translate(${o.x} ${o.y}) scale(${o.flip?-sc:sc} ${sc})`,inner,'filter="url(#dsh)"');_BLINK=false;return r;},
  head(expr,blink){_BLINK=!!blink;const r=head(expr);_BLINK=false;return r;},
  magnifier,
};
})();
