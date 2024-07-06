// modal.js

const authModal = document.querySelector(".auth__modal");
const modalOverlay = document.querySelector(".modal__overlay");
const authModalClose = document.querySelector(".auth__modal-close");
const openModal = document.querySelectorAll(".auth__modal-open");
const sendButton = authModal.querySelector(".send__btn");
const body = document.querySelector("body");

function hideModal() {
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
authModalClose.addEventListener("click", hideModal);
authModal.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("auth__modal")) {
    hideModal();
  }
});

export { showModal, hideModal };
