//chnage navbar view to list
function showListNav() {
    "use strict";
    var nav = document.getElementById("myNavbar");
    if (nav.className === "navbar" || nav.className === "navbar sticky") {
        //        nav.className += " nav-list";
        nav.classList.add("nav-list");
    } else {
        //        nav.className = "navbar";
        nav.classList.remove("nav-list");
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//$(document).ready(function(){
//	$()
//});