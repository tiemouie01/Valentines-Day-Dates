const maleButton = document.querySelector(".male-button");

maleButton.addEventListener("click", () => {
  maleButton.classList.toggle("chosen");
});

const femaleButton = document.querySelector(".female-button");

femaleButton.addEventListener("click", () => {
  femaleButton.classList.toggle("chosen");
});