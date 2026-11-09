function polygon(points,fill,stroke){ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke()}}
function draw(){ctx.clearRect(0,0,W,H);ctx.fillStyle='#28332c';ctx.fillRect(0,0,W,H);
// salt-stained paving and dock planks
for(let y=0;y<H;y+=37){ctx.fillStyle=y%74?'#2a342c':'#2c362e';ctx.fillRect(0,y,W,36);ctx.strokeStyle='#465044';ctx.globalAlpha=.27;ctx.beginPath();ctx.moveTo(0,y+36);ctx.lineTo(W,y+36);ctx.stroke();ctx.globalAlpha=1;for(let x=((y/37|0)%2)*50;x<W;x+=104){ctx.strokeStyle='#19231f';ctx.globalAlpha=.24;ctx.beginPath();ctx.moveTo(x,y+3);ctx.lineTo(x,y+34);ctx.stroke();ctx.globalAlpha=1}}
// canal water and broken quay edge
polygon([[0,0],[1200,0],[1200,55],[1000,46],[810,59],[598,42],[410,61],[200,48],[0,62]],'#17272a');polygon([[0,732],[210,740],[405,726],[595,748],[817,731],[1000,747],[1200,730],[1200,790],[0,790]],'#162528');for(let i=0;i<26;i++){let x=(i*167+clock*13)%1200,y=15+(i*29)%34;ctx.strokeStyle='#55706a';ctx.globalAlpha=.3;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+22+(i%4)*8,y+1);ctx.stroke();ctx.globalAlpha=1}
// lamp pools
for(let [x,y] of [[275,320],[715,390],[1010,460],[535,522]]){let grd=ctx.createRadialGradient(x,y,5,x,y,105);grd.addColorStop(0,'#c7a45a22');grd.addColorStop(1,'#c7a45a00');ctx.fillStyle=grd;ctx.fillRect(x-110,y-110,220,220);ctx.fillStyle='#d5bc72';ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill()}
// shadowed pockets
for(let s of shadows){let g=ctx.createLinearGradient(s.x,s.y,s.x+s.w,s.y+s.h);g.addColorStop(0,'#101715d9');g.addColorStop(.55,'#151c18a8');g.addColorStop(1,'#171e1a36');ctx.fillStyle=g;ctx.fillRect(s.x,s.y,s.w,s.h);ctx.strokeStyle='#79806a33';ctx.setLineDash([4,8]);ctx.strokeRect(s.x+3,s.y+3,s.w-6,s.h-6);ctx.setLineDash([])}
// buildings, crates, stacks
for(let i=0;i<walls.length;i++){let o=walls[i];ctx.fillStyle='#151d19';ctx.fillRect(o.x+7,o.y+9,o.w,o.h);let grad=ctx.createLinearGradient(o.x,o.y,o.x+o.w,o.y+o.h);grad.addColorStop(0,i<3?'#5c594b':'#515546');grad.addColorStop(.5,i<3?'#494b40':'#41483d');grad.addColorStop(1,'#303a32');ctx.fillStyle=grad;ctx.fillRect(o.x,o.y,o.w,o.h);ctx.strokeStyle='#7e795f';ctx.globalAlpha=.64;ctx.lineWidth=2;ctx.strokeRect(o.x+1,o.y+1,o.w-2,o.h-2);ctx.globalAlpha=.4;ctx.lineWidth=1;for(let k=0;k<o.w;k+=26){ctx.beginPath();ctx.moveTo(o.x+k,o.y+4);ctx.lineTo(o.x+k+7,o.y+o.h-4);ctx.stroke()}ctx.globalAlpha=1;ctx.fillStyle='#1b241f';ctx.fillRect(o.x+8,o.y+8,o.w-16,9);ctx.fillStyle='#8c8061';ctx.globalAlpha=.6;ctx.fillRect(o.x+15,o.y+11,Math.min(o.w-32,64),2);ctx.globalAlpha=1;for(let k=0;k<3;k++){ctx.fillStyle='#202a24';ctx.fillRect(o.x+16+k*20,o.y+o.h-24,12,10)}}
// plank bridges and route markers
ctx.fillStyle='#655a43';ctx.fillRect(1068,365,132,62);ctx.fillStyle='#877557';for(let x=1074;x<1195;x+=16){ctx.fillRect(x,367,3,58)}ctx.strokeStyle='#b49b68';ctx.globalAlpha=.5;ctx.strokeRect(1070,365,125,62);ctx.globalAlpha=1;
// deco crates
for(let [x,y] of [[250,392],[276,394],[772,555],[790,555],[557,250],[1083,296],[432,547],[102,540]]){ctx.fillStyle='#332f24';ctx.fillRect(x+4,y+5,28,25);ctx.fillStyle='#695b3d';ctx.fillRect(x,y,28,24);ctx.strokeStyle='#a18a5c';ctx.strokeRect(x+.5,y+.5,27,23);ctx.beginPath();ctx.moveTo(x+2,y+2);ctx.lineTo(x+26,y+22);ctx.moveTo(x+26,y+2);ctx.lineTo(x+2,y+22);ctx.stroke()}
// objective and extraction beacon
if(!ledger){let pulse=1+Math.sin(clock*3)*.12;ctx.save();ctx.translate(957,313);ctx.scale(pulse,pulse);ctx.fillStyle='#d7bd6b28';ctx.beginPath();ctx.arc(0,0,34,0,7);ctx.fill();ctx.strokeStyle='#d9bf72';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,20,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#d8c184';ctx.fillRect(-8,-10,16,20);ctx.fillStyle='#253029';ctx.fillRect(-4,-6,8,12);ctx.restore();ctx.font='10px monospace';ctx.fillStyle='#e2d4af';ctx.fillText('РЕЕСТР',929,280)}
let ex=1138,ey=397;ctx.strokeStyle=ledger?'#d9c06e':'#78806c';ctx.lineWidth=2;ctx.beginPath();ctx.arc(ex,ey,ledger?28:20,0,Math.PI*2);ctx.stroke();ctx.fillStyle=ledger?'#d9c06e55':'#a5a17a22';ctx.beginPath();ctx.arc(ex,ey,16,0,Math.PI*2);ctx.fill();ctx.font='9px monospace';ctx.fillStyle=ledger?'#e6d39e':'#9da294';ctx.fillText('ШЛЮЗ',1115,ey+43);
// guards' vision cones
for(let g of guards){if(g.state==='down'||g.stun>0)continue;let col=g.state==='alert'?'#d4554d':g.state==='investigate'?'#d9a64e':'#8ba784';let reach=g.state==='alert'?g.range+70:g.range;ctx.beginPath();ctx.moveTo(g.x,g.y);ctx.arc(g.x,g.y,reach,g.a-g.look,g.a+g.look);ctx.closePath();ctx.fillStyle=g.state==='alert'?'#d64c442c':g.state==='investigate'?'#d8a84120':'#adc49a15';ctx.fill();ctx.strokeStyle=col+'55';ctx.lineWidth=1;ctx.stroke();}
// distraction ring
if(noiseAt){let r=23+Math.sin(clock*9)*5;ctx.strokeStyle='#e0c378aa';ctx.beginPath();ctx.arc(noiseAt.x,noiseAt.y,r,0,7);ctx.stroke();ctx.strokeStyle='#e0c37855';ctx.beginPath();ctx.arc(noiseAt.x,noiseAt.y,r+10,0,7);ctx.stroke()}
// guards
for(let g of guards){let down=g.state==='down'||g.stun>0;ctx.save();ctx.translate(g.x,g.y);ctx.rotate(g.a);ctx.fillStyle='#11171266';ctx.beginPath();ctx.ellipse(0,5,14,9,0,0,7);ctx.fill();if(!down){ctx.fillStyle='#b8ab82';ctx.fillRect(-11,-5,19,10);ctx.fillStyle='#39443c';ctx.beginPath();ctx.ellipse(0,0,12,8,0,0,7);ctx.fill();ctx.fillStyle='#b98e70';ctx.beginPath();ctx.arc(2,0,5,0,7);ctx.fill();ctx.fillStyle='#ddd0ac';ctx.fillRect(4,-2,7,2);ctx.fillStyle='#272e28';ctx.fillRect(-5,-7,7,3);ctx.fillStyle='#89774e';ctx.fillRect(-3,6,6,2)}else{ctx.fillStyle='#485047';ctx.beginPath();ctx.ellipse(0,0,14,7,.2,0,7);ctx.fill();ctx.fillStyle='#bc8e70';ctx.beginPath();ctx.arc(10,-2,4,0,7);ctx.fill()}ctx.restore();if(!down){ctx.fillStyle=g.state==='alert'?'#dd5d53':g.state==='investigate'?'#d6a652':'#90ad84';ctx.beginPath();ctx.arc(g.x,g.y-18,3,0,7);ctx.fill();if(g.s>2){ctx.fillStyle='#222822';ctx.fillRect(g.x-13,g.y-25,26,3);ctx.fillStyle='#dc8052';ctx.fillRect(g.x-13,g.y-25,26*Math.min(g.s/100,1),3)}}}
// player shadow and ring
ctx.fillStyle=player.hidden?'#82b99a1c':'#e3c66c12';ctx.beginPath();ctx.arc(player.x,player.y,player.hidden?25:18,0,7);ctx.fill();ctx.save();ctx.translate(player.x,player.y);ctx.rotate(player.a);ctx.fillStyle='#10161288';ctx.beginPath();ctx.ellipse(-1,7,16,10,0,0,7);ctx.fill();let hc=heroes[hero];ctx.fillStyle=hc.coat;ctx.beginPath();ctx.ellipse(-1,0,13,9,0,0,7);ctx.fill();ctx.fillStyle=hc.skin;ctx.beginPath();ctx.arc(7,0,5.5,0,7);ctx.fill();ctx.fillStyle=hc.hair;ctx.beginPath();ctx.arc(8,-1,5,Math.PI,Math.PI*2);ctx.fill();ctx.fillStyle='#d3bd82';ctx.fillRect(1,-8,5,2);ctx.strokeStyle='#dec67b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(11,0);ctx.lineTo(18,0);ctx.stroke();ctx.restore();if(player.hidden){ctx.strokeStyle='#8ec4a5aa';ctx.setLineDash([3,5]);ctx.beginPath();ctx.arc(player.x,player.y,18,0,7);ctx.stroke();ctx.setLineDash([])}
// ambience, vignette and map frame
let vg=ctx.createRadialGradient(W/2,H/2,240,W/2,H/2,770);vg.addColorStop(0,'#00000000');vg.addColorStop(1,'#060b0a88');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);ctx.strokeStyle='#a5966955';ctx.strokeRect(7,7,W-14,H-14);
if(won||lost){ctx.fillStyle='#0a100dd9';ctx.fillRect(0,0,W,H);ctx.textAlign='center';ctx.fillStyle=won?'#e4d3a6':'#df8371';ctx.font='600 42px "Playfair Display",serif';ctx.fillText(won?'Ночь приняла вас':'Вас заметили',W/2,H/2-18);ctx.fillStyle='#c2c1ae';ctx.font='15px Manrope,sans-serif';ctx.fillText(won?'Реестр в безопасности. Гавань ещё может измениться.':'Стража подняла тревогу. Попробуйте другой путь.',W/2,H/2+17);ctx.fillStyle='#b8a66e';ctx.font='11px monospace';ctx.fillText('НАЖМИТЕ «СНАЧАЛА», ЧТОБЫ ПРОДОЛЖИТЬ',W/2,H/2+52);ctx.textAlign='left'}
}

