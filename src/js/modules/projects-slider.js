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

  // Furntiture section slider
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
  const swiperFurnitureMobiel = new Swiper('.furniture__slider--mobile', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperFurnitureMobiel.update();
  // Steps section
  const stepsLeftSwiper = new Swiper('.steps__left__swiper', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  stepsLeftSwiper.update();
  const arrBulletTittle = [
    'Выезд на замеры <br>помещения',
    'Составление <br>сметы',
    'Разработка дизайн <br>проекта',
    'Закупка расходных <br>материалов',
    'Ремонтно-отделочные <br>работы',
    'Приемка-сдача <br>работ',
  ];
  const stepsRightswiper = new Swiper('.steps__right__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        const classCenter = (index + 1) % 3 === 2;
        const classRight = (index + 1) % 3 === 0;
        return `<div class="${className}"><div class="${classCenter ? 'center' : ''} ${
          classRight ? 'right' : ''
        }">
				<span class="steps__right__swiper__count">
				${index + 1 > 9 ? index + 1 : '0' + (index + 1)}</span>
				<span class="steps__right__swiper__desc">${arrBulletTittle[index]}</span>
				</div>
				</div>`;
      },
    },
  });
  stepsRightswiper.update();
  stepsLeftSwiper.controller.control = stepsRightswiper;
  stepsRightswiper.controller.control = stepsLeftSwiper;
}
