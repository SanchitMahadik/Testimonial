const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});