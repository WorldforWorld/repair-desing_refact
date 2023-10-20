import { isWebp } from "./modules/functions.js";
import { initMap } from "./modules/map.js";
import * as nav from "./modules/nav.js";
import { openModalPopup } from "./modules/popup_modal.js";
import { slider } from "./modules/projects-slider.js";
import * as scroll from "./modules/scroll-header.js";
import { scrollButtonTop } from "./modules/upbutton.js";
import { maskPhone } from "./modules/validate_form/maskPhone.js";
import { validateForms } from "./modules/validate_form/validate_forms.js";
isWebp();
document.addEventListener("DOMContentLoaded", function () {
  openModalPopup(
    "[data-toggle=modal]",
    ".popup__call",
    ".popup__call .form__close"
  );
  validateForms(".control__form");
  validateForms(".offer__form");
  validateForms(".contacts__form");
  validateForms(".popup__call__form");
  new WOW().init();
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
  initMap();
});
