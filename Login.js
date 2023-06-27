// const closeButton = document.querySelector('.icon-close');
// const loginFormWrapper = document.querySelector('.wrapper');
// const loginButton = document.querySelector('.btnLogin-popup');
const wrapper=document.querySelector('.wrapper');
      const loginLink=document.querySelector('.login-link');
      const btnPopup=document.querySelector('.btnLogin-popup');
      const iconClose = document.querySelector('.btn');

// Check if user details are stored in localStorage
if (localStorage.getItem('email') && localStorage.getItem('password')) {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  
  // Autofill email and password inputs
  emailInput.value = localStorage.getItem('email');
  passwordInput.value = localStorage.getItem('password');
}
btnPopup.addEventListener('click',()=>{
  if (!document.contains(wrapper)) {
    document.body.appendChild(wrapper);
  }
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
  wrapper.iconClose.classList.remove('active-popup');
});

// closeButton.addEventListener('click', () => {
//   loginFormWrapper.remove();
// });

// loginButton.addEventListener('click', () => {
//   if (!document.contains(loginFormWrapper)) {
//     document.body.appendChild(loginFormWrapper);
//   }
// });

// Save user details to localStorage when submitting the login form
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailValue = document.querySelector('input[type="email"]').value;
  const passwordValue = document.querySelector('input[type="password"]').value;
  
  // Store user details in localStorage
  localStorage.setItem('email', emailValue);
  localStorage.setItem('password', passwordValue);
  
  // Submit the form
  loginForm.submit();
});




