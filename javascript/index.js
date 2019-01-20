window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// JavaScript Document

//chnage navbar view to list
//function showListNav() {
//    "use strict";
//    var nav = document.getElementById("mynavbar");
//    if (nav.className === "navbar" || nav.className === "navbar sticky") {
//        //        nav.className += " nav-list";
//        nav.classList.add("nav-list");
//    } else {
//        //        nav.className = "navbar";
//        nav.classList.remove("nav-list");
//    }
//}