
// import * as navUpInit from "./modules/nav_up.js";


document.addEventListener("DOMContentLoaded", function() {
  // navUpInit.navUp();
	const submenus = document.querySelectorAll('.submenu');
	submenus.forEach(submenu => {
		submenu.addEventListener("mousemove", (e)=> {
			if (submenu.parentNode.parentNode.classList.contains('submenu')) {
				console.log('parent', submenu.querySelector('ul').textContent);
				submenu.querySelector('ul').style.top = '-15px'
				submenu.querySelector('ul').style.left = '100%'
			}
		})
		// submenu.addEventListener("mouseout", (e)=> {
		// 	console.log('emouseout: ', e);
			
		// })
	})


	// Скрываем меню
	// Получаем элементы меню и кнопку
	// Получаем элементы меню и кнопку
	const nav__list = document.querySelector(".main__menu>ul");
	const nav__menu = document.querySelector(".main__menu");
	const dd_menu = document.querySelector(".dd_menu");
	const dropdown_menu = document.querySelector(".dropdown-menu");
	dd_menu.addEventListener("click", () => {
		dropdown_menu.classList.toggle("open");
	});
	// Скрываем элементы
	let widthItem = 0;

	function hideItemMenu() {
		const nav__item = document.querySelectorAll(".main__menu>ul > .nav__item");
		const dd_nav__item = document.querySelectorAll(".dd_menu .nav__item");

		const nav__item__open = document.querySelectorAll(
			".main__menu>ul>.nav__item.open"
		);

		if (nav__item__open.length == nav__item.length) {
			dd_menu.style.display = "none";
		}
		if (nav__list.offsetWidth > nav__menu.offsetWidth) {
			const itemLength = nav__item__open.length - 1;
			if(itemLength === -1) return;
			widthItem = nav__item__open[itemLength].offsetWidth;
			nav__item__open[itemLength].classList.remove("open");
			dd_menu.style.display = "block";
			dd_nav__item[itemLength].style.display = "block";
			if (nav__list.offsetWidth > nav__menu.offsetWidth) {
				hideItemMenu();
			}
		} else if (
			nav__list.offsetWidth + widthItem < nav__menu.offsetWidth &&
			nav__item__open.length !== nav__item.length
		) {
			nav__item[nav__item__open.length].classList.add("open");
			widthItem = nav__item[nav__item__open.length].offsetWidth;

			let coutNone = !dd_nav__item[nav__item__open.length]
				? nav__item__open.length - 1
				: nav__item__open.length;

			dd_nav__item[coutNone].style.display = "none";
		}
	}
	hideItemMenu();
	window.addEventListener("resize", hideItemMenu);
});