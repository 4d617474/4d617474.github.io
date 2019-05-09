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
var mapNo, mapSelected, modeSelected, spawnNo;
var rsCellingHatch = document.getElementById("rsCellingHatch");
var rsFloorHatch = document.getElementById("rsFloorHatch");
var rsReinforcableWall = document.getElementById("rsReinforcableWall");
var rsWindow = document.getElementById("rsWindow");
var rsDoor = document.getElementById("rsDoor");
var rsCellingHatchA = document.getElementById("rsCellingHatchA");
var rsFloorHatchA = document.getElementById("rsFloorHatchA");
var rsReinforcableWallA = document.getElementById("rsReinforcableWallA");
var rsWindowA = document.getElementById("rsWindowA");
var rsDoorA = document.getElementById("rsDoorA");
var rsCellingHatchB = document.getElementById("rsCellingHatchB");
var rsFloorHatchB = document.getElementById("rsFloorHatchB");
var rsReinforcableWallB = document.getElementById("rsReinforcableWallB");
var rsWindowB = document.getElementById("rsWindowB");
var rsDoorB = document.getElementById("rsDoorB");
var spawnLocationsImagesF = document.getElementsByClassName("spawnLocationsImages");
var spawnLocationsNamesF = document.getElementsByClassName("spawnLocationsNames");


function resetB(){
  miMapSelection.style.display = "none";
  miModeSelection.style.display = "none";
  miResultScreen.style.display = "none";
  miSpawnSelection.style.display = "none";
  miHostageSecure.style.display = "none";
  miBomb.style.display = "none";
  miMapSelection.style.display = "block";
  miTitleA.innerHTML = "";
  miTitleB.innerHTML = "";
  showBackButton(0);
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
    dummy.style.backgroundImage = 'url("thumbnails/maps/' + dukky[0] + '.jpg")';
    dummy.innerHTML = dukky[0];
    dummy.title = i;
    //console.log(dummy.title);
  }
}
function setSpawnLocations()
{
  var dubby,duccy,numberOfSteps;
  var dully = 0;
  if (modeSelected == "hostage"){
    dully += 1;
    numberOfSteps = 6;
  } else if (modeSelected == "secure"){
    dully += 25;
    numberOfSteps = 6;
  } else if (modeSelected == "bomb"){
    dully += 49;
    numberOfSteps = 11;
  }
  for (i = 0; i < 4; i++)
  {
    duccy = maps[mapNo];
    //console.log(duggy);
    //dubby = miSpawnLocations[i];
    spawnLocationsImagesF[i].src = 'thumbnails/locations/' + mapSelected + "/" + modeSelected + i  + '.jpg';
    spawnLocationsNamesF[i].innerHTML = duccy[dully];
    //'url("thumbnails/locations/' + mapSelected + "/" + modeSelected + i  + '.jpg")';
    //dubby.innerHTML =
    //miSpawnLocations[i].innerHTML = "<div class='spawnName'>" + duccy[dully] + "</div>"
    //"<br>" + "<br>" +
    //duccy[dully];
    //dubby.title = i;
    dully += numberOfSteps;
  }
}
function mapSelection()
{
  //console.log(event.target.innerHTML);
  mapSelected = event.target.innerHTML;
  mapNo = event.target.title;
  document.getElementById("mapSelection").style.display = "none";
  document.getElementById("modeSelection").style.display = "block";
  miTitleA.innerHTML = mapSelected;
  miTitleB.innerHTML = "";
}
function modeSelection()
{
  //console.log(event.target.classList);
  if (event.target.id  != buttonBCK) {
     modeSelected = event.target.innerHTML;
   }
  setSpawnLocations();
  document.getElementById("modeSelection").style.display = "none";
  document.getElementById("spawnSelection").style.display = "block";
  miTitleA.innerHTML = mapSelected + " " + modeSelected;
  miTitleB.innerHTML = "";
}
function spawnSelection(spawnNumber,spawnLocationSelected)
{
  //console.log("hey");
  spawnNo = spawnNumber;
  //var dutty = event.target.closest('.spawnName');
  //console.log(event.target.closest('.spawnName'));
  //spawnSelected = event.target.innerHTML;
  spawnSelected = spawnLocationSelected;
  if (modeSelected == "hostage")
  {
    miHostageSecure.style.display = "block";
    resultScreen(2);
  } else if (modeSelected == "secure")
  {
    miHostageSecure.style.display = "block";
    resultScreen(26);
  } else  {
    miBomb.style.display = "block";
    resultScreen(50);
  }
  document.getElementById("spawnSelection").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  miTitleA.innerHTML = mapSelected + " " + modeSelected;
  miTitleB.innerHTML = spawnSelected;
}

function resultScreen(id)
{
  showBackButton(1);
  var dunny;
  var durry = maps[mapNo];
  //console.log(durry);
  if (modeSelected == "hostage" || modeSelected == "secure"){
    if (spawnNo == "0"){
      dunny = id + 0;
    } else if (spawnNo == "1"){
      dunny = id + 6;
    } else if (spawnNo == "2"){
      dunny = id + 12;
    } else if (spawnNo == "3"){
      dunny = id + 18;
    }
    rsCellingHatch.innerHTML = durry[dunny];
    rsFloorHatch.innerHTML = durry[dunny + 1];
    rsReinforcableWall.innerHTML = durry[dunny + 2];
    rsWindow.innerHTML = durry[dunny + 3];
    rsDoor.innerHTML = durry[dunny + 4];
  } else if (modeSelected == "bomb"){
    if (spawnNo == "0"){
      dunny = id + 0;
    } else if (spawnNo == "1"){
      dunny = id + 11;
    } else if (spawnNo == "2"){
      dunny = id + 22;
    } else if (spawnNo == "3"){
      dunny = id + 33;
    }
    rsCellingHatchA.innerHTML = durry[dunny];
    rsFloorHatchA.innerHTML = durry[dunny + 1];
    rsReinforcableWallA.innerHTML = durry[dunny + 2];
    rsWindowA.innerHTML = durry[dunny + 3];
    rsDoorA.innerHTML = durry[dunny + 4];

    rsCellingHatchB.innerHTML = durry[dunny + 5];
    rsFloorHatchB.innerHTML = durry[dunny + 6];
    rsReinforcableWallB.innerHTML = durry[dunny + 7];
    rsWindowB.innerHTML = durry[dunny + 8];
    rsDoorB.innerHTML = durry[dunny + 9];
  }
}

function showBackButton(isHidden) {

  var buttonBack = document.getElementById("buttonBCK");
  var buttonResetB = document.getElementById("buttonRSTB");
  if(isHidden == 1){
    buttonBack.style.width = "30%";
    buttonBack.style.color = "rgba(255,255,255,1)";
    buttonResetB.style.width = "70%";
  } else {
    buttonBack.style.width = "0%";
    buttonBack.style.color = "rgba(0,0,0,0)";
    buttonResetB.style.width = "100%";
  }
}
function goBack() {
  miResultScreen.style.display = "none";
  miSpawnSelection.style.display = "block";
  miTitleA.innerHTML = mapSelected + " " + modeSelected;
  miTitleB.innerHTML = "";
  showBackButton(0);
}
