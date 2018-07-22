// uweschneider.com:	javascript data arrays to create carousel html ; USch 05-07-2015
// Updated 07-04-20118 for the redesign of the site.
// The gallery arrays contain one array per image. Each gallery image array contains two values: the image and it's caption.
// The home page gallery array ("$.aHome") contains three values: the image, it's caption and the name of the gallery.
// The images are assumed to be in a folder with the gallery name, which is inside the "images" folder of the root directory.
$(document).ready(function() {
$.aHome = [['NL35home.jpg','Double-click to open the &quot;Nightlight&quot; gallery','Nightlight'],['WinterInPdx_34.jpg','Double-click to open the &quot;A Winternight in NE Portland&quot; gallery','WinterInPdx'],['WallsPoles_04home.jpg','Double-click to open the &quot;Abstracts on Walls & Utility Poles&quot; gallery','WallsPoles'],['Por102home.jpg','Double-click to open the &quot;Portraits I&quot; gallery','EarlyPortraits'],['Por203home.jpg','Double-click to open the &quot;Portraits II&quot; gallery','Portraits'],['MovieDirectors09home.jpg','Double-click to open the &quot;Movie Directors&quot; gallery','MovieDirectors'],['CoffeePlant09home.jpg','Double-click to open the &quot;Coffee Plant&quot; gallery','CoffeePlant'],['OneWedding05home.jpg','Double-click to open the &quot;Wedding&quot; gallery','OneWedding'], ['WiedenKennedy06home.jpg','Double-click to open the &quot;Wieden+Kennedy Building&quot; gallery','WiedenKennedy'],['PaintedHills02home.jpg','Double-click to open the &quot;Painted Hills&quot; gallery','PaintedHills'],['Berlin03home.jpg','Double-click to open the &quot;Berlin&quot; gallery','Berlin'],['BerlinWallArt01home.jpg','Double-click to open the &quot;Berlin Wall Art&quot; gallery','BerlinWallArt']];
$.aNightlight = [['NL05.jpg','Prague, Czech Republic'],['NL16.jpg','Prague, Czech Republic'],['NL35.jpg','Fecamp, France 1992'],['NL38.jpg','Lisieux, France 1992'],['NL28.jpg','Krakow, Poland 1993'],['NL30.jpg','Krakow, Poland 1993'],['NL29.jpg','Krakow, Poland 1993'],['NL31.jpg','Krakow, Poland 1993'],['NL36.jpg','Paris, France 1991'],['NL06.jpg','Prague, Czech Republic 1994'],['NL11.jpg','Prague, Czech Republic 1994'],['NL10.jpg','Prague, Czech Republic 1994'],['NL14.jpg','Prague, Czech Republic 1994'],['NL15.jpg','Prague, Czech Republic'],['NL08.jpg','Prague, Czech Republic'],['NL18.jpg','Prague, Czech Republic'],['NL19.jpg','Prague, Czech Republic'],['NL27.jpg','Krakow, Poland'],['NL17.jpg','Prague, Czech Republic'],['NL13.jpg','Prague, Czech Republic'],['NL20.jpg','Zilina, Slovakia 1997'],['NL26.jpg','Zilina, Slovakia 1997'],['NL21.jpg','Zilina, Slovakia 1997'],['NL23.jpg','Zilina, Slovakia 1997'],['NL41.jpg','Normandie, France 1992'],['NL62.jpg','Cambridge, MA. USA 1994'],['NL56.jpg','Mannheim, Germany 1992'],['NL55.jpg','Mannheim, Germany 1992'],['NL46.jpg','Valencia, Spain 1997'],['NL43.jpg','France 1992'],['NL49.jpg','Greece 1982'],['NL45.jpg','Valencia, Spain 1997'],['NL04.jpg','Prague, Czech Republic'],['NL07.jpg','Prague, Czech Republic'],['NL59.jpg','Lake Constans, Germany 1985'],['NL42.jpg','France 1992'],['NL40.jpg','Narbonne, France 1991'],['NL12.jpg','Prague, Czech Republic'],['NL39.jpg','Lisieux, France 1992'],['NL63.jpg','Cambridge, MA. USA 1994'],['NL65.jpg','Cambridge, MA. USA 1994'],['NL37.jpg','France'],['NL64.jpg','Cambridge, MA. USA 1994'],['NL09.jpg','Prague, Czech Republic'],['NL33.jpg','Yugoslavia 1982']];
$.aWinterInPdx = [['WinterInPdx_01.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_35.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_02.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_03.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_13.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_04.jpg','Winter In Portland, Dec. 28th, 2008'],['WinterInPdx_05.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_06.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_11.jpg','Winter In Portland, Dec. 28th, 2008'],['WinterInPdx_34.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_07.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_12.jpg','Winter In Portland, Dec. 28th, 2008'],['WinterInPdx_15.jpg','A Winternight in NE Portland, Dec. 28th, 2008',],['WinterInPdx_16.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_32.jpg','Winter In Portland, Dec. 28th, 2008'],['WinterInPdx_17.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_14.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_19.jpg','Winter In Portland, Dec. 28th, 2008'],['WinterInPdx_18.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],['WinterInPdx_31.jpg','A Winternight in NE Portland, Dec. 28th, 2008']];
// ['Snow_08.jpg','Winter In Portland'],['Snow_09.jpg','Winter In Portland'],['Snow_00.jpg','Winter In Portland'],
$.aWallsPoles = [['WallsPoles_01.jpg','Walls & Utility Poles - 1'],['WallsPoles_02.jpg','Walls & Utility Poles - 2'],['WallsPoles_10.jpg','Walls & Utility Poles - 10'],['WallsPoles_09.jpg','Walls & Utility Poles - 9'],['WallsPoles_03.jpg','Walls & Utility Poles - 3'],['WallsPoles_06.jpg','Walls & Utility Poles - 6'],['WallsPoles_07.jpg','Walls & Utility Poles - 7'],['WallsPoles_08.jpg','Walls & Utility Poles - 8'],['WallsPoles_04.jpg','Walls & Utility Poles - 4'],['WallsPoles_05.jpg','Walls & Utility Poles - 5'],['WallsPoles_12.jpg','Walls & Utility Poles - 12'],['WallsPoles_11.jpg','Walls & Utility Poles - 11']];
$.aEarlyPortraits = [['Por112.jpg','Steffen Butz, Cartoonist & Illustrator 1993'],['Por101.jpg','Jacek, Munich 1985'],['Por102.jpg','Jan Biczycki, Actor & Acting Teacher, Munich 1985'],['Por103.jpg','Joerg, 1994'],['Por104.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],['Por105.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],['Por106.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],['Por108.jpg','Band 1995'],['Por107.jpg','Band 1994'],['Por110.jpg','Eva, Munich 1986'],['Por109.jpg','Band 1995'],['Por111.jpg','Daniel, 1992']];
$.aPortraits = [['Por201.jpg','Ricci'],['Por202.jpg','Heather'],['Por203.jpg','Adam'],['Por208.jpg',''],['Por205.jpg','Jasper'],['Por206.jpg','Joe'],['Por207.jpg','Juergen'],['Por204.jpg','Fiaker Driver, Vienna, 2008']];
$.aMovieDirectors = [['MovieDirectors01.jpg','Andrew Dominik, Park City, UT 2001'],['MovieDirectors02.jpg','Jan Hrebejk, Park City, UT 2001'],['MovieDirectors03.jpg','Sandra Werneck, Park City, UT 2001'],['MovieDirectors04.jpg','Nabil Ayouch, Park City, UT 2001'],['MovieDirectors05.jpg','Kim Kiduk, Park City, UT 2001'],['MovieDirectors06.jpg','Laura Mana, Park City, UT 2001'],['MovieDirectors07.jpg','Jean-Pierre Sinapi, Park City, UT 2001'],['MovieDirectors08.jpg','Denis Villeneuve, Park City, UT 2001'],['MovieDirectors09.jpg','John Cameron Mitchell, Park City, UT 2001'],['MovieDirectors10.jpg','Jamie Thraves, Park City, UT 2001'],['MovieDirectors11.jpg','Lukas Moodysson, Park City, UT 2001'],['MovieDirectors12.jpg','Henrique Goldman, Park City, UT 2001'],['MovieDirectors13.jpg','Fridrik Thor Fridriksson, Park City, UT 2001'],['MovieDirectors14.jpg','Eduardo Winspeare, Park City, UT 2001'],['MovieDirectors15.jpg','Lorenza Manrique, Park City, UT 2001'],['MovieDirectors16.jpg','Bill Eagles, Park City, UT 2001'],['MovieDirectors17.jpg','Baltasar Kormakur, Park City, UT 2001'],['MovieDirectors18.jpg','Baltasar Kormakur, Park City, UT 2001'],['MovieDirectors19.jpg','Yoshiyasu Fujita, Park City, UT 2001'],['MovieDirectors20.jpg','Andrucha Waddington, Park City, UT 2001'],['MovieDirectors21.jpg','Barbet Schroeder, Park City, UT 2001'],['MovieDirectors22.jpg','Javier Corcuera, Park City, UT 2001']];
$.aCoffeePlant = [['CoffeePlant01.jpg','Mike, owner'],['CoffeePlant02.jpg','Randal & Angie'],['CoffeePlant12.jpg','Coffee Plant Baristas'],['CoffeePlant11.jpg','Coffee Plant Baristas'],['CoffeePlant05.jpg','Charlie'],['CoffeePlant09.jpg','Maryam'],['CoffeePlant14.jpg','Ken'],['CoffeePlant07.jpg','Marius'],['CoffeePlant06.jpg','Charlie'],['CoffeePlant15.jpg','Jen'],['CoffeePlant13.jpg','Marius'],['CoffeePlant08.jpg','Maryam'],['CoffeePlant10.jpg','Elsbeth'],['CoffeePlant16.jpg','Marissa'],['CoffeePlant17.jpg','Mike, owner'],['CoffeePlant18.jpg','Coffee Plant closing event']];
$.aOneWedding = [['OneWedding01.jpg','Wedding in Cesky Krumlov, 1995 1'],['OneWedding02.jpg','Wedding in Cesky Krumlov, 1995 2'],['OneWedding03.jpg','Wedding in Cesky Krumlov, 1995 - 3'],['OneWedding04.jpg','Wedding in Cesky Krumlov, 1995 4'],['OneWedding05.jpg','Wedding in Cesky Krumlov, 1995 - 5'],['OneWedding06.jpg','Wedding in Cesky Krumlov, 1995 - 6'],['OneWedding07.jpg','Wedding in Cesky Krumlov, 1995 7'],['OneWedding08.jpg','Wedding in Cesky Krumlov, 1995 - 8'],['OneWedding09.jpg','Wedding in Cesky Krumlov, 1995 - 9'],['OneWedding10.jpg','Wedding in Cesky Krumlov, 1995 10'],['OneWedding11.jpg','Wedding in Cesky Krumlov, 1995 - 11'],['OneWedding12.jpg','Wedding in Cesky Krumlov, 1995 - 12'],['OneWedding13.jpg','Wedding in Cesky Krumlov, 1995 13'],['OneWedding14.jpg','Wedding in Cesky Krumlov, 1995 - 14']];
$.aWiedenKennedy = [['WiedenKennedy01.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 01'],['WiedenKennedy02.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 02'],['WiedenKennedy03.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 03'],['WiedenKennedy04.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 04'],['WiedenKennedy05.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 05'],['WiedenKennedy06.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 06'],['WiedenKennedy07.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 07'],['WiedenKennedy08.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 08'],['WiedenKennedy09.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 09'],['WiedenKennedy10.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 10']];
$.aPaintedHills = [['PaintedHills02.jpg','PaintedHills, OR, 2015 - 2'],['PaintedHills04.jpg','PaintedHills, OR, 2015 - 4'],['PaintedHills03.jpg','PaintedHills, OR, 2015 - 3'],['PaintedHills05.jpg','PaintedHills, OR, 2015 - 5'],['PaintedHills06.jpg','PaintedHills, OR, 2015 - 6'],['PaintedHills17.jpg','PaintedHills, OR, 2015 - 17'],['PaintedHills15.jpg','PaintedHills, OR, 2015 - 15'],['PaintedHills13.jpg','PaintedHills, OR, 2015 - 13'],['PaintedHills18.jpg','PaintedHills, OR, 2015 - 18'],['PaintedHills11.jpg','PaintedHills, OR, 2015 - 11'],['PaintedHills20.jpg','PaintedHills, OR, 2015 - 20'],['PaintedHills10.jpg','PaintedHills, OR, 2015 - 10'],['PaintedHills08.jpg','PaintedHills, OR, 2015 - 8'],['PaintedHills21.jpg','PaintedHills, OR, 2015 - 21'],['PaintedHills12.jpg','PaintedHills, OR, 2015 - 12']];
$.aSeattle = [['UnderConstruction.jpg','Gallery Still Under Construction ...']];
$.aBerlin = [['Berlin03.jpg','Berlin Brandenburg Gate 2014 - 03'],['Berlin01.jpg','Berlin Mitte: Unter Den Linden 2014 - 01'],['Berlin02.jpg','Berlin Mitte: Unter Den Linden 2014 - 02'],
['Berlin07.jpg','Berlin, Cathedral Church 2014 - 07'],['Berlin06.jpg','Berlin Kreuzberg 2014 - 06'],['Berlin04.jpg','Berlin Kreuzberg 2014 - 04'],
['Berlin09.jpg','Berlin 09'],['Berlin05.jpg','Berlin Kreuzberg 2014 - 05'],['Berlin10.jpg','Berlin 10'],
['Berlin20.jpg','Berlin 20'],['Berlin23.jpg','Berlin 23'],['Berlin24.jpg','Berlin 24'],
['Berlin22.jpg','Berlin 22'],['Berlin21.jpg','Berlin 21'],['Berlin08.jpg','Berlin 08'],
['Berlin11.jpg','Berlin: Holocaust Memorial 2014 - 11'],['Berlin12.jpg','Berlin: Holocaust Memorial 2014 - 12'],['Berlin13.jpg','Berlin: Holocaust Memorial 2014 - 13'],
['Berlin14.jpg','Berlin: Wall Memorial 2014 - 14'],['Berlin15.jpg','Berlin: Wall Memorial 2014 - 15'],['Berlin16.jpg','Berlin: Wall Memorial 2014 - 16'],
['Berlin17.jpg','Berlin: Wall Memorial 2014 - 17'],['Berlin18.jpg','Berlin: Wall Memorial 2014 - 18'],['Berlin19.jpg','Berlin: Wall Memorial 2014 - 19']];
$.aBerlinWallArt = [['BerlinWallArt01.jpg','Berlin Hackersche Hoefe: Wall-Art 2014 - 01'],['BerlinWallArt11.jpg','Berlin Kreuzberg: Wall-Art 2014 - 11'],['BerlinWallArt10.jpg','Berlin Kreuzberg: Wall-Art 2014 - 10'],
['BerlinWallArt13.jpg','Berlin Kreuzberg: Wall-Art 2014 - 13'],['BerlinWallArt14.jpg','Berlin Kreuzberg: Posters 2014 - 14'],['BerlinWallArt15.jpg','Berlin Kreuzberg: Posters 2014 - 15'],
['BerlinWallArt16.jpg','Berlin Kreuzberg: Posters 2014 - 16'],['BerlinWallArt09.jpg','Berlin Kreuzberg: Posters 2014 - 09'],['BerlinWallArt02.jpg','Berlin: Wall-Art 2014 - 02'],
['BerlinWallArt03.jpg','Berlin: Wall-Art 2014 - 03'],['BerlinWallArt05.jpg','Berlin: Wall-Art 2014 - 05'],['BerlinWallArt08.jpg','Berlin: Wall-Art 2014 - 08'],
['BerlinWallArt26.jpg','Berlin: East Side Gallery 2014 - 26'],['BerlinWallArt24.jpg','Berlin: East Side Gallery 2014 - 24'],['BerlinWallArt23.jpg','Berlin: East Side Gallery 2014 - 23'],
['BerlinWallArt18.jpg','Berlin: East Side Gallery 2014 - 18'],['BerlinWallArt17.jpg','Berlin: East Side Gallery 2014 - 17'],['BerlinWallArt21.jpg','Berlin: East Side Gallery 2014 - 21'],
['BerlinWallArt19.jpg','Berlin: East Side Gallery 2014 - 19'],['BerlinWallArt20.jpg','Berlin: East Side Gallery 2014 - 20'],['BerlinWallArt22.jpg','Berlin: East Side Gallery 2014 - 22'],
['BerlinWallArt25.jpg','Berlin: East Side Gallery 2014 - 25']];
}); // END: $(document).ready(function()
