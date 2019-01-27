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
//                 animation working start

        anim(".row-heading","rubberBand","normal");
		anim(".actionzl","zoomInUp","slow");
		anim(".slideinup","slideInUp","fast");
		anim(".rotatein","rotateIn","slower");
		anim(".roatadown","rotateInDownLeft","slower");
		anim(".flipinx","flipInX","slower");

function anim(id,classList,unRemoveableClasses){
	
	$(id).appear();
	
	$(document.body).on('appear', id, function(e, $affected) {
		$affected.addClass('animated '+classList+' '+unRemoveableClasses);
	});
	
	$(document.body).on('disappear', id, function(e, $affected) {
		$affected.removeClass(classList);
	});
}