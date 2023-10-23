/**
 * Функция для скролла документа вверх по клику кнопки.
 * @param {string} buttonId - селектор кнопки
 * @return {void}
 * @example
 * scrollButtonTop(".uppbutton")
 * или
 * scrollButtonTop("#uppbutton")
 */
export function scrollButtonTop(buttonId) {
  const button = document.querySelector(buttonId);

  window?.addEventListener("scroll", function () {
    button.style.transform = "scale(0)";
    if (window.scrollY > 100) {
      button.style.transform = "scale(1) rotate(90deg)";
    }
  });

  button?.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
}
