// imagePreloader.js

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

export { preloadImages };
