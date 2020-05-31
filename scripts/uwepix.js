// uweschneider.com:	javascript for index.html
// USch 07-01-2018

$(document).ready(function() {

	// GLOBALS //

  $.currentPage = undefined;							// currently selected main section/gallery
  $.showHome = true;
  $.isHistory = false;
  $.isNavDrag = false;
  $.isLargeScreen = false;
  $.galleryHasLargeImages = false;
  $.isOverlayContentClick = false;
  $.baseUrl = "";

	// START-UP //

  let url = window.location.href;

	setTimeout( () => { 							      // start-up: go to Home page
		_Indx.fnRegisterMenuEvents();
    _Indx.fnRegisterNavGallery();

    $.isLargeScreen = _Indx.fnIsLargeScreen();

    let page = _Indx.fnGetStartUpPage(url);
    $.currentPage = page.title;
		_Indx.fnLoadPage(page);

    history.replaceState(page, page.title, $.baseUrl);

    $('#year').text(new Date().getFullYear());
	},20 );

	(function (_Indx, $, undefined) {        // BEGIN: Namespace for code on the index.htm page //

	  // EVENTS //

  	// register menu-click events
  	_Indx.fnRegisterMenuEvents = () => {
      $('.menu').off('click');

			$('.menu').on('click', function (e) {
				let menuId = e.currentTarget.id;

				if (menuId.length > 3) {
					let selectedPageTitle = menuId.substring(3,e.currentTarget.id.length).replace("Footer","Home");
          let selectedPage = $.pages[selectedPageTitle.replace(/ /g, "").toLowerCase()];

					if (_Indx.fnResetPage(selectedPage, false)) {
  					if (selectedPageTitle === 'InfoAndContact') {
              _Indx.fnLoadInfoAndContact($.pages['infoandcontact']);
  					} else if (selectedPageTitle === 'Home' || selectedPageTitle === 'Footer') {
              _Indx.fnLoadHomePage();
  					} else {
              _Indx.fnStartLoadingPage(selectedPageTitle);
  					}
  				}
        }
			});

      $('#divNewsContainer').on('click', function (e) {
        if (!($.currentPage === 'News'))
        {
          let page = $.pages['news'];
  
            if (_Indx.fnResetPage(page, false)) {
              _Indx.fnLoadNews(page);
            }
        }
      });

      _Indx.fnRegisterNavGallery = () => {
        $('#divNavGallery').prepend(_Indx.fnGetNavCarousel());
        _Indx.fnInitNavCarousel();
        _Indx.fnRegisterNavCarouselEvents();
      };

    	// register image-click events (Home Page: for opening a particular gallery)
      _Indx.fnRegisterNavCarouselEvents = () => {
      	$('img.imgLink').off('mousedown');
        $('img.imgLink').off('mouseup');

      	$('img.imgLink').on('mousedown', function (e) {
    			let selectedPageTitle = e.currentTarget.id;
          $.isNavDrag = false;
  			});

      	$('img.imgLink').on('mouseup', function (e) {
    			let selectedPageTitle = e.currentTarget.id;

          if(!$.isNavDrag) {
            if (_Indx.fnResetPage($.pages[selectedPageTitle.replace(/ /g, "").replace("n+K","nandk").toLowerCase()], false)) {
              _Indx.fnStartLoadingPage(selectedPageTitle);
    				}
          } else {
            $.isNavDrag = false;
          }
  			});
  		};

      $('.mobileMenu').off('click');

			$('.mobileMenu').on('click', function (e) {
				let menuId = e.currentTarget.id;

				if (menuId.length > 9) {
					let selectedPageTitle = menuId.substring(9,e.currentTarget.id.length);
          let selectedPage = $.pages[selectedPageTitle.replace(/ /g, "").toLowerCase()];

					if (_Indx.fnResetPage(selectedPage, false)) {
  					if (selectedPageTitle === 'InfoAndContact') {
              _Indx.fnLoadInfoAndContact($.pages['infoandcontact']);
  					} else if (selectedPageTitle === 'Home') {
              _Indx.fnLoadHomePage();
  					} else {
              if($('#mobileNav').is(':visible')) {
                $.showHome = false;
                $('.menuUpIcon').trigger('click');
              }
              _Indx.fnStartLoadingPage(selectedPageTitle);
  					}
  				}
        }
			});

      // show / hide the mobile menu
      $('#menuIcon').off('click');

      $('#menuIcon').on('click', function (e) {
        $('#menuIcon').hide(300);
        $('#menuIconUp').show(300);
        setTimeout( () => {
          $.currentPage = "MobileNav";
          $('#mobileNav').slideDown(800);

          // hide or remove other page content
           if ($('#divInfoAndContact').is(':visible')) {
             $('#divInfoAndContact').slideUp(300);
           }
           if ($('#divNewsPageContainer').is(':visible')) {
             $('#divNewsPageContainer').slideUp(300);
           }
           if($('#divNavGallery').is(':visible')){
             $('#divNavGallery').children().slideUp(300);
           }
      		 // remove currently selected carousel - if any
      		 $('#divGallery').slideUp(300).empty();
        },300 );
      });

      $('.menuUpIcon').off('click');

      $('.menuUpIcon').on('click', function (e) {
        if($.showHome) {
          _Indx.fnLoadHomePage();
        }

        $('#mobileNav').slideUp(800);
        setTimeout( () => {
          $('#menuIconUp').hide(300);
          $('#menuIcon').show(300);
          $.showHome = true;
        },800 );
      });
		};

    // Update the page content when the popstate event is called.
    window.addEventListener('popstate', function(event) {
      let page = event.state;
      if(page){
        $.isHistory = true;

        if($('#overlay').is(':visible')) {
          _Indx.fnCloseOverlay();
        }

				if (_Indx.fnResetPage(page, false)) {
					if (page.title.replace(/ /g, "") === 'InfoAndContact') {
			    	$('#cmdInfoAndContact').addClass('liMenuSel');
            document.title = "Info + Contact";
						setTimeout( () => {
              $('#divInfoAndContact').slideDown(300);
            },300 );
					} else if (page.title.replace(/ /g, "") === 'News') {
            document.title = "News";
						setTimeout( () => {
              $('#divNewsPageContainer').slideDown(300);
            },300 );
					} else if (page.title === 'Home' || page.title === 'Footer') {
            _Indx.fnLoadHomePage();
					} else {
            _Indx.fnStartLoadingPage(page.title.replace(/ /g, ""));
					}
				}
      }
    });

    // overlay EVENTS

    $('#overlayContent').on('click', function (e) {
      $.isOverlayContentClick = true;
    });

    $('#overlay').on('click', function (e) {
      if($.isOverlayContentClick) {
        $.isOverlayContentClick = false;
      } else {
        $.currentPage = "Home";
        page.title = "Home";
        _Indx.fnCloseOverlay();
      }
    });

    _Indx.fnInitCmdClose = () => {
      if ($('#closePng').length) {
        $('#closePng').off();
      }

      $('#closePng').on('click', function (e) {
        $.currentPage = "Home";
        page.title = "Home";
        _Indx.fnCloseOverlay();
      });
    }

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
              1000:{
                  items:3
              },
              1500:{
                  items:4
              },
              2000:{
                  items:5
              }
          },
          onDrag: _Indx.fnSetNavIsDrag
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
          500:{
              items:2
          },
          1000:{
              items:3
          },
          1500:{
              items:4
          },
          2000:{
              items:5
          }
        }
      })
		};

		_Indx.fnInitOverlayCarousel = () => {								// init overlay gallery carousel
      $('#overlay').fadeIn(500);

      $('#overlayCarousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navSpeed: 800,
        dotsSpeed: 800,
	  		stopOnHover : true,
		    lazyLoad : true,
        slideBy: 'page'
      })
		};

    setTimeout( () => {
      $(window).on('resize', _.debounce(_Indx.fnAdjustToScreenSizeChange, 150));
    },20 );

	  // FUNCTIONS //

    _Indx.fnAdjustToScreenSizeChange = () => {
      _Indx.fnVerifyMobileNav();
      _Indx.fnVerifyIsLargeScreen();
      $.isLargeScreen = _Indx.fnIsLargeScreen();
    }

    _Indx.fnIsLargeScreen = () => {
      return (window.innerHeight >= 590 && window.innerWidth >= 920);
    }

    _Indx.fnVerifyIsLargeScreen = () => {
      if ($.galleryHasLargeImages && $.isLargeScreen != _Indx.fnIsLargeScreen()) {
        if ($.isLargeScreen) { // change from large screen to small screen
           _Indx.fnCloseOverlay();
        }
        $.isHistory = true;
        let selectedPage = $.pages[$.currentPage.replace(/ /g, "").toLowerCase()];
				if (_Indx.fnResetPage(selectedPage, true)) {
					if ($.currentPage === 'InfoAndContact') {
            _Indx.fnLoadInfoAndContact($.pages['infoandcontact']);
					} else if ($.currentPage === 'News') {
            _Indx.fnLoadNews($.pages['news']);
					} else if ($.currentPage === 'Home' || $.currentPage === 'Footer') {
            _Indx.fnLoadHomePage();
					} else {
            _Indx.fnStartLoadingPage($.currentPage);
					}
        }
      }
    }

    _Indx.fnCloseOverlay = () => {
     _Indx.fnLoadPage(page);
     $('#overlay').fadeOut(500);
     setTimeout( () => {
       $('#overlayContent').empty();
       $('#overlayContent').append('<img id="closePng" src = "images/Close.png" />');
     }, 300);
   }

   _Indx.fnSetNavIsDrag = () => {
     $.isNavDrag = true;
   }

   _Indx.fnGetStartUpPage = (url) => {
     let urlParts = url.split('?');
     let page = $.pages.home;

     if (urlParts.length === 2) {
       page = $.pages[urlParts[1].toLowerCase()];
       history.pushState(page, page.title);
     }
     // Update this history event so that the state object contains the data
     // for the homepage.
     if (urlParts.length > 0) {
       $.baseUrl = urlParts[0];
     }
     return page;
   };

   _Indx.fnVerifyMobileNav = () => {
     if($('#mobileNav').is(':visible')) {
       $.showHome = false;
       $('.menuUpIcon').trigger('click');
     }
   };

	 // prepare page to load new content
	 _Indx.fnResetPage = (page, forceReset) => {
		 if(!forceReset && page.title === $.currentPage) {
			 return false; // current selection is already loaded: don't do anything  
		 }

     if ($('#divInfoAndContact').is(':visible')) {
       $('#divInfoAndContact').slideUp(300);
     }
     if ($('#divNewsPageContainer').is(':visible')) {
       $('#divNewsPageContainer').slideUp(300);
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
		 // set current page to new page
		 $.currentPage = page.title;

		 return true;
	 };

   // load newly selected page
   _Indx.fnStartLoadingPage = (selectedPageTitle) => {
     setTimeout( function () { $('#divGallery').slideDown(300); },300 );
     setTimeout( function () {
       let selectedPage = $.pages[selectedPageTitle.replace(/ /g, "").replace("n+K","nandk").toLowerCase()];
       _Indx.fnLoadPage(selectedPage);
       if (!$.isHistory) {
         history.pushState(selectedPage, selectedPage.title);
       }
       $.isHistory = false;
     },600 );
   };

   // load newly selected page
   _Indx.fnLoadPage = (page) => {
     if (page) {
       document.title = page.title;

       if(page.title === "Home") {
   		   $('#divNavGallery').children().slideDown(300);
       } else {
         $('#divNavGallery').children().slideUp();
         _Indx.fnBuildPage(page);
       }
     }
   };

    _Indx.fnBuildPage = (page) => {
      let gallery = _Indx.fnGetCarousel(page);

      // add gallery wrapper depending on type
      if($.galleryHasLargeImages && _Indx.fnIsLargeScreen()){
        gallery = '<div id="divOverlayCarousel_ol_' + page.title.replace(/ /g, "") + '" class="currGallery"><div id="overlayCarousel" class="owl-carousel owl-theme">' + gallery + '</div></div>';
        $('#overlayContent').prepend(gallery);
        setTimeout( () => {
          _Indx.fnInitOverlayCarousel();
          _Indx.fnInitCmdClose();
        },20 );
      } else {
        gallery = '<div id="divCarousel' + page.title.replace(/ /g, "") + '" class="currGallery"><div id="galleryCarousel" class="owl-carousel owl-theme">' + gallery + '</div></div>';
        $('#divGallery').prepend(gallery);
        setTimeout( () => {
  			     _Indx.fnInitGalleryCarousel();
             $('#divGallery').children().slideDown(300);
        },20 );
      }
		};

    _Indx.fnLoadHomePage = () => {
      $('#cmdHome').addClass('liMenuSel');
      setTimeout( () => {
        document.title = "Home";
        $('#divNavGallery').children().slideDown(300);
        if (!$.isHistory) {
          let page = $.pages.home;
          history.pushState(page, page.title);
        }
        $.isHistory = false;
      },300 );
    };

    _Indx.fnLoadInfoAndContact = (page) => {
      $('#cmdInfoAndContact').addClass('liMenuSel');
      setTimeout( () => {
        document.title = "Info + Contact";
        $('#divInfoAndContact').slideDown(300);
        if (!$.isHistory) {
          history.pushState(page, page.title);
        }
        $.isHistory = false;
      },300 );
    };

    _Indx.fnLoadNews = (page) => {
      setTimeout( () => {
        document.title = "News";
        $('#divNewsPageContainer').slideDown(300);
        if (!$.isHistory) {
          history.pushState(page, page.title);
        }
        $.isHistory = false;
      },300 );
    };

	  // get the nav carousel for the home page ; add events
		_Indx.fnGetNavCarousel = () => {
      $.galleryHasLargeImages = false;
			let navGallery = '<div id="divNavCarousel" class="currGallery"><div id="navCarousel" class="owl-carousel owl-theme">';
			_Indx.fnSetUpMenues($.pages.home);

  		$.each( $.pages.home.data, function ( index, value ) {	  // create html for carousel section
	  		// image name [0], image alt [1], image link-to [2]
	  	    navGallery += '<div class="item"><img id="' + value[2] + '" class="lazyOwl imgLink hoverPointer" src="images/' + value[2].replace("+","") + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
			});
			navGallery += '</div></div>';

			return navGallery;
	  };

	  // get data for the carousel or the overlay carousel and create the html for this carousel from data
		_Indx.fnGetCarousel = (page) => {
			let gallery = '';
			_Indx.fnSetUpMenues(page);

			$.each( page.data, function ( index, value ) {           // create html for carousel section
	  		if(value.length === 2) {														   // image name [0], image alt [1]
          if (index === 0) $.galleryHasLargeImages = false;
			  	gallery += '<div class="item"><img class="lazyOwl" src="images/' + page.title.replace(/ /g, "").replace("+", "") + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
	  		} else if(value.length === 3 && value[2].length > 0) { // image name [0], image alt [1], image link-to [2]
          if (index === 0) $.galleryHasLargeImages = true;
	  			gallery += '<div class="item"><img class="lazyOwl" src="images/' + page.title.replace(/ /g, "").replace("+", "") + '/' + value[2] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
        }
			});

			return gallery;
	  };

	  // highlight main menu item (top level) --> currently selected ; galleryTypes: "owl", "olOwl"
		_Indx.fnSetUpMenues = (page) => {
			//apply menu highlighting
			if (page.title === "Home") {
	    	$('.home').addClass('liMenuSel');
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

  $.pages = {
    home: {
      title: "Home",
      data: [
        ['NL_35_home.jpg','Click to open the &quot;Nightlight I&quot; gallery','NightlightI'],
        ['NL_43_home.jpg','Click to open the &quot;Nightlight II&quot; gallery','NightlightII'],
        ['NL_22_home.jpg','Click to open the &quot;Nightlight III&quot; gallery','NightlightIII'],
        ['WinterInPdx_34.jpg','Click to open the &quot;A Winternight in NE Portland&quot; gallery','WinternightInNEPortland'],
        ['Abstracts_04home.jpg','Click to open the &quot;Abstracts on Walls & Utility Poles&quot; gallery','Abstracts'],
        ['Por102home.jpg','Click to open the &quot;Portraits I&quot; gallery','EarlyPortraits'],
        ['Por203home.jpg','Click to open the &quot;Portraits II&quot; gallery','Portraits'],
        ['MovieDirectors09home.jpg','Click to open the &quot;Movie Directors&quot; gallery','MovieDirectors'],
        ['CoffeePlant09home.jpg','Click to open the &quot;Coffee Plant&quot; gallery','CoffeePlant'],
        ['OneWedding05home.jpg','Click to open the &quot;Wedding&quot; gallery','OneWedding'],
        ['WiedenKennedy06home.jpg','Click to open the &quot;Wieden+Kennedy Building&quot; gallery','Wieden+Kennedy'],
        ['PaintedHills02home.jpg','Click to open the &quot;Painted Hills&quot; gallery','PaintedHills'],
        ['WallArtBerlin01home.jpg','Click to open the &quot;Wall Art, Berlin&quot; gallery','WallArtBerlin'],
        ['France_I_home.jpg','Click to open the &quot;France I&quot; gallery','FranceI'],
        ['France_II_home.jpg','Click to open the &quot;France II&quot; gallery','FranceII'],
        ['France_III_home.jpg','Click to open the &quot;France III&quot; gallery','FranceIII'],
        ['France_IV_home.jpg','Click to open the &quot;France IV&quot; gallery','FranceIV']
      ],
      group: ""
    },
    infoandcontact: {
      title: "Info And Contact",
      data: [],
      group: ""
    },
    news: {
      title: "News",
      data: [],
      group: ""
    },
    nightlighti: {
      title: "Nightlight I",
      data: [
        ['01_NL.jpg','Prague, Czech Republic, 1995','ol_01_NL.jpg'],
        ['02_NL.jpg','Krakow, Poland, 1993','ol_02_NL.jpg'],
        ['03_NL.jpg','Fecamp, France, 1992','ol_03_NL.jpg'],
        ['04_NL.jpg','Zilina, Slovakia 1997','ol_04_NL.jpg'],
        ['05_NL.jpg','Krakow, Poland, 1993','ol_05_NL.jpg'],
        ['06_NL.jpg','Zilina, Slovakia, 1997','ol_06_NL.jpg'],
        ['07_NL.jpg','Lisieux, France, 1992','ol_07_NL.jpg'],
        ['08_NL.jpg','Cambridge MA, USA, 1994','ol_08_NL.jpg'],
        ['09_NL.jpg','Krakow, Poland, 1993','ol_09_NL.jpg'],
        ['10_NL.jpg','Krakow, Poland, 1994','ol_10_NL.jpg'],
        ['11_NL.jpg','Zilina, Slovakia, 1997','ol_11_NL.jpg'],
        ['12_NL.jpg','Thessaloniki, Greece 1982','ol_12_NL.jpg'],
        ['13_NL.jpg','Prague, Czech Republic, 1994','ol_13_NL.jpg'],
        ['14_NL.jpg','Krakow, Poland, 1993','ol_14_NL.jpg'],
        ['15_NL.jpg','Krakow, Poland, 1993','ol_15_NL.jpg'],
        ['16_NL.jpg','Prague, Czech Republic, 1994','ol_16_NL.jpg']
      ],
      group: "Portfolios"
    },
    nightlightii: {
      title: "Nightlight II",
      data: [
        ['34_NL.jpg','Yugoslavia, 1982','ol_34_NL.jpg'],
        ['35_NL.jpg','Valencia, Spain, 1997','ol_35_NL.jpg'],
        ['36_NL.jpg','Prague, Czech Republic, 1995','ol_36_NL.jpg'],
        ['37_NL.jpg','Normandie, France, 1992','ol_37_NL.jpg'],
        ['38_NL.jpg','Saint-Gilles-Croix-de-Vie, France, 1992','ol_38_NL.jpg'],
        ['39_NL.jpg','Prague, Czech Republic, 1994','ol_39_NL.jpg'],
        ['40_NL.jpg','Saint-Gilles-Croix-de-Vie, France, 1992','ol_40_NL.jpg'],
        ['41_NL.jpg','Valencia, Spain 1997','ol_41_NL.jpg'],
        ['42_NL.jpg','Prague, Czech Republic 1996','ol_42_NL.jpg'],
        ['43_NL.jpg','Prague, Czech Republic 1996','ol_43_NL.jpg'],
        ['44_NL.jpg','Prague, Czech Republic 1996','ol_44_NL.jpg'],
        ['45_NL.jpg','Prague, Czech Republic 1996','ol_45_NL.jpg'],
        ['46_NL.jpg','Prague, Czech Republic 1995','ol_46_NL.jpg']
      ],
      group: "Portfolios"
    },
    nightlightiii: {
      title: "Nightlight III",
      data: [
        ['17_NL.jpg','Prague, Czech Republic, 1994','ol_17_NL.jpg'],
        ['18_NL.jpg','Cambridge MA, USA, 1994','ol_18_NL.jpg'],
        ['19_NL.jpg','Belfort, France, 2000','ol_19_NL.jpg'],
        ['20_NL.jpg','Prague, Czech Republic, 1994','ol_20_NL.jpg'],
        ['21_NL.jpg','Cambridge MA, USA, 1994','ol_21_NL.jpg'],
        ['22_NL.jpg','Prague, Czech Republic, 1995','ol_22_NL.jpg'],
        ['23_NL.jpg','Narbonne, France, 1991','ol_23_NL.jpg'],
        ['24_NL.jpg','Prague, Czech Republic, 1995','ol_24_NL.jpg'],
        ['25_NL.jpg','Cambridge MA, USA, 1994','ol_25_NL.jpg'],
        ['26_NL.jpg','Prague, Czech Republic, 1995','ol_26_NL.jpg'],
        ['27_NL.jpg','Zilina, Slovakia, 1997','ol_27_NL.jpg'],
        ['28_NL.jpg','Paris, France, 1991','ol_28_NL.jpg'],
        ['29_NL.jpg','Prague, Czech Republic, 1994','ol_29_NL.jpg'],
        ['30_NL.jpg','Lisieux, France, 1992','ol_30_NL.jpg'],
        ['31_NL.jpg','Prague, Czech Republic, 1995','ol_31_NL.jpg'],
        ['32_NL.jpg','Presov, Slovakia, 1993','ol_32_NL.jpg'],
        ['33_NL.jpg','Cambridge MA, USA, 1994','ol_33_NL.jpg']
      ],
      group: "Portfolios"
    },
    winternightinneportland: {
      title: "Winternight In NE Portland",
      data: [
        ['WinterInPdx_01.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_01.jpg'],
        ['WinterInPdx_35.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_35.jpg'],
        ['WinterInPdx_02.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_02.jpg'],
        ['WinterInPdx_13.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_13.jpg'],
        ['WinterInPdx_04.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_04.jpg'],
        ['WinterInPdx_05.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_05.jpg'],
        ['WinterInPdx_06.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_06.jpg'],
        ['WinterInPdx_11.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_11.jpg'],
        ['WinterInPdx_34.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_34.jpg'],
        ['WinterInPdx_07.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_07.jpg'],
        ['WinterInPdx_12.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_12.jpg'],
        ['WinterInPdx_15.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_15.jpg'],
        ['WinterInPdx_16.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_16.jpg'],
        ['WinterInPdx_32.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_32.jpg'],
        ['WinterInPdx_17.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_17.jpg'],
        ['WinterInPdx_14.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_14.jpg'],
        ['WinterInPdx_19.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_19.jpg'],
        ['WinterInPdx_18.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_18.jpg'],
        ['WinterInPdx_31.jpg','A Winternight in NE Portland, Dec. 28th, 2008','ol_WinterInPdx_31.jpg']
      ],
      group: "Portfolios"
    },
    abstracts: {
      title: "Abstracts",
      data: [
        ['Abstracts_01.jpg','Abstracts on Walls & Utility Poles - 1','ol_Abstracts_01.jpg'],
        ['Abstracts_02.jpg','Abstracts on Walls & Utility Poles - 2','ol_Abstracts_02.jpg'],
        ['Abstracts_10.jpg','Abstracts on Walls & Utility Poles - 10','ol_Abstracts_10.jpg'],
        ['Abstracts_09.jpg','Abstracts on Walls & Utility Poles - 9','ol_Abstracts_09.jpg'],
        ['Abstracts_03.jpg','Abstracts on Walls & Utility Poles - 3','ol_Abstracts_03.jpg'],
        ['Abstracts_06.jpg','Abstracts on Walls & Utility Poles - 6','ol_Abstracts_06.jpg'],
        ['Abstracts_07.jpg','Abstracts on Walls & Utility Poles - 7','ol_Abstracts_07.jpg'],
        ['Abstracts_08.jpg','Abstracts on Walls & Utility Poles - 8','ol_Abstracts_08.jpg'],
        ['Abstracts_04.jpg','Abstracts on Walls & Utility Poles - 4','ol_Abstracts_04.jpg'],
        ['Abstracts_05.jpg','Abstracts on Walls & Utility Poles - 5','ol_Abstracts_05.jpg'],
        ['Abstracts_12.jpg','Abstracts on Walls & Utility Poles - 12','ol_Abstracts_12.jpg'],
        ['Abstracts_11.jpg','Abstracts on Walls & Utility Poles - 11','ol_Abstracts_11.jpg']
      ],
      group: "Portfolios"
    },
    earlyportraits: {
      title: "Early Portraits",
      data: [
        ['Por112.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por101.jpg','Jacek, Munich, 1985'],
        ['Por102.jpg','Jan Biczycki, Actor & Acting Teacher, Munich, 1985'],
        ['Por103.jpg','Joerg, 1994'],
        ['Por104.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por105.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por106.jpg','Steffen Butz, Cartoonist & Illustrator, 1993'],
        ['Por108.jpg','Band, 1995'],
        ['Por107.jpg','Band, 1994'],
        ['Por110.jpg','Eva, Munich, 1986'],
        ['Por109.jpg','Band, 1995'],
        ['Por111.jpg','Daniel, 1992']
      ],
      group: "People"
    },
    portraits: {
      title: "Portraits",
      data: [
        ['Por201.jpg','Ricci','ol_Por201.jpg'],
        ['Por202.jpg','Heather','ol_Por202.jpg'],
        ['Por203.jpg','Adam','ol_Por203.jpg'],
        ['Por208.jpg','','ol_Por208.jpg'],
        ['Por205.jpg','Jasper','ol_Por205.jpg'],
        ['Por206.jpg','Joe','ol_Por206.jpg'],
        ['Por207.jpg','Juergen','ol_Por207.jpg'],
        ['Por204.jpg','Fiaker Driver, Vienna, 2008','ol_Por204.jpg']
      ],
      group: "People"
    },
    moviedirectors: {
      title: "Movie Directors",
      data: [
        ['MovieDirectors01.jpg','Andrew Dominik, Park City, UT 2001','ol_MovieDirectors_01.jpg'],
        ['MovieDirectors02.jpg','Jan Hrebejk, Park City, UT 2001','ol_MovieDirectors_02.jpg'],
        ['MovieDirectors03.jpg','Sandra Werneck, Park City, UT 2001','ol_MovieDirectors_03.jpg'],
        ['MovieDirectors04.jpg','Nabil Ayouch, Park City, UT 2001','ol_MovieDirectors_04.jpg'],
        ['MovieDirectors05.jpg','Kim Kiduk, Park City, UT 2001','ol_MovieDirectors_05.jpg'],
        ['MovieDirectors06.jpg','Laura Mana, Park City, UT 2001','ol_MovieDirectors_06.jpg'],
        ['MovieDirectors07.jpg','Jean-Pierre Sinapi, Park City, UT 2001','ol_MovieDirectors_07.jpg'],
        ['MovieDirectors08.jpg','Denis Villeneuve, Park City, UT 2001','ol_MovieDirectors_08.jpg'],
        ['MovieDirectors09.jpg','John Cameron Mitchell, Park City, UT 2001','ol_MovieDirectors_09.jpg'],
        ['MovieDirectors10.jpg','Jamie Thraves, Park City, UT 2001','ol_MovieDirectors_10.jpg'],
        ['MovieDirectors11.jpg','Lukas Moodysson, Park City, UT 2001','ol_MovieDirectors_11.jpg'],
        ['MovieDirectors12.jpg','Henrique Goldman, Park City, UT 2001','ol_MovieDirectors_12.jpg'],
        ['MovieDirectors13.jpg','Fridrik Thor Fridriksson, Park City, UT 2001','ol_MovieDirectors_13.jpg'],
        ['MovieDirectors14.jpg','Eduardo Winspeare, Park City, UT 2001','ol_MovieDirectors_14.jpg'],
        ['MovieDirectors15.jpg','Lorenza Manrique, Park City, UT 2001','ol_MovieDirectors_15.jpg'],
        ['MovieDirectors16.jpg','Bill Eagles, Park City, UT 2001','ol_MovieDirectors_16.jpg'],
        ['MovieDirectors17.jpg','Baltasar Kormakur, Park City, UT 2001','ol_MovieDirectors_17.jpg'],
        ['MovieDirectors18.jpg','Baltasar Kormakur, Park City, UT 2001','ol_MovieDirectors_18.jpg'],
        ['MovieDirectors19.jpg','Yoshiyasu Fujita, Park City, UT 2001','ol_MovieDirectors_19.jpg'],
        ['MovieDirectors20.jpg','Andrucha Waddington, Park City, UT 2001','ol_MovieDirectors_20.jpg'],
        ['MovieDirectors21.jpg','Barbet Schroeder, Park City, UT 2001','ol_MovieDirectors_21.jpg'],
        ['MovieDirectors22.jpg','Javier Corcuera, Park City, UT 2001','ol_MovieDirectors_22.jpg']
      ],
      group: "People"
    },
    coffeeplant: {
      title: "Coffee Plant",
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
      title: "One Wedding",
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
    wiedenandkennedy: {
      title: "Wieden+Kennedy",
      data: [
        ['WiedenKennedy01.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 01'],
        ['WiedenKennedy02.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 02'],
        ['WiedenKennedy03.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 03'],
        ['WiedenKennedy04.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 04'],
        ['WiedenKennedy05.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 05'],
        ['WiedenKennedy06.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 06'],
        ['WiedenKennedy07.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 07'],
        ['WiedenKennedy08.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 08'],
        ['WiedenKennedy09.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 09'],
        ['WiedenKennedy10.jpg','Wieden+Kennedy Building, Portland, OR 2000 - 10']
      ],
      group: "Architecture"
    },
    paintedhills: {
      title: "Painted Hills",
      data: [
        ['PaintedHills02.jpg','PaintedHills, OR, 2015 - 2','ol_PaintedHills_02.jpg'],
        ['PaintedHills04.jpg','PaintedHills, OR, 2015 - 4','ol_PaintedHills_04.jpg'],
        ['PaintedHills03.jpg','PaintedHills, OR, 2015 - 3','ol_PaintedHills_03.jpg'],
        ['PaintedHills05.jpg','PaintedHills, OR, 2015 - 5','ol_PaintedHills_05.jpg'],
        ['PaintedHills06.jpg','PaintedHills, OR, 2015 - 6','ol_PaintedHills_06.jpg'],
        ['PaintedHills17.jpg','PaintedHills, OR, 2015 - 17','ol_PaintedHills_17.jpg'],
        ['PaintedHills15.jpg','PaintedHills, OR, 2015 - 15','ol_PaintedHills_15.jpg'],
        ['PaintedHills13.jpg','PaintedHills, OR, 2015 - 13','ol_PaintedHills_13.jpg'],
        ['PaintedHills18.jpg','PaintedHills, OR, 2015 - 18','ol_PaintedHills_18.jpg'],
        ['PaintedHills11.jpg','PaintedHills, OR, 2015 - 11','ol_PaintedHills_11.jpg'],
        ['PaintedHills20.jpg','PaintedHills, OR, 2015 - 20','ol_PaintedHills_20.jpg'],
        ['PaintedHills10.jpg','PaintedHills, OR, 2015 - 10','ol_PaintedHills_10.jpg'],
        ['PaintedHills08.jpg','PaintedHills, OR, 2015 - 8','ol_PaintedHills_08.jpg'],
        ['PaintedHills21.jpg','PaintedHills, OR, 2015 - 21','ol_PaintedHills_21.jpg'],
        ['PaintedHills12.jpg','PaintedHills, OR, 2015 - 12','ol_PaintedHills_12.jpg']
      ],
      group: "Travel"
    },
    francei: {
      title: "France I",
      data: [
        ['France_101.jpg','Brittany, 1988','ol_France_101.jpg'],
        ['France_102.jpg','Savonnieres, Loire, 1987','ol_France_102.jpg'],
        ['France_103.jpg','Paris, Rodin Museum, 1991','ol_France_103.jpg'],
        ['France_104.jpg','Savonnieres, Loire, 1981','ol_France_104.jpg'],
        ['France_105.jpg','Strasbourg, 1987','ol_France_105.jpg'],
        ['France_106.jpg','Paris, 1991','ol_France_106.jpg'],
        ['France_107.jpg','Sete, 1991','ol_France_107.jpg'],
        ['France_108.jpg','La Rochelle, 1987','ol_France_108.jpg'],
        ['France_109.jpg','Grenoble, 1993','ol_France_109.jpg'],
        ['France_110.jpg','Normandie, 1993','ol_France_110.jpg'],
        ['France_111.jpg','Grenoble, 1993','ol_France_111.jpg'],
        ['France_112.jpg','Paris, Rodin Museum, 1991','ol_France_112.jpg'],
        ['France_113.jpg','Cognac, 1987','ol_France_113.jpg'],
        ['France_114.jpg','Narbonne, 1989','ol_France_114.jpg'],
        ['France_115.jpg','1990','ol_France_115.jpg']
      ],
      group: "Travel"
    },
    franceii: {
      title: "France II",
      data: [
        ['France_201.jpg','Douarnenez, Brittany, 1988','ol_France_201.jpg'],
        ['France_202.jpg','Loire, 1981','ol_France_202.jpg'],
        ['France_203.jpg','Brittany, 1988','ol_France_203.jpg'],
        ['France_204.jpg','Paris, 1995','ol_France_204.jpg'],
        ['France_205.jpg','Paris, 1996','ol_France_205.jpg'],
        ['France_206.jpg','Lisieux, Normandie, 1992','ol_France_206.jpg'],
        ['France_207.jpg','Paris, 1991','ol_France_207.jpg'],
        ['France_208.jpg','Strasbourg, 1987','ol_France_208.jpg'],
        ['France_209.jpg','Fecamp, Normandie, 1992','ol_France_209.jpg'],
        ['France_210.jpg','Strasbourg, 1987','ol_France_210.jpg'],
        ['France_211.jpg','Fecamp, Normandie, 1992','ol_France_211.jpg'],
        ['France_212.jpg','Limoges, 1987','ol_France_212.jpg'],
        ['France_213.jpg','Limoges, 1987','ol_France_213.jpg'],
        ['France_214.jpg','Nimes, 1991','ol_France_214.jpg']
      ],
      group: "Travel"
    },
    franceiii: {
      title: "France III",
      data: [
        ['France_301.jpg','Lunel, 1989','ol_France_301.jpg'],
        ['France_302.jpg','Narbonne, 1991','ol_France_302.jpg'],
        ['France_303.jpg','Montpellier, 1989','ol_France_303.jpg'],
        ['France_304.jpg','Montpellier, 1989','ol_France_304.jpg'],
        ['France_305.jpg','Lunel, 1989','ol_France_305.jpg'],
        ['France_306.jpg','Arles, 1989','ol_France_306.jpg'],
        ['France_307.jpg','Montpellier, 1989','ol_France_307.jpg'],
        ['France_308.jpg','Arles, 1989','ol_France_308.jpg'],
        ['France_309.jpg','1990','ol_France_309.jpg'],
        ['France_310.jpg','Montpellier, 1989','ol_France_310.jpg'],
        ['France_311.jpg','Montpellier, 1989','ol_France_311.jpg'],
        ['France_312.jpg','Nimes, 1991','ol_France_312.jpg'],
        ['France_313.jpg','Le Grau-Du-Roi, 1991','ol_France_313.jpg'],
        ['France_314.jpg','Le Grau-Du-Roi, 1991','ol_France_314.jpg'],
        ['France_315.jpg','Le Grau-Du-Roi, 1991','ol_France_315.jpg']
      ],
      group: "Travel"
    },
    franceiv: {
      title: "France IV",
      data: [
        ['France_401.jpg','Blois, 1987','ol_France_401.jpg'],
        ['France_402.jpg','Near Metz, 1987','ol_France_402.jpg'],
        ['France_403.jpg','Brittany, 1988','ol_France_403.jpg'],
        ['France_404.jpg','Loire, 1981','ol_France_404.jpg'],
        ['France_405.jpg','1987','ol_France_405.jpg'],
        ['France_406.jpg','Brittany, 1988','ol_France_406.jpg'],
        ['France_407.jpg','Roussillon, 1989','ol_France_407.jpg'],
        ['France_408.jpg','1990','ol_France_408.jpg'],
        ['France_409.jpg','Narbonne, 1991','ol_France_409.jpg'],
        ['France_410.jpg','Saint-Gilles-Croix-de-Vie, 1987','ol_France_410.jpg'],
        ['France_411.jpg','Saint-Gilles-Croix-de-Vie, 1987','ol_France_411.jpg'],
        ['France_412.jpg','La Rochelle, 1987','ol_France_412.jpg'],
        ['France_413.jpg','Narbonne, 1991','ol_France_413.jpg'],
        ['France_414.jpg','Narbonne, 1991','ol_France_414.jpg'],
        ['France_415.jpg','Normandy, 1992','ol_France_415.jpg'],
        ['France_416.jpg','Saint-Gilles-Croix-de-Vie, 1987','ol_France_416.jpg']
      ],
      group: "Travel"
    },
    wallartberlin: {
      title: "Wall Art Berlin",
      data: [
        ['WallArtBerlin01.jpg','Berlin Hackersche Hoefe: Wall-Art 2014 - 01'],
        ['WallArtBerlin11.jpg','Berlin Kreuzberg: Wall-Art 2014 - 11'],
        ['WallArtBerlin10.jpg','Berlin Kreuzberg: Wall-Art 2014 - 10'],
        ['WallArtBerlin13.jpg','Berlin Kreuzberg: Wall-Art 2014 - 13'],
        ['WallArtBerlin14.jpg','Berlin Kreuzberg: Posters 2014 - 14'],
        ['WallArtBerlin15.jpg','Berlin Kreuzberg: Posters 2014 - 15'],
        ['WallArtBerlin16.jpg','Berlin Kreuzberg: Posters 2014 - 16'],
        ['WallArtBerlin09.jpg','Berlin Kreuzberg: Posters 2014 - 09'],
        ['WallArtBerlin02.jpg','Berlin: Wall-Art 2014 - 02'],
        ['WallArtBerlin03.jpg','Berlin: Wall-Art 2014 - 03'],
        ['WallArtBerlin05.jpg','Berlin: Wall-Art 2014 - 05'],
        ['WallArtBerlin08.jpg','Berlin: Wall-Art 2014 - 08'],
        ['WallArtBerlin26.jpg','Berlin Wall: East Side Gallery 2014 - 26'],
        ['WallArtBerlin24.jpg','Berlin Wall: East Side Gallery 2014 - 24'],
        ['WallArtBerlin23.jpg','Berlin Wall: East Side Gallery 2014 - 23'],
        ['WallArtBerlin18.jpg','Berlin Wall: East Side Gallery 2014 - 18'],
        ['WallArtBerlin17.jpg','Berlin Wall: East Side Gallery 2014 - 17'],
        ['WallArtBerlin21.jpg','Berlin Wall: East Side Gallery 2014 - 21'],
        ['WallArtBerlin19.jpg','Berlin Wall: East Side Gallery 2014 - 19'],
        ['WallArtBerlin20.jpg','Berlin Wall: East Side Gallery 2014 - 20'],
        ['WallArtBerlin22.jpg','Berlin Wall: East Side Gallery 2014 - 22'],
        ['WallArtBerlin25.jpg','Berlin Wall: East Side Gallery 2014 - 25']
      ],
      group: "Travel"
    }
  }

}); // END: $(document).ready(function()
