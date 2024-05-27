let lastScrollTop = 0;
const headerNav = document.querySelector("header");
const flexibleBox = document.querySelector(".flexible__box");
const notificationBox = document.querySelector(".notification__box");
const stickyFilter = document.querySelector('.sticky__filter');
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 250) {
    if (scrollTop > lastScrollTop) {
      headerNav.style.top = "-100px";
      if (flexibleBox) flexibleBox.style.top = "1rem";
      if (notificationBox) notificationBox.style.top = "1rem";
			if(stickyFilter) stickyFilter.style.top = "1rem";
    } else {
      headerNav.style.top = "-5px";
      if (flexibleBox) flexibleBox.style.top = "85px";
      if (notificationBox) notificationBox.style.top = "85px";
			if(stickyFilter) stickyFilter.style.top = "85px";
    }
  }
  lastScrollTop = scrollTop;
});

// ymaps
// try {
//   const center = [55.75864051344586, 37.6275861640625];
//   function init() {
//     let map = new ymaps.Map("map", {
//       center: center,
//       zoom: 10,
//     });

//     let placemark = new ymaps.Placemark(
//       center,
//       {},
//       {
//         iconLayout: "default#image",
//         iconImageHref: "../images/icons/map-location.svg",
//         iconImageSize: [34, 34],
//         iconImageOffset: [-25, -52],
//       }
//     );
//     // Creating a polygon using the Polygon auxiliary class.
//     var myPolygon = new ymaps.Polygon(
//       [
//         // Specifying the coordinates of the vertices of the polygon.
//         [
//           [60.1918981644201, 30.513391151974343],
//           [60.190786978271895, 30.517596855709733],
//           [60.18411906873506, 30.52532161767263],
//           [60.17744980033012, 30.52789653832693],
//           [60.17505537249033, 30.526866570065202],
//           [60.16949620406973, 30.51313365990895],
//           [60.16744334943163, 30.512961998532003],
//           [60.16590362399728, 30.52034343774098],
//           [60.16325170493725, 30.518626823971463],
//           [60.161968441206376, 30.512790337155053],
//           [60.16094179402215, 30.513476982662866],
//           [60.1600006725024, 30.51055873925465],
//           [60.16136956759276, 30.5016323476531],
//           [60.16556145295854, 30.49922908837575],
//           [60.16992386592128, 30.50060237939137],
//           [60.171292346312335, 30.502147331783966],
//           [60.17257524473589, 30.50060237939137],
//           [60.17334495966222, 30.49734081322926],
//           [60.176167092910546, 30.481719627926545],
//           [60.17719326286712, 30.479659691403086],
//           [60.17787735830078, 30.474509850094513],
//           [60.181725128740176, 30.471248283932404],
//           [60.18198163068699, 30.468158379147237],
//           [60.18300761837183, 30.469531670162862],
//           [60.182409129464446, 30.47210659081716],
//           [60.18437555191994, 30.475368156979272],
//           [60.18574342829046, 30.479659691403086],
//           [60.18694027321249, 30.482921257565195],
//           [60.1886499757379, 30.48446620995779],
//           [60.189419312729555, 30.485496178219496],
//           [60.189846714352946, 30.48927272851247],
//           [60.1905305453375, 30.49098934228201],
//           [60.19155626501584, 30.4903026967742],
//           [60.192752897330365, 30.49665416772145],
//           [60.191043409196396, 30.5042072683074],
//           [60.19232553367115, 30.509185448239027],
//           [60.1918981644201, 30.513391151974343],
//         ],
//       ],
//       // Defining properties of the geo object.
//       {
//         // The contents of the balloon.
//         balloonContent: "Fishing spots",
//       },
//       {
//         /**
//          * Describing the geo object options.
//          * Fill color.
//          */
//         fillImageHref: "images/lake.png",
//         // Type of background fill.
//         fillMethod: "stretch",
//         // Hiding the stroke.
//         stroke: true,
//       }
//     );
//     // {
//     //   iconLayout: "default#image",
//     //   iconImageHref: "",
//     //   iconImageSize: [30, 42],
//     //   iconImageOffset: [-3, -42],
//     // }

//     map.controls.remove("geolocationControl"); // удаляем геолокацию
//     map.controls.remove("searchControl"); // удаляем поиск
//     map.controls.remove("trafficControl"); // удаляем контроль трафика
//     map.controls.remove("typeSelector"); // удаляем тип
//     map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
//     map.controls.remove("zoomControl"); // удаляем контрол зуммирования
//     map.controls.remove("rulerControl"); // удаляем контрол правил
//     map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

//     map.geoObjects.add(placemark);
//     map.geoObjects.add(myPolygon);
//   }
//   ymaps.ready(init);
// } catch (error) {}

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
