let scrollPosition = 0;
window.addEventListener("resize", () => {
  if (window) {
  }
});
try {
  var productTwoSwiper = new Swiper(".product__four-swiper", {
    slidesPerView: 4.5,
    speed: 700,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
    },
  });
} catch (error) {}
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

let lastScrollTop = 0;
const headerNav = document.querySelector("header");
const flexibleBox = document.querySelector(".flexible__box");
const notificationBox = document.querySelector(".notification__box");
const stickyFilter = document.querySelector(".sticky__filter");
function s() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop < 15) {
    if (notificationBox) notificationBox.style.top = "137px";
  } else {
    if (notificationBox) notificationBox.style.top = "85px";
  }
}
window.addEventListener("load", s);
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  s();
  if (scrollTop > 250) {
    if (scrollTop > lastScrollTop) {
      headerNav.style.top = "-100px";
      headerNav.style.opacity = "0";
      if (flexibleBox) flexibleBox.style.top = "1rem";
      if (notificationBox) notificationBox.style.top = "1rem";
      if (stickyFilter) stickyFilter.style.top = "1rem";
    } else {
      headerNav.style.top = "-5px";
      headerNav.style.opacity = "1";
      if (flexibleBox) flexibleBox.style.top = "85px";
      if (notificationBox) notificationBox.style.top = "85px";
      if (stickyFilter) stickyFilter.style.top = "85px";
    }
  }
  lastScrollTop = scrollTop;
});

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
    item.textContent = item.textContent.slice(0, maxLengthProductName) + "...";
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

// modal
const authModal = document.querySelector(".auth__modal");
const openModal = document.querySelectorAll(".auth__modal-open");
const modalOverlay = document.querySelector(".modal__overlay");
const authModalClose = document.querySelector(".auth__modal-close");
const sendButton = authModal.querySelector(".send__btn");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const body = document.querySelector("body");
function hideMOdal() {
  authModal.classList.remove("show");
  modalOverlay.classList.remove("show");
  // body.classList.remove("no-scroll", "blur");
  scrollEl();
}
function showModal() {
  authModal.classList.add("show");
  modalOverlay.classList.add("show");
  // body.classList.add("no-scroll", "blur");
  noScroll();
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
const authModalForm = authModal.querySelector(".modal__form");
const selectedText = document.querySelector(".selected__text");

if (phoneInput.value) {
  phoneInput.classList.add("up");
} else {
  phoneInput.classList.add("up");
}

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

authModalForm.addEventListener("submit", function (e) {
  let allInputsEmpty = true;
  let inputsArray = Array.from(inputs);
  let preventSubmit = false;

  inputsArray.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("danger");
      preventSubmit = true;
    } else {
      input.classList.remove("danger");
      allInputsEmpty = false;
    }
  });

  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("danger");
    preventSubmit = true;
  } else {
    phoneInput.classList.remove("danger");
  }

  if (allInputsEmpty) {
    placeholderText.classList.add("up");
    wrongCode.classList.add("show");
    preventSubmit = true;
  } else {
    if (numCodeInput.value.trim() !== numCode.trim()) {
      placeholderText.classList.add("up");
      wrongCode.classList.add("show");
      numCodeInput.classList.add("danger");
      preventSubmit = true;
    } else {
      placeholderText.classList.remove("up");
      wrongCode.classList.remove("show");
      numCodeInput.classList.remove("danger");
    }
  }

  if (preventSubmit) {
    e.preventDefault();
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
// (() => {
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
// })();

(() => {
  // try {
  const filterBox = $$(".filter__box");
  const applyBtn = $(".apply__btn");
  const clearBtn = $(".clear__btn");

  const updateApplyButtonStatus = () => {
    applyBtn.classList.toggle(
      "disabled",
      !filterBox.some((item) => item.classList.contains("active"))
    );
  };

  filterBox.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("active");
      updateApplyButtonStatus();
    });

    clearBtn.addEventListener("click", () => {
      item.classList.remove("active");
      updateApplyButtonStatus();
    });
  });

  applyBtn.addEventListener("click", () => {
    if (!applyBtn.classList.contains("disabled")) hideFilterModal();
  });

  const filterModal = $(".filter__modal");
  const openFilterModal = $(".open__filter-modal");
  const closeFilterModal = $(".filter__modal-close");

  const showFilterModal = () => {
    filterModal.classList.add("show");
    $(".modal__overlay").classList.add("show");
    $("body").classList.add("blur", "no-scroll");
  };

  const hideFilterModal = () => {
    filterModal.classList.remove("show");
    $(".modal__overlay").classList.remove("show");
    $("body").classList.remove("blur", "no-scroll");
  };

  openFilterModal.addEventListener("click", showFilterModal);
  closeFilterModal.addEventListener("click", hideFilterModal);

  filterModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("filter__modal"))
      hideFilterModal();
  });
  // } catch (error) {}
})();

