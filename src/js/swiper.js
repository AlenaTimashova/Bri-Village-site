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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
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
  // slidesPerView: 3,
  // spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_houses",
    prevEl: ".swiper-button-prev_houses",
  },
});

const contactsSwiper = new Swiper(".mySwiper_contacts", {
  slidesPerView: 4,
  spaceBetween: 20,
  a11y: {
    paginationBulletMessage: "Тут название слайда {{index}}",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_contacts",
    prevEl: ".swiper-button-prev_contacts",
  },
});
