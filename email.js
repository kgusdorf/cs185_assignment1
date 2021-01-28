const email_submit = document.getElementById('email_button');
const email_text = document.getElementById('email');
const response = document.getElementById('response');

email_submit.addEventListener('click', (e) => {
  let text = email_text.value;
  if (validateEmail(text)) {
    response.innerHTML = '<h2>Valid email!</h2>';
  } else {
    response.innerHTML = '<h2>Invalid email!</h2>';
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}