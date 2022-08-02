const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

const preloader = document.querySelector(".preloader");

//remove preloader when the whole page has loaded including all dependent resources such as stylesheets and images.
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
