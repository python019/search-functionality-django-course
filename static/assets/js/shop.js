/* =================================================================
* Template Shop JS
* 
* Template:    Tank - Creative Portfolio Showcase HTML Website Template
* Author:      Themetorium
* URL:         https://themetorium.net/
*
================================================================= */


// Table of Content
// =================
// Shop single product image slider (product gallery)
// Shop tt-Product carousel
// Shop single product
// Shop sidebar filter widget
// Shop sliding cart
// Shop product (tt-product)
//




(function ($) {
	'use strict';



	// =======================================================================================
	// Shop single product image slider (product gallery)
	// Source: https://swiperjs.com/
	// =======================================================================================

	// Init Swiper (thumbnails)
	// =============
	var $ttSpSliderThumbsSwiper = new Swiper($(".single-product-slider-thumbs").find(".swiper")[0], {
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 15,
		preloadImages: false, // Needed for lazy loading
		watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
		speed: 800,
		simulateTouch: true,
		preloadImages: false,

		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		},

		navigation: {
			nextEl: ".sps-arrow-next",
			prevEl: ".sps-arrow-prev",
			disabledClass: "sps-arrow-disabled",
		},

		breakpoints: {
			// When window width is 768px or larger
			768: {
				slidesPerView: 5,
			}
		},
	});


	// Init Swiper (image slider)
	// =============
	var $ttSpSliderSwiper = new Swiper($(".single-product-slider").find(".swiper")[0], {
		slidesPerView: 1,
		// effect: "fade",
		spaceBetween: 15,
		autoHeight: true,
		preloadImages: false, // Needed for lazy loading
		speed: 800,
		loop: false, // Do not enable loop! "LightGallery" is not recocnize cloned images.

		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		},

		navigation: {
			nextEl: ".sps-arrow-next",
			prevEl: ".sps-arrow-prev",
			disabledClass: "sps-arrow-disabled",
		},

		thumbs: {
			swiper: $ttSpSliderThumbsSwiper,
		},
	});



	// =======================================================================================
	// Shop tt-Product carousel
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-product-carousel").length) {
		$(".tt-product-carousel").each(function() {
			var $ttProductCarousel = $(this);

			// Data attributes
			// ================
			var $dataSimulateTouch = $ttProductCarousel.data("simulate-touch");
			var $dataLoop = $ttProductCarousel.data("loop") ? { loopedSlides: 100, } : $ttProductCarousel.data("loop");
			var $dataAutoplay = $ttProductCarousel.data("autoplay") ? { delay: $ttProductCarousel.data("autoplay"), } : $ttProductCarousel.data("autoplay");

			if ($ttProductCarousel.is("[data-slides-per-view]")) {
				var $dataSlidesPerView = $ttProductCarousel.data("slides-per-view");
			} else {
				var $dataSlidesPerView = 4; // by default
			}

			if ($ttProductCarousel.is("[data-space-between]")) {
				var $dataSpaceBetween = $ttProductCarousel.data("space-between");
			} else {
				var $dataSpaceBetween = 0; // by default
			}

			if ($ttProductCarousel.is("[data-speed]")) {
				var $dataSpeed = $ttProductCarousel.data("speed");
			} else {
				var $dataSpeed = 800; // by default
			}

			// Init Swiper
			// =============
			var $ttProductCarouselSwiper = new Swiper($ttProductCarousel.find(".swiper")[0], {
				slidesPerView: 1,
				slidesPerGroup: 1,
				preloadImages: false, // Needed for lazy loading
				watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
				speed: $dataSpeed,
				resistanceRatio: 0.85,
				longSwipesRatio: 0.2,
				shortSwipes: true,
				spaceBetween: $dataSpaceBetween,
				loop: $dataLoop,
				autoplay: $dataAutoplay,
				simulateTouch: $dataSimulateTouch,
				grabCursor: $dataSimulateTouch,

				lazy: {
					loadPrevNext: true,
					loadOnTransitionStart: true,
				},

				navigation: {
					nextEl: $ttProductCarousel.find(".tt-prc-arrow-next")[0],
					prevEl: $ttProductCarousel.find(".tt-prc-arrow-prev")[0],
					disabledClass: "tt-prc-arrow-disabled",
				},

				breakpoints: {
					// When window width is 1200px or larger
					1200: {
						slidesPerView: $dataSlidesPerView,
					},
					// When window width is 992px or larger
					992: {
						slidesPerView: 3,
					},
					// When window width is 560px or larger
					560: {
						slidesPerView: 2,
					}
				},
			});

		});

	}



	// =======================================================================================
	// Shop single product
	// =======================================================================================

	// Shop single product reviews count on click
	// ===========================================
	$(".single-product-review-count").on("click", function() {
		$(".single-product-tabs").find(".tt-tab-btn").removeClass("active");
		$(".sp-reviews-tab").addClass("active");

		$(".single-product-tabs").find(".tt-tab-content").removeClass("active");
		$("#sp-reviews-content").addClass("active");
	});


	// Shop single product quantity (plus/minus button)
	// =============================

	$(".qtybutton").on("click", function() {
		var $qtyButton = $(this);
		var oldValue = $qtyButton.parent().find("input").val();
		if ($qtyButton.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$qtyButton.parent().find("input").val(newVal);
	});


	// Shop single product "Add to Cart" button (It adds a loading spinner on click. Uncomment if you need this)
	// =========================================

	// $(".sp-adc-btn").on("click", function() {
	// 	var $this = $(this);
	// 	$this.addClass("loading");
	// 	setTimeout(function(){
	// 		$this.removeClass("loading");
	// 	}, 400);
	// });


	// Shop single product additional buttons (wishlist, compare)
	// ======================================= 

	$(".spr-add-to-wishlist-btn, .spr-add-to-compare-btn").on("click", function() {
		$(this).parents(".spr-addit-elem").toggleClass("active");
		return false;
	});


	// Shop single product review rating stars on click
	// =================================================

   $(".sprf-rating .sprf-rating-stars > a").on("click", (function() {
   	var $this = $(this);
   	$this.addClass("active").siblings().removeClass("active");
   	$this.parent().addClass("selected");
   	$this.closest(".sprf-rating").find("select").val($this.text());
   	return false;
   }));



   // =======================================================================================
	// Shop sidebar filter widget
	// =======================================================================================

	// Filter widget toggle
	if ($(".shop-filter-widget").length) {
		$(".shop-filter-widget").each(function() {
			var $this = $(this);

			if ($this.hasClass("hidden")) {
				$this.find(".shop-fwc-inner").hide();
				$this.addClass("hidden");
			}

			$this.find(".shop-fw-caret").on("click", function() {
				$this.toggleClass("hidden");
				$this.find(".shop-fwc-inner").slideToggle();
			});
		});
	}



	// ==================================
	// Shop sliding cart
	// ==================================

	if ($(".tt-sliding-cart-wrap").length) {

		// Append shop sliding cart
		$(".tt-sliding-cart-wrap").appendTo("#body-inner");

		// Open shop sliding cart
		$(".tt-sliding-cart-trigger").on("click", function() {
			$("body").toggleClass("tt-sliding-cart-open");
		});

		// Close shop sliding cart
		$(".tt-sliding-cart-cover, .tt-sliding-cart-close, .tt-sliding-cart a")
		.not('[target="_blank"]') // omit from selection
		.not('[href^="#"]') // omit from selection
		.not(".tt-sc-product-remove") // omit from selection
		.on("click", function() {
			$("body").removeClass("tt-sliding-cart-open");
		});
	}



	// ==================================
	// Shop product (tt-product)
	// ==================================

	// Shop product add to wishlist/compare buttons
	$(".tt-add-to-wishlist-btn, .tt-add-to-compare-btn").on("click", function() {
		$(this).parents(".tt-pr-addit-btn-wrap").toggleClass("active");
		return false;
	}); 

	// Show loading spinner and open sliding cart on "Add to Cart" button click
	$(".tt-product-adc-btn").on("click", function() {
		var $this = $(this);
		$this.addClass("loading");
		setTimeout(function(){
			$("body").addClass("tt-sliding-cart-open");
			$this.removeClass("loading");
		}, 400);
		return false;
	});


})(jQuery); 

