export function dropdownToggle() {
  const ddMenu = document.querySelector('.main__menu .dd_menu');
  const dropdownMenu = ddMenu.querySelector('.dropdown-menu');
  ddMenu.querySelector('.dropdown-toggle').addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
  });
}
export function hideItemMenu() {
  // Получаем элементы меню и кнопку
  const navList = document.querySelector('.main__menu > ul');
  const navMenu = document.querySelector('.main__menu');
  const ddMenu = document.querySelector('.dd_menu');

  // Скрываем элементы
  let widthItem = 0;
  const navItem = document.querySelectorAll('.main__menu>ul > .nav__item');
  const ddNavItem = document.querySelectorAll('.dd_menu .nav__item');
  const navItemOpen = document.querySelectorAll('.main__menu>ul>.nav__item.open');
  if (navItemOpen.length == navItem.length) {
    ddMenu.style.display = 'none';
  }
  if (navList.offsetWidth > navMenu.offsetWidth) {
    const itemLength = navItemOpen.length - 1;
    if (itemLength === -1) return;
    widthItem = navItemOpen[itemLength].offsetWidth;
    navItemOpen[itemLength].classList.remove('open');
    navItemOpen[itemLength].classList.add('hide');
    ddMenu.style.display = 'block';
    ddNavItem[itemLength].style.display = 'block';
    if (navList.offsetWidth > navMenu.offsetWidth) {
      hideItemMenu();
    }
  } else if (
    navList.offsetWidth + widthItem < navMenu.offsetWidth &&
    navItemOpen.length !== navItem.length
  ) {
    const hide = document.querySelectorAll('.main__menu .hide');
    const widthChildHide = hide[0].children[0].offsetWidth;
    if (navList.offsetWidth + widthChildHide > navMenu.offsetWidth) return;
    navItem[navItemOpen.length].classList.remove('hide');
    navItem[navItemOpen.length].classList.add('open');
    widthItem = navItem[navItemOpen.length].offsetWidth;
    let coutNone = !ddNavItem[navItemOpen.length]
      ? navItemOpen.length - 1
      : navItemOpen.length;

    ddNavItem[coutNone].style.display = 'none';
  }
}

export function burgerMenu() {
  const burgerMenu = document.querySelector('.burger__menu');
  const mainMenu = document.querySelector('.main__menu');
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
}

export function handleDropdownEvent(event) {
  const target = event.target;
  const dropdown = target.closest('.submenu');
  console.log('dropdown: ', dropdown?.parentNode?.parentNode.classList.contains('main__menu'));
  const ddMenu = target.closest('.dd_menu');
  if (!ddMenu) {
    document.querySelector('.dropdown-menu').classList.remove('open');
  }
  if (!dropdown?.parentNode?.parentNode.classList.contains('main__menu')) {
    const direction = determineDropdownDirection(dropdown);
    dropdown.classList.add('open-' + direction);
  } else {
    const submenus = document.querySelectorAll('.main__menu .submenu');
    submenus.forEach((submenu) => {
      submenu.classList.remove('open-left');
      submenu.classList.remove('open-right');
    });
  }
}

function determineDropdownDirection(dropdown) {
  const windowWidth = document.documentElement.clientWidth;
  const dropdownRect = dropdown.getBoundingClientRect();
  if (dropdownRect.right + dropdownRect.width > windowWidth) {
    return 'left';
  } else {
    return 'right';
  }
}
