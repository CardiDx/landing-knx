"use strict";

// const reviewsSwiper = document.querySelector('.swiper-reviews');

// if (reviewsSwiper) {
// 	const swiper = new Swiper('.swiper-reviews', {
// 		// Optional parameters
// 		autoHeight: true,
// 		loop: true,
// 		// If we need pagination
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true
// 		},
// 	});
// }

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

$(".popup-youtube").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 300,
  preloader: false,
  fixedContentPos: false,
});

// send message on email Ajax
$("#main-form").submit(function () {
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");

    $.magnificPopup.open({
      items: {
        src: "#thankyou",
      },
      mainClass: "mfp-letter",
    });
  });
  return false;
});
