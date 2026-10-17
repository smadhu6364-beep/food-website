const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const scrollTop = document.querySelector('#scroll-top');

menu.addEventListener('click', () => {
  const open = navbar.classList.toggle('active');
  menu.classList.toggle('fa-times', open);
  menu.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after picking a link
navbar.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
    menu.setAttribute('aria-expanded', 'false');
  })
);

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
  menu.setAttribute('aria-expanded', 'false');
  scrollTop.classList.toggle('active', window.scrollY > 60);
}, { passive: true });

// Hide the loader once the page has loaded (short pause so it doesn't flash)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader-container').classList.add('fade-out');
  }, 800);
});
