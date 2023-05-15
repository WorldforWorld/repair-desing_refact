import * as nav from './modules/nav.js';

document.addEventListener('DOMContentLoaded', function () {
  // Бургер меню
  nav.burgerMenu();
  // Скрываем меню
  const ddMenu = document.querySelector('.dd_menu');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  ddMenu.querySelector('.dropdown-toggle').addEventListener('click', () => {
    console.log('open');
    dropdownMenu.classList.toggle('open');
  });
  nav.hideItemMenu();
  // hideItemMenu();
  window.addEventListener('resize', nav.hideItemMenu);
  // -----------------------------------------------------
  // Получаем все выпадающие списки
  document.addEventListener('mouseover', nav.handleDropdownEvent);
  document.addEventListener('click', nav.handleDropdownEvent);
});