try {
  const allSelect = document.querySelectorAll(".all__select");
  const workTimeInfo = document.querySelector(".work__time-info");
  allSelect.forEach((parentEl) => {
    const selectBox = parentEl.querySelector(".select__box");
    const selectOption = parentEl.querySelector(".option__box");
    const options = parentEl.querySelectorAll(".option");
    const selectedText = parentEl.querySelector(".selected__text");

    selectBox.addEventListener("click", (e) => {
      e.stopPropagation();
      allSelect.forEach((el) => {
        el.querySelector(".select__box").classList.remove("active");
        el.querySelector(".option__box").classList.remove("show");
      });
      selectOption.classList.toggle("show");
      selectBox.classList.toggle("active");
    });

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedText.value = option.querySelector(".select__text").textContent;
        selectedText.classList.add("active");
        selectOption.classList.remove("show");
        selectBox.classList.remove("active");
      });
    });
  });
  document.addEventListener("click", (e) => {
    allSelect.forEach((parentEl) => {
      const selectOption = parentEl.querySelector(".option__box");
      const selectBox = parentEl.querySelector(".select__box");
      if (!parentEl.contains(e.target)) {
        selectOption.classList.remove("show");
        selectBox.classList.remove("active");
      }
    });
  });
} catch (error) {
  console.log(error);
}

(() => {
  // num__code
  const inputsTwo = document.querySelectorAll(".checker__input");
  const warningCode = document.querySelector(".warning__code");
  const numCodeInput = document.querySelector(".num__code-input");
  // up__input
  const upBox = document.querySelectorAll(".up__box");
  const form = document.querySelector(".back__call");
  const numCode = document.querySelector(".num__code").textContent;
  const callFormBtn = form.querySelector(".call__form-btn");
  upBox.forEach((item) => {
    const upInput = item.querySelector(".up__input");
    const upText = item.querySelector(".up__text");
    const selectedText = form.querySelector(".selected__text");
    const selectBox = form.querySelector(".select__box");
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

    form.addEventListener("submit", function (e) {
      let allInputsEmpty = true;
      let inputs = [numCodeInput, upInput];
      let preventSubmit = false;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          input.classList.add("danger");
          preventSubmit = true;
        } else {
          input.classList.remove("danger");
          allInputsEmpty = false;
        }
      });

      if (selectedText.value.trim() === "") {
        selectBox.classList.add("danger");
        preventSubmit = true;
      } else {
        selectBox.classList.remove("danger");
      }

      if (allInputsEmpty) {
        upText.classList.add("up");
        warningCode.classList.add("show");
        preventSubmit = true;
      } else {
        if (numCodeInput.value.trim() !== numCode.trim()) {
          upText.classList.add("up");
          warningCode.classList.add("show");
          numCodeInput.classList.add("danger");
          preventSubmit = true;
        } else {
          warningCode.classList.remove("show");
          numCodeInput.classList.remove("danger");
        }
      }

      if (preventSubmit) {
        e.preventDefault();
      }
    });
  });

  numCodeInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });

  const openCallModal = document.querySelectorAll(".open__call-modal");
  const closeCallModal = document.querySelector(".call__modal-close");
  function hideCallModal() {
    form.classList.remove("show");
    scrollEl();
  }
  function showCallModal() {
    noScroll();
    form.classList.add("show");
  }
  openCallModal.forEach((btn) => btn.addEventListener("click", showCallModal));
  closeCallModal.addEventListener("click", hideCallModal);
  form.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("back__call")) {
      hideCallModal();
    }
  });
})();

