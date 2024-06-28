//Code modified from https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/ */


//Find all elements with class name
const questionContainer = document.getElementsByClassName("question-container");

//Loop through each element and add the click event listener, perform the function when clicked.
for (i = 0; i < questionContainer.length; i++) {
  const currentQuestion = questionContainer[i];
  const questionLabel = currentQuestion.getElementsByClassName("question-label");
  //0 as there will only ever be one label per question container
  questionLabel[0].addEventListener("click", function () {
    currentQuestion.classList.toggle("active"); 
  });
}
