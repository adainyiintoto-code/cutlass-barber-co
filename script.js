document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-menu]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const closeBtn = document.querySelector('[data-close-menu-btn]');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
  document.querySelectorAll('[data-close-menu]').forEach(el => {
    el.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
