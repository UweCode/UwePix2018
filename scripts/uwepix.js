// uweschneider.com:	javascript for index.html
// USch 07-01-2018

$(document).ready(function() {

	// GLOBALS //

  $.currentPage = undefined;							// currently selected main section/gallery

	// START-UP //

	setTimeout( () => { 							      // start-up: go to Home page
		_Indx.fnRegisterMenuEvents();
		_Indx.fnBuildPage('Home');
	},20 );

	// EVENTS //

	(function (_Indx, $, undefined) {        // BEGIN: Namespace for code on the index.htm page //

  	// register menu-click events
  	_Indx.fnRegisterMenuEvents = () => {
			$('.menu').click( function (e) {
				let menuId = e.currentTarget.id;

				if (menuId.length > 3) {
					let selectedPage = menuId.substring(3,e.currentTarget.id.length);

					if (_Indx.fnResetPage(selectedPage)) {
  					if (selectedPage === 'InfoAndContact') {
				    	$('#txtInfoAndContact').addClass('liMenuSel');
							setTimeout( function () { $('#divInfoAndContact').slideDown(300); },300 );
  					} else if (selectedPage === 'Home') {
				    	$('#cmdHome').addClass('liMenuSel');
							setTimeout( function () {
                $('#divNavGallery').children().slideDown(300);
              },300 );
  					} else {
  						setTimeout( function () { $('#divGallery').slideDown(300); },300 );
              setTimeout( function () { _Indx.fnBuildPage(selectedPage); },600 );
  					}
  				}
        }
			});
		};

  	// register image-click events (Home Page: for opening a particular gallery)
    _Indx.fnRegisterNavCarouselEvents = () => {
    	$('#carousel .item img.imgLink').unbind('click');

    	$('#carousel .item img.imgLink').click( function (e) {

			});
		};

		// jQuery widgets //

		_Indx.fnInitNavCarousel = () => {								// init navigation owl carousel on the home page
      $('#navCarousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          slideBy: 'page',
          responsive:{
              0:{
                  items:1
              },
              600:{
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
  	  		stopOnHover : true,
  		    lazyLoad : true
      })
		};

	 // FUNCTIONS //

	 // prepare page to load new content
	 _Indx.fnResetPage = (selectedPage) => {
		 if(selectedPage === $.currentPage) {
			 return false; // current selection is already loaded: don't do anything
		 }

     if ($('#divInfoAndContact').is(':visible')) {
       $('#divInfoAndContact').slideUp(300);
     }
     if($('#divNavGallery').is(':visible')){
       $('#divNavGallery').children().slideUp(300);
     }
		 // remove currently selected carousel - if any
		 $('#divGallery').slideUp(300).empty();
		 // reset all links and menu items
		 $('.liMenu').removeClass('liMenuSel');
		 $('.mainMenu').removeClass('menuSel');
		 // set new page
		 $.currentPage = selectedPage;

		 return true;
	 };

   // if a new page is selected, load that page, create html for all sections
   _Indx.fnBuildPage = (galleryName) => {
 			if (_Indx.fnResetPage(galleryName)) {
        if(galleryName == 'Home') {
          $('#divNavGallery').prepend(_Indx.fnGetNavCarousel());
     			setTimeout( () => {
     				_Indx.fnInitNavCarousel();
     				_Indx.fnRegisterNavCarouselEvents();
     				$('#divNavGallery').children().slideDown(300);
     			},20 )
        } else {
          $('#divGallery').prepend(_Indx.fnGetCarousel(galleryName));
        };
      }
 		};

	  // get the nav carousel for the home page ; add events
		_Indx.fnGetNavCarousel = () => {
			let navGallery = '<div id="divNavCarousel" class="currGallery"><div id="navCarousel" class="owl-carousel owl-theme">';
			let galleryData = _Indx.fnGetCarouselData("Home");

			$.each( galleryData, function ( index, value ) {	       // create html for carousel section
	  		if(value.length == 2)															     // image name [0], image alt [1]
			  	navGallery += '<div class="item"><img class="lazyOwl" src="images/Home/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
	  		else if(value.length == 3 && value[2].length > 0)		  // image name [0], image alt [1], image link-to [2]
	  			navGallery += '<div class="item"><img id="' + value[2] + '" class="lazyOwl imgLink hoverPointer" src="images/' + value[2] + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
			});
			navGallery += '</div></div>';

			return navGallery;
	  };

	  // get data for carousel and create the html for this carousel from data ; add events - if any
		_Indx.fnGetCarousel = (galleryName) => {
			let gallery = '<div id="divCarousel' + galleryName + '" class="currGallery"><div id="galleryCarousel" class="owl-carousel owl-theme">';
			let galleryData = _Indx.fnGetCarouselData(galleryName);

			$.each( galleryData, function ( index, value ) {	       // create html for carousel section
	  		if(value.length == 2)															     // image name [0], image alt [1]
			  	gallery += '<div class="item"><img class="lazyOwl" src="images/' + galleryName + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
	  		else if(value.length == 3 && value[2].length > 0)		  // image name [0], image alt [1], image link-to [2]
	  			gallery += '<div class="item"><img id="' + value[2] + '" class="lazyOwl imgLink hoverPointer" src="images/' + value[2] + '/' + value[0] + '" alt="' + value[1] + '" title="' + value[1] + '"></div>';
			});
			gallery += '</div></div>';

			return gallery;
	  };

	  // get array with data needed to build carousel for specified gallery ; highlight main menu item (top level) --> currently selected ; galleryTypes: "owl", "olOwl"
		_Indx.fnGetCarouselData = (galleryName) => {
			// galleries: get gallery data and apply highlighting
			let sData;
			switch (galleryName) {
		    case 'Home':
		    	$('.home').addClass('liMenuSel');
	        sData = $.aHome;
	        break;
		    case 'Nightlight':
		    	$('#menuPortfolios').addClass('menuSel');
	        sData = $.aNightlight;
	        break;
		    case 'WinterInPdx':
		    	$('#menuPortfolios').addClass('menuSel');
	        sData = $.aWinterInPdx;
	        break;
		    case 'WallsPoles':
		    	$('#menuPortfolios').addClass('menuSel');
	        sData = $.aWallsPoles;
	        break;
		    case 'EarlyPortraits':  									// People & Portraits
		    	$('#menuPeople').addClass('menuSel');
	        sData = $.aEarlyPortraits;
	        break;
		    case 'Portraits':
		    	$('#menuPeople').addClass('menuSel');
	        sData = $.aPortraits;
	        break;
		    case 'MovieDirectors':
		    	$('#menuPortraits').addClass('menuSel');
	        sData = $.aMovieDirectors;
	        break;
		    case 'CoffeePlant':
		    	$('#menuPeople').addClass('menuSel');
	        sData = $.aCoffeePlant;
	        break;
		    case 'OneWedding':
		    	$('#menuPeople').addClass('menuSel');
	        sData = $.aOneWedding;
	        break;
		    case 'WiedenKennedy':  										// Architecture
		    	$('#menuArchitecture').addClass('menuSel');
	        sData = $.aWiedenKennedy;
	        break;
		    case 'PaintedHills':  										// Travel
		    	$('#menuTravel').addClass('menuSel');
	        sData = $.aPaintedHills;
	        break;
		    case 'Berlin':
		    	$('#menuTravel').addClass('menuSel');
	        sData = $.aBerlin;
	        break;
		    case 'BerlinWallArt':
		    	$('#menuTravel').addClass('menuSel');
	        sData = $.aBerlinWallArt;
	        break;
		    case 'Footer':
          if (_Indx.fnResetPage('Home')) {
            $('#cmdHome').addClass('liMenuSel');
            setTimeout( function () {
              $('#divNavGallery').children().slideDown(300);
            },300 );
          }
	        break;
			}
			return sData;
	  };

	} (window._Indx = window._Indx || {}, jQuery)); // END: Namespace for code on the index.htm page

}); // END: $(document).ready(function()
