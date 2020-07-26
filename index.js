var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const nav = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo-image');
const scrollDown = document.querySelector('.scroll-down');
const aboutUs = document.querySelector('#about-us');
const ourMission = document.querySelector('.heading-our-mission');
const ourVision = document.querySelector('.heading-our-vision');
const mobileNav = document.querySelector('.mobile-navigation__nav');
const mobileNavItems = document.querySelectorAll('.mobile-navigation__item');
const mobileNavCheckbox = document.querySelector('.mobile-navigation__checkbox');
const mobileNavButton = document.querySelector('.mobile-navigation__button');
const mobileNavBackground = document.querySelector('.mobile-navigation__background');
const cardLogo1 = document.querySelector('.card__header--icon-1');
const cardLogo2 = document.querySelector('.card__header--icon-2');
const cardLogo3 = document.querySelector('.card__header--icon-3');
const cardLogo4 = document.querySelector('.card__header--icon-4');

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		nav.classList.add('header__nav-scroll');
		logo.style.width = '8rem';
		logo.style.height = '8rem';
		mobileNavButton.style = "top: 2rem"
		mobileNavButton.style.width = '5rem';
		mobileNavButton.style.height = '5rem';
		mobileNavBackground.style = "top: 2rem"
		mobileNavBackground.style.width = '4.5rem';
		mobileNavBackground.style.height = '5rem';

		ourMission.classList.add('left-to-right');
		ourVision.classList.add('right-to-left');
	} else {
		nav.classList.remove('header__nav-scroll');
		logo.style.width = '12rem';
		logo.style.height = '12rem';
		mobileNavButton.style.width = '7rem'
		mobileNavButton.style.height = '7rem'
		mobileNavBackground.style.width = '6rem';
		mobileNavBackground.style.height = '6rem';
		
	}

	let top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('#differences').offsetTop;

   if (isVisible) {
     cardLogo1.classList.add('fade-in-1');
     cardLogo2.classList.add('fade-in-2');
     cardLogo3.classList.add('fade-in-3');
     cardLogo4.classList.add('fade-in-4');
   }
});

scrollDown.addEventListener('click', () => {
	aboutUs.scrollIntoView();
});


mobileNavItemsArr = Array.prototype.slice.call(mobileNavItems);

mobileNavItemsArr.map((item) => item.addEventListener('click', () =>{
	mobileNavCheckbox.checked = false;
}
))

mobileNavButton.addEventListener('click', () =>{
	if(mobileNavCheckbox.checked === true){
		// mobileNavBackground.style = 'transition: "none"';
		console.log("clicked");
		mobileNavBackground.style.transition = 'none';
		mobileNav.style.transition = 'none'; 
	}
})


