var showOnPx = 100;
var backToTopButton = document.querySelector(".back-to-top"); // Get the button, and when the user clicks on it, execute myFunction

function myFunction() {
  var x = document.getElementById("top_menu");

  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

var scrollContainer = function scrollContainer() {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", function () {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

var goToTop = function goToTop() {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

backToTopButton.addEventListener("click", goToTop);
var splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', function (e) {
  setTimeout(function () {
    splash.classList.add('display-none'), $('html,body').css('overflow', 'auto');
  }, 3000);
});