export function openModalPopup(buttons, popup, closeButton) {
  const modalBtns = document.querySelectorAll(buttons);
  const modalPopup = document.querySelector(popup);
  const modalPopupDialog = modalPopup.querySelector(".popup__call__form");
  const closeBtn = document.querySelector(closeButton);
  modalBtns.forEach(button => {
    button.addEventListener("click", () => modalPopup.classList.add("open"));
  });
  closeBtn.addEventListener("click", () => modalPopup.classList.remove("open"));
  modalPopup.addEventListener("click", event => {
    if (!modalPopupDialog.contains(event.target)) {
      modalPopup.classList.remove("open");
    }
  });
}
