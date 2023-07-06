// sidebar
let sidebar = document.querySelector(".sidebar-menu");
let minSidebar = document.querySelector(".js-min-sidebar-icon");
let chevronLeft = document.querySelector(".bx-chevron-left");
// middle sidebar
let closeSide = document.querySelector(".js-close-sidebar");

minSidebar.addEventListener("click", () => {
  if (chevronLeft.classList.toggle("bx-chevron-right")) {
    sidebar.classList.add("minSidebar");
  } else {
    sidebar.classList.remove("minSidebar");
  }
});

closeSide.addEventListener("click", () => {
  if (sidebar.classList.toggle("close")) {
    sidebar.classList.add(".close");
  } else {
    sidebar.classList.remove(".close");
  }
});
