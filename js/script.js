window.addEventListener("DOMContentLoaded", () => {
  // hero swiper
  var heroSwiper = new Swiper(".hero__swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1.3,
    spaceBetween: 30,
    speed: 700,
    centeredSlides: true,
    initialSlide: 1,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
});
