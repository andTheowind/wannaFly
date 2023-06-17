$(document).ready(function() {
  const burger = $('.burger');
  const navMenu = $('.top__menu');

  burger.on("click", () => {
    burger.toggleClass("active");
    navMenu.toggleClass("active");
  });
});