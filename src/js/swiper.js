const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  //   direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
