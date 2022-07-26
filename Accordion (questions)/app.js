// first way : traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// --------------------------------------------------

// second way : using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //select the button of each question
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    //close the expanded text/question when another is clicked/expanded
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    // main functionality
    question.classList.toggle("show-text");
  });
});
