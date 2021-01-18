const popup = document.querySelector(".popup");

const popupOpen = document
  .querySelector(".header__nav-login")
  .addEventListener("click", () => (popup.style.display = "block"));

const closeBtn = document
  .querySelector(".popup__close")
  .addEventListener("click", () => (popup.style.display = "none"));
