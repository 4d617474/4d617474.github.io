var operatorSelected;
var operatorBadge = document.getElementsByClassName("operatorBadge");
var operatorSelect = document.getElementsByClassName("operatorSelect");
var atkSide = document.getElementById("operatorsAttack");
var defSide = document.getElementById("operatorsDefense");

function setOperators()
{
  for (i = 0; i < operators.length; i++)
  {
    operatorBadge[i].src = "badges/" + operators[i] + ".png";
    //console.log(i);
  }
}
function resetA()
{
  for (i = 0; i < operators.length; i++){
    operatorBadge[i].style.background = "none";
  }
}
function clickOperator(){
  var pane = event.target.closest('.operatorBadge');
  if (atkSide.style.display == "block") {
  pane.style.background="#eb7116";
  } else {
  pane.style.background="#1489e0";
  }
}
function switchSide(isdefside){
defSide.style.display = "none";
atkSide.style.display = "none";
 if (isdefside == 0){
   atkSide.style.display = "block";
   defSide.style.display = "none";
 } else {
   defSide.style.display = "block";
   atkSide.style.display = "none";
 }
}
