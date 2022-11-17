import lodash from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');

let email = '';
let message = '';

if (localStorage.getItem('feedback-form-state')) {
  const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
  email = emailField.value = savedFeedback?.email;
  message = messageField.value = savedFeedback?.message;
}

form.addEventListener(
  'input',
  lodash(e => {
    if (e.target === emailField) {
      email = e.target.value;
    }

    if (e.target === messageField) {
      message = e.target.value;
    }

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email, message })
    );
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log({ email, message });
  email = '';
  message = '';
  localStorage.setItem('feedback-form-state', '');
  form.reset();
});
