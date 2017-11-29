/*================================================================================




================================================================================*/

$(function() {

  "use strict";

  var window_width = $(window).width();

  /*Preloader*/
  $(window).load(function() {
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 200);
  });


  // Search class for focus
  $('.header-search-input').focus(
  function(){
      $(this).parent('div').addClass('header-search-wrapper-focus');
  }).blur(
  function(){
      $(this).parent('div').removeClass('header-search-wrapper-focus');
  });

  // Check first if any of the task is checked
  $('#task-card input:checkbox').each(function() {
    checkbox_check(this);
  });

  // Task check box
  $('#task-card input:checkbox').change(function() {
    checkbox_check(this);
  });

  // Check Uncheck function
  function checkbox_check(el){
      if (!$(el).is(':checked')) {
          $(el).next().css('text-decoration', 'none'); // or addClass
      } else {
          $(el).next().css('text-decoration', 'line-through'); //or addClass
      }
  }

  /*----------------------
  * Plugin initialization
  ------------------------*/

  $('select').material_select();
  // Set checkbox on forms.html to indeterminate
  var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
  if (indeterminateCheckbox !== null)
    indeterminateCheckbox.indeterminate = true;

  // Materialize Slider
  $('.slider').slider({
    full_width: true
  });

  // Materialize Dropdown
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 125,
    constrain_width: true, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on click
    alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
    gutter: 0, // Spacing from edge
    belowOrigin: true // Displays dropdown below the button
  });
  // Translation Dropdown
  $('.translation-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  // Notification Dropdown
  $('.notification-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

  // Materialize Tabs
  $('.tab-demo').show().tabs();
  $('.tab-demo-active').show().tabs();

  // Materialize Parallax
  $('.parallax').parallax();
  // Materialize Modal
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {
      //alert('Ready');
      }, // Callback for Modal open
      complete: function() {
      //alert('Closed');
      } // Callback for Modal close
  });

  // Materialize scrollSpy
  $('.scrollspy').scrollSpy();

  // Materialize tooltip
  $('.tooltipped').tooltip({
    delay: 50
  });

  // Materialize sideNav

  //Main Left Sidebar Menu
  $('.sidebar-collapse').sideNav({
    edge: 'left', // Choose the horizontal origin
  });

  // FULL SCREEN MENU (Layout 02)
  $('.menu-sidebar-collapse').sideNav({
        menuWidth: 240,
        edge: 'left', // Choose the horizontal origin
        //closeOnClick:true, // Set if default menu open is true
        menuOut:false // Set if default menu open is true

      });

  // HORIZONTAL MENU (Layout 03)
  $('.dropdown-menu').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    });


  //Main Left Sidebar Chat
  $('.chat-collapse').sideNav({
    menuWidth: 300,
    edge: 'right',
  });
  $('.chat-close-collapse').click(function() {
    $('.chat-collapse').sideNav('hide');
  });
  $('.chat-collapsible').collapsible({
    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  // Pikadate datepicker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  // Perfect Scrollbar
  $('select').not('.disabled').material_select();
    var leftnav = $(".page-topbar").height();
    var leftnavHeight = window.innerHeight - leftnav;
  $('.leftside-navigation').height(leftnavHeight).perfectScrollbar({
    suppressScrollX: true
  });
    var righttnav = $("#chat-out").height();
  $('.rightside-navigation').height(righttnav).perfectScrollbar({
    suppressScrollX: true
  });


  // Fullscreen
  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      }
      else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  $('.toggle-fullscreen').click(function() {
    toggleFullScreen();
  });


  // Floating-Fixed table of contents (Materialize pushpin)
  if ($('nav').length) {
    $('.toc-wrapper').pushpin({
      top: $('nav').height()
    });
  }
  else if ($('#index-banner').length) {
    $('.toc-wrapper').pushpin({
      top: $('#index-banner').height()
    });
  }
  else {
    $('.toc-wrapper').pushpin({
      top: 0
    });
  }

  // Toggle Flow Text
  var toggleFlowTextButton = $('#flow-toggle')
  toggleFlowTextButton.click(function() {
    $('#flow-text-demo').children('p').each(function() {
      $(this).toggleClass('flow-text');
    })
  });

  //Alerts
  $("#card-alert .close").click(function(){
    $(this).closest('#card-alert').fadeOut('slow');
  });

  //Toggle Containers on page
  var toggleContainersButton = $('#container-toggle-button');
  toggleContainersButton.click(function() {
    $('body .browser-window .container, .had-container').each(function() {
      $(this).toggleClass('had-container');
      $(this).toggleClass('container');
      if ($(this).hasClass('container')) {
        toggleContainersButton.text("Turn off Containers");
      }
      else {
        toggleContainersButton.text("Turn on Containers");
      }
    });
  });

  // Detect touch screen and enable scrollbar if necessary
  function is_touch_device() {
    try {
      document.createEvent("TouchEvent");
      return true;
    }
    catch (e) {
      return false;
    }
  }
  if (is_touch_device()) {
    $('#nav-mobile').css({
      overflow: 'auto'
    })
  }

  //LINE CHART WITH AREA IN SIDEBAR
  if (typeof Chartist != "undefined") {
    new Chartist.Line('#ct2-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
        low: 0,
        showArea: true
    });
  }
  //Trending chart for small screen
  if(window_width <= 480){
    $("#trending-line-chart").attr({
      height: '200'
    });
  }

  /*
  * Advanced UI
  */










  /*!
   * JavaScript Cookie v2.1.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   */
  ;(function (factory) {
  	if (typeof define === 'function' && define.amd) {
  		define(factory);
  	} else if (typeof exports === 'object') {
  		module.exports = factory();
  	} else {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function init (converter) {
  		function api (key, value, attributes) {
  			var result;
  			if (typeof document === 'undefined') {
  				return;
  			}

  			// Write

  			if (arguments.length > 1) {
  				attributes = extend({
  					path: '/'
  				}, api.defaults, attributes);

  				if (typeof attributes.expires === 'number') {
  					var expires = new Date();
  					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
  					attributes.expires = expires;
  				}

  				try {
  					result = JSON.stringify(value);
  					if (/^[\{\[]/.test(result)) {
  						value = result;
  					}
  				} catch (e) {}

  				if (!converter.write) {
  					value = encodeURIComponent(String(value))
  						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
  				} else {
  					value = converter.write(value, key);
  				}

  				key = encodeURIComponent(String(key));
  				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
  				key = key.replace(/[\(\)]/g, escape);

  				return (document.cookie = [
  					key, '=', value,
  					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
  					attributes.path    && '; path=' + attributes.path,
  					attributes.domain  && '; domain=' + attributes.domain,
  					attributes.secure ? '; secure' : ''
  				].join(''));
  			}

  			// Read

  			if (!key) {
  				result = {};
  			}

  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all. Also prevents odd result when
  			// calling "get()"
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var rdecode = /(%[0-9A-Z]{2})+/g;
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var name = parts[0].replace(rdecode, decodeURIComponent);
  				var cookie = parts.slice(1).join('=');

  				if (cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					cookie = converter.read ?
  						converter.read(cookie, name) : converter(cookie, name) ||
  						cookie.replace(rdecode, decodeURIComponent);

  					if (this.json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					if (key === name) {
  						result = cookie;
  						break;
  					}

  					if (!key) {
  						result[name] = cookie;
  					}
  				} catch (e) {}
  			}

  			return result;
  		}

  		api.set = api;
  		api.get = function (key) {
  			return api(key);
  		};
  		api.getJSON = function () {
  			return api.apply({
  				json: true
  			}, [].slice.call(arguments));
  		};
  		api.defaults = {};

  		api.remove = function (key, attributes) {
  			api(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  //end of js cookie


}); // end of document ready
