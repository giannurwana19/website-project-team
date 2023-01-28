const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const positionWindow = window.scrollY > 0;

  navbar.classList.toggle('scrolling-active', positionWindow);
});
