// JS for mobile navigation
// document.getElementsById("nav-toggle").addEventListener("click", function(){
//   if(document.getElementsByClassName("mobile-list")[0].id === "") {
//     document.getElementsByClassName("mobile-list")[0].id = "show";
//   } else {
//     document.getElementsByClassName("mobile-list")[0].id = "";
//   }
// });
$(document).ready(function(){
  $("#nav-toggle").on("click", function(event){
    event.preventDefault();
    $(".mobile-list").slideToggle();
    $(this).toggleClass("active");
  });

  $(".mobile-list a").on("click", function(event){
    event.preventDefault();
    var headerHeight = $("header").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - headerHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  // Slick Carousel
  var $galleryImg = $(".gallery img");
  var $closeBtn = $(".btn");
  var $carousel = $(".carousel");
  var $overlay = $(".overlay");

  $carousel.slick({
    centerMode: true,
    fade: true,
    arrows: false,
    dots: true,
    draggable: false
  });

  $galleryImg.on("click", function(click){
    var $imgId = $(this).attr("id");
    // Initiate fade-in / set display: block
    $overlay.fadeIn();
    // Go to slide with clicked image and ensure proper dimensions and position on page
    $carousel.slick("slickGoTo", $imgId, true).slick("setPosition");
  });

  $closeBtn.on("click", function(event){
    event.preventDefault();
    $overlay.fadeOut();
  });
});
