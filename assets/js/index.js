const burger = document.querySelector(
  '.header_containerparheadnavul_responsive',
);
const iwq = document.querySelector('.iwq');
const parpopup = document.querySelector('.parpopup');
const parpopuPopup = document.querySelector('.parpopup__popup');
const navLinks = document.querySelectorAll('.mobile-nav-links');
const email = document.querySelector('.form__control > input#email');
const form = document.querySelector('form');
const emailerror = document.querySelector('#emailerror');
const pardetail = document.querySelector('.pardetail');
burger.addEventListener('click', () => {
  if (burger.classList.contains('change')) {
    burger.classList.remove('change');
  } else {
    burger.classList.add('change');
  }

  if (iwq.classList.contains('show')) {
    iwq.classList.remove('show');
  } else {
    iwq.classList.add('show');
  }
});
