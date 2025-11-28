document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^(?:\+45\s?)?(?:\d{2}\s?\d{2}\s?\d{2}\s?\d{2}|\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{2}|\d{8})$/;

  let isNameValid = false;
  let isEmailValid = false;
  let isPhoneValid = false;

  function updateInputClass(input, isValid) {
    input.classList.remove("valid", "invalid");
    if (input.value !== "") input.classList.add(isValid ? "valid" : "invalid");
  }

  function validateForm() {
    const formValid = isNameValid && isEmailValid && isPhoneValid;
    submitBtn.disabled = !formValid;
    return formValid;
  }

  function updateResetButton() {
    resetBtn.disabled = ![nameInput, emailInput, phoneInput].some(
      (input) => input.value.trim() !== ""
    );
  }

  function validateInput(input, regex, flagSetter) {
    const value = input.value.trim();
    const isValid = value !== "" && regex.test(value);
    flagSetter(isValid);
    updateInputClass(input, isValid);
    validateForm();
    updateResetButton();
  }

  [nameInput, emailInput, phoneInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input === nameInput)
        validateInput(nameInput, nameRegex, (v) => (isNameValid = v));
      if (input === emailInput)
        validateInput(emailInput, emailRegex, (v) => (isEmailValid = v));
      if (input === phoneInput)
        validateInput(phoneInput, phoneRegex, (v) => (isPhoneValid = v));
    });
    input.addEventListener("focus", () => {
      let isValid = false;
      if (input === nameInput) isValid = isNameValid;
      if (input === emailInput) isValid = isEmailValid;
      if (input === phoneInput) isValid = isPhoneValid;
      if (isValid) updateInputClass(input, true);
    });
  });

  resetBtn.addEventListener("click", () => {
    [nameInput, emailInput, phoneInput].forEach((input) => {
      input.value = "";
      input.classList.remove("valid", "invalid");
    });
    isNameValid = isEmailValid = isPhoneValid = false;
    validateForm();
    updateResetButton();
  });

  submitBtn.disabled = true;
  resetBtn.disabled = true;

  window.formIsValid = () => isNameValid && isEmailValid && isPhoneValid;
});
