// const pagesDropdown = document.getElementById('pagesDropdown');
// const dropdownParent = pagesDropdown.parentElement;

// // Add event listener for touch/click
// pagesDropdown.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     dropdownParent.classList.toggle('active'); // Toggle the 'active' class on the parent element
// });
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween:24,
    loop:true,
    
    navigation: {
      nextEl: ".fi-rs-angle-small-right",
      prevEl: ".fi-rs-angle-small-left",
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
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
  });