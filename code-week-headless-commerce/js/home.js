export const HOME = function() {
//HAMBURGER MENU
const btnHamburgerOpen = document.querySelector('.container-span');
const dropdownHamburger = document.querySelector('.dropdown-menu');
const btnHamburgerClose = document.querySelector('.container-close');

btnHamburgerOpen.addEventListener('click', () => {
	btnHamburgerOpen.style.display = 'none';
	dropdownHamburger.style.display = 'flex';
})

btnHamburgerClose.addEventListener('click', () => {
	btnHamburgerOpen.style.display = 'flex';
	dropdownHamburger.style.display = 'none';
})
//HAMBURGER MENU

//IMG HERO
const imgScroll = document.querySelector('.img-hero');

const imgArray = ['./img/first-img.jpg', './img/second-img.jpg', './img/third-img.jpg'];
const textArray = [document.querySelector('.header1'),
					document.querySelector('.header2'),
					document.querySelector('.header3')]

let index = 0;

setInterval(() => {
	index++;
	if (index >= imgArray.length) {
		index = 0;
	}
	imgScroll.src = imgArray[index];
	textArray.forEach((header, idx) => {
		if (idx === index) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	})
}, 5000)
//IMG HERO
}
