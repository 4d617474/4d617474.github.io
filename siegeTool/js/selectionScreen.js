var operatorSelected;
var operatorBadge = document.getElementsByClassName("operatorBadge");
var operatorSelect = document.getElementsByClassName("operatorSelect");
var atkSide = document.getElementById("operatorsAttack");
var defSide = document.getElementById("operatorsDefense");

function setOperators()
{
  var lll,mmm,rrr;
  for (i = 0; i < operatorsDEF.length; i++)
  {
    if (i > operatorsATK.length - 1){
      lll = operatorsDEF[i];
      mmm = operatorsDEF;
      rrr = mmm[i];
    } else {
    lll = operatorsATK[i];
    mmm = operatorsATK;
    rrr = mmm[i];
    }
    operatorBadge[i].src = "badges/" + lll[0] + ".png";
    operatorBadge[i].alt = lll[0];
    operatorBadge[i].title = lll[0];
  }
}
function reset()
{
  for (i = 0; i < operatorsDEF.length; i++){
    operatorBadge[i].style.boxShadow = "none";
  }
}
this.onclick = function(event) {
    if (event.target.className != 'operatorBadge') return;

    var pane = event.target.closest('.operatorBadge');
    pane.style.filter = "grayscale(0%)";
    if (atkSide.style.display == "block") {
    pane.style.boxShadow="0px 0px 0px 50px #eb7116 inset";
    } else {
    pane.style.boxShadow="0px 0px 0px 50px #1489e0 inset";
    }
  };

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
