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

$(".popup-youtube").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 300,
  preloader: false,
  fixedContentPos: false,
});

// popups

$(".show-sontact-us").magnificPopup({
  items: {
    src: ".popup--contact-us",
  },
  type: "inline",
  mainClass: "my-mfp-slide-bottom",
  fixedContentPos: true,
});

$(".show-thank-you").magnificPopup({
  items: {
    src: ".popup--thank-you",
  },
  type: "inline",
  mainClass: "my-mfp-slide-bottom",
  fixedContentPos: true,
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
