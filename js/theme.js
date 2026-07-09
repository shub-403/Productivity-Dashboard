let html = document.documentElement;
const themeBtn = document.querySelector(".theme-btn");

let currentTheme = JSON.parse(localStorage.getItem("theme")) || "light";
html.dataset.theme = currentTheme;
themeBtn.textContent = currentTheme === "light" ? "Dark" : "Light";

themeBtn.addEventListener("click", () => {
  if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
    currentTheme = "dark";
    themeBtn.textContent = "Light";
  } else {
    html.dataset.theme = "light";
    currentTheme = "light";
    themeBtn.textContent = "Dark";
  }

  localStorage.setItem("theme", JSON.stringify(currentTheme));
});
