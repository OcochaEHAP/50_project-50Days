let panels = document.querySelectorAll(".panel");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexColor = [];

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    changeBackground();
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function changeBackground() {
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * hex.length);
    const color = hex[randomNum];
    hexColor.push(color);
  }
  const finalColor = `#${hexColor.join("")}`;
  document.body.style.background = finalColor;
  hexColor = [];
}
