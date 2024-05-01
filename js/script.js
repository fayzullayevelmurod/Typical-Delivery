window.addEventListener("DOMContentLoaded", () => {
  function preloadImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      const dataSrc = img.getAttribute("data-src");
      if (dataSrc) {
        img.src = dataSrc;
        img.onload = () => {
          img.removeAttribute("data-src");
        };
      }
    });
  }

  window.addEventListener("load", preloadImages);

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
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
      576: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  // promotion__swiper
  var promotionSwiper = new Swiper(".promotion__swiper", {
    slidesPerView: 2.3,
    speed: 700,
    spaceBetween: 20,
    // navigation: {
    //   nextEl: "next__btn",
    //   prevEl: "prev__btn",
    // },
    navigation: {
      nextEl: ".next__btn",
      prevEl: ".prev__btn",
    },
  });
  // Timer

  // Timer

  const deadline = "2024-08-11";

  function getTimeRemaining(endtime) {
    let hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timer / 1000 / 60) % 60);
      seconds = Math.floor((timer / 1000) % 60);
    }

    return { timer, hours, minutes, seconds };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(endtime) {
    const promotion = document.querySelectorAll(".promotion__timer");
    promotion.forEach((item) => {
      const timer = item.querySelector(".timer"),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updatClock, 1000);

      updatClock();

      function updatClock() {
        const t = getTimeRemaining(endtime);

        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.timer <= 0) {
          clearInterval(timeInterval);
        }
      }
    });
  }
  setClock(deadline);

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
  const maxLengthProductName = window.innerWidth >= 480 ? 43 : 46;
  const maxLengthProductDesc = 96;

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
  try {
    const redMoreBtn = document.querySelector(".read__more");
    const readMoreText = document.querySelector(".read__more span");
    const hideText = document.querySelector(".hide__text");
    const dots = document.querySelector(".dots");
    redMoreBtn.addEventListener("click", () => {
      hideText.classList.toggle("show");
      redMoreBtn.classList.toggle("active");
      if (dots) {
        dots.classList.toggle("hide");
      }
      if (readMoreText.textContent === "Читать полностью") {
        readMoreText.textContent = "Свернуть";
      } else {
        readMoreText.textContent = "Читать полностью";
      }
    });
  } catch (error) {}

  // sticky header
  document.addEventListener("scroll", () => {
    const defaultLogo = document.querySelector(".default__logo");
    const stickytLogo = document.querySelector(".sticky__logo");
    const headerTop = document.querySelector(".header__right-top");
    if (window.scrollY > 0) {
      defaultLogo.style.display = "none";
      stickytLogo.style.display = "flex";
      headerTop.style.display = "none";
      // document.querySelector('header').classList.add('fixed');
    } else {
      headerTop.style.display = "flex";
      //
      defaultLogo.style.display = "block";
      stickytLogo.style.display = "none";
    }
  });
  // window.addEventListener("scroll", () => {
  //   const header = document.querySelector("header");
  //   header.classList.toggle("fixed", window.scrollY > 0);
  // });

  // modal
  const authModal = document.querySelector(".auth__modal");
  const openModal = document.querySelectorAll(".auth__modal-open");
  const modalOverlay = document.querySelector(".modal__overlay");
  const authModalClose = document.querySelector(".auth__modal-close");
  const sendButton = authModal.querySelector(".send__btn");
  const wrapper = document.querySelector(".wrapper");

  function hideMOdal() {
    authModal.classList.remove("show");
    modalOverlay.classList.remove("show");
    document.body.style.overflow = "auto";
    wrapper.classList.remove("blur");
  }
  function showModal() {
    authModal.classList.add("show");
    modalOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
    wrapper.classList.add("blur");
  }
  openModal.forEach((btn) => btn.addEventListener("click", showModal));
  authModalClose.addEventListener("click", hideMOdal);
  authModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("auth__modal")) {
      hideMOdal();
    }
  });

  // validate input

  const phoneInput = document.querySelector(".phone__input");
  const numberInputs = document.querySelectorAll(".number__input");
  const placeholderText = document.querySelector(".placeholder__text");
  const inputs = document.querySelectorAll(".enter__code-input");
  const errorText = document.querySelector(".error__text");
  const wrongCode = document.querySelector(".wrong__code");

  inputs.forEach(function (input, index) {
    input.addEventListener("input", function () {
      if (this.value.length > 0) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          sendButton.focus();
        }
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && this.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
  sendButton.addEventListener("click", function (e) {
    inputs.forEach(function (input) {
      if (input.value === "") {
        input.focus();
        return;
      }
      if (input.value && phoneInput.value) {
        input.classList.add("error");
      }
    });
    if (phoneInput.value) {
      e.preventDefault();
      wrongCode.classList.add("show");
    }
  });
  phoneInput.addEventListener("click", () => {
    phoneInput.placeholder = "+7-(---)--- -- --";
    placeholderText.classList.add("up");
    if (!phoneInput.value) {
      placeholderText.classList.add("up");
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target !== phoneInput && !phoneInput.value) {
      placeholderText.classList.remove("up");
      phoneInput.placeholder = "";
    }
  });

  const sendCodeButton = document.querySelector(".send__code-btn");
  const codeText = document.querySelector(".send__code-text");
  const endTime = document.querySelector(".end__time");

  let countdownTimer;
  let remainingTime = 119;

  function updateCountdown() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    endTime.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      codeText.classList.remove("show");
      sendCodeButton.classList.remove("disabled");
      sendCodeButton.removeAttribute("disabled");
      endTime.textContent = "0:00";
    } else {
      remainingTime--;
    }
  }

  function startCountdown() {
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
  }

  sendCodeButton.addEventListener("click", function () {
    if (!phoneInput.value) {
      errorText.classList.add("show");
    } else {
      errorText.classList.remove("show");
      startCountdown();
      this.setAttribute("disabled", "true");
      this.classList.add("disabled");
      codeText.classList.add("show");
    }
  });

  // media__header
  const mediaHeader = document.querySelector(".media__header");
  const openMenuBtn = document.querySelector(".hambuerger__menu");
  const closeMenuBtn = document.querySelector(".close__menu");
  const clearBtn = document.querySelector(".clear__btn");
  openMenuBtn.addEventListener("click", () => {
    mediaHeader.classList.add("show");
  });
  closeMenuBtn.addEventListener("click", () => {
    mediaHeader.classList.remove("show");
  });
  const numberInput = document.querySelector(".number__input");
  IMask(phoneInput, { mask: "+{7} (000) 000-00-00" });
  IMask(numberInput, { mask: "+{7} (000) 000-00-00" });

  // filter__box
  const filterBox = document.querySelectorAll(".filter__box");
  const applyBtn = document.querySelector(".apply__btn");

  filterBox.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      updateApplyButtonStatus();
      if (item.classList.contains("active")) {
        clearBtn.addEventListener("click", () => {
          item.classList.remove("active");
          updateApplyButtonStatus();
        });
      }
    });
  });

  function updateApplyButtonStatus() {
    let isActive = false;
    filterBox.forEach((item) => {
      if (item.classList.contains("active")) {
        isActive = true;
      }
    });

    if (isActive) {
      applyBtn.classList.remove("disabled");
    } else {
      applyBtn.classList.add("disabled");
    }
  }

  applyBtn.addEventListener("click", () => {
    if (!applyBtn.classList.contains("disabled")) {
      hideFilterModal();
    }
  });

  try {
    const filterModal = document.querySelector(".filter__modal");
    const openFilterModal = document.querySelector(".open__filter-modal");
    const closeFilterModal = document.querySelector(".filter__modal-close");

    function showFilterModal() {
      filterModal.classList.add("show");
      modalOverlay.classList.add("show");
      wrapper.classList.add("blur");
    }
    function hideFilterModal() {
      filterModal.classList.remove("show");
      modalOverlay.classList.remove("show");
      wrapper.classList.remove("blur");
    }
    openFilterModal.addEventListener("click", showFilterModal);
    closeFilterModal.addEventListener("click", hideFilterModal);

    filterModal.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("filter__modal")) {
        hideFilterModal();
      }
    });
  } catch (error) {}

  // select__box
  const selectBox = document.querySelector(".select__box");
  const selectOption = document.querySelector(".option__box");
  const options = document.querySelectorAll(".option");
  const selectedText = document.querySelector(".selected__text");

  selectBox.addEventListener("click", () => {
    selectOption.classList.toggle("show");
    selectBox.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedText.value = option.querySelector(".select__text").textContent;
      selectedText.classList.add("active");
      // selectOption.classList.add("");
      selectBox.classList.remove("active");
    });
  });

  // num__code
  const inputsTwo = document.querySelectorAll(".checker__input");
  const warningCode = document.querySelector(".warning__code");
  const numCodeInput = document.querySelector(".num__code-input");
  // up__input
  const upBox = document.querySelectorAll(".up__box");
  const form = document.querySelector(".back__call");
  const numCode = document.querySelector(".num__code").textContent;
  upBox.forEach((item) => {
    const upInput = item.querySelector(".up__input");
    const upText = item.querySelector(".up__text");
    upInput.addEventListener("click", () => {
      upText.classList.add("up");
    });
    upInput.addEventListener("focus", () => {
      if (!upInput.value.trim()) {
        upText.classList.add("active");
      }
    });

    upInput.addEventListener("blur", () => {
      if (!upInput.value.trim()) {
        upText.classList.remove("active");
      }
    });
    document.addEventListener("click", (event) => {
      if (event.target !== upInput && !upInput.value) {
        upText.classList.remove("up");
      }
    });
    form.addEventListener("submit", function (event) {
      if (numCodeInput.value.trim() !== numCode.trim()) {
        event.preventDefault();
        warningCode.classList.add("show");
      }
    });
  });
  numCodeInput.addEventListener("input", function () {
    // Faqat raqam kiritsin
    this.value = this.value.replace(/\D/g, "");

    // 4 ta raqamdan ortiq kiritilmasin
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });

  const openCallModal = document.querySelectorAll(".open__call-modal");
  const closeCallModal = document.querySelector(".call__modal-close");
  function showCallModal() {
    form.classList.add("show");
    wrapper.classList.add("blur");
    // document.body.style.overflow = "hidden";
  }
  function hideCallModal() {
    form.classList.remove("show");
    wrapper.classList.remove("blur");
    // document.body.style.overflow = "auto";
  }
  openCallModal.forEach((btn) => btn.addEventListener("click", showCallModal));
  closeCallModal.addEventListener("click", hideCallModal);
  form.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("back__call")) {
      hideCallModal();
    }
  });

  // window scroll
  try {
    const sections = document.querySelectorAll(".products");
    const links = document.querySelectorAll(".tab__header-box");

    function changeLinkState() {
      let index = sections.length;

      while (--index && window.scrollY + 80 < sections[index].offsetTop) {}

      links.forEach((link) => link.classList.remove("active"));
      links[index].classList.add("active");

      // if (window.innerWidth >= 1000) {
      //   links[index].scrollIntoView({ inline: "center", block: "nearest" });
      // }
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);

    links.forEach((link, index) => {
      link.addEventListener("click", () => {
        window.scrollTo({
          top: sections[index].offsetTop - 75,
          // behavior: "smooth",
        });
      });
    });
  } catch (error) {}

  // tabs
  const tabHeaderItems = document.querySelectorAll(".tab__header-box");

  tabHeaderItems.forEach((item) => {
    item.addEventListener("click", () => {
      tabHeaderItems.forEach((el) => {
        el.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  // counter
  try {
    // HTML elementlarini tanlash
    const counters = document.querySelectorAll(".counter"); // "counter" nomli classga ega barcha elementlarni tanlash

    // Har bir "counter" elementi uchun forEach() metodini ishlatish
    counters.forEach(function (counter) {
      const incrementButton = counter.querySelector(".increment"); // "increment" tugmasini tanlash
      const decrementButton = counter.querySelector(".decrement"); // "decrement" tugmasini tanlash
      const countNumber = counter.querySelector(".count__number"); // "count__number" nomli spanni tanlash

      // Balandlikni o'zgartirish funksiyalari
      function increment() {
        let currentValue = parseInt(countNumber.textContent);
        countNumber.textContent = currentValue + 1;
      }

      function decrement() {
        let currentValue = parseInt(countNumber.textContent);
        if (currentValue > 1) {
          countNumber.textContent = currentValue - 1;
        }
      }

      // Tugmachlarga hodisalar qo'shish
      incrementButton.addEventListener("click", increment);
      decrementButton.addEventListener("click", decrement);
    });
  } catch (error) {}

  try {
    var productTwoSwiper = new Swiper(".product__two-swiper", {
      slidesPerView: 5.4,
      speed: 700,
      spaceBetween: 10,
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
  } catch (error) {}
});
// click box
