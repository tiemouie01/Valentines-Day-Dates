const hideUi = function removeUiFromScreen() {
  const homeBar = document.querySelector(".home-bar");
  homeBar.addEventListener("click", () => {
    const phone = document.getElementById("phone");
    phone.classList.toggle("hide");
  });
};

hideUi();
