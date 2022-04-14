// Slick Slider
$(document).ready(function(){
    $('.teaser-slider').slick({
      infinte: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 710,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
      ]
    });
  });