onePageScroll(".main", {
	sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
									 // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	animationTime: 700,             // AnimationTime let you define how long each section takes to animate
	pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	keyboard: true,                  // You can activate the keyboard controls
	responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
									 // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
									 // the browser's width is less than 600, the fallback will kick in.
	direction: "vertical",            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	afterMove: function(index, next_el) {
		if (next_el.id !== "findTickets") {
			$(".sticky-footer").addClass("inverted");
			$(".inv").addClass("inverted");
			$("#header").addClass("inverted-header");
			$(".logo-description").addClass("inverted");
			$("$navbarToggler").addClass("inverted")
		}
		else {
			$(".sticky-footer").removeClass("inverted");
			$("#header").removeClass("inverted-header");
			$(".logo-description").removeClass("inverted")
			$(".inv").removeClass("inverted");	
			$("$navbarToggler").removeClass("inverted")
		}
	},
	beforeMove: function(index, next_el) {
		if (next_el.id === "findTickets") {
			$(".aside-search").addClass("active-button");
			$(".aside-news, .aside-discounts").removeClass("active-button");
		} else
		if (next_el.id === "discounts") {
			$(".aside-discounts").addClass("active-button");
			$(".aside-news, .aside-search").removeClass("active-button");
		} else 
		if (next_el.id ==="news") {
			$(".aside-news").addClass("active-button");
			$(".aside-search, .aside-discounts").removeClass("active-button");
		}
	}
});
