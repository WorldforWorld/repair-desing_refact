/**
 * Функция открытия и закрытия попап окан
 * @param {string} buttons селектор на список кнопок для открытия попап окна
 * @param {string} popup - селектор попап окна
 * @param {string} closeButton - селектор на кнопку закрытия попап окна
 * @example
 * openModalPopup(
     "[data-toggle=modal]",
     ".popup__call",
     ".popup__call .form__close"
   );
 */
export function openModalPopup(buttons, popup, closeButton) {
  const body = document.querySelector("body");
  const modalBtns = document?.querySelectorAll(buttons);
  const modalPopup = document?.querySelector(popup);
  const modalPopupDialog = modalPopup?.querySelector(".popup__call__form");
  const closeBtn = document?.querySelector(closeButton);
  modalBtns?.forEach(button => {
    button?.addEventListener("click", () => {
      modalPopup?.classList?.add("open");
      body.style.overflow = "hidden";
    });
  });
  closeBtn?.addEventListener("click", () => {
    modalPopup?.classList?.remove("open");
    body.style.overflow = "";
  });
  modalPopup?.addEventListener("click", event => {
    if (!modalPopupDialog?.contains(event.target)) {
      modalPopup?.classList?.remove("open");
      body.style.overflow = "";
    }
  });
}
