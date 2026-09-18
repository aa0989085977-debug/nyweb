document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const collapseElement = document.querySelector('#siteNav');
  const navCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24));
  navLinks.forEach((link) => link.addEventListener('click', () => {
    if (window.innerWidth < 992) navCollapse.hide();
  }));

  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
});
