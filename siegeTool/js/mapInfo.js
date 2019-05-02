//mapInfoSetTitle();
var miTitleA = document.getElementById("mapInfoTitleA");
var miTitleB = document.getElementById("mapInfoTitleB");
var miMapSelection = document.getElementById("mapSelection");
var miModeSelection = document.getElementById("modeSelection");
var miSpawnSelection = document.getElementById("spawnSelection");
var miResultScreen = document.getElementById("resultScreen");
var miSpawnLocations = document.getElementsByClassName("spawnLocations");
var miHostageSecure = document.getElementById("rsHostageSecure");
var miBomb = document.getElementById("rsBomb");
var mapSelected, modeSelected;
resetB();
setMaps();

function resetB(){
  miMapSelection.style.display = "none";
  miModeSelection.style.display = "none";
  miResultScreen.style.display = "none";
  miSpawnSelection.style.display = "none";
  miHostageSecure.style.display = "none";
  miBomb.style.display = "none";
  miMapSelection.style.display = "block";
  miTitleA.innerHTML = "<br>" + "Select a map";
}
function setMaps()
{
  var mapThumb = document.getElementsByClassName("mapThumb");
  var mapName = document.getElementsByClassName("mapName");
  var dukky, dummy;
  for (i = 0; i < maps.length; i++)
  //for (i = 0; i < 3; i++)
  {
    dummy = mapThumb[i];
    dukky = maps[i];
    dummy.style.backgroundImage = 'url("thumbnails/maps/' + dukky[1] + '.png")';
    dummy.innerHTML = dukky[1];
    //console.log(dukky[0]);
  }
}
function setSpawnLocations()
{
  //map name comes from innerHTML find alternative//
  //////////////////////////////////////////////////
  var dubby,duccy;
  var dully = 0;
  if (modeSelected == "hostage"){
    dully += 2
  } else if (modeSelected == "secure"){
  } else if (modeSelected == "bomb"){
  }
  for (i = 0; i < 4; i++)
  {
    var duggy = mapSelected[0];
    duccy = maps[duggy];
    console.log(duggy);
    dubby = miSpawnLocations[i];
    dubby.style.backgroundImage = 'url("thumbnails/locations/' + mapSelected + "/" + modeSelected + i  + '.png")';
    dubby.innerHTML = duccy[dully];
    dully++;
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
  setSpawnLocations();
  document.getElementById("modeSelection").style.display = "none";
  document.getElementById("spawnSelection").style.display = "block";
  miTitleA.innerHTML = "<br>" + "Select a location";
  miTitleB.innerHTML = "<br>" + mapSelected + " " + modeSelected;
}
function spawnSelection()
{
  spawnSelected = event.target.innerHTML;
  if (modeSelected == "hostage" || spawnSelected == "secure")
  {
    miHostageSecure.style.display = "block";
  } else {
    miBomb.style.display = "block";
  }
  document.getElementById("spawnSelection").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  miTitleA.innerHTML = "<br>" + "Result";
  miTitleB.innerHTML = "<br>" + mapSelected + " " + modeSelected + " " + spawnSelected;
}
function resultScreen()
{

}
