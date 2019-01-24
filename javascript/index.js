$(document).ready(function(){
	$('#video').append('<video id="vedio" loop autoplay><source src="../vedio/vedio.mp4" type="video/mp4"></video>');
	$('#vedio').get(0).play();
})
window.screen = ScrollReveal();
screen.reveal('.container-fluid',{duration:1000});
screen.reveal('.container-fluid',{duration:1000});
screen.reveal('.row',{duration:1000});
screen.reveal('.cols3',{duration:1000});