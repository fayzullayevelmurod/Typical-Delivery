// scrollHandler.js

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

function handleScroll() {
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
}

export { s, handleScroll };
