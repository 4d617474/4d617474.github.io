var mapBank,mapBorder,mapChalet,mapClubHouse,mapCoastline,mapConsulate,
mapFavela,mapFortress,mapHerefordBase,mapHouse,mapKafeDostoyevsky,mapKanal
,mapOregon,mapOutback,mapPresidentialPlane,mapSkyscraper,mapThemePark,mapTower
,mapVilla,mapYacht;

mapBank = ["bank",
"2F CEO Office",0,0,11,2,2,
"1F Staff Room",0,0,12,0,2,
"1F Tellers' Office",0,0,8,0,3,
"B Vault",1,0,2,0,1,

"2F CEO Office",0,0,11,2,2,
"1F Open Area",0,1,7,1,2,
"1F Archives",2,0,7,1,3,
"B Lockers",0,0,8,1,1,

"2F CEO Office and 2F Executive Lounge",0,0,"13(10)",4,"4(3)",
0,0,0,"4(2)","2(1)",
"1F Open Area and 1F Staff Room",2,1,"13(10)",0,0,
1,1,"5(3)",0,"1(0)",
"1F Tellers' Office and 1F Archives",0,0,"11(7)",1,"4(3)",
"x","x","x","x","x",
"B CCTV Room and B Lockers",1,0,"14(6)",0,0,
1,0,"9(2)",0,"4(2)"
];
// mapBorder = ["border",
// "2nd Floor Security Room",0,0,0,0,0,
// "2nd Floor Offices",0,0,0,0,0,
// "1st Floor Workshop",0,0,0,0,0,
// "1st Floor Customs Desk",0,0,0,0,0,
//
// "2nd Floor Offices",0,0,0,0,0,
// "2nd Floor Armory Lockers",0,0,0,0,0,
// "1st Floor Tellers",0,0,0,0,0,
// "1st Floor Workshop",0,0,0,0,0,
//
// "1st Floor Supply Room and 1st Floor Customs Inspection",
// 0,0,0,0,0,
// 0,0,0,0,0,
// "1st Floor Workshop and 1st Floor Ventilation Room",
// 0,0,0,0,0,
// 0,0,0,0,0,
// "1st Floor Bathroom and 1st Floor Tellers",
// 0,0,0,0,0,
// 0,0,0,0,0,
// "2nd Floor Armory Lockers and 2nd Floor Archives",
// 0,0,0,0,0,
// 0,0,0,0,0
// ];

//map = ["chalet",
//"2nd Floor Master Bedroom",,,,,,
//"2nd Floor Library",,,,,,
//"1st Floor Kitchen",,,,,,
//"Basement Wine Cellar",,,,,,

//"2nd Floor Library",,,,,,
//"1st Floor Dining Room",,,,,,
//"1st Floor Bar",,,,,,
//"Basement Snowmobile Garage",,,,,,

//"2nd Floor Office and 2nd Floor Master Bedroom",
//,,,,,
//,,,,,
//"1st Floor Gaming Room and 1st Floor Bar",
//,,,,,
//,,,,,
//"1st Floor Kitchen and 1st Floor Trophy Room",
//,,,,,
//,,,,,
//"Basement Wine Cellar and Basement Snowmobile Garage",
//,,,,,
//,,,,
//];

//map = ["",
//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,
//];

//map = ["",
//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,,
//"",
//,,,,,
//,,,,
//];
mapBorder = ["border"];
mapChalet = ["chalet"];
mapClubHouse = ["club house"];
mapCoastline = ["coastline"];
mapConsulate = ["consulate"];
mapFavela = ["favela"];
mapFortress = ["fortress"];
mapHerefordBase = ["hereford base"];
mapHouse = ["house"];
mapKafeDostoyevsky = ["kafe dostoyevsky"];
mapKanal = ["kanal"];
mapOregon = ["oregon"];
mapOutback = ["outback"];
mapPresidentialPlane = ["presidential plane"];
mapSkyscraper = ["skyscrapper"];
mapThemePark = ["theme park"];
mapTower = ["tower"];
mapVilla = ["villa"];
mapYacht = ["yacht"];

var maps = [mapBank,mapBorder,mapChalet,mapClubHouse,mapCoastline,mapConsulate,
mapFavela,mapFortress,mapHerefordBase,mapHouse,mapKafeDostoyevsky,mapKanal
,mapOregon,mapOutback,mapPresidentialPlane,mapSkyscraper,mapThemePark,mapTower
,mapVilla,mapYacht];
//20
//map+mapName = [
//mapNo
//mapName
  //modeHostage
  //site1
//"floor & name",
//"cellingHatches","floorHatches","reinforcableWalls","doors","windows"
  //site2
//"floor & name",
//"cH","fH","rW","d","w"
  //site3
//"floor & name",
//"cH","fH","rW","d","w"
  //site4
//"floor & name",
//"cH","fH","rW","d","w"

//modeSecure
  //site1
//"cH","fH","rW","d","w"
  //site2
//"cH","fH","rW","d","w"
  //site3
//"cH","fH","rW","d","w"
  //site4
//"cH","fH","rW","d","w"

  //modeBomb
  //site1
  //site
//"cH","fH","rW","d","w"
  //connectors
//"cH","fH","rW","d","w"

  //site2
  //site
//"cH","fH","rW","d","w"
  //connectors
//"cH","fH","rW","d","w"

  //site3
  //site
//"cH","fH","rW","d","w"
  //connectors
//"cH","fH","rW","d","w"

  //site4
  //site
//"cH","fH","rW","d","w"
  //connectors
//"cH","fH","rW","d","w"

//];


//bank = ["1","0","4","2","3","1","0","4","2","3","1","0","4","2","3",
//"1","0","4","2","3","1","0","4","2","3","1","0","4","2","3",
//"1","0","4","2","3","1","0","4","2","3","1","0","4","2","3",
//"1","0","4","2","3","1","0","4","2","3","1","0","4","2","3",
//"1","0","4","2","3","1","0","4","2","3","1","0","4","2","3",
//"1","0","4","2","3",]
/*
= ["","","","","",  "",""]
*/
