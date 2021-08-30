'use strict';

window.onload = function() {
	//swiper
	
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		//spaceBetween: 16,
		slidesPerView: 1,
		centeredSlides: true,
		roundLengths: true,
		breakpoints: {
			600: {
				slidesPerView: 'auto',
			}
		},

		pagination: {
			el: '.swiper-pagination',
		},
		
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	//modals
	let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth,
		pageHeader = document.querySelector('.page__header');

	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		beforeOpen: function(){
			pageHeader.style.paddingRight = scrollbarWidth + 'px';
		},
		afterClose: function(){
			pageHeader.style.paddingRight = '0';
		}
	});
	myModal.init();
	
	//inputmask
	let inputTelList = document.querySelectorAll('[data-mask-tel]');
	for (let inputTel of inputTelList) {
		let im = new Inputmask('+7 999 999-99-99');
		im.mask(inputTel);
	}
}