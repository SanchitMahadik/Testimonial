const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});