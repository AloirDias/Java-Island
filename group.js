const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
menu.classList.toggle("is-active");
menuLinks.classList.toggle("active");
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}//these two lines checks if we have gone over amount of slides or below 0 and loops back around if that is the case
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }//hide all slides
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//hides all dots
  }
  slides[slideIndex-1].style.display = "block";//reactivates 1
  dots[slideIndex-1].className += " active";
}