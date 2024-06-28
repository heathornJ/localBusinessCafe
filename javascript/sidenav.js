function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("openbtn").style.opacity = "0";
}

// Close/hide the sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("openbtn").style.opacity = "100%";
}

//Checks for window resize and makes sure width is reset when adjusted
window.addEventListener("resize", function () {
  var nav = document.getElementById("mySidenav");
  var openButtton = document.getElementById("openbtn");
  if (window.innerWidth >= 769) {
    nav.style.width = "100%"; // Ensure width is 100vw for larger screens
  } else {
    nav.style.width = "0"; // Reset to 0 for smaller screens
    openButtton.style.opacity = "100%";
  }
});
