// Form Validation

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailerror.style.opacity = '1';
  }
});

