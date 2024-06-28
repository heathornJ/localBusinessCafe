//Find all elements with class name
const question = document.getElementsByClassName("question-container");

//Loop through each element and add the click event listener, perform the function when clicked.
for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
