function goToBack() {
    $(".right-view").css("display", "flex");
    $(".right-page").css("display", "none");
}
//function action(){
//	$(".action").css("display", "block");
//    $(".action").css("display", "none");
//}

function changeImg(ref){
	document.getElementById("mainImg").src = ref.src;
}


//        variables(".mnb","slideInLeft","slow"); 
//		variables(".zxcv","slideInRight","fast");
////		variables(".slideinup","slideInRight","fast");
////		variables(".rotatein","rotateIn","slower");
////		variables(".roatadown","rotateInDownLeft","slower");
////		variables(".flipinx","flipInX","slower");
//
//function variables(id,classList,unRemoveableClasses){
//	
//	$(id).appear();
//	
//	$(document.body).on('appear', id, function(e, $affected) {
//		$affected.addClass('animated '+classList+' '+unRemoveableClasses);
//	});
//	
//	$(document.body).on('disappear', id, function(e, $affected) {
//		$affected.removeClass(classList);
//	});
//}