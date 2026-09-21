// Native disclosures and forms; no data leaves this local design preview.
const siteMenus = [...document.querySelectorAll('.site-header details')];
siteMenus.forEach(menu => {
  menu.addEventListener('toggle', () => { if (menu.open) siteMenus.forEach(other => { if (other !== menu) other.open = false; }); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
});
document.addEventListener('click', event => siteMenus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; }));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') siteMenus.forEach(menu => { if (menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });
});

// Lightweight, dependency-free image reveals inspired by the 21st.dev direction.
// Content stays fully visible when JavaScript is unavailable or motion is reduced.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = [...document.querySelectorAll('.service-photo, .about-visual, .inner-hero-grid > figure')];
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  revealTargets.forEach((target, index) => {
    target.classList.add('reveal-on-scroll');
    target.style.setProperty('--reveal-delay', `${index % 2 * 80}ms`);
  });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {threshold: .14, rootMargin: '0px 0px -8%'});
  revealTargets.forEach(target => revealObserver.observe(target));
}

document.querySelectorAll('[data-preview-form]').forEach(form => {
  const result = form.querySelector('[role="status"]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    result.hidden = false;
    result.textContent = 'Your example fields are complete. This is a design preview: nothing has been sent or stored. For a real enquiry, please call 818-532-5353.';
    result.focus();
  });
  form.addEventListener('input', () => { result.hidden = true; });
  form.querySelector('[data-form-submit]').disabled = false;
});

document.querySelectorAll('[data-services-video]').forEach(panel => {
  const video = panel.querySelector('video');
  const playButton = panel.querySelector('[data-services-video-play]');
  playButton.addEventListener('click', () => video.play());
  video.addEventListener('play', () => { playButton.hidden = true; });
  video.addEventListener('ended', () => { playButton.hidden = false; });
});
