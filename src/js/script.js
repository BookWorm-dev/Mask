const body = document.querySelector('body');

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.header__nav');
const navClose = document.querySelector('.nav-close');

// Функция для открытия меню
function openMenu() {
	nav.classList.add('header__nav--active');
	body.classList.add('menu-open'); // блокируем скролл
}

// Функция для закрытия меню
function closeMenu() {
	nav.classList.remove('header__nav--active');
	body.classList.remove('menu-open'); // возвращаем скролл
}

menuButton.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);

// Закрытие при клике вне меню
document.addEventListener('click', e => {
	if (nav.classList.contains('header__nav--active') && !nav.contains(e.target) && !menuButton.contains(e.target)) {
		closeMenu();
	}
});
