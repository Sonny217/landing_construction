/*===============SHOW MENU============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===========MENU SHOW============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===========MENU HIDDEN============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===============REMOVE MENU MOBILE============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*===============CNAHGE BACKGROUND HEADER============*/
// const scrollHeader = () => {
//   const header = document.getElementById("header");
//   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
//   this.scrollY >= 50
//     ? header.classList.add("bg-header")
//     : header.classList.remove("bg-header");
// };
// window.addEventListener("scroll", bgHeader);
// bgHeader();
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};

window.addEventListener("scroll", scrollHeader);
scrollHeader();

/*===============SWIPER SERVICES============*/
// const swiperServices = new Swiper('.services__swiper',  {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 24,
//   slidesPerView: 'auto',

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })
/*=============== SERVICES SWIPER ===============*/
const servicesSwiper = new Swiper(".services__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*===============SHOW SCROLL UP============*/

/*===============SCROLL SECTIONS ACTIVE LINK============*/

/*===============SCROLL REVEAL ANIMATION============*/
