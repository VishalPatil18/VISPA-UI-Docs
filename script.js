const menuBtn = document.getElementById("menu-btn");
const sidebarContainer = document.querySelector(".maincontent__sidebar--left");
const sidebarEl = document.getElementById("sidebar-el");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

menuBtn.addEventListener("click", () => {
  sidebarContainer.style.display = "block";
  sidebarEl.style.display = "block";
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebarContainer.style.display = "none";
  sidebarEl.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == sidebarContainer) {
    sidebarEl.style.display = "none";
    sidebarContainer.style.display = "none";
  }
});
