//Chatgpt used to understand fetch and .then usage, and also provided structure.
fetch("../html/navbar.html")
  //fetch returns a response object. .then uses this to return the text within the response (navbar.html content)
  .then((response) => response.text())
  //.then uses the result of response.text() and puts this in the place of 'navbar-placeholder'
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  });
