//    <!-- Events Start-->
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-2x fa-angle-left'></i>",
          "<i class='fa fa-2x fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
  });

//   <!-- Events End-->