// selectBox.js

function handleSelectBox() {
  const selectBoxes = document.querySelectorAll(".select__box");

  selectBoxes.forEach((box) => {
    const select = box.querySelector("select");
    const selectOption = box.querySelectorAll("option");
    const selectTitle = box.querySelector(".select__title");
    const selectContent = box.querySelector(".select__content");

    selectTitle.addEventListener("click", () => {
      selectContent.classList.toggle("show");
    });

    selectOption.forEach((option) => {
      option.addEventListener("click", () => {
        selectTitle.textContent = option.textContent;
        select.value = option.value;
        selectContent.classList.remove("show");
      });
    });
  });
}

export { handleSelectBox };
