// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
var drwrOvrly = document.getElementById("drawerOverlay");
var drwrIcn = document.getElementById("drawerIcon");
// var drwrIcnC = document.getElementById("drawerIconClose");
var page = document.getElementsByClassName("page");
var card = document.getElementsByClassName("card");

var currentPage = 1;
var previousPage = 1;

setTimeout(function(){
	window.scrollTo(0, 0);
}, 1)
setTimeout(function(){
	document.getElementById('curtains').style.display = "none"
}, 1000)

function pickPage(number)
{
	if (number == 99){number = previousPage}
	currentPage = number;
	drwrIcn.classList.add("on");
	// drwrIcnC.classList.remove("on");
	if (number == 0){
		drwrIcn.classList.remove("on");
		// drwrIcnC.classList.add("on");
	}
	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	for (i = 0; i < card.length; i++) {
		card[i].classList.add("on");
	}
	page[number].classList.add("on");
	window.scrollTo(0, 0);
}
var indexSlide = 0;
slideShow();
function slideShow() {
	var slides = document.getElementsByClassName("ss");
	for (i = 0;i < slides.length; i++){
		slides[i].classList.remove("on");
		slides[i].classList.remove("pon");
	}
	indexSlide++;
	if (indexSlide > slides.length) {indexSlide = 1}
	slides[indexSlide-1].classList.add("on");
	if (indexSlide == 1) {
		slides[slides.length-1].classList.add("pon");
	} else {
		slides[indexSlide-2].classList.add("pon");
	}

	setTimeout(slideShow, 3500);
}

//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
