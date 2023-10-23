/**
 * Кнопка бургер меню
 * @param {string} burgerBtn - серектор буркег кнопки
 * @param {string} menu - селектор меню
 * @example burgerMenu(".burger__menu", ".main__menu");
 */

export function burgerMenu(burgerBtn, menu) {
  const burgerMenu = document?.querySelector(burgerBtn);
  const mainMenu = document?.querySelector(menu);
  const body = document?.querySelector("body");
  burgerMenu?.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mainMenu.classList.toggle("active");
    const isActive = mainMenu.classList.contains("active");
    body.style.overflow = isActive ? "hidden" : "";
  });
}
