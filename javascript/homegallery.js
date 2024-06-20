let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//Shows correct image & circle for image.
function showSlides(n) {
  let i;
  //finds div with class of mySlides, which contains info for the gallery
  let slides = document.getElementsByClassName("mySlides");
  //finds the span with class of dot.
  let dots = document.getElementsByClassName("dot");

  //Initial check to see if the slider has gone past the final image, and sets it to the first image.
  if (n > slides.length) {
    slideIndex = 1;
  }
  //Checks to see if slider has gone behind the first image, and sets it to the last image.
  if (n < 1) {
    slideIndex = slides.length;
  }
  //Ensures all images & previous image are no longer displayed.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Ensures previous dot is no longer styled with "active" class.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Displays the image.
  slides[slideIndex - 1].style.display = "block";
  //Sets styling for correct circle.
  dots[slideIndex - 1].className += " active";
}
