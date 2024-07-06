// formValidation.js

const phoneInput = document.querySelector(".phone__input");
const numberInputs = document.querySelectorAll(".number__input");
const placeholderText = document.querySelector(".placeholder__text");
const inputs = document.querySelectorAll(".enter__code-input");
const errorText = document.querySelector(".error__text");
const wrongCode = document.querySelector(".wrong__code");
const sendButton = document.querySelector(".send__btn");

function startCountdown() {
  inputs.forEach((input, index) => {
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

  sendButton.addEventListener("click", () => {
    let code = "";
    inputs.forEach((input) => {
      code += input.value;
    });
    if (code.length !== 6) {
      wrongCode.style.display = "block";
      inputs.forEach((input) => {
        input.classList.add("error");
      });
    } else {
      wrongCode.style.display = "none";
      inputs.forEach((input) => {
        input.classList.remove("error");
      });
    }
  });
}

export { startCountdown };
