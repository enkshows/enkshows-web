$(document).ready(function(){
///
///
/// PLUGINS
///
///
  Shadowbox.init();

  $('.nav').localScroll({
    offset: -10
  });

  
  // Open Hotel + Travel section dropdowns to proper link destination
  $("#travel").on("change", ".travel-select", function(){
    window.location.href = $(this).val();
    });


	// allows for toggle throughout each module
	// $(".main--content").each(function(){
	// 	$("div[class^=exhib-]:not(:first)", this).hide();
	// });
	// $(".main--nav").each(function(){
	// 	$('.main--nav a').click(function(e){
	// 		e.preventDefault();
	// 		var $classAttr = $(this).attr('class');
 //      $('.exhib-content').hide();
	// 		$('#' + $classAttr).show();
	// 	});
	// });

	// hide and show common questions 
	var $faq = $('.faq-content');
	var $faqLink = $('.faq-question');

	$faq.hide();
	$faqLink.on('click', function(e){
		var $this = $(this);
		e.preventDefault();
		if ($this.hasClass('active')) {
			$this.removeClass('active');
			$faq.slideUp();
		} else {
			$faqLink.removeClass('active').next().slideUp();
			$this.addClass('active').next().slideDown();
		}
	});


  //
  //
  // MORE LESS BUTTONS ON HOME PAGE
  //
  // 
    var secHeight = $(".show-element__sections").height();
    var newHeight = secHeight / 1.5;
    $(".show-element__sections").css({"height": newHeight, "overflow": "hidden"});
    
    $(".show-element__sections").on('click','.expand', function(e){
      e.preventDefault();
      if ($(this).hasClass("active") ) {
        $(this).parent().css({"height": secHeight}, "fast");
        $(this).html("less");
        $(".expand").removeClass("active").html("more").parent().animate({"height": newHeight}, "fast");;
      } else {
        $(".expand").html("more").removeClass('active').parent().animate({"height": newHeight}, "fast");
        $(this).html('less').addClass('active').parent().animate({"height": secHeight}, "fast");
      }
    });


	// Google Maps
	// var javitz 	= new google.maps.LatLng(40.758554,-74.002299);
	// var piers 	= new google.maps.LatLng(40.769126,-73.996312);
	// var pier92 	= new google.maps.LatLng(40.768809,-73.997245);
	// var pier94 	= new google.maps.LatLng(40.76976,-73.996666);
	// var myLatLng;
 //  var marker;
 //  var mapCenter;
 //  var map;
 //  var MY_MAPTYPE_ID = 'custom_style';

 //  var gMap = $('#map-canvas');

 //  function initialize() {
 //  	var featureOpts = [
	//     {
	//       stylers: [
	//          { "saturation": -100 }
	//       ]
	//     },
	//     {
	// 			featureType: 'water',
	// 	    "stylers": [
	// 	      { "lightness": 23 },
	// 	      { "saturation": -100 },
	// 	      { "gamma": 0.8 }
	// 	    ]
	//     }
 //  	 ];
 //    var mapOptions = {
 //      zoom: 14,
 //      center: myLatLng,
 //      mapTypeControlOptions: {
 //      	mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
 //      },
 //      mapTypeId: MY_MAPTYPE_ID
 //    };

 //    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

 //    var styledMapOptions = {name: 'ENK Shows'};
 //    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

 //    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

 //    marker = new google.maps.Marker({
 //      map: map,
 //      position: mapCenter
 //    });
 //  }

 //  if (gMap.data('location') == 'piers') {
 //  	myLatLng 	= piers;
 //  	mapCenter = piers;
 //  } else if (gMap.data('location') == 'pier92') {
 //  	myLatLng 	= pier92;
 //  	mapCenter = pier92;
 //  } else if (gMap.data('location') == 'pier94') {
	// 	myLatLng 	= pier94;
 //  	mapCenter = pier94;
 //  } else if (gMap.data('location') == 'javitz') {
	// 	myLatLng 	= javitz;
 //  	mapCenter = javitz;
 //  } else {
 //  	gMap.hide();
 //  }

 //  google.maps.event.addDomListener(window, 'load', initialize);


  //Image opacity 
  $("a > img").hover(function() {
      $(this).stop().animate({opacity: "0.6"}, 300);
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 300);
    });



  // Booth Dropdown
  $(".booth-select").each(function(){
    $(this).on('change', function(){
      var $this = $(this);
      var src = $(this).val();

      var imgDiv = $('.image-display')
      var imgURL = "../assets/img/booths/";
      var img = "<img src='../assets/img/booths/" + src + "FRONTsm.jpg'>"
      // var url = "<a rel='shadowbox' href='" + imgURL + src + "FRONT.jpg'>" + img + "</a>"
      var url = "<a rel='shadowbox' title='" + src + "'" + "href='" + imgURL + src + "FRONT.jpg'>" + img + "</a>"
      var link = "<p><a rel='shadowbox' href='" + imgURL + src + "FRONT.jpg'>" + src + "</a></p>";
      if (src == "") {

        imgDiv.hide();
        $('.image-display > a').remove();
        $('.image-display > p').text().remove();
      } else {
        imgDiv.hide();
        imgDiv.find('> a, > p').remove();
        $(url).appendTo($this.parent().find('.image-display').show());
        $(link).appendTo($this.parent().find('.image-display').show());
        Shadowbox.init();
        Shadowbox.clearCache();
        Shadowbox.setup();
      }
    });
  });

///
///
/// FORM VALIDATION
///
/// 
  
  $("#form").on('submit', function(){
    if ($("#select-show, input[type='text'], #select-state, input[type='checkbox']:checked, #captcha") == "") {
      alert('form is wrong!');
    } else {
      alert('good!');
    }
  })

  var header = $(".show-header");
  if ($(".show-header").data("header") == "hero" ){
      // alert('show!');
      header.css({"margin-top": "0"});
  } else {  
    header.css({"margin-top": "20px"});
  }


///
///
/// SHOW LINKS
///
///
  
  var nav = $("#nav > #shownav");
  var showNav = $("<ul id='shownav-inner'></ul>");

  // set variables for show list elements
  var  ac   = $("<li><a href='/circuit' title='Accessorie Circuit'>Circuit</a><ul id='shownav-inner' class='nav-ac'></ul></li>");
  var  ic   = $("<li><a href='/intermezzo' title='Intermezzo Circuit'>Intermezzo</a><ul id='shownav-inner' class='nav-ic'></ul></li>");
  var  cc   = $("<li><a href='childrensclub/index.html' title='Childrens Club'>Children's Club</a><ul id='shownav-inner' class='nav-cc'></ul></li>");
  var  ev   = $("<li><a href='/enkvegas' title='ENK Vegas'>ENK Vegas</a><ul id='shownav-inner' class='nav-ev'></ul></li>");
  var  fc   = $("<li><a href='/coterie' title='Fashion Coterie'>Coterie</a><ul id='shownav-inner' class='nav-fc'></ul></li>"); 
  var  sc   = $("<li><a href='/sole' title='Sole Commerce'>Sole Commerce</a><ul id='shownav-inner' class='nav-sc '></ul></li>");
  var  tmrw = $("<li><a href='/tmrw' title='TMRW'>TMRW</a><ul id='shownav-inner' class='nav-tmrw'></ul></li>");

  // append show list elements to the nav
  ac.appendTo(nav);
  ic.appendTo(nav);
  cc.appendTo(nav);
  ev.appendTo(nav);
  fc.appendTo(nav);
  sc.appendTo(nav);
  tmrw.appendTo(nav);

  // set variables for show page sections
  var  $highlight = $("<li><a href='#highlights' title='Highlights'>hightlights</a></li>");  
  var  $collections = $("<li><a href='#collections' title='Collections'>collections</a></li>");  
  var  $hotel = $("<li><a href='#hotel' title='Hotel + Travel'>hotel</a></li>");  
  var  $gallery = $("<li><a href='#gallery' title='Gallery'>gallery</a></li>");  
  var  $video = $("<li><a href='#video' title='Video'>video</a></li>");    

  if ($("body").hasClass("childrensClub") == true) {
    // nav links for CC show page
    $(".nav-cc").prev().addClass("active");
    $(".nav-cc").append($highlight, $collections);
  } else if ($("body").hasClass("aCircuit") == true) {
    // nav links for AC show page
    $(".nav-ac").prev().addClass("active");
    $(".nav-ac").append($highlight, $collections);
  } else if ($("body").hasClass("iCircuit") == true) {
    // nav links for IC show page
    $(".nav-ic").prev().addClass("active");
    $(".nav-ic").append($highlight, $collections);
  } else if ($("body").hasClass("aCircuit") == true) {
    // nav links for EV show page
    $(".nav-ev").prev().addClass("active");
    $(".nav-ev").append($highlight, $collections);
  } else if ($("body").hasClass("aCircuit") == true) {
    // nav links for FC show page
    $(".nav-fc").prev().addClass("active");
    $(".nav-fc").append($highlight, $collections);
  } else if ($("body").hasClass("aCircuit") == true) {
    // nav links for SC show page
    $(".nav-sc").prev().addClass("active");
    $(".nav-sc").append($highlight, $collections);
  } else if ($("body").hasClass("aCircuit") == true) {
    // nav links for TM show page
    $(".nav-tmrw").prev().addClass("active");
    $(".nav-tmrw").append($highlight, $collections);
  } else {
    $(".nav-cc, .nav-ac, .nav-ic, .nav-ev, .nav-fc, .nav-sc, .nav-tmrw").remove();
  }


});
