// Select elements from the HTML
const openBtn = document.querySelector("button.modal-open-btn.overlay"); // Open modal button
const closeBtn = document.querySelector("dialog button.modal-close-btn"); // Close (X) button
const dialog = document.querySelector("dialog"); // The dialog element
const form = document.querySelector("dialog form"); // The form inside the dialog

// Open the dialog
openBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Close the dialog when clicking the X
closeBtn.addEventListener("click", () => {
  dialog.close();
});

// Close the dialog when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Example: if you later add inputs, you can read them here
  console.log("Form submitted");

  dialog.close();
});
