// swiperConfig.js

// hero swiper
var heroSwiper = new Swiper(".hero__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1.3,
  spaceBetween: 30,
  speed: 900,
  centeredSlides: true,
  initialSlide: 1,
  watchOverflow: true,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// promotion swiper
var promotionSwiper = new Swiper(".promotion__swiper", {
  slidesPerView: 2.3,
  speed: 700,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next__btn",
    prevEl: ".prev__btn",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
  },
});

export { heroSwiper, promotionSwiper };
