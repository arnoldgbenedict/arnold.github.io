$(function() {


	$.scrollify({
		section:".panel",
		//sectionName:false,
		scrollSpeed:1500,
        easing: "easeOutExpo",
        setHeights: false,
        scrollbars:false,
		before:function(i) {

			if(i===18 || i===19 || i===30 || i===31 || i==33) {
				$('.arrow, .arrow-up').css("border-color","black");
			}
            else{
                $('.arrow, .arrow-up').css("border-color","white");
            }

		}
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
