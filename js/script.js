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
      if (flexibleBox) flexibleBox.style.top = "1rem";
      if (notificationBox) notificationBox.style.top = "1rem";
      if (stickyFilter) stickyFilter.style.top = "1rem";
    } else {
      headerNav.style.top = "-5px";
      if (flexibleBox) flexibleBox.style.top = "85px";
      if (notificationBox) notificationBox.style.top = "85px";
      if (stickyFilter) stickyFilter.style.top = "85px";
    }
  }
  lastScrollTop = scrollTop;
});

// ymaps
try {
  const center = [55.75864051344586, 37.6275861640625];
  function init() {
    let map = new ymaps.Map("map", {
      center: [55.75864051344586, 37.6275861640625],
      zoom: 10,
    });

    // Custom layout for the placemark
    let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="map__icons-content one" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/map-location.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="map__icon-info" style="margin-left: 8px;">Доставка</div>' +
        "</div>" +
        '<div class="map__icons-content two" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/map-location.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="map__icon-info" style="margin-left: 8px;">Доставка</div>' +
        "</div>" +
        '<div class="map__icons-content three" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/map-location.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="map__icon-info" style="margin-left: 8px;">Доставка</div>' +
        "</div>" +
        '<div class="map__icons-content four" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/map-location.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="map__icon-info" style="margin-left: 8px;">Доставка</div>' +
        "</div>" +
        '<div class="map__icons-content five" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/map-location.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="map__icon-info" style="margin-left: 8px;">Доставка</div>' +
        "</div>" +
        '<div class="map__icons-content six" style="display: flex; align-items: center;" gap="2px">' +
        '<img src="../images/icons/location1.svg" style="width: 34px; height: 34px;" alt="icon"/>' +
        '<div class="info__box">' +
        "<span>Семейное кафе</span>" +
        "<span>Россия, Севастополь, проспект Победы, 2</span>" +
        "</div>" +
        "</div>"
    );

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: MyIconContentLayout,
        iconImageSize: [34, 34],
        iconImageOffset: [-25, -52],
      }
    );

    map.controls.remove("geolocationControl"); // geolokatsiyani olib tashlash
    map.controls.remove("searchControl"); // qidiruvni olib tashlash
    map.controls.remove("trafficControl"); // trafik nazoratini olib tashlash
    map.controls.remove("typeSelector"); // tur tanlashni olib tashlash
    map.controls.remove("fullscreenControl"); // to'liq ekran rejimini olib tashlash
    map.controls.remove("zoomControl"); // zomm nazoratini olib tashlash
    map.controls.remove("rulerControl"); // o'lchov nazoratini olib tashlash
    map.behaviors.disable(["scrollZoom"]); // xarita scrollini o'chirish (ixtiyoriy)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);

  // const center = [55.75864051344586, 37.6275861640625];

  // function init() {
  //   let map = new ymaps.Map("map", {
  //     center: center,
  //     zoom: 10,
  //   });

  //   const locations = [
  //     { coords: [55.75864051344586, 37.6275861640625], text: "Доставка" },
  //     // { coords: [55.74864051344586, 37.6275861640625], text: "Доставка" },
  //     // { coords: [55.73864051344586, 37.6275861640625], text: "Доставка" },
  //     // { coords: [55.72864051344586, 37.6275861640625], text: "Доставка" },
  //     // { coords: [55.71864051344586, 37.6275861640625], text: "Доставка" },
  //     // { coords: [55.70864051344586, 37.6275861640625], text: "Семейное кафе" },
  //   ];

  //   locations.forEach((location) => {
  //     let placemark = new ymaps.Placemark(
  //       location.coords,
  //       {},
  //       {
  //         iconLayout: "default#imageWithContent",
  //         iconImageHref: "images/icons/location2.svg",
  //         iconImageSize: [34, 34],
  //         iconImageOffset: [-17, -17],
  //         iconContentOffset: [15, 15],
  //         iconContentLayout: ymaps.templateLayoutFactory.createClass(
  //           `<div  style="color: #000; display="flex"; z-index="9999999" font-weight: bold;">${location.text}</div>`
  //         ),
  //       }
  //     );

  //     map.geoObjects.add(placemark);
  //   });

  //   map.controls.remove("geolocationControl");
  //   map.controls.remove("searchControl");
  //   map.controls.remove("trafficControl");
  //   map.controls.remove("typeSelector");
  //   map.controls.remove("fullscreenControl");
  //   map.controls.remove("zoomControl");
  //   map.controls.remove("rulerControl");
  //   map.behaviors.disable(["scrollZoom"]);
  // }

  // ymaps.ready(init);
} catch (error) {}

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
// var heroSwiper = new Swiper(".product__three-swiper", {
//   navigation: {
//     nextEl: ".next-btn",
//     prevEl: ".prev-btn",
//   },
//   slidesPerView: 3.4,
//   spaceBetween: 10,
//   speed: 700,
//   centeredSlides: true,
//   initialSlide: 1,
//   watchOverflow: true,
//   centeredSlides: true,
//   breakpoints: {
//      1024: {
//       slidesPerView: 2.4,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3.3,
//       spaceBetween: 10,
//     },
//     0: {
//       slidesPerView: 1.3,
//       spaceBetween: 10,
//     },
//   },
// });
// slidesPerView: 3.4,
//   speed: 700,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".next-btn",
//     prevEl: ".prev-btn",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 5.4,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3.3,
//       spaceBetween: 10,
//     },
//     0: {
//       slidesPerView: 1.3,
//       spaceBetween: 10,
//     },
//   },
// });

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
  document.body.classList.remove("no-scroll");
  body.classList.remove("blur");
}
function showModal() {
  authModal.classList.add("show");
  modalOverlay.classList.add("show");
  document.body.classList.add("no-scroll");
  body.classList.add("blur");
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
    body.classList.add("blur");
    document.body.classList.add("no-scroll");
  }
  function hideFilterModal() {
    filterModal.classList.remove("show");
    modalOverlay.classList.remove("show");
    body.classList.remove("blur");
    document.body.classList.remove("no-scroll");
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

// const allSelect = document.querySelectorAll(".all__select");

// allSelect.forEach((parentEl) => {
//   const selectBox = parentEl.querySelector(".select__box");
//   const selectOption = parentEl.querySelector(".option__box");
//   const options = parentEl.querySelectorAll(".option");
//   const selectedText = parentEl.querySelector(".selected__text");

//   selectBox.addEventListener("click", () => {
//     selectOption.classList.toggle("show");
//     selectBox.classList.toggle("active");
//   });

//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       selectedText.value = option.querySelector(".select__text").textContent;
//       selectedText.classList.add("active");
//       selectBox.classList.remove("active");
//     });
//   });
//   document.addEventListener('click', (e) => {
//     if(!parentEl.contains(e.target)){
//       selectOption.classList.remove("show");
//       selectBox.classList.remove("active");
//     }
//   })
// });
const allSelect = document.querySelectorAll(".all__select");

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
  body.classList.add("blur-two");
  // document.body.style.overflow = "hidden";
}
function hideCallModal() {
  form.classList.remove("show");
  body.classList.remove("blur-two");
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
// try {
//   const counters = document.querySelectorAll(".count__box");
//   counters.forEach(function (counter) {
//     const incrementButton = counter.querySelector(".increment");
//     const decrementButton = counter.querySelector(".decrement");
//     const countNumber = counter.querySelector(".count__number");
//     const newPrice = counter.querySelector(".new__price");

//     let NEW_PRIEC = 1750;
//     let currentValue = 1;
//     if (newPrice) {
//       newPrice.textContent = `${NEW_PRIEC} ₽`;
//       newPrice.textContent = `${NEW_PRIEC * currentValue} ₽`;
//     }

//     function increment() {
//       let currentValue = parseInt(countNumber.textContent);
//       countNumber.textContent = currentValue + 1;
//       if (newPrice) {
//         newPrice.textContent = `${NEW_PRIEC * currentValue} ₽`;
//       }
//     }

//     function decrement() {
//       let currentValue = parseInt(countNumber.textContent);
//       if (currentValue > 1) {
//         countNumber.textContent = currentValue - 1;
//       }
//       if (newPrice && currentValue > 1) {
//         NEW_PRIEC--;
//         newPrice.textContent = `${NEW_PRIEC} ₽`;
//       }
//     }
//     incrementButton.addEventListener("click", increment);
//     decrementButton.addEventListener("click", decrement);
//   });
// } catch (error) {
//   console.log(error);
// }

// try {
//   const counters = document.querySelectorAll(".right__td");

//   counters.forEach(function (counter) {
//     const incrementButton = counter.querySelector(".increment__two");
//     const decrementButton = counter.querySelector(".decrement__two");
//     const countNumber = counter.querySelector(".count__number");
//     const countPrice = counter.querySelector(".price");
//     const incrementButtonImg = incrementButton.querySelector("img");

//     let currentValue = 1;
//     const maxValue = 10;
//     const minValue = 1;
//     const pricePerItem = 59;

//     countNumber.textContent = currentValue;
//     countPrice.textContent = `${pricePerItem * currentValue} ₽`;

//     const originalIncrementImgSrc = incrementButtonImg.src;
//     const newIncrementImgSrc = "./images/icons/stop.svg";

//     incrementButton.addEventListener("click", () => {
//       if (currentValue < maxValue) {
//         currentValue++;
//         countNumber.textContent = currentValue;
//         countPrice.textContent = `${pricePerItem * currentValue} ₽`;

//         if (currentValue === maxValue) {
//           incrementButtonImg.src = newIncrementImgSrc;
//         }
//       }
//     });

//     decrementButton.addEventListener("click", () => {
//       if (currentValue > minValue) {
//         currentValue--;
//         countNumber.textContent = currentValue;
//         countPrice.textContent = `${pricePerItem * currentValue} ₽`;

//         if (currentValue < maxValue) {
//           incrementButtonImg.src = originalIncrementImgSrc;
//         }
//       }
//     });
//   });
// } catch (error) {
//   console.log(error);
// }
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
        slidesPerView: 5.4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
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
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.1,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 2,
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
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
    },
  });
} catch (error) {}
// products modal
try {
  const productModal = document.querySelector(".product__modal");
  const openProductModal = document.querySelectorAll(".product__card");
  const closeProductModal = document.querySelector(".close__product-modal");

  function showProductModal() {
    productModal.classList.add("active");
    document.body.classList.add("no-scroll");
    modalOverlay.classList.add("show");
    body.classList.add("blur");
  }
  function hideProductModal() {
    productModal.classList.remove("active");
    document.body.classList.remove("no-scroll");
    modalOverlay.classList.remove("show");
    body.classList.remove("blur");
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
} catch (error) {}

// product tab
try {
  const productTabContent = document.querySelectorAll(".product__tab-content");
  const productTabItem = document.querySelectorAll(".product__tab-item");

  function hideProductContent() {
    productTabContent.forEach((content) => content.classList.remove("show"));
    productTabItem.forEach((item) => item.classList.remove("active"));
  }
  function showProductContent(idx = 0) {
    productTabContent[idx].classList.add("show");
    productTabItem[idx].classList.add("active");
  }
  hideProductContent();
  showProductContent();
  productTabItem.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      hideProductContent();
      showProductContent(idx);
    });
  });
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
  // const promoInput = document.querySelector(".enter__promo-code");
  // const errorPromoCodeText = document.querySelector(".error__code");
  // const promoPrice = document.querySelector(".promo__price");
  // const discountText = document.querySelector(".discount__text");
  // const btn = document.querySelector(".next__tab");
  // let promoCode = '0000';

  const promoInput = document.querySelector(".enter__promo-code");
  const errorPromoCodeText = document.querySelector(".error__code");
  const promoPrice = document.querySelector(".promo__price");
  const discountText = document.querySelector(".discount__text");
  const btn = document.querySelector(".next__tab");
  const validPromoCode = "0000";

  promoInput.addEventListener("input", function () {
    // Limiting input to 4 characters
    if (promoInput.value.length > 4) {
      promoInput.value = promoInput.value.slice(0, 4);
    }

    const enteredCode = promoInput.value.trim();

    // Resetting the classes
    errorPromoCodeText.classList.remove("active");
    promoPrice.classList.remove("active");
    discountText.classList.remove("active");
    btn.classList.remove("active");

    if (enteredCode === "") {
      // If no promo code is entered
      return;
    } else if (enteredCode === validPromoCode) {
      // If the correct promo code is entered
      btn.classList.add("active");
      promoPrice.classList.add("active");
      discountText.classList.add("active");
    } else {
      // If any other code is entered
      errorPromoCodeText.classList.add("active");
    }
  });
} catch (error) {
  console.log(error);
}

