// Approved client media. An empty value retains the still-image fallback.
const HERO_VIDEO = 'assets/hero-introduction.mp4';
const INTRO_VIDEO = '';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.cinema-hero');
const heroVideo = document.getElementById('hero-video');
const heroMotion = document.getElementById('hero-motion');
const heroFrames = [...document.querySelectorAll('.hero-image')];
const dialog = document.getElementById('intro-dialog');
const HERO_FRAME_MS = 2500;
let heroFrame = 0;
let heroTimer;
let heroPaused = reducedMotion.matches;
function syncHeroMotion() {
  const paused = heroPaused || document.hidden || dialog.open;
  clearInterval(heroTimer);
  hero.classList.toggle('motion-is-paused', paused);
  heroMotion.setAttribute('aria-pressed', String(heroPaused));
  heroMotion.textContent = heroPaused ? 'Resume preview' : 'Pause preview';
  if (HERO_VIDEO) {
    if (paused) heroVideo.pause();
    else heroVideo.play().catch(() => setHeroPaused(true));
  } else if (!paused) {
    heroTimer = setInterval(() => {
      heroFrames[heroFrame].classList.remove('is-active');
      heroFrame = (heroFrame + 1) % heroFrames.length;
      heroFrames[heroFrame].classList.add('is-active');
    }, HERO_FRAME_MS);
  }
}
function setHeroPaused(paused) {
  heroPaused = paused;
  syncHeroMotion();
}
if (HERO_VIDEO) {
  heroVideo.src = HERO_VIDEO;
  heroVideo.hidden = false;
  document.querySelector('.hero-video-label').hidden = true;
  heroVideo.addEventListener('error', () => { heroVideo.hidden = true; setHeroPaused(true); });
}
heroMotion.hidden = false;
hero.classList.add('motion-ready');
setHeroPaused(heroPaused);
heroMotion.addEventListener('click', () => setHeroPaused(!heroPaused));
reducedMotion.addEventListener('change', event => { if (event.matches) { setHeroPaused(true); stopIntro(); } });
const demo = document.getElementById('intro-demo');
const introVideo = document.getElementById('intro-video');
const introMotion = document.getElementById('intro-motion');
const scenes = [...document.querySelectorAll('.intro-scene')];
const sceneButtons = [...document.querySelectorAll('.scene-buttons button')];
let scene = 0;
let timer;
function showScene(index) {
  scene = index;
  scenes.forEach((element, i) => { element.hidden = i !== index; });
  sceneButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
}
function stopIntro() {
  clearInterval(timer); timer = null;
  demo.classList.add('intro-is-paused');
  introMotion.textContent = scene === 2 ? 'Replay preview' : 'Resume preview';
}
function playIntro() {
  if (scene === 2) showScene(0);
  demo.classList.remove('intro-is-paused');
  introMotion.textContent = 'Pause preview';
  clearInterval(timer);
  timer = setInterval(() => { if (scene < 2) showScene(scene + 1); else stopIntro(); }, 3000);
}
introMotion.addEventListener('click', () => timer ? stopIntro() : playIntro());
sceneButtons.forEach(button => button.addEventListener('click', () => { showScene(Number(button.dataset.scene)); stopIntro(); }));
document.querySelectorAll('[data-open-intro]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', () => {
    dialog.showModal();
    syncHeroMotion();
    if (INTRO_VIDEO) {
      demo.hidden = true; introVideo.hidden = false; introVideo.src = INTRO_VIDEO;
      document.getElementById('intro-note').textContent = 'Orange Home Health · Introduction';
      introVideo.play().catch(() => { document.getElementById('intro-note').textContent = 'Use the player controls to start the introduction.'; });
    } else {
      showScene(0);
      reducedMotion.matches ? stopIntro() : playIntro();
    }
  });
});
introVideo.addEventListener('error', () => { document.getElementById('intro-note').textContent = 'This video could not be loaded. Please try again later or call 818-532-5353.'; });
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { stopIntro(); introVideo.pause(); syncHeroMotion(); });
document.addEventListener('visibilitychange', () => { syncHeroMotion(); if (document.hidden) { stopIntro(); introVideo.pause(); } });
