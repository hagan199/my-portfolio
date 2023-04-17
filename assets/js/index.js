// Form Validation

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailerror.style.opacity = '1';
  }
});


const burger = document.querySelector(
  '.header__container__parhead__nav__ul__responsive',
);
const iwq = document.querySelector('.iwq');
const parpopup = document.querySelector('.parpopup');
const parpopuPopup = document.querySelector('.parpopup__popup');
const navLinks = document.querySelectorAll('.mobile-nav-links');
const email = document.querySelector('.form__control > input#email');
const form = document.querySelector('form');
const emailerror = document.querySelector('#emailerror');
const pardetail = document.querySelector('.pardetail');


