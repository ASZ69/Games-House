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