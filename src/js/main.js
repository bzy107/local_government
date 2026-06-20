/* Mobile menu toggle */
const toggle = document.querySelector('.menu-toggle');
const nav    = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) nav.classList.remove('open');
  });
}

/* Active nav link */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
