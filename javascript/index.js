$(document).ready(function(){
	$('#video').append('<video id="vedio" loop autoplay><source src="../vedio/vedio.mp4" type="video/mp4"></video>');
	$('#vedio').get(0).play();
})

ScrollReveal().reveal('.scroll-up',{duration:3000});

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

function btnread(btnread){
	alert(navabout);
	var navabout = document.getElementsByClassName('nav-about')[0];
	navabout.location.href = 'about-us.html';
}