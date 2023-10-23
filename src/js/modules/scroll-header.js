/**
 * Добавление класса "scroll" для "header" при скролле страницы вниз
 */
export function addClassScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}
