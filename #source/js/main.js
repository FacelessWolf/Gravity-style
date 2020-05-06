$(function () {

	$('.a-menu').click(function(event) {
		$('.a-menu,.header-menu').toggleClass('active')
	});

	$("body").on('click', '[href*="#"]', function(e){
		$.scrollTo($(this.hash), 1000);
	});

	$('.services-carousel').slick({
		appendArrows: $('.services-carousel__append'),
	});

	$('.testimonials-offer-carousel').slick({
		appendArrows: $('.testimonials-offer-carousel__append'),
		infinite: true,
		asNavFor: '.testimonials-img-carousel',
	});

	$('.testimonials-img-carousel').slick({
		arrows: false,
		asNavFor: '.testimonials-offer-carousel',
	});

});