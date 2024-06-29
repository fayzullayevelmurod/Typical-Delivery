document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((categories) => {
      const productBox = document.querySelector(".product__box");

      categories.forEach((category) => {
        const categoryElement = createCategoryElement(category);
        productBox.appendChild(categoryElement);

        const productCardsContainer =
          categoryElement.querySelector(".product__cards");
        category.products.forEach((product) => {
          const productCard = createProductCard(product, category.title);
          productCardsContainer.appendChild(productCard);
        });
      });

      document.querySelectorAll(".product__card").forEach(function (card) {
        card.addEventListener("click", function (event) {
          if (!event.target.closest(".info__btn")) {
            const productId = this.getAttribute("data-product-id");
            const categoryTitle = this.getAttribute("data-category-title");
            loadProductPreview(productId, categoryTitle);
          }
        });
      });

      document.querySelectorAll(".info__btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
          event.stopPropagation();
          const infoList = this.closest(".product__card").querySelector(
            ".product__info-list"
          );
          const infoIcon = this.querySelector(".info__icon");
          const closeIcon = this.querySelector(".close__icon");

          if (infoList.classList.contains("active")) {
            infoList.classList.remove("active");
            infoIcon.style.display = "block";
            closeIcon.style.display = "none";
          } else {
            infoList.classList.add("active");
            infoIcon.style.display = "none";
            closeIcon.style.display = "block";
          }
        });
      });
    });

  function createCategoryElement(category) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("products");
    categoryDiv.setAttribute("id", category.title.toLowerCase());
    categoryDiv.setAttribute("data-type", category.title.toLowerCase());

    categoryDiv.innerHTML = `
            <h2 class="title">${category.title}</h2>
            <div class="product__cards"></div>
        `;

    return categoryDiv;
  }

  function createProductCard(product, categoryTitle) {
    const card = document.createElement("div");
    card.classList.add("product__card");
    card.setAttribute("data-product-id", product.id);
    card.setAttribute("data-category-title", categoryTitle);

    const discounts = product?.discounts
      ?.map(
        (discount) => `
           ${
             discount
               ? ` <div class="discount__box  block__tooltip ${
                   discount.discountNumberClass
                 }">
                ${discount.label ? `<span>${discount.label}</span>` : ""}
                ${
                  discount.icon
                    ? `<img loading="lazy" src="${discount.icon}" alt="${discount.label}" width="20" height="18" />`
                    : ""
                }
                ${
                  discount.tooltip
                    ? `<div class="discount__tooltip ${discount.tooltipFirst}">
                        <span>${discount.tooltip}</span>
                      </div>`
                    : ""
                }
            </div>`
               : null
           }
        `
      )
      .join("");

    const nutritionInfo = `
            <div class="product__info-list">
                <h5 class="info__title">Пищевая ценность на 100 г</h5>
                <div class="info__list">
                    <ul>
                        <li>Энерг. ценность</li>
                        <li>Белки</li>
                        <li>Жиры</li>
                        <li>Углеводы</li>
                        <li>Вес</li>
                    </ul>
                    <ul>
                        <li>${product.info.nutrition.energy}</li>
                        <li>${product.info.nutrition.proteins}</li>
                        <li>${product.info.nutrition.fats}</li>
                        <li>${product.info.nutrition.carbohydrates}</li>
                        <li>${product.info.nutrition.totalWeight}</li>
                    </ul>
                </div>
            </div>
        `;

    card.innerHTML = `
            <div class="product__card-body">
            ${
              discounts
                ? `<div class="offer__box">
                    ${discounts}
                </div>`
                : ""
            }
                
                <div class="product__card-img">
                    <img loading="lazy" src="${product.image}" alt="${
      product.name
    }" width="375" height="168" />
                </div>
                <div class="product__card-content">
                    <h4 class="product__name">${product.name}</h4>
                    <p class="product__desc">${product.description}</p>
                </div>
            </div>
            <div class="product__card-footer">
                    <div class="product__info-box">
                        <div class="product__info">
                            <span>${product.info.calories} · ${
      product.info.weight
    }</span>
                        </div>
                        <button class="info__btn">
                            <img loading="lazy" class="info__icon" src="images/icons/info.svg" alt="info icon" width="3" height="16" />
                            <img loading="lazy" class="close__icon" src="images/icons/close.svg" alt="close icon" width="12" height="12" style="display: none;" />
                        </button>
                        ${nutritionInfo}
                    </div>
                    <div class="flex__box">
                          <p class="product__price">${product.price}</p>
                          <div class="add__btn">
                            <img loading="lazy" src="./images/icons/plus.svg" alt="plus" width="12" height="12">
                          </div>
                        </div>
                    </div>
        `;

    return card;
  }

  function loadProductPreview(productId, categoryTitle) {
    const modal = document.querySelector(".product__modal");
    const modalContent = modal.querySelector(".modal__ajax-content");
    const loadingAnimation = modal.querySelector(".loading-animation");

    modal.classList.add("active");
    document.body.classList.add("blur");
    document.body.classList.add("no-scroll");
    loadingAnimation.style.display = "block";
    modalContent.style.display = "none";

    fetch("products.json")
      .then((response) => response.json())
      .then((categories) => {
        const category = categories.find((cat) => cat.title === categoryTitle);
        if (category) {
          const product = category.products.find((p) => p.id == productId);
          if (product) {
            const contentHtml = `
                            <div class="top">
                                <div class="img__box">
                                    <img src="${product.image}" alt="${
              product.name
            }" width="380" height="366" />
                                    <a class="more__details" href="product.html">Подробнее</a>
                                </div>
                                <div class="content">
                                    <h3 class="product-name">${
                                      product.name
                                    }</h3>
                                    <p class="desc">${product.description}</p>
                                    <div class="weight__boxes">
                                        ${product.weights
                                          .map(
                                            (weight) =>
                                              `<div class="weight__box">Вес ${weight}</div>`
                                          )
                                          .join("")}
                                    </div>
                                    <div class="size__box">
                                    <h4 class="size__box-title">Размер</h4>
                                    <div class="size__boxes">
                                    ${product.sizes
                                      .map(
                                        (size) =>
                                          `<div class="box">
                                        <div class="size">${size}</div>
                                        <input class="checkbox__input" type="checkbox" id=${size}>
                                        <label for=${size} class="clicker__btn">
                                          <div class="circle__box"></div>
                                        </label>
                                        </div>`
                                      )
                                      .join("")}
                                    </div>
                                    </div>
                                    <button class="added__btn outline__btn product__added-btn">
                                      <span>Добавить</span>
                                      <span class="price">${
                                        product.price
                                      }</span>
                                    </button>
                                </div>
                            </div>
                        `;

            loadingAnimation.style.display = "none";
            modalContent.innerHTML = contentHtml;
            modalContent.style.display = "block";
          }
        }
      });
    // added product
    setTimeout(() => {
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
    }, 700);
  }

  document
    .querySelector(".close__product-modal")
    .addEventListener("click", function () {
      const modal = document.querySelector(".product__modal");
      modal.classList.remove("active");
      document.body.classList.remove("blur");
      document.body.classList.remove("no-scroll");
    });

  //
  setTimeout(() => {
    const sections = document.querySelectorAll(".products");
    const links = document.querySelectorAll(".tab__header-box");
    console.log(sections, "sections");
    const changeLinkState = () => {
      let index = sections.length;
      while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      if (sections[index]) {
        links[index].classList.add("active");
      }
    };

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);

    links.forEach((link, index) => {
      link.addEventListener("click", () => {
        console.log("link clicked");
        window.scrollTo({ top: sections[index].offsetTop - 75 });
      });
    });

    const tabHeaderItems = document.querySelectorAll(".tab__header-box");
    tabHeaderItems.forEach((item) => {
      item.addEventListener("click", () => {
        tabHeaderItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }, 1000);
});
