const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();

let bengali=false;
const languageToggle=document.getElementById('languageToggle');
languageToggle.addEventListener('click',()=>{
  bengali=!bengali;
  document.documentElement.lang=bengali?'bn':'en';
  document.querySelectorAll('[data-en][data-bn]').forEach(el=>{el.textContent=bengali?el.dataset.bn:el.dataset.en;});
  languageToggle.textContent=bengali?'English':'বাংলা';
});

const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{
  lightboxImage.src=button.dataset.full;
  lightboxImage.alt=button.querySelector('img').alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src='';}
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#mainNav a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));}
}),{rootMargin:'-25% 0px -65% 0px'});
sections.forEach(section=>observer.observe(section));
