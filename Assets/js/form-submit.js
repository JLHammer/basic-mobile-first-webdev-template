// form-submit.js
import { formIsValid } from "./form-validation.js";

const form = document.getElementById("form");
const dialog = document.querySelector("dialog");

form?.addEventListener("submit", (e) => {
  console.log("Submit event fired. formIsValid =", formIsValid);

  if (!formIsValid) {
    e.preventDefault();
    alert("Please fill out the form correctly before submitting.");
    return;
  }

  alert("Form submitted successfully!");
  if (dialog && dialog.open) dialog.close();
});
