var sliderInt = 1;
var sliderNext = 2;

$(function() {
	$("#slider img#1").fadeIn(300);
	startSlider();
});

function startSlider() {
	var count = $("#slider img").size();

	var loop = setInterval(function() {
		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}
		$("#slider img").fadeOut(300);
		$("#slider img#" + sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext++;

	}, 3000);
}


