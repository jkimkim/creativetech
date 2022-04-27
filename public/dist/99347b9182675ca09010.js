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

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop)
