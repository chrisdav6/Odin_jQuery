var sliderInt = 1;
var sliderNext = 2;
var count = $("#slider img").size();

$(function() {
	$("#slider img#1").fadeIn(300);
	startSlider();

	$(".left").on("click", prev);
	$(".right").on("click", next);
});

function startSlider() {

	loop = setInterval(function() {
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

function prev() {
	var newSlide = sliderInt - 1;
	showSlide(newSlide);
	return false;
}

function next() {
	var newSlide = sliderInt + 1;
	showSlide(newSlide);
	return false;
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(Id) {
	stopLoop();
	if(Id > count) {
		Id = 1;
	} else if (Id < 1) {
		Id = count;
	}
	$("#slider img").fadeOut(300);
	$("#slider img#" + Id).fadeIn(300);
	sliderInt = Id;
	sliderNext = Id + 1;
	startSlider();
}


$("#slider img").hover(
	function() {
		stopLoop();
		$(".started").remove();
		$("#slider").after("<p class='stopped'>Slider Stopped</p>");
	}, function() {
		startSlider();
		$(".stopped").remove();
		$("#slider").after("<p class='started'>Slider Started</p>");
		$(".started").delay(4000).fadeOut("slow");
	}
);


