const burger = document.querySelector('.header__container__parhead__nav__ul__responsive');
const mobileNav = document.querySelector('.iwq');
const navLinks = document.querySelectorAll('.mobile-nav-links');
const email = document.querySelector('.form__control > input#email');
const form = document.querySelector('form');
const emailError = document.querySelector('#emailerror');

burger.addEventListener('click', () => {
  burger.classList.toggle('change');
  mobileNav.classList.toggle('show');
});

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    burger.classList.remove('change');
  });
});

// Form Validation
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailError.style.opacity = '1';
  }
});