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
      days = timer.querySelector(".days"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
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
  const maxLengthProductName = window.innerWidth >= 480 ? 25 : 46;
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
    } else {
      headerTop.style.display = "flex";
      defaultLogo.style.display = "block";
      stickytLogo.style.display = "none";
    }
  });

  // modal
  const authModal = document.querySelector(".auth__modal");
  const openModal = document.querySelector(".auth__modal-open");
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
  openModal.addEventListener("click", showModal);
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
        errorText.classList.add("show");
      }
    });
  });
  phoneInput.addEventListener("click", () => {
    placeholderText.classList.add("up");
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
    codeText.classList.add("show");
    this.setAttribute("disabled", "true");
    this.classList.add("disabled");
    startCountdown();
  });

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
  filterBox.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      clearBtn.addEventListener("click", () => {
        item.classList.remove("active");
      });
    });
  });

  const filterModal = document.querySelector(".filter__modal");
  const openFilterModal = document.querySelector(".open__filter-modal");
  const closeFilterModal = document.querySelector(".filter__modal-close");
  const applyBtn = document.querySelector(".apply__btn");

  function showFilterModal() {
    filterModal.classList.add("show");
    modalOverlay.classList.add("show");
    wrapper.classList.add("blur");
    document.body.style.overflow = "hidden";
  }
  function hideFilterModal() {
    filterModal.classList.remove("show");
    modalOverlay.classList.remove("show");
    wrapper.classList.remove("blur");
    document.body.style.overflow = "auto";
  }
  openFilterModal.addEventListener("click", showFilterModal);
  closeFilterModal.addEventListener("click", hideFilterModal);
  applyBtn.addEventListener("click", hideFilterModal);

  filterModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("filter__modal")) {
      hideFilterModal();
    }
  });

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
      selectOption.classList.add("");
      selectBox.classList.remove("active");
    });
  });

  // num__code
  const inputsTwo = document.querySelectorAll(".checker__input");
  // const numCodeInput = document.querySelector(".num__code-input");
  const warningCode = document.querySelector(".warning__code");
  const selectedTextTwo = document.querySelector(".selected__text");

  const numCodeInput = document.querySelector(".num__code-input");

  numCodeInput.addEventListener("input", function () {
    // Faqat raqam kiritsin
    this.value = this.value.replace(/\D/g, "");

    // 4 ta raqamdan ortiq kiritilmasin
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
  const form = document.querySelector(".back__call");
  const numCode = document.querySelector(".num__code").textContent;

  form.addEventListener("submit", function (event) {
    // Kiritilgan qiymat num__code qiymatiga teng bo'lmagan bo'lsa
    if (numCodeInput.value.trim() !== numCode.trim()) {
      event.preventDefault();
      warningCode.classList.add("show");
    }
  });

  const openCallModal = document.querySelector(".open__call-modal");
  const closeCallModal = document.querySelector(".call__modal-close");
  function showCallModal() {
    form.classList.add("show");
    wrapper.classList.add("blur");
    document.body.style.overflow = "hidden";
  }
  function hideCallModal() {
    form.classList.remove("show");
    wrapper.classList.remove("blur");
    document.body.style.overflow = "auto";
  }
  openCallModal.addEventListener("click", showCallModal);
  closeCallModal.addEventListener("click", hideCallModal);
  form.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("back__call")) {
      hideCallModal();
    }
  });
});
