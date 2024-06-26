function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

// Close/hide the sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Checks for window resize and makes sure width is reset when adjusted
window.addEventListener("resize", function () {
  var nav = document.getElementById("mySidenav");
  if (window.innerWidth >= 769) {
    nav.style.width = "100vw"; // Ensure width is 100vw for larger screens
  } else {
    nav.style.width = "0"; // Reset to 0 for smaller screens
  }
});
