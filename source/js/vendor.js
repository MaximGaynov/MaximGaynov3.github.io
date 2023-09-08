// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// eslint-disable-next-line no-undef
let swiperCoaches = new Swiper('.swiper-coaches', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
});

// eslint-disable-next-line no-undef
let swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

swiperCoaches();
swiperReviews();
