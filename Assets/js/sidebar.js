const asideBtn = document.querySelector(".aside-open-btn");
const aside = document.querySelector("aside");
const main = document.querySelector("main");

if (asideBtn && aside && main) {
  // Open aside smoothly
  asideBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    aside.classList.add("open"); // only toggle .open
  });

  // Close aside
  function closeAside() {
    aside.classList.remove("open"); // smooth slide out
  }

  // Click outside to close
  main.addEventListener("click", closeAside);

  // Prevent clicks inside aside from closing
  aside.addEventListener("click", (e) => e.stopPropagation());

  // Swipe left to close
  let startX = 0;
  aside.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  aside.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX < -50) {
      closeAside();
    }
  });
}
