const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+45\s?)?(?:\d{2}\s?){4}$/;

let formIsValid = false;

// Keep the validity state in variables that can update
let testName = false;
let emailTest = false;
let phoneTest = false;

// Function to validate the form and toggle the submit button
function validateForm() {
  if (testName && emailTest && phoneTest) {
    submitBtn.disabled = false;
    formIsValid = true;
    console.log("Form is valid");
  } else {
    submitBtn.disabled = true;
    formIsValid = false;
  }
}

// Update validity on input events
nameInput.addEventListener("input", () => {
  testName = nameRegex.test(nameInput.value);
  console.log("Name valid:", testName);
  validateForm();
});

emailInput.addEventListener("input", () => {
  emailTest = emailRegex.test(emailInput.value);
  console.log("Email valid:", emailTest);
  validateForm();
});

phoneInput.addEventListener("input", () => {
  phoneTest = phoneRegex.test(phoneInput.value);
  console.log("Phone valid:", phoneTest);
  validateForm();
});
