let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem("theme");

const setTheme = (mode) => {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/default.css";
  } else {
    document.getElementById("theme-style").href = `css/${mode}.css`;
  }

  localStorage.setItem("theme", mode);
};

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}
