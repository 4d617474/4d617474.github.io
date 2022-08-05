



// document.getElementById("closeMenu").onclick = toggleMenu(1);
// document.getElementById("hamburger").onclick = toggleMenu(0);
// pickPage(1);
var intro = document.getElementById("intro");
var navBlocks = document.getElementsByClassName("navigation block");
var navBlocks2 = document.getElementsByClassName("nav tabs");

var isMenuOpen = 1;
// toggleMenu(1);
// pickPage(0);
// pickPage(0,null,null);
// pickPage(1,this,'oddbeep');
// navBlocks2[0].click();
function reset(){
  toggleMenu(1);
  intro.style.display='block';
}

// toggleMenu();
function toggleMenu(state) {
  var menuSE = document.getElementById("menuSecretExit");
  var menu = document.getElementById("menu");
  var hamburger = document.getElementById("hamburger");
  // if(state == 1){isMenuOpen = 1}
  if(isMenuOpen == 0) {
    //open
    menuSE.classList.add("on");
    menu.classList.add("on");
    hamburger.classList.add("active");
    for (i = 0; i < navBlocks.length; i++) {
        navBlocks[i].classList.add("on");
    }

    isMenuOpen = 1;
  } else {
    //close
    menuSE.classList.remove("on");
    menu.classList.remove("on");
    hamburger.classList.remove("active");
    for (i = 0; i < navBlocks.length; i++) {
        navBlocks[i].classList.remove("on");
    }
    isMenuOpen = 0;
  }
}
var oldName = 'first';
function pickPage(number,elmnt,name)
{
  // checkY();
  openFolder(null,1)
  var page = document.getElementsByClassName("page");
  var modals = document.getElementsByClassName("modalButton");


  if (elmnt != null){
  for (i = 0; i < navBlocks.length; i++) {
      navBlocks[i].classList.remove("on");
      navBlocks2[i].classList.remove("on");
    }
    elmnt.classList.add("on");
  }

	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
  page[number].classList.add("on");
  window.scrollTo(0, 0);

  if(window.innerWidth < 700){
    toggleMenu(1);
  }

  if(name == oldName){
    return;
  }

  // for (i = 0;i < modals.length; i++) {
  //   modals[i].classList.remove(oldName);
  //   modals[i].classList.add(name);
  // }
  var themed = document.getElementsByClassName("themed");
  for (i = 0;i < themed.length; i++) {
    themed[i].classList.remove(oldName);
    themed[i].classList.add(name);
  }
  document.body.classList.add(name);
  document.body.classList.remove(oldName);

  oldName = name;
  page[number].classList.add(name);

}

function openFolder(no,state){
  folder = document.getElementsByClassName("folder");
  folderS = document.getElementsByClassName("folders");
  hamburger = document.getElementById("hamburger");
  back = document.getElementById("back");
  if(state == 1){
    // folderS[0].style.display = "block";
    folderS[0].classList.add("on");
    hamburger.classList.remove("alt");
    back.classList.remove("alt");
    for(i=0;i<folder.length;i++){
      // folder[i].style.display = "none";
      folder[i].classList.remove("on");
    }
  } else {
    // for(i=0;i<folder.length;i++){
    //   folder[i].classList.add("on");
    // }
    hamburger.classList.add("alt");
    back.classList.add("alt");
    // folderS[0].style.display = "none";
    folderS[0].classList.remove("on");
      folder[no].classList.add("on");
    // folder[no].style.display = "block";
  }
}


