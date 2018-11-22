// uweschneider.com:	javascript for index.html
// USch 07-01-2018

$(document).ready(function() {

	// GLOBALS //

  $.currentPage = undefined;							// currently selected main section/gallery
  $.showHome = true;

  $.pages = {
    home: {
      title: "Home",
      data: [
        ['NL35home.jpg','Double-click to open the &quot;Nightlight&quot; gallery','Nightlight'],
        ['WinterInPdx_34.jpg','Double-click to open the &quot;A Winternight in NE Portland&quot; gallery','WinterInPdx'],
        ['WallsPoles_04home.jpg','Double-click to open the &quot;Abstracts on Walls & Utility Poles&quot; gallery','WallsPoles'],
        ['Por102home.jpg','Double-click to open the &quot;Portraits I&quot; gallery','EarlyPortraits'],
        ['Por203home.jpg','Double-click to open the &quot;Portraits II&quot; gallery','Portraits'],
        ['MovieDirectors09home.jpg','Double-click to open the &quot;Movie Directors&quot; gallery','MovieDirectors'],
        ['CoffeePlant09home.jpg','Double-click to open the &quot;Coffee Plant&quot; gallery','CoffeePlant'],
        ['OneWedding05home.jpg','Double-click to open the &quot;Wedding&quot; gallery','OneWedding'],
        ['WiedenKennedy06home.jpg','Double-click to open the &quot;Wieden+Kennedy Building&quot; gallery','WiedenKennedy'],
        ['PaintedHills02home.jpg','Double-click to open the &quot;Painted Hills&quot; gallery','PaintedHills'],
        ['Berlin03home.jpg','Double-click to open the &quot;Berlin&quot; gallery','Berlin'],
        ['BerlinWallArt01home.jpg','Double-click to open the &quot;Berlin Wall Art&quot; gallery','BerlinWallArt']
      ],
      group: ""
    },
    infoandcontact: {
      title: "InfoAndContact",
      data: [],
      group: ""
    },
    nightlight: {
      title: "Nightlight",
      data: [
        ['NL05.jpg','Prague, Czech Republic'],
        ['NL16.jpg','Prague, Czech Republic'],
        ['NL35.jpg','Fecamp, France 1992'],
        ['NL38.jpg','Lisieux, France 1992'],
        ['NL28.jpg','Krakow, Poland 1993'],
        ['NL30.jpg','Krakow, Poland 1993'],
        ['NL29.jpg','Krakow, Poland 1993'],
        ['NL31.jpg','Krakow, Poland 1993'],
        ['NL36.jpg','Paris, France 1991'],
        ['NL06.jpg','Prague, Czech Republic 1994'],
        ['NL11.jpg','Prague, Czech Republic 1994'],
        ['NL10.jpg','Prague, Czech Republic 1994'],
        ['NL14.jpg','Prague, Czech Republic 1994'],
        ['NL15.jpg','Prague, Czech Republic'],
        ['NL08.jpg','Prague, Czech Republic'],
        ['NL18.jpg','Prague, Czech Republic'],
        ['NL19.jpg','Prague, Czech Republic'],
        ['NL27.jpg','Krakow, Poland'],
        ['NL17.jpg','Prague, Czech Republic'],
        ['NL13.jpg','Prague, Czech Republic'],
        ['NL20.jpg','Zilina, Slovakia 1997'],
        ['NL26.jpg','Zilina, Slovakia 1997'],
        ['NL21.jpg','Zilina, Slovakia 1997'],
        ['NL23.jpg','Zilina, Slovakia 1997'],
        ['NL41.jpg','Normandie, France 1992'],
        ['NL62.jpg','Cambridge, MA. USA 1994'],
        ['NL56.jpg','Mannheim, Germany 1992'],
        ['NL55.jpg','Mannheim, Germany 1992'],
        ['NL46.jpg','Valencia, Spain 1997'],
        ['NL43.jpg','France 1992'],
        ['NL49.jpg','Greece 1982'],
        ['NL45.jpg','Valencia, Spain 1997'],
        ['NL04.jpg','Prague, Czech Republic'],
        ['NL07.jpg','Prague, Czech Republic'],
        ['NL59.jpg','Lake Constans, Germany 1985'],
        ['NL42.jpg','France 1992'],
        ['NL40.jpg','Narbonne, France 1991'],
        ['NL12.jpg','Prague, Czech Republic'],
        ['NL39.jpg','Lisieux, France 1992'],
        ['NL63.jpg','Cambridge, MA. USA 1994'],
        ['NL65.jpg','Cambridge, MA. USA 1994'],
        ['NL37.jpg','France'],
        ['NL64.jpg','Cambridge, MA. USA 1994'],
        ['NL09.jpg','Prague, Czech Republic'],
        ['NL33.jpg','Yugoslavia 1982']
      ],
      group: "Portfolios"
    },
    winterinpdx: {
      title: "WinterInPdx",
      data: [['WinterInPdx_01.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_35.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_02.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_03.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_13.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_04.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_05.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_06.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_11.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_34.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_07.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_12.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_15.jpg','A Winternight in NE Portland, Dec. 28th, 2008',],
        ['WinterInPdx_16.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_32.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_17.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_14.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_19.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_18.jpg','A Winternight in NE Portland, Dec. 28th, 2008'],
        ['WinterInPdx_31.jpg','A Winternight in NE Portland, Dec. 28th, 2008']
      ],
      group: "Portfolios"
    },
    wallspoles: {
      title: "WallsPoles",
      data: [
        ['WallsPoles_01.jpg','Walls & Utility Poles - 1'],
        ['WallsPoles_02.jpg','Walls & Utility Poles - 2'],
        ['WallsPoles_10.jpg','Walls & Utility Poles - 10'],
        ['WallsPoles_09.jpg','Walls & Utility Poles - 9'],
        ['WallsPoles_03.jpg','Walls & Utility Poles - 3'],
        ['WallsPoles_06.jpg','Walls & Utility Poles - 6'],
        ['WallsPoles_07.jpg','Walls & Utility Poles - 7'],
        ['WallsPoles_08.jpg','Walls & Utility Poles - 8'],
        ['WallsPoles_04.jpg','Walls & Utility Poles - 4'],
        ['WallsPoles_05.jpg','Walls & Utility Poles - 5'],
        ['WallsPoles_12.jpg','Walls & Utility Poles - 12'],
        ['WallsPoles_11.jpg','Walls & Utility Poles - 11']
      ],
      group: "Portfolios"
    },
    earlyportraits: {
      title: "EarlyPortraits",
      data: [
        ['Por112.jpg','Steffen Butz, Cartoonist & Illustrator 1993'],
        ['Por101.jpg','Jacek, Munich 1985'],
        ['Por102.jpg','Jan Biczycki, Actor & Acting Teacher, Munich 1985'],
        ['Por103.jpg','Joerg, 1994'],
        ['Por104.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por105.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por106.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por108.jpg','Band 1995'],
        ['Por107.jpg','Band 1994'],
        ['Por110.jpg','Eva, Munich 1986'],
        ['Por109.jpg','Band 1995'],
        ['Por111.jpg','Daniel, 1992']
      ],
      group: "People"
    },
    portraits: {
      title: "Portraits",
      data: [
        ['Por201.jpg','Ricci'],
        ['Por202.jpg','Heather'],
        ['Por203.jpg','Adam'],
        ['Por208.jpg',''],
        ['Por205.jpg','Jasper'],
        ['Por206.jpg','Joe'],
        ['Por207.jpg','Juergen'],
        ['Por204.jpg','Fiaker Driver, Vienna, 2008']
      ],
      group: "People"
    },
    moviedirectors: {
      title: "MovieDirectors",
      data: [
        ['MovieDirectors01.jpg','Andrew Dominik, Park City, UT 2001'],
        ['MovieDirectors02.jpg','Jan Hrebejk, Park City, UT 2001'],
        ['MovieDirectors03.jpg','Sandra Werneck, Park City, UT 2001'],
        ['MovieDirectors04.jpg','Nabil Ayouch, Park City, UT 2001'],
        ['MovieDirectors05.jpg','Kim Kiduk, Park City, UT 2001'],
        ['MovieDirectors06.jpg','Laura Mana, Park City, UT 2001'],
        ['MovieDirectors07.jpg','Jean-Pierre Sinapi, Park City, UT 2001'],
        ['MovieDirectors08.jpg','Denis Villeneuve, Park City, UT 2001'],
        ['MovieDirectors09.jpg','John Cameron Mitchell, Park City, UT 2001'],
        ['MovieDirectors10.jpg','Jamie Thraves, Park City, UT 2001'],
        ['MovieDirectors11.jpg','Lukas Moodysson, Park City, UT 2001'],
        ['MovieDirectors12.jpg','Henrique Goldman, Park City, UT 2001'],
        ['MovieDirectors13.jpg','Fridrik Thor Fridriksson, Park City, UT 2001'],
        ['MovieDirectors14.jpg','Eduardo Winspeare, Park City, UT 2001'],
        ['MovieDirectors15.jpg','Lorenza Manrique, Park City, UT 2001'],
        ['MovieDirectors16.jpg','Bill Eagles, Park City, UT 2001'],
        ['MovieDirectors17.jpg','Baltasar Kormakur, Park City, UT 2001'],
        ['MovieDirectors18.jpg','Baltasar Kormakur, Park City, UT 2001'],
        ['MovieDirectors19.jpg','Yoshiyasu Fujita, Park City, UT 2001'],
        ['MovieDirectors20.jpg','Andrucha Waddington, Park City, UT 2001'],
        ['MovieDirectors21.jpg','Barbet Schroeder, Park City, UT 2001'],
        ['MovieDirectors22.jpg','Javier Corcuera, Park City, UT 2001']
      ],
      group: "People"
    },
    coffeeplant: {
      title: "CoffeePlant",
      data: [
        ['CoffeePlant01.jpg','Mike, owner'],
        ['CoffeePlant02.jpg','Randal & Angie'],
        ['CoffeePlant12.jpg','Coffee Plant Baristas'],
        ['CoffeePlant11.jpg','Coffee Plant Baristas'],
        ['CoffeePlant05.jpg','Charlie'],
        ['CoffeePlant09.jpg','Maryam'],
        ['CoffeePlant14.jpg','Ken'],
        ['CoffeePlant07.jpg','Marius'],
        ['CoffeePlant06.jpg','Charlie'],
        ['CoffeePlant15.jpg','Jen'],
        ['CoffeePlant13.jpg','Marius'],
        ['CoffeePlant08.jpg','Maryam'],
        ['CoffeePlant10.jpg','Elsbeth'],
        ['CoffeePlant16.jpg','Marissa'],
        ['CoffeePlant17.jpg','Mike, owner'],
        ['CoffeePlant18.jpg','Coffee Plant closing event']
      ],
      group: "People"
    },
    onewedding: {
      title: "OneWedding",
      data: [
        ['OneWedding01.jpg','Wedding in Cesky Krumlov, 1995 1'],
        ['OneWedding02.jpg','Wedding in Cesky Krumlov, 1995 2'],
        ['OneWedding03.jpg','Wedding in Cesky Krumlov, 1995 - 3'],
        ['OneWedding04.jpg','Wedding in Cesky Krumlov, 1995 4'],
        ['OneWedding05.jpg','Wedding in Cesky Krumlov, 1995 - 5'],
        ['OneWedding06.jpg','Wedding in Cesky Krumlov, 1995 - 6'],
        ['OneWedding07.jpg','Wedding in Cesky Krumlov, 1995 7'],
        ['OneWedding08.jpg','Wedding in Cesky Krumlov, 1995 - 8'],
        ['OneWedding09.jpg','Wedding in Cesky Krumlov, 1995 - 9'],
        ['OneWedding10.jpg','Wedding in Cesky Krumlov, 1995 10'],
        ['OneWedding11.jpg','Wedding in Cesky Krumlov, 1995 - 11'],
        ['OneWedding12.jpg','Wedding in Cesky Krumlov, 1995 - 12'],
        ['OneWedding13.jpg','Wedding in Cesky Krumlov, 1995 13'],
        ['OneWedding14.jpg','Wedding in Cesky Krumlov, 1995 - 14']
      ],
      group: "People"
    },
    wiedenkennedy: {
      title: "WiedenKennedy",
      data: [
        ['WiedenKennedy01.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 01'],
        ['WiedenKennedy02.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 02'],
        ['WiedenKennedy03.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 03'],
        ['WiedenKennedy04.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 04'],
        ['WiedenKennedy05.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 05'],
        ['WiedenKennedy06.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 06'],
        ['WiedenKennedy02.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 02'],
        ['WiedenKennedy03.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 03'],
        ['WiedenKennedy04.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 04'],
        ['WiedenKennedy05.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 05'],
        ['WiedenKennedy06.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 06'],
        ['WiedenKennedy07.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 07'],
        ['WiedenKennedy08.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 08'],
        ['WiedenKennedy09.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 09'],
        ['WiedenKennedy10.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 10'],
        ['WiedenKennedy07.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 07'],
        ['WiedenKennedy08.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 08'],
        ['WiedenKennedy09.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 09'],
        ['WiedenKennedy10.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 10']
      ],
      group: "Architecture"
    },
    paintedhills: {
      title: "PaintedHills",
      data: [
        ['PaintedHills02.jpg','PaintedHills, OR, 2015 - 2'],
        ['PaintedHills04.jpg','PaintedHills, OR, 2015 - 4'],
        ['PaintedHills03.jpg','PaintedHills, OR, 2015 - 3'],
        ['PaintedHills05.jpg','PaintedHills, OR, 2015 - 5'],
        ['PaintedHills06.jpg','PaintedHills, OR, 2015 - 6'],
        ['PaintedHills17.jpg','PaintedHills, OR, 2015 - 17'],
        ['PaintedHills15.jpg','PaintedHills, OR, 2015 - 15'],
        ['PaintedHills13.jpg','PaintedHills, OR, 2015 - 13'],
        ['PaintedHills18.jpg','PaintedHills, OR, 2015 - 18'],
        ['PaintedHills11.jpg','PaintedHills, OR, 2015 - 11'],
        ['PaintedHills20.jpg','PaintedHills, OR, 2015 - 20'],
        ['PaintedHills10.jpg','PaintedHills, OR, 2015 - 10'],
        ['PaintedHills08.jpg','PaintedHills, OR, 2015 - 8'],
        ['PaintedHills21.jpg','PaintedHills, OR, 2015 - 21'],
        ['PaintedHills12.jpg','PaintedHills, OR, 2015 - 12']
      ],
      group: "Travel"
    },
    berlin: {
      title: "Berlin",
      data: [
        ['Berlin03.jpg','Berlin Brandenburg Gate 2014 - 03'],
        ['Berlin01.jpg','Berlin Mitte: Unter Den Linden 2014 - 01'],
        ['Berlin02.jpg','Berlin Mitte: Unter Den Linden 2014 - 02'],
        ['Berlin07.jpg','Berlin, Cathedral Church 2014 - 07'],
        ['Berlin06.jpg','Berlin Kreuzberg 2014 - 06'],
        ['Berlin04.jpg','Berlin Kreuzberg 2014 - 04'],
        ['Berlin09.jpg','Berlin 09'],
        ['Berlin05.jpg','Berlin Kreuzberg 2014 - 05'],
        ['Berlin10.jpg','Berlin 10'],
        ['Berlin20.jpg','Berlin 20'],
        ['Berlin23.jpg','Berlin 23'],
        ['Berlin24.jpg','Berlin 24'],
        ['Berlin22.jpg','Berlin 22'],
        ['Berlin21.jpg','Berlin 21'],
        ['Berlin08.jpg','Berlin 08'],
        ['Berlin11.jpg','Berlin: Holocaust Memorial 2014 - 11'],
        ['Berlin12.jpg','Berlin: Holocaust Memorial 2014 - 12'],
        ['Berlin13.jpg','Berlin: Holocaust Memorial 2014 - 13'],
        ['Berlin14.jpg','Berlin: Wall Memorial 2014 - 14'],
        ['Berlin15.jpg','Berlin: Wall Memorial 2014 - 15'],
        ['Berlin16.jpg','Berlin: Wall Memorial 2014 - 16'],
        ['Berlin17.jpg','Berlin: Wall Memorial 2014 - 17'],
        ['Berlin18.jpg','Berlin: Wall Memorial 2014 - 18'],
        ['Berlin19.jpg','Berlin: Wall Memorial 2014 - 19']
      ],
      group: "Travel"
    },
    berlinwallart: {
      title: "BerlinWallArt",
      data: [
        ['BerlinWallArt01.jpg','Berlin Hackersche Hoefe: Wall-Art 2014 - 01'],
        ['BerlinWallArt11.jpg','Berlin Kreuzberg: Wall-Art 2014 - 11'],
        ['BerlinWallArt10.jpg','Berlin Kreuzberg: Wall-Art 2014 - 10'],
        ['BerlinWallArt13.jpg','Berlin Kreuzberg: Wall-Art 2014 - 13'],
        ['BerlinWallArt14.jpg','Berlin Kreuzberg: Posters 2014 - 14'],
        ['BerlinWallArt15.jpg','Berlin Kreuzberg: Posters 2014 - 15'],
        ['BerlinWallArt16.jpg','Berlin Kreuzberg: Posters 2014 - 16'],
        ['BerlinWallArt09.jpg','Berlin Kreuzberg: Posters 2014 - 09'],
        ['BerlinWallArt02.jpg','Berlin: Wall-Art 2014 - 02'],
        ['BerlinWallArt03.jpg','Berlin: Wall-Art 2014 - 03'],
        ['BerlinWallArt05.jpg','Berlin: Wall-Art 2014 - 05'],
        ['BerlinWallArt08.jpg','Berlin: Wall-Art 2014 - 08'],
        ['BerlinWallArt26.jpg','Berlin: East Side Gallery 2014 - 26'],
        ['BerlinWallArt24.jpg','Berlin: East Side Gallery 2014 - 24'],
        ['BerlinWallArt23.jpg','Berlin: East Side Gallery 2014 - 23'],
        ['BerlinWallArt18.jpg','Berlin: East Side Gallery 2014 - 18'],
        ['BerlinWallArt17.jpg','Berlin: East Side Gallery 2014 - 17'],
        ['BerlinWallArt21.jpg','Berlin: East Side Gallery 2014 - 21'],
        ['BerlinWallArt19.jpg','Berlin: East Side Gallery 2014 - 19'],
        ['BerlinWallArt20.jpg','Berlin: East Side Gallery 2014 - 20'],
        ['BerlinWallArt22.jpg','Berlin: East Side Gallery 2014 - 22'],
        ['BerlinWallArt25.jpg','Berlin: East Side Gallery 2014 - 25']
      ],
      group: "Travel"
    }
  }

	// START-UP //

	setTimeout( () => { 							      // start-up: go to Home page
		_Indx.fnRegisterMenuEvents();
		_Indx.fnBuildPage($.pages.home);

    // Update this history event so that the state object contains the data
    // for the homepage.
    history.replaceState($.pages.home, $.pages.home.title, "");

    $('#year').text(new Date().getFullYear());
	},20 );

	// EVENTS //

	(function (_Indx, $, undefined) {        // BEGIN: Namespace for code on the index.htm page //

  	// register menu-click events
  	_Indx.fnRegisterMenuEvents = () => {
			$('.menu').click( function (e) {
				let menuId = e.currentTarget.id;

				if (menuId.length > 3) {
					let selectedPage = menuId.substring(3,e.currentTarget.id.length).replace("Footer","Home");

					if (_Indx.fnResetPage($.pages[selectedPage.toLowerCase()])) {
  					if (selectedPage === 'InfoAndContact') {
				    	$('#cmdInfoAndContact').addClass('liMenuSel');
							setTimeout( function () { $('#divInfoAndContact').slideDown(300); },300 );
  					} else if (selectedPage === 'Home' || selectedPage === 'Footer') {
				    	$('#cmdHome').addClass('liMenuSel');
							setTimeout( function () {
                $('#divNavGallery').children().slideDown(300);
              },300 );
  					} else {
  						setTimeout( function () { $('#divGallery').slideDown(300); },300 );
              setTimeout( function () {
                let page = $.pages[selectedPage.toLowerCase()];
                _Indx.fnBuildPage(page);
                history.pushState(page, page.title);
              },600 );
  					}
  				}
        }
			});

			$('.mobileMenu').click( function (e) {
				let menuId = e.currentTarget.id;

				if (menuId.length > 9) {
					let selectedPage = menuId.substring(9,e.currentTarget.id.length);

					if (_Indx.fnResetPage($.pages[selectedPage.toLowerCase()])) {
  					if (selectedPage === 'InfoAndContact') {
				    	$('#cmdInfoAndContact').addClass('liMenuSel');
							setTimeout( function () { $('#divInfoAndContact').slideDown(300); },300 );
  					} else if (selectedPage === 'Home') {
				    	$('#cmdHome').addClass('liMenuSel');
							setTimeout( function () {
                $('#divNavGallery').children().slideDown(300);
              },300 );
  					} else {
              if($('#mobileNav').is(':visible')) {
                $.showHome = false;
                $('.menuUpIcon').trigger('click');
              }
  						setTimeout( function () { $('#divGallery').slideDown(300); },300 );
              setTimeout( function () {
                let page = $.pages[selectedPage.toLowerCase()];
                _Indx.fnBuildPage(page);
                history.pushState(page, page.title);
              },600 );
  					}
  				}
        }
			});

      // show / hide the mobile menu
      $('#menuIcon').click( function (e) {
        $('#menuIcon').hide(300);
        $('#menuIconUp').show(300);
        setTimeout( function () {
          $.currentPage = "MobileNav";
          $('#mobileNav').slideDown(800);

          // hide or remove other page content
           if ($('#divInfoAndContact').is(':visible')) {
             $('#divInfoAndContact').slideUp(300);
           }
           if($('#divNavGallery').is(':visible')){
             $('#divNavGallery').children().slideUp(300);
           }
      		 // remove currently selected carousel - if any
      		 $('#divGallery').slideUp(300).empty();
        },300 );
      });
      $('.menuUpIcon').click( function (e) {
        if($.showHome) {
          $('#cmdHome').trigger('click');
        }

        $('#mobileNav').slideUp(800);
        setTimeout( function () {
          $('#menuIconUp').hide(300);
          $('#menuIcon').show(300);
          $.showHome = true;
        },800 );
      });
		};

  	// register image-click events (Home Page: for opening a particular gallery)
    _Indx.fnRegisterNavCarouselEvents = () => {
    	$('img.imgLink').unbind('dblclick');

    	$('img.imgLink').dblclick( function (e) {
  			let selectedPage = e.currentTarget.id;

        if (_Indx.fnResetPage($.pages[selectedPage.toLowerCase()])) {
					setTimeout( function () { $('#divGallery').slideDown(300); },300 );
          setTimeout( function () {
            let page = $.pages[selectedPage.toLowerCase()];
            _Indx.fnBuildPage(page);
            history.pushState(page, page.title);
          },600 );
				}
			});
		};

    // Update the page content when the popstate event is called.
    window.addEventListener('popstate', function(event) {
      let page = event.state;
      if(page){
        $('#cmd' + page.title).trigger('click');
      }
    });

		// jQuery widgets //

		_Indx.fnInitNavCarousel = () => {								// init navigation owl carousel on the home page
      $('#navCarousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          navSpeed: 500,
          dotsSpeed: 500,
          slideBy: 'page',
          responsive:{
              0:{
                  items:1
              },
              500:{
                  items:2
              },
              1200:{
                  items:3
              },
              1600:{
                  items:4
              },
              2000:{
                  items:5
              }
          }
      })
		};

		_Indx.fnInitGalleryCarousel = () => {								// init gallery carousel
      $('#galleryCarousel').owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          nav: true,
          navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          navSpeed: 800,
          dotsSpeed: 800,
  	  		stopOnHover : true,
  		    lazyLoad : true,
          slideBy: 'page',
          responsive:{
              0:{
                  items:1
              },
              750:{
                  items:2
              },
              2000:{
                  items:3
              }
          }
      })
		};

    setTimeout( () => {
      $(window).on('resize', _.debounce(_Indx.fnVerifyMobileNav, 150));
    },20 )

	 // FUNCTIONS //

   _Indx.fnVerifyMobileNav = () => {
     if($('#mobileNav').is(':visible')) {
       $.showHome = false;
       $('.menuUpIcon').trigger('click');
     }
   }

	 // prepare page to load new content
	 _Indx.fnResetPage = (page) => {
		 if(page.title === $.currentPage) {
			 return false; // current selection is already loaded: don't do anything
		 }

     if ($('#divInfoAndContact').is(':visible')) {
       $('#divInfoAndContact').slideUp(300);
     }
     if($('#divNavGallery').is(':visible')){
       $('#divNavGallery').children().slideUp(300);
     }
     if($('#mobileNav').is(':visible')){
       $.showHome = false;
       $('.menuUpIcon').trigger('click');
     }
		 // remove currently selected carousel - if any
		 $('#divGallery').slideUp(300).empty();
		 // reset all links and menu items
		 $('.liMenu').removeClass('liMenuSel');
		 $('.dropbtn').removeClass('menuSel');
		 // set new page
		 $.currentPage = page.title;

		 return true;
	 };

   // if a new page is selected, load that page, create html for all sections
   _Indx.fnBuildPage = (page) => {
     if (page) {
      document.title = page.title;

       if(page.title == "Home") {
         $('#divNavGallery').prepend(_Indx.fnGetNavCarousel());
   			 setTimeout( () => {
   				 _Indx.fnInitNavCarousel();
   				 _Indx.fnRegisterNavCarouselEvents();
   				 $('#divNavGallery').children().slideDown(300);
   			 },20 )
       } else {
         $('#divGallery').prepend(_Indx.fnGetCarousel(page));
  			 setTimeout( () => {
  				 _Indx.fnInitGalleryCarousel();
  				 $('#divGallery').children().slideDown(300);
  			  },20 );
        };
        // Create a new history item. Fetch the page data using the URL in the link.
        let pageURL = page.title + ".html";
      }
 		};

	  // get the nav carousel for the home page ; add events
		_Indx.fnGetNavCarousel = () => {
			let navGallery = '<div id="divNavCarousel" class="currGallery"><div id="navCarousel" class="owl-carousel owl-theme">';
			_Indx.fnSetUpMenues($.pages.home);

			$.each( $.pages.home.data, function ( index, value ) {	       // create html for carousel section
	  		if(value.length == 2)															     // image name [0], image alt [1]
			  	navGallery += '<div class="item"><img class="lazyOwl" src="images/Home/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
	  		else if(value.length == 3 && value[2].length > 0)		  // image name [0], image alt [1], image link-to [2]
	  			navGallery += '<div class="item"><img id="' + value[2] + '" class="lazyOwl imgLink hoverPointer" src="images/' + value[2] + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
			});
			navGallery += '</div></div>';

			return navGallery;
	  };

	  // get data for carousel and create the html for this carousel from data ; add events - if any
		_Indx.fnGetCarousel = (page) => {
			let gallery = '<div id="divCarousel' + page.title + '" class="currGallery"><div id="galleryCarousel" class="owl-carousel owl-theme">';
			_Indx.fnSetUpMenues(page);

			$.each( page.data, function ( index, value ) {	       // create html for carousel section
	  		if(value.length == 2)															     // image name [0], image alt [1]
			  	gallery += '<div class="item"><img class="lazyOwl" src="images/' + page.title + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
	  		else if(value.length == 3 && value[2].length > 0)		  // image name [0], image alt [1], image link-to [2]
	  			gallery += '<div class="item"><img id="' + value[2] + '" class="lazyOwl imgLink hoverPointer" src="images/' + value[2] + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
			});
			gallery += '</div></div>';

			return gallery;
	  };

	  // highlight main menu item (top level) --> currently selected ; galleryTypes: "owl", "olOwl"
		_Indx.fnSetUpMenues = (page) => {
			//apply menu highlighting
			switch (page.title) {
		    case 'home':
		    	$('.home').addClass('liMenuSel');
	        sData = $.aHome;
	        break;
	        break;
      }

      switch (page.group) {
		    case 'Portfolios':  									     // Portfolios
		    	$('#menuPortfolios').addClass('menuSel');
	        break;
		    case 'People':  									         // People & Portraits
		    	$('#menuPeople').addClass('menuSel');
	        break;
		    case 'Architecture':  									   // Architecture
		    	$('#menuArchitecture').addClass('menuSel');
	        break;
		    case 'Travel':                       // Travel
		    	$('#menuTravel').addClass('menuSel');
	        break;
		  }
	  };

	} (window._Indx = window._Indx || {}, jQuery)); // END: Namespace for code on the index.htm page

}); // END: $(document).ready(function()
