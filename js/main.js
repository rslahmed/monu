$(document).ready(function(){
// Write code here

// Mobile menu
jQuery('#mobile-menu-active').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "768"
});

// counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

  // main slider 
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.slider-wrapper:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.slider-wrapper[data-slick-index="' + nextSlide + '"]').find(
        '[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      fade: true,
      autoplaySpeed: 10000,
      responsive: [{
          breakpoint: 1200,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: true,
            autoplaySpeed: 10000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: true,
            autoplaySpeed: 10000
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

//   review slider
$('.review-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true
  });

// Brand slider
  $('.brand-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  // scroll up
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-circle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  parallaxInstance.friction(0.2, 0.2);


  // wow js
  new WOW().init();
});