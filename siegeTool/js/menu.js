var menuA = document.getElementById("operatorSelectBoard");
var menuB = document.getElementById("mapInfo");
var menuOP = document.getElementById("menuOperators");
var menuMA = document.getElementById("menuMap");
function menuSelect()
{
  if (event.target.id == 'menuOperators'){
    menuA.style.display = "block";
    menuOP.style.backgroundColor ="#353540";
    menuMA.style.backgroundColor ="#212129";
    menuB.style.display = "none";
  } else if (event.target.id == 'menuMap'){
    menuB.style.display = "block";
    menuMA.style.backgroundColor ="#353540";
    menuOP.style.backgroundColor ="#212129";
    menuA.style.display = "none";
  }
}
