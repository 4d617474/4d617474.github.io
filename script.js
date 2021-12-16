var od = document.getElementById("od");
var ct = document.getElementById("ct");
var wd = document.getElementById("wd");
var ph = document.getElementById("ph");
var mu = document.getElementById("mu");
var an = document.getElementById("an");
var tdp = document.getElementById("tdp");
var abt = document.getElementById("abt");


function checkY() {

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("overflow").classList.add("on");
  } else {
    document.getElementById("overflow").classList.remove("on");
  }
}
window.document.body.onscroll = function(){
  if (document.getElementById("overflow").classList.contains("open")){return}
  checkY()
};

var isMenuOpen = 0;
function toggleMenu(state,noAnim) {
  if(state == 1){isMenuOpen = 1}
  if(isMenuOpen == 0) {
    document.getElementById("overflow").classList.add("open");
    document.getElementById("overflow").classList.add("on");
    document.getElementById("overflow").classList.remove("close");
    document.getElementById("up").classList.add("down");
    document.getElementById("curtains").classList.add("on");
    isMenuOpen = 1;
  } else {
    // document.getElementById("overflow").classList.remove("on");
    document.getElementById("overflow").classList.remove("open");
    document.getElementById("up").classList.remove("down");
    document.getElementById("curtains").classList.remove("on");
    checkY();
    isMenuOpen = 0;
    if(noAnim == 1)
    {
      // document.getElementById("overflow").classList.remove("on");
      document.getElementById("overflow").classList.add("close");
    }
  }
}

slideShow()
var currentSlide,currentPageSlide,currentN;
function slideShow(){
  var slide = document.getElementById("slide");
  var slider = document.getElementById("sliderBar");
  var pics = document.getElementsByClassName("pic");
  // var ranN = Math.floor(Math.random() * pics.length);
  var ranN = Math.floor(Math.random() * pics.length);
  // console.log(pics[ranN].src.includes("mp4"))

  while(pics[ranN].src.includes("mp4")){
   ranN = Math.floor(Math.random() * pics.length);
  }
  document.getElementById("slide").style.backgroundImage = "url('" + pics[ranN].src + "')";
  setTimeout(function(){
      slider.classList.add("animated")
      slide.classList.add("animated")
    }
  , 1);
  slide.classList.remove("animated")
  slider.classList.remove("animated")
  currentSlide = pics[ranN];
  currentPageSlide = pics[ranN].parentNode.parentNode.parentNode;
  if (currentPageSlide.classList.contains("ob")){currentN = 1}
  if (currentPageSlide.classList.contains("ct")){currentN = 2}
  if (currentPageSlide.classList.contains("ph")){currentN = 3}
  if (currentPageSlide.classList.contains("wd")){currentN = 4}
  setTimeout(slideShow, 3500);
}

rand4D();
var num;
var num2;
function rand4D() {
  while(num2 == num){
  num2 = Math.floor((Math.random() * 11) + 1);
  }
  num = num2;
  document.getElementById("picture").style.backgroundImage = "url('icons/4ds/" + num + ".svg')";
}
var page = document.getElementsByClassName("page");
var navBlocks = document.getElementsByClassName("navigation block");
var currentPage = 1;

function pickPage(number,elmnt,noAnim)
{
  checkY();
  if (elmnt != null){
  for (i = 0; i < navBlocks.length; i++) {
      navBlocks[i].classList.remove("on");
    }
    elmnt.classList.add("on");
  }

	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	page[number].classList.add("on");
	window.scrollTo(0, 0);
  toggleMenu(1)
}


function btnSlct(number,elmnt)
{
	for (i = 0; i < allSlctdBtns.length; i++) {
		allSlctdBtns[i].classList.remove("btnOn");
	}
	elmnt.classList.add("btnOn");
	// setInfo(number);
	// setTab(number);
	// mvRw(elmnt);
}