function noScroll() {
  body.classList.add("blur-two", "no-scroll");
  // Hozirgi scroll pozitsiyasini saqlash
  scrollPosition = window.pageYOffset;
  // Body elementiga overflow hidden va fixed berish
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
}

function scrollEl() {
  body.classList.remove("blur-two", "no-scroll");
  // Body elementidan overflow hidden va fixedni olib tashlash
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.classList.remove("blur-two");

  // Scroll pozitsiyasini tiklash
  window.scrollTo(0, scrollPosition);
}

// index page tabs
(() => {
  try {
    const sections = $$(".products");
    const links = $$(".tab__header-box");

    const changeLinkState = () => {
      let index = sections.length;
      while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index].classList.add("active");
    };

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);

    links.forEach((link, index) => {
      link.addEventListener("click", () => {
        window.scrollTo({ top: sections[index].offsetTop - 75 });
      });
    });

    const tabHeaderItems = $$(".tab__header-box");
    tabHeaderItems.forEach((item) => {
      item.addEventListener("click", () => {
        tabHeaderItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });
  } catch (error) {}
})();
try {
  function initializeCounter(
    counter,
    incrementSelector,
    decrementSelector,
    numberSelector,
    priceSelector,
    pricePerItem,
    maxValue,
    minValue
  ) {
    const incrementButton = counter.querySelector(incrementSelector);
    const decrementButton = counter.querySelector(decrementSelector);
    const countNumber = counter.querySelector(numberSelector);
    const priceElement = counter.querySelector(priceSelector);
    const incrementButtonImg = incrementButton?.querySelector("img");

    let currentValue = 1;

    countNumber.textContent = currentValue;
    if (priceElement) {
      priceElement.textContent = `${pricePerItem * currentValue} ₽`;
    }

    const originalIncrementImgSrc = incrementButtonImg?.src;
    const newIncrementImgSrc = "./images/icons/stop.svg"; // Your new image path

    function updatePrice() {
      if (priceElement) {
        priceElement.textContent = `${pricePerItem * currentValue} ₽`;
      }
    }

    function increment() {
      if (currentValue < maxValue) {
        currentValue++;
        countNumber.textContent = currentValue;
        updatePrice();

        if (incrementButtonImg && currentValue === maxValue) {
          incrementButtonImg.src = newIncrementImgSrc;
        }
      }
    }

    function decrement() {
      if (currentValue > minValue) {
        currentValue--;
        countNumber.textContent = currentValue;
        updatePrice();

        if (incrementButtonImg && currentValue < maxValue) {
          incrementButtonImg.src = originalIncrementImgSrc;
        }
      }
    }

    incrementButton.addEventListener("click", increment);
    decrementButton.addEventListener("click", decrement);
  }

  const counters = document.querySelectorAll(".count__box");
  counters.forEach((counter) => {
    initializeCounter(
      counter,
      ".increment",
      ".decrement",
      ".count__number",
      ".new__price",
      1750,
      10,
      1
    );
  });

  const rightCounters = document.querySelectorAll(".right__td");
  rightCounters.forEach((counter) => {
    initializeCounter(
      counter,
      ".increment__two",
      ".decrement__two",
      ".count__number",
      ".price",
      59,
      10,
      1
    );
  });
} catch (error) {
  console.log(error);
}

try {
  var productTwoSwiper = new Swiper(".product__two-swiper", {
    slidesPerView: 5.4,
    speed: 700,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
    },
  });
} catch (error) {}

try {
  var productTwoSwiper = new Swiper(".product__three-swiper", {
    slidesPerView: 3.4,
    speed: 700,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
    },
  });
} catch (error) {}

