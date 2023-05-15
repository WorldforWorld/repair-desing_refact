import * as nav from './modules/nav.js';

document.addEventListener('DOMContentLoaded', function () {
  // Скролл для шапки
  const header = document.querySelector('header');
  function addClassScroll() {
    if (window.pageYOffset > 100) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }
  addClassScroll();
  window.addEventListener('scroll', addClassScroll);
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
