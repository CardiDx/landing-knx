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
