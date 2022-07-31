
$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("a").attr("href", "https://www.facebook.com");


$("button").click(function() {
  $("h1").css("color", "red");
});


$(document).keypress(function(event) {
  $("h1").text(event.key);
});


$("h1").on("mouseover", function() {
  $("h1").css("color", "green");
});


// ############################
// $("button").click(function() {
//   $("h1").css("color", "green");
// });

$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
