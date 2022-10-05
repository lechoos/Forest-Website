const navItems = document.querySelector('.nav__items');
const navBtn = document.querySelector('.nav__btn');
const allNavItems = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

navBtn.addEventListener('click', () => {
    navItems.classList.toggle('nav--active');
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle('sticky-body');
})

allNavItems.forEach(el => {
    el.addEventListener('click', () => {
        navItems.classList.remove('nav--active');
        navBtn.classList.remove('is-active');
        document.body.classList.remove('sticky-body');
    })
})

const year = new Date().getFullYear();
footerYear.textContent = year;

// window.location.replace("#");
    
// if (typeof window.history.replaceState == 'function') {
//   history.replaceState({}, '', window.location.href.slice(0, -1));
// }