var modal = document.getElementById("modalBlock");
var modalImg = document.getElementById("img00");
var modalVid = document.getElementById("vid00");
var pane;
var columnSide;
var postNo;
this.onclick = function(event) {
    if (event.target.classList.contains("pic") == true) {
      document.getElementById("menu").classList.add("hide");
      pane = event.target.closest('.pic');



			modalImg.firstElementChild.src = "none";
			modalImg.style.backgroundImage = "none";
      // window.scrollTo(0,pane.y);
      // console.log(pane);
      modal.classList.add("on");
			modal.style.opacity = "1";
      // document.getElementById("source").classList.remove("on");
      // console.log(Array.prototype.indexOf.call(pane.parentNode.children,pane))
      postNo = Array.prototype.indexOf.call(pane.parentNode.children,pane);


      // console.log(postNo)
      // console.log(columnSide)

      if (pane.parentElement.className == "column post left") {columnSide = 0}
      else {columnSide = 1}
      // console.log(columnSide);
      // pane.parentElement.previousElementSibling.lastChild.previousElementSibling.loading="none";
      // pane.parentElement.nextElementSibling.firstChild.nextElementSibling.loading="none";

			if (pane.nodeName == "VIDEO") {
        modalVid.poster = pane.poster;
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
        modalImg.classList.add("on");
        modalVid.classList.remove("on");
        modalImg.style.backgroundImage = "url('" + pane.src.replace("_th","") + "')";
        document.getElementById("source").classList.add("on");
        document.getElementById("mute").style.display = "none";
        document.getElementById('source').innerHTML= pane.alt + " (open in new tab)";
        document.getElementById('source').href= pane.alt + " (open in new tab)";
  				// modalVid.classList.remove("on");
  				// modalImg.classList.add("on");
          // modalImg.style.backgroundImage = "url('" + pane.src.replace("_th","") + "')";
  				// document.getElementById("source").classList.add("on");
			}
	} else if (event.target.classList.contains("container") == true){
      pane =  event.target.closest('.picdesc');

      modalVid.classList.remove("on");
      modalImg.classList.add("on");
      modalImg.style.backgroundImage = pane.src;
      document.getElementById("source").classList.add("on");
    } return
};

document.getElementById("previous").onclick = function(){
  setTimeout(function(){
  modalImg.classList.add("animated-left")
}
, 1);
modalImg.classList.remove("animated-right");
modalImg.classList.remove("animated-left");
  var previousPane;
  previousPane = pane.previousSibling.previousSibling;
  if(previousPane == null){
    if(pane.parentElement.previousElementSibling.lastChild.previousElementSibling.className == "wdLink"){
      pane.parentElement.previousElementSibling.lastChild.previousElementSibling.previousElementSibling.click();
    }else {
      pane.parentElement.previousElementSibling.lastChild.previousElementSibling.click();
    }
  }
  if (previousPane.className == "post pic btn" || previousPane.className == "post pic wd btn"){
    previousPane.click();
  }
  if(previousPane.className == "wdLink"){
    previousPane.previousElementSibling.click();
  }
  // window.scrollTo(0,pane.y);
}
document.getElementById("next").onclick = function(){

  var nextPane;
  nextPane = pane.nextSibling.nextSibling;
  if(nextPane == null){
    pane.parentElement.nextElementSibling.firstChild.nextElementSibling.click();
  }
  if (nextPane.className == "post pic btn" || nextPane.className == "post pic wd btn"){
    nextPane.click();
  }
  if(nextPane.className == "wdLink"){
    if(nextPane.nextElementSibling == null){
      pane.parentElement.nextElementSibling.firstChild.nextElementSibling.click();
    } else {
      nextPane.nextElementSibling.click();

    }
  }
  setTimeout(function(){
  modalImg.classList.add("animated-right")
}
, 1);
modalImg.classList.remove("animated-left");
modalImg.classList.remove("animated-right");

}
document.getElementById("exit").onclick = function(){
	modal.classList.remove("on");
	modalVid.src = "none";
  modalImg.classList.remove("animated-left");
  modalImg.classList.remove("animated-right");

  document.getElementById("menu").classList.remove("hide");
	document.getElementById("reload").classList.remove("on");
	document.getElementById("mute").classList.remove("on");
  document.getElementById("source").classList.remove("on");
	document.getElementById("source").classList.remove("on");
	document.getElementById("reload").classList.remove("on");
	document.getElementById("spFrame-In").classList.remove("on");
  // window.scrollTo(0,pane.y);
  // document.getElementById("menu").classList.add("on");

  // checkY();
}
document.getElementById("mute").onclick = function(){
	if (modalVid.muted == true){
		modalVid.muted = false;
    this.classList.remove("mute");
    this.classList.add("sound");
	} else {
		modalVid.muted = true;
    this.classList.add("mute");
    this.classList.remove("sound");
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

function cope(block){
    navigator.clipboard.writeText(block.lastElementChild.innerHTML);
    setTimeout(function(){block.firstElementChild.classList.remove("copiedOn")},2000);
    block.firstElementChild.classList.add("copiedOn");
}
