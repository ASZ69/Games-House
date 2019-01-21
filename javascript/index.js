$(document).ready(function(){
	$('#video').append('<video id="vedio" loop><source src="../vedio/vedio.mp4" type="video/mp4"></video>');
	$('#vedio').get(0).play();
})