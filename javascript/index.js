$(document).ready(function () {
    $('#video').append('<video id="vedio" loop autoplay><source src="vedio/vedio.mp4" type="video/mp4"></video>');
    $('#vedio').get(0).play;
//    $('#vedio').get(0).load();
})
//ScrollReveal().reveal('.scroll-up',{duration:2000});

function btnfol(ref) {
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

variables(".row-heading", "rubberBand", "normal");
variables(".actionzl", "slideInLeft", "slow");
variables(".slideinup", "slideInRight", "fast");
variables(".rotatein", "rotateIn", "slower");
variables(".roatadown", "rotateInDownLeft", "slower");
variables(".flipinx", "flipInX", "slower");

function variables(id, classList, unRemoveableClasses) {

    $(id).appear();

    $(document.body).on('appear', id, function (e, $affected) {
        $affected.addClass('animated ' + classList + ' ' + unRemoveableClasses);
    });

    $(document.body).on('disappear', id, function (e, $affected) {
        $affected.removeClass(classList);
    });
}