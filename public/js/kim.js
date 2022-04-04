const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

// Get the button, and when the user clicks on it, execute myFunction
function myFunction() {
  var x = document.getElementById("top_menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  }
  else {
    x.style.display = "flex";
  }
}

