const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];

const btn = document.querySelector("#btn"); //select the button
const color = document.querySelector(".color"); //select the span

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = colors[randomColor]; //manipulate the body's background
  color.style.color = colors[randomColor]; //manipulate span's font color
  color.textContent = colors[randomColor]; //manipulate span's text
});

// Get a random number between the colors array length (0 - 3)
// Math.floor to round down
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
