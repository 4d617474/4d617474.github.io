var mapBank,mapBorder,mapChalet,mapClubHouse,mapCoastline,mapConsulate,
mapFavela,mapFortress,mapHerefordBase,mapHouse,mapKafeDostoyevsky,mapKanal
,mapOregon,mapOutback,mapPresidentialPlane,mapSkyscraper,mapThemePark,mapTower
,mapVilla,mapYacht;

//Hostage
//Secure
//Bomb

mapBank = ["bank",
"2F CEO Office",0,0,11,2,2,
"1F Staff Room",0,0,12,0,2,
"1F Tellers' Office",0,0,8,0,3,
"B Vault",1,0,2,0,1,

"2F CEO Office",0,0,11,2,2,
"1F Open Area",0,1,7,1,2,
"1F Archives",2,0,7,1,3,
"B Lockers",0,0,8,1,1,

"2F CEO Office & 2F Executive Lounge",0,0,"13(10)",4,"4(3)",
0,0,0,"4(2)","2(1)",
"1F Open Area & 1F Staff Room",2,1,"13(10)",0,0,
1,1,"5(3)",0,"1(0)",
"1F Tellers' Office & 1F Archives",0,0,"11(7)",1,"4(3)",
"x","x","x","x","x",
"B CCTV Room & B Lockers",1,0,"14(6)",0,0,
1,0,"9(2)",0,"4(2)"
];
mapBorder = ["border",
"2F Offices",0,1,"12(9)",1,2,
"2F Security Room",0,2,12,1,3,
"1F Workshop",2,0,12,0,2,
"1F Customs inspections",2,0,7,"1(0)","4(3)",

"1F Tellers",1,0,7,3,1,
"1F Workshop",2,0,12,0,2,
"2F Offices",0,1,"12(9)",1,2,
"2F Armory Lockers",0,1,"6(4)","2(1)","4(3)",

"1F Customs Inspection & 1F Supply Room",
2,0,"11(6)","2(1)","4(2)",
0,0,"2(0)","3(1)","1",
"1F Ventilation Room & 1F Workshop",
2,0,"12(8)",1,"3(1)",
0,0,0,0,"4(2)",
"1F Bathroom & 1F Tellers",
1,0,"10(7)",3,"2(0)",
"-","-","-","-","2(0)",
"2F Armory Lockers & 2F Archives",
0,2,"10(6)","3(2)","6(4)",
"-","-","-","-","-"
];

//map = ["chalet",
//"2F Master Bedroom",,,,,,
//"2F Library",,,,,,
//"1F Kitchen",,,,,,
//"B Wine Cellar",,,,,,

//"2F Library",,,,,,
//"1F Dining Room",,,,,,
//"1F Bar",,,,,,
//"B Snowmobile Garage",,,,,,

//"2F Office & 2F Master Bedroom",
//,,,,,
//,,,,,
//"1F Gaming Room & 1F Bar",
//,,,,,
//,,,,,
//"1F Kitchen & 1F Trophy Room",
//,,,,,
//,,,,,
//"B Wine Cellar & B Snowmobile Garage",
//,,,,,
//,,,,
//];

//map = ["club house",
//"2F Bedroom",,,,,,
//"2F Cash Room",,,,,,
//"1F Strip Club",,,,,,
//"B Church",,,,,,

//"2F Bedroom",,,,,,
//"1F Garage",,,,,,
//"1F Bar",,,,,,
//"B Arsenal Room",,,,,,

//"2F Bedroom & 2F Gym",
//,,,,,
//,,,,,
//"2F Cash Room & 2F CCTV Room",
//,,,,,
//,,,,,
//"1F Bar & 1F Stock Room",
//,,,,,
//,,,,,
//"B Church & B Arsenal Room",
//,,,,,
//,,,,
//];

//map = ["coastline",
//"2F VIP Lounge",,,,,,
//"2F Theater",,,,,,
//"1F Kitchen",,,,,,
//"1F Blue Bar",,,,,,

//"2F Billiards Room",,,,,,
//"2F Penthouse",,,,,,
//"1F Kitchen",,,,,,
//"1F Blue Bar",,,,,,

//"2F Billiards Room & 2F Hookah Lounge",
//,,,,,
//,,,,,
//"2F Theater & 2F Penthouse",
//,,,,,
//,,,,,
//"1F Kitchen & 1F Service Entrance",
//,,,,,
//,,,,,
//"1F Blue Bar & 1F Sunrise Bar",
//,,,,,
//,,,,
//];

