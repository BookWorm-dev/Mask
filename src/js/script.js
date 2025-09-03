const body = document.querySelector('body');

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.header__nav');
const navClose = document.querySelector('.nav-close');

menuButton.addEventListener('click', () => {
	nav.classList.add('header__nav--active');
});

navClose.addEventListener('click', () => {
	nav.classList.remove('header__nav--active');
});

document.addEventListener('click', e => {
	if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
		nav.classList.remove('header__nav--active');
	}
});
