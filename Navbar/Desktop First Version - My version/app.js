const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const mobileMenu = document.querySelector(".mobile-menu");

navToggle.addEventListener("click", function () {
  if (mobileMenu.classList.contains("mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu");
  }
});

navClose.addEventListener("click", function () {
  mobileMenu.classList.add("hide-mobile-menu");
  setTimeout(function () {
    mobileMenu.classList.remove("hide-mobile-menu");
  }, 1000);
  setTimeout(function () {
    mobileMenu.classList.remove("show-mobile-menu");
  }, 1000);
});
