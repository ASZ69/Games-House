$(document).ready(function(){
	$('#video').append('<video id="vedio" loop autoplay><source src="../vedio/vedio.mp4" type="video/mp4"></video>');
	$('#vedio').get(0).play();
})
//ScrollReveal().reveal('.scroll-up',{duration:2000});

function btnfol(ref){
//	alert(btncol);
	var btncol = document.getElementsByClassName('btncol')[0];
	btncol.innerHTML = 'Thanks To Follow me';
	btncol.style.fontSize = '1.8vw';
	btncol.style.color = 'white';
    var pos = 0;
    var colid = setInterval(frame, 5);
	
    function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      btncol.style.top = pos + "px"; 
      btncol.style.bottom = pos + "px"; 
    }
  }
}

	$(function() {

	  $('.row-heading').appear();

	  $(document.body).on('appear', '.row-heading', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated rubberBand');
	  });
//
	  $(document.body).on('disappear', '.row-heading', function(e, $affected) {
		  $affected.removeClass('rubberBand');
	  });
//		
	});

	$(function() {

	  $('.actionzl').appear();

	  $(document.body).on('appear', '.actionzl', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated zoomInUp');
	  });
//
	  $(document.body).on('disappear', '.actionzl', function(e, $affected) {
		  $affected.removeClass('zoomInUp');
	  });
//		
	});

	$(function() {

	  $('.slideinup').appear();

	  $(document.body).on('appear', '.slideinup', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated slideInUp');
	  });
//
	  $(document.body).on('disappear', '.slideinup', function(e, $affected) {
		  $affected.removeClass('slideInUp');
	  });
//		
	});

	$(function() {

	  $('.rotatein').appear();

	  $(document.body).on('appear', '.rotatein', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated rotateIn');
	  });
//
	  $(document.body).on('disappear', '.rotatein', function(e, $affected) {
		  $affected.removeClass('rotateIn');
	  });
//		
	});

	$(function() {

	  $('.roatadown').appear();

	  $(document.body).on('appear', '.roatadown', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated rotateInDownLeft');
	  });
//
	  $(document.body).on('disappear', '.roatadown', function(e, $affected) {
		  $affected.removeClass('rotateInDownLeft');
	  });
//		
	});

	$(function() {

	  $('.flipinx').appear();

	  $(document.body).on('appear', '.flipinx', function(e, $affected) {
		// this code is executed for each appeared element
		 $affected.addClass('animated flipInX');
	  });
//
	  $(document.body).on('disappear', '.flipinx', function(e, $affected) {
		  $affected.removeClass('flipInX');
	  });
//		
	});