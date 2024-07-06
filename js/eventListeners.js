// eventListeners.js
import { preloadImages } from "./imagePreloader.js";
import { s, handleScroll } from "./scrollHandler.js";
import { showModal, hideModal, validateInput } from "./modal.js";
import { startCountdown } from "./formValidation.js";
import { handleSelectBox } from "./selectBox.js";

// Resize event
window.addEventListener("resize", () => {
  if (window) {
  }
});

// Load events
window.addEventListener("load", () => {
  s();
  preloadImages();
  startCountdown();
});

// Scroll event
window.addEventListener("scroll", handleScroll);

// Other event listeners...
document.addEventListener("scroll", () => {
  const defaultLogo = document.querySelector(".default__logo");
  const stickyLogo = document.querySelector(".sticky__logo");
  const headerTop = document.querySelector(".header__right-top");
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

// Add event listeners for modals, form validation, etc.
