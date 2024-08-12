const swiper = new Swiper(".sample-slider", {
  loop: true, //loop
//   autoplay: {
//     delay: 5000,
//   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  navigation: {
    //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