var modal = document.getElementById("modalBlock");
var modalImg = document.getElementById("img00");
var modalVid = document.getElementById("vid00");
var pane;
var columnSide;
var postNo;
this.onclick = function(event) {
    if (event.target.classList.contains("pic") == true) {
      document.getElementById("overflow").classList.add("hide");

			modalImg.firstElementChild.src = "none";
			modalImg.style.backgroundImage = "none";
			pane = event.target.closest('.pic');
      // window.scrollTo(0,pane.y);
      // console.log(pane);
      modal.classList.add("on");
			modal.style.opacity = "1";
      // console.log(Array.prototype.indexOf.call(pane.parentNode.children,pane))
      postNo = Array.prototype.indexOf.call(pane.parentNode.children,pane);


      // console.log(postNo)
      // console.log(columnSide)

      if (pane.parentElement.className == "column post left") {columnSide = 0}
      else {columnSide = 1}
      // console.log(columnSide);
			if (pane.nodeName == "VIDEO") {
				modalVid.src = pane.src;
        modalImg.classList.add("on");
        modalVid.classList.add("on");
				document.getElementById("mute").classList.add("on");
				modalVid.play();
			} else if (pane.classList.contains("wd") == false){
				modalImg.classList.add("on");
				modalImg.style.backgroundImage = "url('" + pane.src.replace("_th","") + "')";
				modalVid.classList.remove("on");
				document.getElementById("mute").style.display = "none";
			} else if (pane.classList.contains("wd") == true){
				modalVid.classList.remove("on");
				modalImg.classList.remove("on");
				document.getElementById('spFrame-In').src = pane.alt;
				document.getElementById("source").classList.add("on");
				document.getElementById("reload").classList.add("on");
				document.getElementById("spFrame-In").classList.add("on");
			}
	} return
};
var isFromNextCol = 0;
var postIndex = 0;
var oldPane;
document.getElementById("previous").onclick = function(){
  var previousPane;
  previousPane = pane.previousSibling.previousSibling;
  if(previousPane == null){
    pane.parentElement.previousElementSibling.lastChild.previousElementSibling.click();
  }
  if (previousPane.className == "post pic" || previousPane.className == " post pic wd"){
    previousPane.click();
  }
  // window.scrollTo(0,pane.y);
}
document.getElementById("next").onclick = function(){
  var nextPane;
  nextPane = pane.nextSibling.nextSibling;
  if(nextPane == null){
    pane.parentElement.nextElementSibling.firstChild.nextElementSibling.click();
  }
  if (nextPane.className == "post pic" || nextPane.className == " post pic wd"){
    nextPane.click();
  }
  // window.scrollTo(0,pane.y);

  // if (nextPane.className == "post pic" || nextPane.className == " post pic wd")
  // {
  // console.log(postNo);
  // console.log(columnSide);
  // console.log("before");
  // console.log(postNo);
  //
  //   if (columnSide == 0){
  //     // nextPane = pane.parentElement.nextElementSibling.childNodes[postNo].nextElementSibling;
  //     // isFromNextCol = 1;
  //     // pane.parentElement.nextElementSibling.childNodes[postNo].nextElementSibling
  //     // nextPane = pane.parentElement.nextElementSibling.childNodes[postIndex].previousElementSibling;
  //     // nextPane = pane.parentElement.nextElementSibling.childNodes[postNo].nextSibling;
  //     nextPane = pane.parentElement.nextElementSibling.childNodes[postNo].nextSibling.nextSibling;
  //   } else {
  //     nextPane = oldPane.nextElementSibling;
  //     // console.log("after");
  //     // console.log(postNo);
  //     // if (postNo != 0){postNo = postNo+1;console.log("after");}
  //     // nextPane = pane.parentElement.previousElementSibling.childNodes[postNo+1].nextElementSibling;
  //     // isFromNextCol = 0;
  //   }
  //   // postIndex++;
  //   if(nextPane == null){
  //     nextPane = pane.parentElement.nextElementSibling.firstChild.nextElementSibling;
  //     postIndex = 0;
  //     // isFromNextCol = 0;
  //   }
  //   // console.log(nextPane);
  //   oldPane = pane;
  //   nextPane.click();
  // // }

}
document.getElementById("exit").onclick = function(){
	modal.classList.remove("on");
	modalVid.src = "none";
  document.getElementById("overflow").classList.remove("hide");
	document.getElementById("reload").classList.remove("on");
	document.getElementById("mute").classList.remove("on");
	document.getElementById("source").classList.remove("on");
	document.getElementById("source").classList.remove("on");
	document.getElementById("reload").classList.remove("on");
	document.getElementById("spFrame-In").classList.remove("on");
  window.scrollTo(0,pane.y);
  // document.getElementById("overflow").classList.add("on");

  checkY();
}
document.getElementById("mute").onclick = function(){
	if (modalVid.muted == true){
		modalVid.muted = false;
		this.style.backgroundImage = "url('icons/sound.svg')";
	} else {
		modalVid.muted = true;
		this.style.backgroundImage = 'url("icons/mute.svg")';
	}
}
document.getElementById("source").onclick = function(){
	var oc;
	oc = pane.nextElementSibling;
	if (oc.className == "wdLink"){
		oc.click();
	} else {
		return
	}
}
document.getElementById("reload").onclick = function(){
	var hold = document.getElementById("spFrame-In").src;
	document.getElementById('spFrame-In').src = '';
		document.getElementById('spFrame-In').src = hold
}
