$(function() {


	$.scrollify({
		section:".panel",
		//sectionName:false,
		scrollSpeed:1500,
        easing: "easeOutExpo",
        setHeights: false,
        scrollbars:false
	});

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();
	});
    $(".scroll-up,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.previous();
	});

});
