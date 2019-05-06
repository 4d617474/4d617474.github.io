var menuA = document.getElementById("operatorSelectBoard");
var menuB = document.getElementById("mapInfo");
var menuOP = document.getElementById("menuOperators");
var menuMA = document.getElementById("menuMap");
//getComputedStyle(document.getElementById("")).getPropertyValue('--color4');
function menuSelect()
{
  if (event.target.id == 'menuOperators'){
    menuA.style.display = "block";
    menuOP.style.backgroundColor ="rgba(255,255,255,.05)";
    menuMA.style.backgroundColor ="transparent";
    menuB.style.display = "none";
  } else if (event.target.id == 'menuMap'){
    menuB.style.display = "block";
    menuMA.style.backgroundColor ="rgba(255,255,255,.05)";
    menuOP.style.backgroundColor ="transparent";
    menuA.style.display = "none";
  }
}
