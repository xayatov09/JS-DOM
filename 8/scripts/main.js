let display = document.querySelector(".display");
let reset = document.querySelector(".reset");
let count = document.querySelector(".count");

count.addEventListener("click", () => {
  display.textContent = +display.textContent + 1;
});
reset.addEventListener("click", () => {
  display.textContent = 0;
});