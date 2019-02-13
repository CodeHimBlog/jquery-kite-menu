/*!  Plugin: Kite Menu
 *   Author: Asif Mughal
 *   URL: www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2019 - Asif Mughal
 */
/* File: jquery.kitemenu.js */
(function ($) {
	$.fn.kiteMenu = function (options) {

		var setting = $.extend({
			kiteSkin: "default", //put the name of theme in this string
			boxShadow: false, //shadow at the bottom of menubar, ture to enable
			textShadow: false, //shadow for text, true for enable

		}, options);

		return this.each(function () {

			var target = $(this);

			//applying the menu customization 
			if (setting.boxShadow == true) {

				$(target).addClass("box-shadow");

			}
			if (setting.textShadow == true) {

				$(target).addClass("text-shadow");

			}
			$(target).addClass(setting.kiteSkin);


			var kiteSearch = $(".kite-search");

			var search_open = false; //to determine whether the search box open or not
			var menu_open = false; // to determine whether the menu links open or not

			//Getting the kite triggers 
			var trigger = {
				'menu': '.kite-menu-trigger', //hamburger 
				'search': '.kite-search-trigger', //search trigger
			};


			$(trigger.menu).on('click', function () {

				$(this).toggleClass("active"); //this means hamburger menu, when user clicks on it the menu will open and it's become close button 

				if (search_open == true) { //if search box already shown 

					$(target).toggleClass("expand-2x");

					//then menu will be expanded by 2x
				} else {
					//otherwise menu will be expand by 1x
					$(target).toggleClass("expand-1x");


				}

				//now check, if hamburger opened 
				if ($(this).hasClass("active")) {
					//then the navigation links will fade in
					$(".links-wrapper").fadeIn("slow");

					menu_open = true; //indicate that menu opened 

				}

				//otherwise  (if hamburger clicked again) the navigation fade away 
				else {

					$(".links-wrapper").fadeOut("fast");

					menu_open = false; //indicate that menu closed

				}


			});


			$(trigger.search).click(function (x) {

				x = $(this); //indicates Search trigger icon

				x.toggleClass("active"); //toggle the active class for search icon 

				if (x.hasClass("active")) { //to check if user clicked on the search trigger 

					search_open = true; //indicates that search box opened 

					//now searchbox will be slide down with the 400ms speed. 
					$(kiteSearch).slideDown(400, function () {
						//after sliding search box, the input will immediately focus
						$(kiteSearch).find("input").focus();

					});

					//if search trigger clicked again 
				} else {

					search_open = false; //indicates that search box closed 

					$(kiteSearch).slideUp(); //slide up the search box
				}

				//check if menu links are opened then search box will be expanded by 2x

				if (menu_open == true) {

					$(target).toggleClass("expand-2x");


				}
				//on the other hand, it will expand by 1x
				else {
					$(target).toggleClass("expand-1x");


				}

			});


		});
	};

})(jQuery);