const roster=document.getElementById('roster');
let soundOn=true,audioContext=null;
function playTone(freq=440,duration=.08,type='sine',volume=.035){
 if(!soundOn)return;
 try{
  audioContext??=new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==='suspended')audioContext.resume();
  const osc=audioContext.createOscillator(),gain=audioContext.createGain();
  osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(volume,audioContext.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+duration);
  osc.connect(gain);gain.connect(audioContext.destination);osc.start();osc.stop(audioContext.currentTime+duration);
 }catch(_){/* Audio is optional; gameplay must work without it. */}
}
function renderRoster(){
 roster.innerHTML=heroes.map((h,i)=>`<button class="hero-choice${i===hero?' active':''}" type="button" data-hero="${i}" aria-pressed="${i===hero}"><span class="portrait" style="--p1:${h.p1};--p2:${h.p2};--skin:${h.skin};--hair:${h.hair};--coat:${h.coat}"><i></i></span><span><strong class="choice-name">${h.name}</strong><small class="choice-role">${h.role}</small></span></button>`).join('');
}
function chooseHero(index){if(!Number.isInteger(index)||index<0||index>=heroes.length)return;hero=index;renderRoster();updateUI();playTone(360+index*24,.07,'triangle',.022)}
function doAction(action){
 if(action==='interact'){knock();playTone(500,.08,'triangle');return}
 if(action==='blink'){blink();playTone(680,.11,'sine');return}
 if(action==='bottle'){throwNoise();playTone(220,.16,'triangle');return}
}
function setKeyFromEvent(event,value){
 const key=event.key.toLowerCase();
 const mapping={w:'w',arrowup:'arrowup',s:'s',arrowdown:'arrowdown',a:'a',arrowleft:'arrowleft',d:'d',arrowright:'arrowright',shift:'shift'};
 if(mapping[key])keys[mapping[key]]=value;
}
window.addEventListener('keydown',event=>{
 const key=event.key.toLowerCase();
 if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(key))event.preventDefault();
 if(event.repeat)return;
 setKeyFromEvent(event,true);
 if(key===' '||key==='spacebar')doAction('blink');
 if(key==='e'||key==='enter')doAction('interact');
 if(key==='q')doAction('bottle');
 if(key==='r')makeGame();
});
window.addEventListener('keyup',event=>setKeyFromEvent(event,false));
window.addEventListener('blur',()=>{keys={};touch={}});
roster.addEventListener('click',event=>{const button=event.target.closest('[data-hero]');if(button)chooseHero(Number(button.dataset.hero))});
document.getElementById('restartBtn').addEventListener('click',()=>{makeGame();playTone(300,.09,'triangle')});
document.getElementById('soundBtn').addEventListener('click',event=>{
 soundOn=!soundOn;event.currentTarget.textContent=soundOn?'🔊 ЗВУК ВКЛ':'🔇 ЗВУК ВЫКЛ';
 if(soundOn)playTone(520,.08,'sine');
});
document.querySelectorAll('.touch-btn').forEach(button=>{
 const action=button.dataset.key;
 const start=event=>{event.preventDefault();button.setPointerCapture?.(event.pointerId);if(['up','down','left','right','sneak'].includes(action)){touch[action]=true;button.classList.add('pressed')}else doAction(action)};
 const end=event=>{event.preventDefault();if(['up','down','left','right','sneak'].includes(action)){touch[action]=false;button.classList.remove('pressed')}};
 button.addEventListener('pointerdown',start);button.addEventListener('pointerup',end);button.addEventListener('pointercancel',end);button.addEventListener('lostpointercapture',end);
});
function animate(now){const dt=Math.min(.04,Math.max(0,(now-last)/1000));last=now;update(dt);draw();requestAnimationFrame(animate)}
renderRoster();makeGame();requestAnimationFrame(animate);

