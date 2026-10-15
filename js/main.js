
const N=[['index','Home'],['about','About'],['services','Services'],['autism','Autism'],['nature-therapy','Nature Therapy'],['contact','Contact']],
p=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index',$=s=>[...document.querySelectorAll(s)],I=id=>document.getElementById(id),
L=N.map(([h,t])=>`<a href="${h}.html"${h==p?' class="act"':''}>${t}</a>`).join('');
I('hd').innerHTML=`<div class="bar gl"><a class="lg" href="index.html"><i></i><span>Integrated<br>Wellness</span></a><nav id="nv">${L}<a class="btn" href="contact.html">Book a consult</a></nav><button id="bg" aria-label="Menu" aria-expanded="false"><b></b><b></b></button></div>`;
I('ft').innerHTML=`<div class="w fg"><div><span class="fb">Integrated Wellness Strategies</span><p>Debra S. Trasati, PMHNP-BC<br>Psychiatric Nurse Practitioner</p></div><div>${L.replace(/ class="act"/,'')}</div><div><a href="mailto:hello@integratedwellnessstrategies.com">hello@integratedwellnessstrategies.com</a><a href="tel:+17034896700">703-489-6700</a><p style="margin-top:10px">If you are in crisis, call or text 988.</p></div></div><p class="cp">&copy; ${new Date().getFullYear()} Integrated Wellness Strategies LLC</p>`;
const bg=I('bg'),nv=I('nv');
bg.onclick=()=>{const o=nv.classList.toggle('o');bg.classList.toggle('x',o);bg.setAttribute('aria-expanded',o)};
nv.onclick=e=>{if(e.target.closest('a')){nv.classList.remove('o');bg.classList.remove('x')}};
function cnt(el){const n=+el.dataset.n,t=performance.now();(function f(now){const k=Math.min(1,(now-t)/1600);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(el.dataset.s||'');if(k<1)requestAnimationFrame(f)})(t)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.dataset.n)cnt(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$('.rv,[data-n]').forEach(x=>io.observe(x));
$('.mq div').forEach(d=>d.innerHTML+=d.innerHTML);
const pr=matchMedia('(prefers-reduced-motion:reduce)').matches?[]:$('[data-p]');let tk=0;
function sc(){tk=0;I('pg').style.width=(scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100)+'%';
pr.forEach(i=>{const r=i.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const m=r.height*.1;i.style.transform=`translate3d(0,${Math.max(-m,Math.min(m,(r.top+r.height/2-innerHeight/2)*-.12))}px,0)`})}
addEventListener('scroll',()=>tk||(tk=requestAnimationFrame(sc)),{passive:true});sc();
$('[data-tilt]').forEach(c=>{c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
const f=I('fm');f&&f.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(f),b=f.querySelector('button');b.disabled=true;b.textContent='Sending…';
try{const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d)});if(!r.ok)throw 0}
catch{location.href='mailto:hello@integratedwellnessstrategies.com?subject='+encodeURIComponent('Inquiry: '+d.get('topic'))+'&body='+encodeURIComponent(d.get('message')+'\n\n'+d.get('name')+' · '+d.get('email'))}
f.innerHTML='<h3>Thank you.</h3><p>Your message is on its way. We will be in touch soon.</p>'});
