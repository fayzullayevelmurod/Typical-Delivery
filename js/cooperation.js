const openCallModal = document.querySelectorAll(".open__call-modal");
const closeCallModal = document.querySelector(".call__modal-close");
const upBox = document.querySelectorAll(".up__box");
const form = document.querySelector(".back__call");
const body = document.body;
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
    if (upText) {
      if (event.target !== upInput && !upInput.value) {
        upText.classList.remove("up");
      }
    }
  });
});
function showCallModal() {
  form.classList.add("show");
  body.classList.add("blur-two");
  body.style.overflow = "hidden";
}
function hideCallModal() {
  form.classList.remove("show");
  body.classList.remove("blur-two");
  body.style.overflow = "";
}
openCallModal.forEach((btn) => btn.addEventListener("click", showCallModal));
closeCallModal.addEventListener("click", hideCallModal);
form.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("back__call")) {
    hideCallModal();
  }
});

const numberInput = document.querySelector(".number__input");
IMask(numberInput, { mask: "+{7} (000) 000-00-00" });