//map = ["consulate",
//"2F Consulate Office",,,,,,
//"2F Administration Office",,,,,,
//"1F Tellers",,,,,,
//"B Archives",,,,,,

//"2F Administration Office",,,,,,
//"1st Visa Office",,,,,,
//"B Archives",,,,,,
//"B Garage",,,,,,

//"2F Meeting Room & 2F Consulate Office",
//,,,,,
//,,,,,
//"1F Press Room & 1F Lobby",
//,,,,,
//,,,,,
//"B Archives & 1F Tellers",
//,,,,,
//,,,,,
//"B Cafeteria & B Garage",
//,,,,,
//,,,,
//];

//map = ["favela",
//"3F Packaging Room",,,,,,
//"2F Grow Room",,,,,,
//"2F Aunt's Bedroom",,,,,,
//"1F Biker's Apartment",,,,,,

//"3F Packaging Room",,,,,,
//"2F Football Apartment",,,,,,
//"1F Aunt's Apartment",,,,,,
//"1F Armory Room",,,,,,

//"2F Meth Lab & 3F Packaging Room",
//,,,,,
//,,,,,
//"2F Football Office & 2F Football Bedroom",
//,,,,,
//,,,,,
//"2F Aunt's Bedroom & 1F Aunt's Apartment",
//,,,,,
//,,,,,
//"1F Biker's Apartment & 1F Biker's Bedroom",
//,,,,,
//,,,,
//];

//map = ["fortress",
//"2F Bathroom",,,,,,
//"2F Games Room",,,,,,
//"1F Kitchen",,,,,,
//"1F Hammam",,,,,,

//"2F Commander's Office",,,,,,
//"2F Dormitory",,,,,,
//"1F Cafeteria",,,,,,
//"1F Dining Room",,,,,,

//"2F Bedroom & 2F Commander's Office",
//,,,,,
//,,,,,
//"2F Dormitory & 2F Briefing Room",
//,,,,,
//,,,,,
//"1F Kitchen & 1F Cafeteria",
//,,,,,
//,,,,,
//"1F Hammam & 1F Sitting Room",
//,,,,,
//,,,,
//];

//map = ["hereford base",
//"3F Tractor Storage",,,,,,
//"2F Master Bedroom",,,,,,
//"1F Kitchen",,,,,,
//"B Fermentation Chamber",,,,,,

//"2F Loom Room",,,,,,
//"2F Kids Room",,,,,,
//"1F Piano Room",,,,,,
//"B Barrel Storage",,,,,,

//"3F Ammo Storage & 3F Tractor Storage",
//,,,,,
//,,,,,
//"2F Master Bedroom & 2F Kids Room",
//,,,,,
//,,,,,
//"1F Dining Room & 1F Kitchen",
//,,,,,
//,,,,,
//"B Fermentation Chamber & B Brewery",
//,,,,,
//,,,,
//];

//map = ["kanal",
//"3F Control Room",,,,,,
//"2F Maps Office",,,,,,
//"2F Coast Guard Office",,,,,,
//"1F Boat Supplies",,,,,,

//"3F Server Room",,,,,,
//"2F Maps Office",,,,,,
//"2F Coast Guard Office",,,,,,
//"1F Boat Supplies",,,,,,

//"3F Control Room & 3F Server Room",
//,,,,,
//,,,,,
//"2F Projector Room & 2F Kitchen",
//,,,,,
//,,,,,
//"2F Coast Guard Office & 2F Holding Room",
//,,,,,
//,,,,,
//"-",
//"-","-","-","-","-",
//"-","-","-","-","-"
//];

//map = ["oregon",
//"2F Dorm Main Hall",,,,,,
//"1F Meeting Hall",,,,,,
//"1F Kitchen",,,,,,
//"B Supply Room",,,,,,

//"2F Dorm Main Hall",,,,,,
//"1F Meeting Hall",,,,,,
//"1F Dining Hall",,,,,,
//"B Laundry Room",,,,,,

//"2F Dorm Main Hall & 2F Kids' Dorm",
//,,,,,
//,,,,,
//"1F Dining Hall & 1F Kitchen",
//,,,,,
//,,,,,
//"B Laundry Room & B Supply Room",
//,,,,,
//,,,,,
//"1F Rear Stage & 2F Watch Tower",
//,,,,,
//,,,,
//];

//map = ["outback",
//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"",,,,,,
//"",,,,,,
//"",,,,,,
//"",,,,,,

