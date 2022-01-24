const drawerHandlerBtn = document.getElementById("drawer-handler-btn");
const drawerEl = document.getElementById("drawer-el");

let drawerIsOpen = false;

drawerHandlerBtn.addEventListener("click", () => {
  if (drawerIsOpen) {
    drawerEl.style.display = "none";
  } else {
    drawerEl.style.display = "flex";
  }
  drawerIsOpen = !drawerIsOpen;
});
