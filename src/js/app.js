import * as nav from './modules/nav.js';
import * as scroll from './modules/scroll-header.js';
import * as init from './modules/map.js';
import { slider } from './modules/projects-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  // Скролл для шапки
  scroll.addClassScroll();
  window.addEventListener('scroll', scroll.addClassScroll);

  // Скрываем меню
  nav.dropdownToggle();
  nav.hideItemMenu();
  window.addEventListener('resize', nav.hideItemMenu);

  // Получаем все выпадающие списки
  document.addEventListener('mouseover', nav.handleDropdownEvent);
  document.addEventListener('click', nav.handleDropdownEvent);

  // Бургер меню
  nav.burgerMenu();
  // Инициализируем слайдер в секции projects
  slider();
  // Инициализируем карту
  ymaps.ready(init.init);
});