//"2F Laundry Room & 2F Games Room",
//,,,,,
//,,,,,
//"2F Party Room & 2F Office",
//,,,,,
//,,,,,
//"1F Nature Room & 1F Bushranger Room",
//,,,,,
//,,,,,
//"1F Compressor Room & 1F Gear Store",
//,,,,,
//,,,,
//];

//map = ["presidential plane",
//"2F Meeting Room",,,,,,
//"2F Executive Bedroom",,,,,,
//"2F Press Section A",,,,,,
//"1F Luggage Hold",,,,,,

//"2F Meeting Room",,,,,,
//"2F Executive Bedroom",,,,,,
//"2F Staff Section",,,,,,
//"1F Luggage Hold",,,,,,

//"2F Executive Office & 2F Meeting Room",
//,,,,,
//,,,,,
//"2F Executive Bedroom & 2F Staff Section",
//,,,,,
//,,,,,
//"1F Cargo Hold & 1F Luggage Hold",
//,,,,,
//,,,,,
//"-",
//"-","-","-","-","-",
//"-","-","-","-","-"
//];

//map = ["skyscrapper",
//"2F Geisha Room",,,,,,
//"2F Work Office",,,,,,
//"1F Kitchen",,,,,,
//"1F Bedroom",,,,,,

//"2F Tea Room",,,,,,
//"2F Work Office",,,,,,
//"1F BBQ",,,,,,
//"1F Bedroom",,,,,,

//"2F Tea Room & 2F Karaoke",
//,,,,,
//,,,,,
//"2F Work Office & 2F Exhibition",
//,,,,,
//,,,,,
//"1F BBQ & 1F Kitchen",
//,,,,,
//,,,,,
//"1F Bedroom & 1F Bathroom",
//,,,,,
//,,,,
//];

//map = ["theme park",
//"2F Office",,,,,,
//"2F Bunk",,,,,,
//"1F Execution Room",,,,,,
//"1F Drug Lab",,,,,,

//"2F Office",,,,,,
//"2F Day Care",,,,,,
//"1F Haunted Dining",,,,,,
//"1F Drug Lab",,,,,,

//"2F Initiation Room 2F & Office",
//,,,,,
//,,,,,
//"2F Bunk & 2F Day Care",
//,,,,,
//,,,,,
//"1F Gargoyle & 1F Haunted Dining",
//,,,,,
//,,,,,
//"1F Drug Lab & 1F Drug Storage",
//,,,,,
//,,,,
//];

//map = ["tower",
//"2F Offices",,,,,,
//"2F Media Center",,,,,,
//"1F Restaurant",,,,,,
//"1F Lounge",,,,,,

//"2F CEO's Office",,,,,,
//"2F Media Center",,,,,,
//"1F Restaurant",,,,,,
//"1F Tea Room",,,,,,

//"2F Gift Shop & 2F Lantern Room",
//,,,,,
//,,,,,
//"2F Exhibit Room & 2F Media Center",
//,,,,,
//,,,,,
//"1F Tea Room & 1F Bar",
//,,,,,
//,,,,,
//"1F Restaurant & 1F Bird Room",
//,,,,,
//,,,,
//];

//map = ["villa",
//"2F Study",,,,,,
//"2F Master Bedroom",,,,,,
//"1F Living Room",,,,,,
//"B Art Storage",,,,,,

//"2F Aviator Room",,,,,,
//"2nd Astronomy Room",,,,,,
//"1F Piano Room",,,,,,
//"B Old Office",,,,,,

//"2F Aviator Room & 2F Games Room",
//,,,,,
//,,,,,
//"2F Trophy Room & 2F Statuary Room",
//,,,,,
//,,,,,
//"1F Living Room & 1F Library",
//,,,,,
//,,,,,
//"1F Dining Room & 1F Kitchen",
//,,,,,
//,,,,
//];

//map = ["yacht",
//"4F Maps Room",,,,,,
//"3F Poker Room",,,,,,
//"2F Cafeteria",,,,,,
//"1F Engine",,,,,,

//"4F Cockpit",,,,,,
//"3F Casino",,,,,,
//"2F Boreal Sub Room",,,,,,
//"2F Kitchen",,,,,,

//"4F Cockpit & 4F Maps Room",
//,,,,,
//,,,,,
//"2F Engine Control & 2F Kitchen",
//,,,,,
//,,,,,
//"2F Cafeteria & Staff 2F Dormitory",
//,,,,,
//,,,,,
//"1F Server Room & 1F Engine Storage",
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

//mapBorder = ["border"];
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
