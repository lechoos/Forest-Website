const navItems = document.querySelector('.nav__items');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__link');

navBtn.addEventListener('click', () => {
    navItems.classList.toggle('nav--active');
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle('sticky-body');
})

allNavItems.forEach(el => {
    el.addEventListener('click', () => {
        navItems.classList.remove('nav--active');
        navBtn.classList.remove('is-active');
    })
})