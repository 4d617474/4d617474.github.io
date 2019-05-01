var menuA = document.getElementById("operatorSelectBoard");
var menuB = document.getElementById("mapInfo");
function menuSelect()
{
  if (event.target.id == 'menuOperators'){
    menuA.style.display = "block";
    menuB.style.display = "none";
  } else if (event.target.id == 'menuMap'){
    menuB.style.display = "block";
    menuA.style.display = "none";
  }
}
