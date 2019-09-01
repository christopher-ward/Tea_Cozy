// JS for mobile navigation
// document.getElementsById("nav-toggle").addEventListener("click", function(){
//   if(document.getElementsByClassName("mobile-list")[0].id === "") {
//     document.getElementsByClassName("mobile-list")[0].id = "show";
//   } else {
//     document.getElementsByClassName("mobile-list")[0].id = "";
//   }
// });

$("#nav-toggle").on("click", function(event){
  event.preventDefault();
  $(".mobile-list").slideToggle();
  $(this).toggleClass("active");
});

$(".mobile-list a").on("click", function(){
  var headerHeight = $("header").height();
  var id = $(this).attr("href");
  var originalScrollCoordinate = $(id).offset().top;
  var newScrollCoordinate = originalScrollCoordinate - headerHeight;
  $("html").scrollTop(newScrollCoordinate);
});
