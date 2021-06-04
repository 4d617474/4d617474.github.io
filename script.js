var menu = document.getElementById("menu");
var modal = document.getElementById("modalBlock");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img00");
var option = "closed";
var toggl = document.getElementById("toggl");
var menuRowTitle = document.getElementById("menuRowTitle");
var menuRowDesc = document.getElementById("menuDesc");
var postThumb = document.getElementsByClassName("thumb");
postThumb.onclick = function(event) {
		//if (event.target.className != 'operatorBadge') return;

		//var pane = event.target.closest('.operatorBadge');
		console.log("gey");
		//console.log( event.target.closest('.operatorBadge'));
		//showCharacter(this);
	};
window.onscroll = function() {scrollFunction()};
var menuMenuClosed, menuToggleClosed, menuToggleOpen, menuMenuOpen
var currWinSize;
windSize();
function windSize(){
	// if (window.outerWidth > 700){
	// 	currWinSize = 0;
	// } else {
	// 	currWinSize = 1;
	// }
	if (window.outerWidth > 700){
		 menuMenuClosed = '-20%';
		 menuToggleClosed = '-200%';
		 menuToggleOpen = '0%';
		 menuMenuOpen = '0%';
		 menuToggle();
		 menuToggle();
	 } else {
		 menuMenuClosed = '-6%';
		 menuToggleClosed = '-200%';
		 menuToggleOpen = '0%';
		 menuMenuOpen = '18%';
		 currWinSize = 1;
		 menuToggle();
		 menuToggle();
	 };
}
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
// setInterval(titleGlitch, 1000);
function menuToggle(){
	if (option == 'open'){
		menu.style.bottom = menuMenuClosed;
		toggl.style.top = menuToggleClosed;
		toggl.style.transform = 'rotate(0deg)';
		option = "close";
	}else{
		toggl.style.transform = 'rotateX(180deg)';
		toggl.style.top = menuToggleOpen;
		menu.style.bottom = menuMenuOpen;
		option = "open";
	}
}
function titleGlitch() {
	var x = Math.floor((Math.random() * 2));
	console.log(x);
	if (x == 0)document.title = "4D617474";
	if (x == 1)document.title = "Matt";
}
function aboutMe(){

	document.getElementsByClassName("tabTitle")[0].style.bottom = "10%";
}
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		// document.getElementsByClassName("tabTitle")[0].style.bottom = "10%";
		// document.getElementsByClassName("tabTitle")[1].style.bottom = "10%";
		// document.getElementsByClassName("tabTitle")[2].style.bottom = "10%";
		// document.getElementsByClassName("tabTitle")[3].style.bottom = "10%";
		menuRowTitle.style.opacity = "100%";
		menuRowDesc.style.opacity = "100%";

  } else {
		menuRowTitle.style.opacity = "0%";
		menuRowDesc.style.opacity = "0%";
		// document.getElementsByClassName("tabTitle")[0].style.bottom = "0";
		// document.getElementsByClassName("tabTitle")[1].style.bottom = "0";
		// document.getElementsByClassName("tabTitle")[2].style.bottom = "0";
		// document.getElementsByClassName("tabTitle")[3].style.bottom = "0";
  }
}

