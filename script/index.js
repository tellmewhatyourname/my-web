const sidebar = document.querySelector(".sidebar");
const minSidebar = document.querySelector(".js-min-sidebar-icon");
const closeSide = document.querySelector(".js-close-sidebar");

minSidebar.addEventListener("click", () => {
  console.log("min");
  minSizeSide();
});

function minSizeSide() {
  document
    .querySelector(".bx-chevron-left")
    .classList.toggle("bx-chevron-right");
  if (this,container === "bx-chevron-right") {
    sidebar.classList.add("min");
  } else {
    sidebar.classList.remove("min");
  }
}

closeSide.addEventListener("click", () => {
  console.log("close");
});
