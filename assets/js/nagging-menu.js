$(function(){
	$(window).scroll(function(){
		set_navbar_style();
	});

	set_navbar_style();
});

function set_navbar_style() {
	var menu = $('#topnav');
	if($(window).scrollTop() > menu.outerHeight())
	{
		if(!menu.hasClass("fixed"))
		{
			//menu.fadeOut();
			menu.addClass("fixed");
			//menu.fadeIn();
		}
	}
	else
	{
		if(menu.hasClass("fixed"))
		{
			//menu.fadeOut();
			menu.removeClass("fixed");
			//menu.fadeIn();
		}
	}
}