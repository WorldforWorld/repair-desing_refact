export function addClassScroll() {
  const header = document.querySelector('header');
  if (window.pageYOffset > 100) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}
