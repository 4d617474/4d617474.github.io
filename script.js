var isMenuOpen = 0;
function toggleMenu(state,noAnim) {
  if(state == 1){isMenuOpen = 1}
  if(isMenuOpen == 0) {
    document.getElementById("overflow").classList.add("open");
    document.getElementById("overflow").classList.remove("close");
    document.getElementById("up").classList.add("down");
    document.getElementById("curtains").classList.add("on");
    isMenuOpen = 1;
  } else {
    document.getElementById("overflow").classList.remove("open");
    document.getElementById("up").classList.remove("down");
    document.getElementById("curtains").classList.remove("on");
    isMenuOpen = 0;
    if(noAnim == 1)
    {
      document.getElementById("overflow").classList.add("close");
    }
  }
}

var page = document.getElementsByClassName("page");
var navBlocks = document.getElementsByClassName("navigation block");
var currentPage = 1;

function pickPage(number,elmnt,noAnim)
{
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
