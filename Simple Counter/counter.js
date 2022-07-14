// Set initial count
let count = 0;

// Select all the buttons that have the generic .btn class
const buttons = document.querySelectorAll(".btn");

//Select the value <span>
const value = document.querySelector("#value");

//forEach() method to access all buttons

//Access all buttons(=variable)
buttons.forEach(function (button) {
  // Add event listener to each button - event object (e)
  button.addEventListener("click", function (e) {
    //Log the class/classes of the button when each button is clicked.
    const buttonClasses = e.currentTarget.classList;
    console.log(buttonClasses);

    if (buttonClasses.contains("decrease")) {
      // decrease the count by one
      count--;
    } else if (buttonClasses.contains("increase")) {
      // increase the count by one
      count++;
    } else {
      //set count to 0
      count = 0;
    }
    //Change value's span color depending on the count
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    //assign the count to the value's text content
    value.textContent = count;
  });
});