// scroll animation
// var nodes1 = Array.from(document.getElementsByClassName("timeline-badge"));
// var nodes2 = Array.from(document.getElementsByClassName("timeline-panel"));
// var nodes3 = Array.from(document.getElementsByClassName("timeline-panel-img"));
// const nodes = nodes1.concat(nodes2, nodes3);

// const cache = {
//   viewport: {},
//   rects: [],
// };
// window.addEventListener("load", init);

// function init() {
//   recache();
//   document.addEventListener("scroll", throttle(scrollCheck, 10));
//   window.addEventListener("resize", debounce(recache, 50));
// }

// function recache() {
//   cache.viewport = {
//     width: window.innerWidth,
//     height: window.innerHeight,
//   };
//   nodes.forEach((node, i) => {
//     cache.rects[i] = rect(node);
//   });
//   scrollCheck();
// }

// function scrollCheck() {
//   const offset = getScrollOffset();
//   const midline = cache.viewport.height * 0.5;
//   cache.rects.forEach((rect, i) => {
//     nodes[i].classList.toggle("active", rect.y - offset.y < midline);
//   });
// }

// function getScrollOffset() {
//   return {
//     x: window.pageXOffset,
//     y: window.pageYOffset,
//   };
// }

// function throttle(fn, limit, context) {
//   let wait;
//   return function () {
//     context = context || this;
//     if (!wait) {
//       fn.apply(context, arguments);
//       wait = true;
//       return setTimeout(function () {
//         wait = false;
//       }, limit);
//     }
//   };
// }

// function debounce(fn, limit, u) {
//   let e;
//   return function () {
//     const i = this;
//     const o = arguments;
//     const a = u && !e;
//     clearTimeout(e),
//       (e = setTimeout(function () {
//         (e = null), u || fn.apply(i, o);
//       }, limit)),
//       a && fn.apply(i, o);
//   };
// }

// function rect(e) {
//   const o = getScrollOffset();
//   const r = e.getBoundingClientRect();
//   return {
//     x: r.left + o.x,
//     y: r.top + o.y,
//   };
// }

// //by Saym Ash//
// $(window).on("load", function () {
//   $(window)
//     .scroll(function () {
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $(".timeline-panel").each(function () {
//         var objectBottom = $(this).offset().top - 200 + $(this).outerHeight();
//         if (objectBottom < windowBottom) {
//           if ($(this).css("opacity") == 0) {
//             $(this).fadeTo(500, 1);
//           }
//         } else {
//           if ($(this).css("opacity") == 1) {
//             $(this).fadeTo(500, 0);
//           }
//         }
//       });
//     })
//     .scroll();
// });
// //by Saym Ash//
