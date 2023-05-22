import Swiper, { Navigation, Pagination, Controller, EffectFade } from 'swiper';
export function slider() {
  // Подключение слайдера
  Swiper.use([Navigation, Pagination, Controller, EffectFade]);

  const swiper = new Swiper('.projects__swiper--left', {
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
  const swiper2 = new Swiper('.projects__swiper--right', {
    loop: true,
    allowSlidePrev: false,
    allowSlideNext: false,
  });
  swiper.update();
  swiper2.update();
  swiper.controller.control = swiper2;
  swiper2.controller.control = swiper;
  const arrNameBullet = [
    'Американская классика',
    'Имперский стиль',
    'Классика',
    'Лофт',
    'Минимализм',
    'Прованс',
    'Романтизм',
    'Скандинавский стиль',
    'Средиземноморский стиль',
    'Хайтек',
    'Эклектизм',
  ];
  const swiperFurniture = new Swiper('.furniture__slider', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="furniture__bullet ${className}">${arrNameBullet[index]}</span>`;
      },
    },
  });
  swiperFurniture.update();
}
