export function validEmail(selector) {
  const inputsEmal = document.querySelectorAll(selector);
  inputsEmal.forEach(input => {
    input.addEventListener("input", onInput);
  });
}
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function onInput(e) {
  if (isEmailValid(e.target.value)) {
    e.target.parentNode.classList.remove("error");
  } else {
    e.target.parentNode.classList.add("error");
  }
}
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