// products modal
(() => {
  const productModal = document.querySelector(".product__modal");
  const openProductModal = document.querySelectorAll(".product__card");
  const closeProductModal = document.querySelector(".close__product-modal");

  function showProductModal() {
    productModal.classList.add("active");
    // body.classList.add("no-scroll", "blur");
    noScroll();
    modalOverlay.classList.add("show");
  }
  function hideProductModal() {
    productModal.classList.remove("active");
    // document.body.classList.remove("no-scroll");
    modalOverlay.classList.remove("show");
    // body.classList.remove("blur");
    scrollEl();
  }
  openProductModal.forEach((btn) => {
    const infoBtn = btn.querySelector(".info__btn");
    btn.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("info__btn") &&
        !e.target.classList.contains("info__icon") &&
        !e.target.classList.contains("close__icon")
      ) {
        showProductModal();
      }
    });
  });
  closeProductModal.addEventListener("click", hideProductModal);
  productModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("product__modal")) {
      hideProductModal();
    }
  });
})();
try {
} catch (error) {}

try {
  const titleEl = document.querySelectorAll(".title__el");

  titleEl.forEach((el) => {
    const titleSec = el.querySelector(".title__sec");
    const titleInfo = el.querySelector(".info__sec");

    if (titleSec) {
      titleSec.addEventListener("click", () => {
        titleSec.classList.toggle("active");
        titleInfo.classList.toggle("active");
      });
    }
  });
} catch (error) {}

try {
  const productCartBox = document.querySelectorAll(".product__cart-box");

  productCartBox.forEach((item) => {
    const addedCatText = item.querySelector(".added__cart-info");
    const clickerInput = item.querySelector(".clicker__input");
    if (clickerInput && clickerInput.checked) {
      addedCatText.classList.add("show");
    }
    clickerInput.addEventListener("change", () => {
      addedCatText.classList.toggle("show");
    });
  });
} catch (error) {
  console.log(error);
}

try {
  const productItem = document.querySelectorAll(".product__item");

  productItem.forEach((item, index) => {
    const deleteProductBtn = item.querySelector(".delete__product-btn");
    deleteProductBtn.addEventListener("click", () => {
      item.style.display = "none";
    });
  });
} catch (error) {}

// added product
try {
  const addedProductBtns = document.querySelectorAll(
    ".product__footer > .clicker__input"
  );
  const productNumber = document.querySelector(".product__number");
  const productCount = document.getElementById("product__count");
  const cartBox = document.querySelector(".cart__box");
  const notification = document.getElementById("notification");
  const closeBtn = notification.querySelector(".close__btn");
  const productAddedBtn = document.querySelector(".product__added-btn");
  let count = 0;

  productNumber.textContent = count;
  productCount.textContent = count;

  if (productAddedBtn) {
    productAddedBtn.addEventListener("click", () => {
      count++;
      productNumber.textContent = count;
      productCount.textContent = count;
      const timeOut = setTimeout(() => {
        if (notification.classList.contains("show")) {
          notification.classList.remove("show");
        }
      }, 5000);
      if (count > 0) {
        cartBox.classList.add("active");
        productNumber.classList.add("active");
        notification.classList.add("show");
      } else {
        cartBox.classList.remove("active");
        productNumber.classList.remove("active");
        notification.classList.remove("show");
      }
    });
  }
  addedProductBtns.forEach((btn) => {
    btn.addEventListener("change", () => {
      if (btn.checked) {
        count++;
      } else {
        count--;
      }
      productNumber.textContent = count;
      productCount.textContent = count;
      const timeOut = setTimeout(() => {
        if (notification.classList.contains("show")) {
          notification.classList.remove("show");
        }
      }, 5000);
      if (count > 0) {
        cartBox.classList.add("active");
        productNumber.classList.add("active");
        notification.classList.add("show");
      } else {
        cartBox.classList.remove("active");
        productNumber.classList.remove("active");
        notification.classList.remove("show");
        clearInterval(timeOut);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show");
  });
} catch (error) {
  console.log(error);
}

try {
  const promoInput = document.querySelector(".enter__promo-code");
  const errorPromoCodeText = document.querySelector(".error__code");
  const promoPrice = document.querySelector(".promo__price");
  const discountText = document.querySelector(".discount__text");
  const btn = document.querySelector(".next__tab");
  const validPromoCode = "0000";
  promoInput.addEventListener("input", function () {
    console.log("salom");
    if (promoInput.value.length > 4) {
      promoInput.value = promoInput.value.slice(0, 4);
    }

    const enteredCode = promoInput.value.trim();

    errorPromoCodeText.classList.remove("active");
    promoPrice.classList.remove("active");
    discountText.classList.remove("active");
    btn.classList.remove("active");

    if (enteredCode !== "") {
      btn.classList.add("active");
    }
  });

  btn.addEventListener("click", function () {
    const enteredCode = promoInput.value.trim();

    if (enteredCode === validPromoCode) {
      // Correct promo code entered
      errorPromoCodeText.classList.remove("active");
      promoPrice.classList.add("active");
      discountText.classList.add("active");
    } else {
      // Incorrect promo code entered
      errorPromoCodeText.classList.add("active");
      promoPrice.classList.remove("active");
      discountText.classList.remove("active");
    }
  });
} catch (error) {
  console.log(error);
}

try {
  const workTimeInfo = document.querySelector(".work__time-info-first");
  const selectedText = document.querySelector(".selected__text");
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const selectText = option.querySelector(".select__text").textContent;
      const time = option.querySelector("p").textContent;
      const status = option.querySelector(".status").textContent;

      selectedText.value = selectText;
      workTimeInfo.innerHTML = `${time} <br> ${status}`;

      const workTimeSpan = document.createElement("span");
      workTimeSpan.className = `status ${
        option.querySelector(".status").classList.contains("active")
          ? "active"
          : "closed"
      }`;
      workTimeSpan.textContent = status;

      workTimeInfo.innerHTML = `${time} <br>`;
      workTimeInfo.appendChild(workTimeSpan);
    });
  });
} catch (error) {}

