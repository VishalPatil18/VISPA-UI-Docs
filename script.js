const menuBtn = document.getElementById("menu-btn");
const sidebarContainer = document.querySelector(".maincontent__sidebar--left");
const sidebarEl = document.getElementById("sidebar-el");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const themeSwitcherBtn = document.getElementById("theme-switcher-btn");
const darkIcons = document.querySelectorAll(".icon-dark");
const themeIcon = document.getElementById("theme-icon");

let storageValue = localStorage.getItem("theme");

const lightMode = () => {
  localStorage.setItem("theme","light_mode");
  themeIcon.src =
    "https://raw.githubusercontent.com/VishalPatil18/VISPA-UI/main/assets/moon.svg";
  document.body.classList.remove("dark-mode");
  themeIcon.classList.remove("icon-dark");
  themeIcon.classList.add("icon-light");

  darkIcons.forEach(function (currentIcon) {
    currentIcon.classList.remove("icon-light");
    currentIcon.classList.add("icon-dark");
  });
};

const darkMode = () => {
  localStorage.setItem("theme","dark_mode");
  themeIcon.src =
    "https://raw.githubusercontent.com/VishalPatil18/VISPA-UI/main/assets/sun.svg";
  document.body.classList.add("dark-mode");
  themeIcon.classList.add("icon-dark");
  themeIcon.classList.remove("icon-warning");

  darkIcons.forEach(function (currentIcon) {
    currentIcon.classList.remove("icon-dark");
    currentIcon.classList.add("icon-light");
  });
};

if (storageValue === null) {
  localStorage.setItem("theme", "light_mode");
} else if (storageValue === "dark_mode") {
  darkMode();
}

if(menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebarContainer.style.display = "block";
    sidebarEl.style.display = "block";
  });
}

if(sidebarCloseBtn) {
  sidebarCloseBtn.addEventListener("click", () => {
    sidebarContainer.style.display = "none";
    sidebarEl.style.display = "none";
  });
}

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

themeSwitcherBtn.addEventListener("click", () => {
  storageValue = localStorage.getItem("theme");
  if (storageValue === "light_mode") {
    darkMode();
  } else if(storageValue === "dark_mode") {
    lightMode();
  }
});

