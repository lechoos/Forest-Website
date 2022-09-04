const navItems = document.querySelector('.nav__items');
const navBtn = document.querySelector('.nav__btn');

navBtn.addEventListener('click', () => {
    navItems.classList.toggle('nav--active');
})