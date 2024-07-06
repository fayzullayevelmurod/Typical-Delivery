// main.js

import { preloadImages } from "./imagePreloader.js";
import { s, handleScroll } from "./scrollHandler.js";
import { showModal, hideModal } from "./modal.js";
import { startCountdown } from "./formValidation.js";
import { handleSelectBox } from "./selectBox.js";
import { $, $$ } from "./utility.js";

// Initialize modules
window.addEventListener("resize", () => {
  if (window) {
  }
});

window.addEventListener("load", () => {
  s();
  preloadImages();
  startCountdown();
  handleSelectBox(); // Initialize select box handling
});

window.addEventListener("scroll", handleScroll);

document.addEventListener("scroll", () => {
  const defaultLogo = $(".default__logo");
  const stickyLogo = $(".sticky__logo");
  const headerTop = $(".header__right-top");
  if (window.scrollY > 0) {
    defaultLogo.style.display = "none";
    stickyLogo.style.display = "flex";
    headerTop.style.display = "none";
  } else {
    headerTop.style.display = "flex";
    defaultLogo.style.display = "block";
    stickyLogo.style.display = "none";
  }
});

// Add more event listeners as needed
