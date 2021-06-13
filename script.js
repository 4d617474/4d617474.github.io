var menu = document.getElementById("menu");
var modal = document.getElementById("modalBlock");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img00");
var option = "closed";
var toggl = document.getElementById("toggl");
var menuRowTitle = document.getElementById("menuRowTitle");
var menuRowDesc = document.getElementById("menuDesc");
var postThumb = document.getElementsByClassName("thumb");
var aRow = document.getElementsByClassName("firstRow");
var bRow = document.getElementsByClassName("secondRow");
var cRow = document.getElementsByClassName("thirdRow");
var rowS = document.getElementsByClassName("menuRow");
var sideRow = document.getElementById("sideRow");

var navBar = document.getElementById("navigationBar");
var barInfo = document.getElementById("barInfo");
var menuToggler = document.getElementById("rowD");
var menuState = 0;
var infBlck = document.getElementsByClassName("infoBlock");
var allSlctdBtns = document.getElementsByClassName("rowButtons");
var tabcontent = document.getElementsByClassName("tabcontent");
postThumb.onclick = function(event) {
		//if (event.target.className != 'operatorBadge') return;

		//var pane = event.target.closest('.operatorBadge');
		//console.log( event.target.closest('.operatorBadge'));
		//showCharacter(this);
		console.log("gey");
	};

// window.onscroll = function() {scrollFunction()};
var menuMenuClosed, menuToggleClosed, menuToggleOpen, menuMenuOpen
var currWinSize, rowsSizeOpen, rowsSizeClose;
// windSize();
// function windSize(){
// 	if (window.outerWidth > 700){
// 		 menuMenuClosed = '-20%';
// 		 menuToggleClosed = '0%';
// 		 menuToggleOpen = '0%';
// 		 menuMenuOpen = '0%';
// 		 rowsSizeOpen = '40%';
// 		 rowsSizeClose = '40%';
// 		 menuToggle();
// 		 menuToggle();
// 	 } else {
// 		 menuMenuClosed = '-18%';
// 		 menuMenuOpen = '12%';
// 		 menuToggleClosed = '0%';
// 		 menuToggleOpen = '200%';
// 		 rowsSizeOpen = '40%';
// 		 rowsSizeClose = '20%';
// 		 currWinSize = 1;
// 		 menuToggle();
// 		 menuToggle();
// 	 };
// }

column = document.getElementsByClassName("column");
function sortPosts() {

}
function darkMode(){
	var stylS = document.getElementById("Astyle");
	if (stylS.href == "dark.css"){
		stylS.href = "light.css";
	} else if (stylS.href == "light.css"){
		stylS.href = "dark.css";
	}
}
// var barMenu = document.getElementById("barMenu");
function toggleMenu(state)
{
	if (state != null){menuState = state};
	// var clNB, clBI, opNB, opBI;
	// if (window.outerWidth > 700){
	// 	// clNB = ""
	// 	// clBI
	// } else {
	//
	// }
	if (menuState == 1){
		navBar.style.bottom = "-15%";
		barInfo.style.bottom = "calc(100%/3)";
		menuState = 0;
		menuToggler.classList.remove("toggleOn");
	} else if (menuState == 0){
		navBar.style.bottom = "0%";
		barInfo.style.bottom = "100%";
		menuState = 1;
		menuToggler.classList.add("toggleOn");
	}

}
function btnSlct(number,elmnt)
{
	for (i = 0; i < allSlctdBtns.length; i++) {
		allSlctdBtns[i].classList.remove("btnOn");
	}
	elmnt.classList.add("btnOn");
	// var x = event.target.closest("rowButtons left");
	// console.log(x);
	setInfo(number);
	setTab(number);
	mvRw(elmnt);
}
function setTab(tabNum)
{
	// console.log(1)
	toggleMenu(1);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tabcontent[tabNum-1].style.display = "block";
	window.scrollTo(0, 800);
}

function setInfo(blckNum)
{
	for (i = 0; i < infBlck.length; i++) {
		infBlck[i].style.display = "none";
	}
	infBlck[blckNum].style.display = "block";
	toggleMenu(1);
}
function mvRw(elmnt)
{
	var rws = document.getElementsByClassName("menuRows");
	for (i = 0; i < rws.length; i++) {
		if (rws[i].style.order == "1"){
			rws[i].style.order = "2";
		} else if (rws[i].style.order == "2"){
			rws[i].style.order = "3";
		}
	}
	elmnt.parentNode.style.order = "1";
}

function aboutMe(){

	document.getElementsByClassName("tabTitle")[0].style.bottom = "10%";
}
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		menuRowTitle.style.opacity = "100%";
		menuRowDesc.style.opacity = "100%";

  } else {
		menuRowTitle.style.opacity = "0%";
		menuRowDesc.style.opacity = "0%";
  }
}

// var img = document.getElementsByClassName("post");
var pane;
// document.getElementsByClassName("post").onclick = function(){
this.onclick = function(event) {
    if (event.target.className != 'post') return;
		modalImg.firstElementChild.src = "none";
		modalImg.style.backgroundImage = "none";
		pane = event.target.closest('.post');
    // var paneNext = pane.nextElementSibling;
		// console.log(paneNext);
		modal.style.display = "block";
		modal.style.opacity = "1";
		if (pane.nodeName == "VIDEO") {
			modalImg.firstElementChild.src = pane.src;
		} else {
			modalImg.style.backgroundImage = "url('" + pane.src + "')";
			// modalImg.src = pane.src;
		}
};

document.getElementById("previous").onclick = function(){
	var tz, ab;
	var i;
	tz = pane;
	ab = pane.previousSibling;
	while (i != 1) {
		if (ab.previousSibling == null){
			ab = pane.parentNode.previousElementSibling.lastElementChild;
			// if (ab == null){
				i = 1;
				ab.click();
		} else if (ab.className == "post"){
			ab.click();
			i = 1;
		}
		ab = ab.previousSibling;
			// console.log(ab);
	}
}
document.getElementById("next").onclick = function(){
	var tz, ab;
	var i;
	tz = pane;
	ab = pane.nextSibling;
	while (i != 1) {
		if (ab.nextSibling == null){
			ab = pane.parentNode.nextElementSibling.firstElementChild;
				i = 1;
				ab.click();
		} else if (ab.className == "post"){
			ab.click();
			i = 1;
		}
		ab = ab.nextSibling;
	}
}
document.getElementById("exit").onclick = function(){
	modal.style.opacity = "0";
	modal.style.display = "none";
}
