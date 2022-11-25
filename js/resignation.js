const form = document.querySelector("#create-account-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const reason = document.querySelector("#reason");

form.addEventListener("submit", (event) => {
  validateForm();
  console.log(isFormValid());
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //USERNAME
  if (usernameInput.value.trim() == "") {
    setError(usernameInput, "Name can not be empty");
  } else if (
    usernameInput.value.trim().length < 5 ||
    usernameInput.value.trim().length > 15
  ) {
    setError(usernameInput, "Name must be min 5 and max 15 charecters");
  } else {
    setSuccess(usernameInput);
  }
  //EMAIL
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Provide email address");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else if (emailInput.value.trim() == "") {
    setError(emailInput, "Provide email address");
  } else {
    setError(emailInput, "Provide valid email address");
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}
