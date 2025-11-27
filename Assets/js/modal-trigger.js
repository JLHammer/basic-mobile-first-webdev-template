// Select elements from the HTML
const openBtn = document.querySelector("button.modal-open-btn.overlay"); // Open modal button
const closeBtn = document.querySelector("dialog button.modal-close-btn"); // Close (X) button
const dialog = document.querySelector("dialog"); // The dialog element
const form = document.querySelector("dialog form"); // The form inside the dialog

// Elements to make inert when modal is open
const header = document.querySelector("body > header");
const main = document.querySelector("body > main");
const footer = document.querySelector("body > footer");

// Function to toggle inert on page content
function setInert(value) {
  header.inert = value;
  main.inert = value;
  footer.inert = value;
}

// Open the dialog
openBtn.addEventListener("click", () => {
  dialog.showModal();
  setInert(true); // Make header, main, footer inert
});

// Close the dialog when clicking the X
closeBtn.addEventListener("click", () => {
  dialog.close();
  setInert(false); // Restore interactivity
});

// Close the dialog when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  dialog.close();
  setInert(false); // Restore interactivity
});
