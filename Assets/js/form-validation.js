// form-validation.js
export let formIsValid = false;

const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+45\s?)?(?:\d{2}\s?){4}$/;

let testName = false;
let emailTest = false;
let phoneTest = false;

function validateForm() {
  if (testName && emailTest && phoneTest) {
    submitBtn.disabled = false;
    formIsValid = true;
    console.log("Form is valid");
  } else {
    submitBtn.disabled = true;
    formIsValid = false;
    console.log("Form is invalid");
  }
}

// Input listeners
nameInput.addEventListener("input", () => {
  testName = nameRegex.test(nameInput.value);
  nameInput.classList.toggle("valid", testName);
  nameInput.classList.toggle("invalid", !testName);
  validateForm();
});

emailInput.addEventListener("input", () => {
  emailTest = emailRegex.test(emailInput.value);
  emailInput.classList.toggle("valid", emailTest);
  emailInput.classList.toggle("invalid", !emailTest);
  validateForm();
});

phoneInput.addEventListener("input", () => {
  phoneTest = phoneRegex.test(phoneInput.value);
  phoneInput.classList.toggle("valid", phoneTest);
  phoneInput.classList.toggle("invalid", !phoneTest);
  validateForm();
});
