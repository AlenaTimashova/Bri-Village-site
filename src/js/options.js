// выбор акций по сезону

const servicesBtns = document.querySelectorAll(".services__options");
const options = document.querySelectorAll(".services__image");

servicesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    options.forEach((element) => {
      element.classList.remove("services__image_visible");
      if (btn.dataset.season === element.dataset.season) {
        element.classList.add("services__image_visible");
      }
      if (btn.dataset.season === "all") {
        element.classList.add("services__image_visible");
      }
    });
  });
});
