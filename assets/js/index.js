const navbar = document.querySelector('.navbar');
const menuBar = document.querySelector('.ri-menu-line');
const sidebar = document.querySelector('.navigation');
const iconClose = document.querySelector('.ri-close-line');

window.addEventListener('scroll', () => {
  const positionWindow = window.scrollY > 0;

  navbar.classList.toggle('scrolling-active', positionWindow);
  sidebar.classList.remove('menu-active');
});

menuBar.addEventListener('click', () => {
  sidebar.classList.toggle('menu-active');
});

iconClose.addEventListener('click', () => {
  sidebar.classList.remove('menu-active');
});
