import { validEmail } from "./valid_email.js";

export function validateForms(params) {
  validEmail("#user-mail");
  const froms = document.querySelector(params + " form");
  const checkbox = froms.querySelector(".policy__checkbox");

  froms.addEventListener("submit", e => {
    e.preventDefault();
    const inputs = froms.querySelectorAll(".form__group input");
    let countErrors = 0;
    inputs.forEach(input => {
      if (input.value.trim().length === 0) {
        input.parentElement.classList.add("error");
        countErrors++;
      } else {
        input.parentElement.classList.remove("error");
      }
    });
    checkbox.addEventListener("change", validCheckbox);
    if (validCheckbox(checkbox)) {
      countErrors++;
    }
    if (countErrors > 0) {
      console.log("Ошибка валидации");
    } else {
      froms.reset();
      popupSuccess();
      document.querySelector(".popup__call").classList.remove("open");
      console.log("Форма отправлена");
    }
    countErrors = 0;
  });
}
function validCheckbox(e) {
  const checkbox = e.target || e;
  if (checkbox.checked) {
    checkbox.parentElement.classList.remove("error");
    return false;
  } else {
    checkbox.parentElement.classList.add("error");
    return true;
  }
}

function popupSuccess() {
  const popup = document.querySelector(".popup__success");
  const time = 4500;
  popup.classList.add("open");
  setTimeout(() => popup.classList.remove("open"), time);
}
