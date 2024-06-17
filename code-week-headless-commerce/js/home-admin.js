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
}