const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

const btn = document.querySelector("#btn"); //select the button
const color = document.querySelector(".color"); //select the span

btn.addEventListener("click", function () {
  let hexColor = "#"; //Every HEX Color starts with a #
  //Create a loop that will run 6 times (hex color consists of a # and 6 digits(from 0 to 9) / letters (from A to F))
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; //every time picks a different index inside hex array
  }
  color.textContent = hexColor; //manipulate span's text
  color.style.color = hexColor; //manipulate span's font color
  document.body.style.backgroundColor = hexColor; //manipulate the body's background
});

//Get a random number between the hex array length (0 - 14)
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
