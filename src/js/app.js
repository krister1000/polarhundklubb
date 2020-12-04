

const menuButtonOpen = document.querySelector('.menu__icon');
const menuButtonClose = document.querySelector('.menu__icon--close');
const headerToggle = document.querySelector('.menu__overlay');

menuButtonOpen.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closeMenu);

function openMenu() {
    headerToggle.classList.toggle('menu__overlay--active');
}
function closeMenu() {
    headerToggle.classList.toggle('menu__overlay--active');
}
