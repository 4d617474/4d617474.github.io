//mapInfoSetTitle();
var miTitleA = document.getElementById("mapInfoTitleA");
var miTitleB = document.getElementById("mapInfoTitleB");
var miMapSelection = document.getElementById("mapSelection");
var miModeSelection = document.getElementById("modeSelection");
var miSpawnSelection = document.getElementById("spawnSelection");
var miResultScreen = document.getElementById("resultScreen");
var mapSelected, modeSelected;
resetB();
setMaps();

function resetB(){
  miMapSelection.style.display = "none";
  miModeSelection.style.display = "none";
  miResultScreen.style.display = "none";
  miSpawnSelection.style.display = "none";
  miMapSelection.style.display = "block";
  miTitleA.innerHTML = "<br>" + "Select a map";
}
function setMaps()
{
  var mapThumb = document.getElementsByClassName("mapThumb");
  var mapName = document.getElementsByClassName("mapName");
  for (i = 0; i < maps.length; i++)
  //for (i = 0; i < 3; i++)
  {
    //console.log(mapsThumb[i]);
    var dummy = mapThumb[i];
    dummy.style.backgroundImage = 'url("thumbnails/maps/' + maps[i] + '.png")';
    dummy.innerHTML = maps[i];
    //mapName[i].innerHTML = maps[i];
  }
}
function mapSelection()
{
  //console.log(event.target.innerHTML);
  mapSelected = event.target.innerHTML;
  document.getElementById("mapSelection").style.display = "none";
  document.getElementById("modeSelection").style.display = "block";
  miTitleA.innerHTML = "<br>" + "Select a mode";
  miTitleB.innerHTML = "<br>" + mapSelected;
}
function modeSelection()
{
  //console.log(event.target.innerHTML);
  modeSelected = event.target.innerHTML;
  document.getElementById("modeSelection").style.display = "none";
  document.getElementById("spawnSelection").style.display = "block";
  miTitleA.innerHTML = "<br>" + "Select a location";
  miTitleB.innerHTML = "<br>" + mapSelected + " " + modeSelected;
}
function spawnSelection()
{
  spawnSelected = event.target.innerHTML;
  document.getElementById("spawnSelection").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  miTitleA.innerHTML = "<br>" + "Result";
  miTitleB.innerHTML = "<br>" + mapSelected + " " + modeSelected + " " + spawnSelected;
}
function resultScreen()
{

}
