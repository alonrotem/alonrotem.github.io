/*global $:false, jQuery:false, console:false */


jQuery(document).ready(function($) {
  "use strict";

  //add some elements with animate effect
  $('.icon').addClass("animated fadeInDown");
  $("#intro").hover(
    function() {
      $('.icon').addClass("animated fadeInDown");
    },
    function() {
      $('.icon').removeClass("animated fadeInDown");
    }
  );

  //scroll to top
  $(window).scroll(function() {
    showhide_scrolltop();
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1);
    return false;
  });
  showhide_scrolltop();

  $('.accordion').on('show', function(e) {

    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });

  $('.accordion').on('hide', function(e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  });

  /*
  // Create the dropdown base
  $("<select />").appendTo("nav");

  // Create default option "Go to..."
  $("<option />", {
    "selected": "selected",
    "value": "",
    "text": "Go to..."
  }).appendTo("nav select");

  // Populate dropdown with menu items
  $("nav a").each(function() {
    var el = $(this);
    $("<option />", {
      "value": el.attr("href"),
      "text": el.text()
    }).appendTo("nav select");
  });

  //prettyphoto
  //$("a[data-pretty^='prettyPhoto']").prettyPhoto();

  //portfolio hover
  $('ul.da-thumbs > li').hoverdir();

  // To make dropdown actually work
  // To make more unobtrusive
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });
  */
  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

  // parallax background
  $('#intro').parallax("50%", 0.1);
  $('#services').parallax("50%", 0.2);
  $('#bottom').parallax("50%", 0.1);

  //navigation
  /*
  $('.navigation-list').onePageNav({
    begin: function() {
      console.log('start');
    },
    end: function() {
      console.log('stop');
    },
    scrollOffset: 0
  });
  */
  //highlight menu items automatically (scrollpy, part of bootstrap 5)
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#topnav'
  });
});

function showhide_scrolltop() {
  if ($(window).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
}

$(window).scroll(function() {
  "use strict";
  if ($(window).scrollTop() < 10) {
    $('*:not(.modal):not(.modal-backdrop).fade').stop(true, true).fadeTo("slow", 1);
  } else {
    $('*:not(.modal):not(.modal-backdrop).fade').stop(true, true).fadeTo("slow", 0.33);
  }
});

$(document).ready(function () {
  		//collapse the hamburger menu when clicked outside (when in mobile mode is expanded)
      $(document).click(function (event) {
        let $navbar = $(".navbar-collapse");
        let $toggler = $(".navbar-toggler");
  
        // If navbar is open and click is outside, collapse it
        if ($navbar.hasClass("show") && !$navbar.is(event.target) && $navbar.has(event.target).length === 0 && !$toggler.is(event.target) && $toggler.has(event.target).length === 0) {
          $navbar.collapse("hide");
          $toggler.addClass("collapsed"); // Ensure toggler icon returns to normal state
          $("#flippin").get(0).classList.remove("active")
        }
      });
});
