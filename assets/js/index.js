const navbar = document.querySelector('.navbar');
const menuBar = document.querySelector('.ri-menu-line');
const sidebar = document.querySelector('.navigation');
const iconClose = document.querySelector('.ri-close-line');
const positionWindow = window.scrollY > 0;

window.addEventListener('DOMContentLoaded', function () {
  if (positionWindow) {
    navbar.classList.toggle('scrolling-active', positionWindow);
  }
});

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolling-active', positionWindow);
  sidebar.classList.remove('menu-active');
});

menuBar.addEventListener('click', () => {
  sidebar.classList.toggle('menu-active');
});

iconClose.addEventListener('click', () => {
  sidebar.classList.remove('menu-active');
});

// swiper
var swiper = new Swiper('.mySwiper', {
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// AOS
AOS.init({
  once: true,
});
