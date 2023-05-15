import * as nav from './modules/nav.js';

document.addEventListener('DOMContentLoaded', function () {
  // Скрываем меню
  nav.dropdownToggle();
  nav.hideItemMenu();
  window.addEventListener('resize', nav.hideItemMenu);

  // Получаем все выпадающие списки
  document.addEventListener('mouseover', nav.handleDropdownEvent);
  document.addEventListener('click', nav.handleDropdownEvent);

  // Бургер меню
  nav.burgerMenu();
});
