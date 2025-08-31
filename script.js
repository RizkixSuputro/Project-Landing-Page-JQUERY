$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".nav-links ul").toggleClass("show");
  });
  $(".nav-links ul li a").click(function () {
    $(".nav-links ul").removeClass("show");
  });
});
