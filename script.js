var menu = document.getElementById("menu");
var modal = document.getElementById("modalBlock");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img00");
var modalVid = document.getElementById("vid00");
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

var navOvf = document.getElementById("navOverflow");
var navBar = document.getElementById("navigationBar");
var barInfo = document.getElementById("barInfo");
var menuToggler = document.getElementById("rowD");
var menuState = 0;
var infBlck = document.getElementsByClassName("infoBlock");
var allSlctdBtns = document.getElementsByClassName("rowButtons");
var tabcontent = document.getElementsByClassName("tabcontent");

var menuMenuClosed, menuToggleClosed, menuToggleOpen, menuMenuOpen;
var currWinSize, rowsSizeOpen, rowsSizeClose;

var neoMenu = document.getElementById("neoMenu");
var neoToggle = document.getElementById("neoToggle");
var neoContent = document.getElementById("neoContent");

column = document.getElementsByClassName("column");
setTimeout(function(){
	window.scrollTo(0, 0);
}, 1)
setTimeout(function(){
	document.getElementById('curtains').style.display = "none"
}, 1000)

var stylS = document.getElementById("newStyle");
function darkMode(){
// 	if (stylS.href == undefined){
// 		stylS.href = "css/new.css";
// 	} else if (stylS.href == "css/new.css"){
// 		stylS.href = undefined;
// 	}
	if (stylS.href == "css/new.css"){
		stylS.href = undefined;
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
		// navBar.style.bottom = "-15%";
		// navBar.style.bottom = "-27%";
		// barInfo.style.bottom = "calc(100%/3)";
		// barInfo.style.bottom = "calc(100%/3)";
		navBar.classList.remove("nvBOn");
		barInfo.classList.remove("bNfOn");
		navOvf.classList.remove("nvOfOn");
		menuState = 0;
		menuToggler.classList.remove("toggleOn");
	} else if (menuState == 0){
		// navBar.style.bottom = "0%";
		// navBar.style.bottom = "0%";
		// barInfo.style.bottom = "100%";
		// barInfo.style.bottom = "100%";
		barInfo.classList.add("bNfOn");
		navBar.classList.add("nvBOn");
		navOvf.classList.add("nvOfOn");
		menuState = 1;
		menuToggler.classList.add("toggleOn");
	}

}
function neoToggleMenu(state)
{
	if (state != null){menuState = state};

	if (menuState == 1){
		// navBar.style.bottom = "-15%";
		// navBar.style.bottom = "-27%";
		// barInfo.style.bottom = "calc(100%/3)";
		// barInfo.style.bottom = "calc(100%/3)";
		neoMenu.classList.remove("nMOn");
		menuState = 0;
		neoToggle.classList.remove("neoToggleOn");
		neoContent.classList.remove("blurred");

	} else if (menuState == 0){
		// navBar.style.bottom = "0%";
		// navBar.style.bottom = "0%";
		// barInfo.style.bottom = "100%";
		// barInfo.style.bottom = "100%";
		neoMenu.classList.add("nMOn");
		menuState = 1;
		neoContent.classList.add("blurred");
		neoToggle.classList.add("neoToggleOn");
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
	// tabcontent[0].style.display = "block";
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
		// if (event.target.className != 'post' || event.target.className != 'post.wd' ) return;
		// if (event.target.className != 'post') return;
    if (event.target.classList.contains("post") == true) {
			modalImg.firstElementChild.src = "none";
			modalImg.style.backgroundImage = "none";
			pane = event.target.closest('.post');
	    // var paneNext = pane.nextElementSibling;
			// console.log(paneNext);
			// console.log(pane.nodeName);
			modal.style.display = "block";
			modal.style.opacity = "1";
			if (pane.nodeName == "VIDEO") {
				// modalImg.firstElementChild.src = pane.src;
				modalVid.src = pane.src;
				modalImg.style.display = "block";
				modalVid.style.display = "block";
				document.getElementById("mute").style.display = "block";
				modalVid.play();
			// } else if (pane.nodeName == "IMAGE"){
			} else if (pane.classList.contains("wd") == false){
				modalImg.style.display = "block";
				modalImg.style.backgroundImage = "url('" + pane.src + "')";
				modalVid.style.display = "none";
				document.getElementById("mute").style.display = "none";
			} else if (pane.classList.contains("wd") == true){
				modalVid.style.display = "none";
				modalImg.style.display = "none";
				// console.log(pane.href);
				document.getElementById('spFrame-In').src = pane.alt;
				document.getElementById("source").style.display = "block";
				document.getElementById("reload").style.display = "block";
				document.getElementById("spFrame-In").style.display = "block";
			}
	} return
};

document.getElementById("previous").onclick = function(){
	// if(pane.parentNode.previousElementSibling.lastElementChild != null)return;
	var tz, ab;
	var i;
	tz = pane;
	ab = pane.previousSibling;
	while (i != 1) {
		if (ab.previousSibling == null){
			ab = pane.parentNode.previousElementSibling.lastElementChild;
			if (ab.className == "wdLink"){
				ab = ab.previousElementSibling;
				ab.click();
				i = 1;
			} else {
				i = 1;
				ab.click();
			}
		} else if (ab.className == "post" || ab.className == "post wd"){
			ab.click();
			i = 1;
		}
		ab = ab.previousSibling;
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
		} else if (ab.className == "post" || ab.className == "post wd"){
			ab.click();
			i = 1;
		}
		ab = ab.nextSibling;
	}
}
document.getElementById("exit").onclick = function(){
	modal.style.opacity = "0";
	modal.style.display = "none";
	modalVid.src = "none";
	document.getElementById("reload").style.display = "none";
	document.getElementById("mute").style.display = "none";
	document.getElementById("source").style.display = "none";
	document.getElementById("source").style.display = "none";
	document.getElementById("reload").style.display = "none";
	document.getElementById("spFrame-In").style.display = "none";
	// document.getElementById('spFrame-In').src = "none";

	// modalVid.pause();
}
document.getElementById("mute").onclick = function(){
	if (modalVid.muted == true){
		modalVid.muted = false;
		this.style.backgroundImage = "url('icons/sound.svg')";
		// document.getElementById("mute").style.backgroundImage = "url('icons/sound.svg')";
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
	// setTimeout(function(){
		document.getElementById('spFrame-In').src = hold
	// }, 10)
}
document.getElementById('eggA').onmouseover = function(){
	document.getElementById('egg1').classList.add("visible");
}
document.getElementById('eggA').onmouseleave = function(){
	document.getElementById('egg1').classList.remove("visible")
}
document.getElementById('eggA').onclick = function(){
	document.getElementById('egg2').classList.add("visible");
	document.getElementById('egg1').classList.remove("visible")
	setTimeout( function(){
		document.getElementById('egg2').classList.remove("visible")
	}, 1000)
}
function notyet(){
	document.getElementById('egg0').classList.add("visible");
	setTimeout(function(){
		document.getElementById('egg0').classList.remove("visible")
	}, 1000)
}
function wdToggle(){
 console.log('r')
}
function dispInfo(nbr,st){
	var btnsSlctd = document.getElementsByClassName("buttonInfo");
	// btnsSlctd[nbr].style.display = "block";
	if(st==1){
		document.getElementById('buttonInfoBlock').classList.add("visible")
		btnsSlctd[nbr].classList.add("visible");
	} else {
		btnsSlctd[nbr].classList.remove("visible");
		// setTimeout(function(){
		document.getElementById('buttonInfoBlock').classList.remove("visible")
		// }, 000);
	}
}
