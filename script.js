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

const changeBackToDark = (currentBtn) => {
  currentBtn.children[0].src = "../../assets/copy.svg";
  currentBtn.classList.remove("icon-success");
  currentBtn.classList.add("icon-light");
}

const copyBtns = document.querySelectorAll(".copy-btn");
copyBtns.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", (e) => {
    if (e.target.parentElement.parentElement.children[1]) {
      const textToCopy =
        e.target.parentElement.parentElement.children[1].textContent;
      navigator.clipboard.writeText(textToCopy);
      currentBtn.classList.remove("icon-light");
      currentBtn.classList.add("icon-success");
      currentBtn.children[0].src = "../../assets/copy-success.svg";
      setTimeout(() => changeBackToDark(currentBtn), 2000);
    }
  });
});
