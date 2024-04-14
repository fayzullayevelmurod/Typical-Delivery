window.addEventListener("DOMContentLoaded", () => {
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
    autoplay: {
      delay: 3000,
    },
  });

  // Timer

  const deadline = "2024-04-22";

  function getTimeRemaining(endtime) {
    let days, hours, minutes;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24));
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timer / 1000 / 60) % 60);
    }

    return { timer, days, hours, minutes };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      timeInterval = setInterval(updatClock, 1000);

    updatClock();

    function updatClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // products
  const products = document.querySelectorAll(".product__card");
  const productName = document.querySelectorAll(".product__name");
  const productDesc = document.querySelectorAll(".product__desc");
  products.forEach((product) => {
    const openProductInfoBtn = product.querySelector(".info__btn");
    const productInfoBox = product.querySelector(".product__info-list");
    openProductInfoBtn.addEventListener("click", () => {
      openProductInfoBtn.classList.toggle("active");
      productInfoBox.classList.toggle("active");
    });
  });
  const maxLengthProductName = 46;
  const maxLengthProductDesc = 126;

  productName.forEach((item) => {
    if (item.textContent.length > maxLengthProductName) {
      item.textContent =
        item.textContent.slice(0, maxLengthProductName) + "...";
    }
  });

  productDesc.forEach((description) => {
    if (description.textContent.length > maxLengthProductDesc) {
      description.textContent =
        description.textContent.slice(0, maxLengthProductDesc) + "...";
    }
  });

  // read more
  const redMoreBtn = document.querySelector(".read__more");
  const readMoreText = document.querySelector(".read__more span");
  const hideText = document.querySelector(".hide__text");

  redMoreBtn.addEventListener("click", () => {
    hideText.classList.toggle("show");
    redMoreBtn.classList.toggle("active");
    if (readMoreText.textContent === "Читать полностью") {
      readMoreText.textContent = "Свернуть";
    } else {
      readMoreText.textContent = "Читать полностью";
    }
  });

  // sticky header
  document.addEventListener("scroll", () => {
    const defaultLogo = document.querySelector(".default__logo");
    const stickytLogo = document.querySelector(".sticky__logo");
    const headerTop = document.querySelector(".header__right-top");
    if (window.scrollY > 0) {
      defaultLogo.style.display = "none";
      stickytLogo.style.display = "block";
      headerTop.style.display = "none";
      console.log("sa");
    } else {
      headerTop.style.display = "flex";
      defaultLogo.style.display = "block";
      stickytLogo.style.display = "none";
      console.log("al");
    }
  });
});
