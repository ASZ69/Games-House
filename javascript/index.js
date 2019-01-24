$(document).ready(function(){
	$('#video').append('<video id="vedio" loop autoplay><source src="../vedio/vedio.mp4" type="video/mp4"></video>');
	$('#vedio').get(0).play();
})

ScrollReveal().reveal('.scroll-up',{duration:3000});
//
//var body = document.getElementsByTagName('body')[0];
//var tag = body.parentElement.nodeName;
//alert('tag');