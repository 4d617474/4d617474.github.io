mapInfoSetTitle();
resetB();
setMaps();

function resetB(){
  var mImapSelection = document.getElementById("mapSelection");
  var mImodeSelection = document.getElementById("modeSelection");
  var mIresultScreen = document.getElementById("resultScreen");
  mImapSelection.style.display = "none";
  mImodeSelection.style.display = "none";
  mIresultScreen.style.display = "none";
  mImapSelection.style.display = "block";
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
    mapName[i].innerHTML = maps[i];
  }
}
function mapInfoSetTitle(){
  var mITitle = document.getElementById("mapInfoTitle");
  mITitle.innerHTML = "<br>" + "Select a map";
}
function mapSelection(){

}
