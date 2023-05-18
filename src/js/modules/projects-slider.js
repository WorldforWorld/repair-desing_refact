import Swiper, { Navigation, Pagination, Controller } from 'swiper';
export function slider() {
  // Подключение слайдера
  Swiper.use([Navigation, Pagination, Controller]);

  let swiper = new Swiper('.projects__swiper--left', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  let swiper2 = new Swiper('.projects__swiper--right', {
    loop: true,
    allowSlidePrev: false,
    allowSlideNext: false,
  });
  swiper.update();
  swiper2.update();
  swiper.controller.control = swiper2;
  swiper2.controller.control = swiper;
}
