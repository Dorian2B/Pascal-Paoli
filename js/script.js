/* ============================================================
   Pascal Paoli — Scripts interactifs
   Menu mobile, défilement actif, animation d'apparition.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(li => {
    if (li.getAttribute('href') === current) li.classList.add('active');
  });
  const observables = document.querySelectorAll('.card, .timeline-item, .prose h3, .chiffre');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observables.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      obs.observe(el);
    });
  } else {
    observables.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
  }
});
