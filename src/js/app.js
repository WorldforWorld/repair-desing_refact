import { isWebp } from "./modules/functions.js";
import * as init from "./modules/map.js";
import * as nav from "./modules/nav.js";
import { slider } from "./modules/projects-slider.js";
import * as scroll from "./modules/scroll-header.js";
import { scrollButtonTop } from "./modules/upbutton.js";
import { maskPhone } from "./modules/validate_form/maskPhone.js";
import { validateForms } from "./modules/validate_form/validate_forms.js";

isWebp();
document.addEventListener("DOMContentLoaded", function () {
  validateForms(".control__form");
  validateForms(".offer__form");
  validateForms(".contacts__form");
  validateForms(".popup__call__form");
  // Маска для телефонов c валидацией
  maskPhone("#user-phone");
  // Добавление поведения к нопки вверх
  scrollButtonTop("#upbutton");
  // Скролл для шапки
  scroll.addClassScroll();
  window.addEventListener("scroll", scroll.addClassScroll);

  // Скрываем меню
  nav.dropdownToggle();
  nav.hideItemMenu();
  window.addEventListener("resize", nav.hideItemMenu);

  // Получаем все выпадающие списки
  document.addEventListener("mouseover", nav.handleDropdownEvent);
  document.addEventListener("click", nav.handleDropdownEvent);

  // Бургер меню
  nav.burgerMenu();
  // Инициализируем слайдер в секции projects
  slider();
  // Инициализируем карту
  ymaps.ready(init.init);
});