// var img = document.getElementsByClassName("post");
var pane;
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
			// if (ab == null){
				i = 1;
				ab.click();
		} else if (ab.className == "post"){
			ab.click();
			i = 1;
		}
		ab = ab.nextSibling;
			// console.log(ab);
	}
}
document.getElementById("exit").onclick = function(){
	modal.style.opacity = "0";
	modal.style.display = "none";
}
function switchTab(pageName, elmnt, state, link) {
	// console.log(event.target.closest('.menuImage'));
	if (option == "open") menuToggle();
	buttonImage = event.target.closest('.menuImage');
	allButtonImage = document.getElementsByClassName("menuImage");
  var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
  tabtitle = document.getElementsByClassName("tabTitle");
  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
    tabtitle[i].style.display = "none";
		allButtonImage[i].classList.remove("buttonImOff");
		allButtonImage[i].classList.add("buttonImOn");
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("menu button");
  for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("buttonOn");
    tablinks[i].classList.add("buttonOff");
		buttonImage.classList.remove("buttonImOn");
		buttonImage.classList.add("buttonImOff");
  }

  // Show the specific tab content
	// document.getElementById(state).style.display = "block";
	document.getElementById("menuRowTitle").innerHTML = state;
	document.getElementById("menuRowTitle").parentNode.href = link;
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
	elmnt.classList.remove("buttonOff");
  elmnt.classList.add("buttonOn");
	window.scrollTo(0, 800);
}
function previewTab(){
	
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
window.scrollTo(0, 0);




var r1 = 1;
toggleSP(1,1);
var currentPage = 0;
function toggleSP(p1, p2) {
	var spFrame = document.getElementById("spFrame");
	var spFrameIn = document.getElementById("spFrame-In");
	var spFrameLink = document.getElementById("spFrame-settings-github");
	if (p1 == 1) {
		spFrameIn.src = "startpages/startpage1/hp4Nox.html";
		spFrameLink.href = "https://github.com/4d617474/startpage1";
		currentPage = 1;
	} else if (p1 == 2) {
		spFrameIn.src = "startpages/hpstarcitizen/hpsc.html";
		spFrameLink.href = "https://github.com/4d617474/hpstarcitizen";
		currentPage = 2;
	} else if (p1 == 3) {
		spFrameIn.src = "startpages/startpage-Squared/Squared.html";
		spFrameLink.href = "https://github.com/4d617474/startpage-Squared";
		currentPage = 3;
	} else if (p1 == 4) {
		spFrameIn.src = "startpages/ko/Ko.html";
		spFrameLink.href = "https://github.com/4d617474/ko";
		currentPage = 4;
	}
	if (p2 == 0) {
		//expanding...
		//spFrame.style.top = "20px";
		spFrame.style.zIndex = "60";
		spFrame.style.opacity = "1";
		spFrame.style.transform = "scale(1,1)";
	} else {
		//retracting...
		//spFrame.style.top = "-100%";
		spFrame.style.zIndex = "-1";
		spFrame.style.opacity = "0";
		spFrame.style.transform = "scale(.9,.9)";
	}
}
function reloadSP() {
	if (currentPage == 1){
		toggleSP(1,0);
	}
	if (currentPage == 2){
		toggleSP(2,0);
	}
	if (currentPage == 3){
		toggleSP(3,0);
	}
	if (currentPage == 4){
		toggleSP(4,0);
	}
}
function toggleIM(i1) {
	var imFrame = document.getElementById("imFrame");
	var imFrameIn = document.getElementById("imFrame-In");
	if (p1 == 1) {
		spFrameIn.src = "startpages/startpage1/hp4Nox.html";
		spFrameLink.href = "https://github.com/4d617474/startpage1";
		currentPage = 1;
	} else if (p1 == 2) {
		spFrameIn.src = "startpages/hpstarcitizen/hpsc.html";
		spFrameLink.href = "https://github.com/4d617474/hpstarcitizen";
		currentPage = 2;
	} else if (p1 == 3) {
		spFrameIn.src = "startpages/startpage-Squared/Squared.html";
		spFrameLink.href = "https://github.com/4d617474/startpage-Squared";
		currentPage = 3;
	} else if (p1 == 4) {
		spFrameIn.src = "startpages/ko/Ko.html";
		spFrameLink.href = "https://github.com/4d617474/ko";
		currentPage = 4;
	}
	if (p2 == 0) {
		//expanding...
		//spFrame.style.top = "20px";
		spFrame.style.zIndex = "60";
		spFrame.style.opacity = "1";
		spFrame.style.transform = "scale(1,1)";
	} else {
		//retracting...
		//spFrame.style.top = "-100%";
		spFrame.style.zIndex = "-1";
		spFrame.style.opacity = "0";
		spFrame.style.transform = "scale(.9,.9)";
	}
}
