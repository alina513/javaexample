

const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let formEl = event.currentTarget.elements;
  let mail = formEl.email.value;
  let password = formEl.password.value;
  
  if (mail.length === 0 || password.length === 0) {
    alert("Всі поля повинні буті заповнені");
  } else {
    let dataForm = {
      email: mail,
      password: password
    };
    console.log(dataForm);
    event.currentTarget.reset();
  }
}