const sliders = document.querySelectorAll(".swiper-container");
const prevArrow = document.querySelectorAll(".swiper-button-prev");
const nextArrow = document.querySelectorAll(".swiper-button-next");
sliders.forEach((slider, idx) => {
  let swiper = new Swiper(slider, {
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
      nextEl: nextArrow[idx],
      prevEl: prevArrow[idx],
    },
  });
});

const infrastructureSwiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_top",
    prevEl: ".swiper-button-prev_top",
  },
});

const reviewsSwiper = new Swiper(".mySwiper_reviews", {
  slidesPerView: 2,
  spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_review",
    prevEl: ".swiper-button-prev_review",
  },
});

const servicesSwiper = new Swiper(".mySwiper_services", {
  slidesPerView: 3,
  spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_services",
    prevEl: ".swiper-button-prev_services",
  },
});

const housesSwiper = new Swiper(".mySwiper_houses", {
  slidesPerView: 3,
  spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_houses",
    prevEl: ".swiper-button-prev_houses",
  },
});