// added selected product in basket
try {
  const checkboxes = document.querySelectorAll(".clicker__input");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const parentBox = this.closest(".product__cart-box");
      const productName = parentBox.querySelector(".product__name").textContent;
      const productImgSrc = parentBox
        .querySelector(".product__img img")
        .getAttribute("src");
      const productPrice =
        parentBox.querySelector(".product__price").textContent;
      const addedCartInfo = parentBox.querySelector(".added__cart-info");

      const orderDiv = document.querySelector(".order");

      if (this.checked) {
        const productItem = document.createElement("div");
        productItem.classList.add("order__tr", "product__item");
        productItem.innerHTML = `
                    <div class="left__td">
                        <div class="img__box">
                            <img src="${productImgSrc}" alt="product2-img" width="82" height="82">
                        </div>
                        <span class="product__title">${productName}</span>
                    </div>
                    <div class="right__td">
                        <div class="counter">
                            <button class="decrement__two">
                                <img src="images/icons/minus.svg" alt="">
                            </button>
                            <span class="count__number">1</span>
                            <button class="increment__two">
                                <img src="images/icons/plus-2.svg" alt="stop" width="18" height="18">
                            </button>
                        </div>
                        <span class="price">${productPrice}</span>
                        <button class="clear delete__product-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                `;
        orderDiv.appendChild(productItem);
        addedCartInfo.classList.add("show");

        const deleteBtn = productItem.querySelector(".delete__product-btn");
        deleteBtn.addEventListener("click", function () {
          productItem.remove();
          checkbox.checked = false;
          addedCartInfo.classList.remove("show");
        });
      } else {
        const items = orderDiv.querySelectorAll(".product__item");
        items.forEach((item) => {
          const title = item.querySelector(".product__title").textContent;
          if (title === productName) {
            item.remove();
          }
        });
      }
    });
  });
} catch (error) {}

const boxes = document.querySelectorAll(".timeline__right-box");
const circles = document.querySelectorAll(".sticky-circle");

function handleScroll() {
  const windowHeight = window.innerHeight;
  boxes.forEach((box, index) => {
    const rect = box.getBoundingClientRect();
    const circle = circles[index];

    if (rect.top <= windowHeight / 10 && rect.bottom >= windowHeight / 10) {
      box.classList.add("active");
      circle.classList.add("active");
    } else {
      box.classList.remove("active");
      circle.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();
