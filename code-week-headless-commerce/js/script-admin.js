import { HOME } from "./home-admin.js";
import { createCard, FETCH, displayProducts } from "./cards-admin.js";
import { MODAL } from "./modals-admin.js";

const inputFilter = document.querySelector('.filter');
const btnProducts = document.querySelectorAll('.products');

HOME();	//RICHIAMO HOME DA HOME-ADMIN.JS
MODAL(); //RICHIAMO MODAL DA MODALS-ADMIN.JS

const BASE_URL = 'https://fakestoreapi.com/';
let end_point = 'products';

let resData = await FETCH(BASE_URL, end_point); //RICHIAMO FETCH DA CARDS-ADMIN.JS
displayProducts(resData); //RICHIAMO DISPLAYPRODUCTS DA CARDS-ADMIN.JS

inputFilter.addEventListener('input', (event) => {
	const inputValue = event.target.value.toLowerCase();
	filterProducts(inputValue);
})

function filterProducts(title) {
	const filteredProducts = resData.filter(product => product.title.toLowerCase().includes(title));

	const containerCardsEl = document.querySelector('.container-cards');
	containerCardsEl.innerHTML = '';

	filteredProducts.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

btnProducts.forEach(button => {
	button.addEventListener('click', async () => {
		const containerCart = document.querySelector('.container-custom');
		containerCart.style.display = 'none';
		const containerSectionCard = document.querySelector('.container');
		containerSectionCard.style.display = 'flex';
		end_point = 'products';
		await FETCH(BASE_URL, end_point);
		displayProducts(resData);
		inputFilter.value = '';
	})
})

const btnCustom = document.querySelectorAll('.personalizza');
btnCustom.forEach(button => {
	button.addEventListener('click', () => {

	})
})

function searchColorBackground() {
	const savedColor = localStorage.getItem('backgroundColor');
	if (savedColor) {
		const background = document.querySelectorAll('.background-color');
		background.forEach(page => {
			page.style.backgroundColor = savedColor;
		})
	}
}

searchColorBackground();

const colorPicker = document.querySelector('#colorPicker');
const sendColor = document.querySelector('.sendColor');
sendColor.addEventListener('click', () => {
	let color = colorPicker.value;
	document.querySelector('.background-color').style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
})

function searchLogo() {
	const savedLogo = localStorage.getItem('logoContent');
	const savedLogoColor = localStorage.getItem('logoColor');
	if (savedLogo && savedLogoColor) {
		const logos = document.querySelectorAll('.logo');
		logos.forEach(page => {
			page.textContent = savedLogo;
			page.style.color = savedLogoColor;
		})
	}
}

searchLogo();

const colorLogo = document.querySelector('#colorLogo');
const customLogo = document.querySelector('#customLogo');
const sendLogo = document.querySelector('.sendLogo');

sendLogo.addEventListener('click', () => {
	let logoColor = colorLogo.value;
	let logo = customLogo.value;
	if (logo !== '') {
		const logos = document.querySelectorAll('.logo');
		logos.forEach(page => {
			page.textContent = logo;
			page.style.color = logoColor;
		})
		localStorage.setItem('logoContent', logo);
		localStorage.setItem('logoColor', logoColor);
		customLogo.value = '';
	}
})

function searchSecondColorBackground() {
	const savedColor = localStorage.getItem('secondBackgroundColor');
	if (savedColor) {
		const background = document.querySelectorAll('.second-background');
		background.forEach(page => {
			page.style.backgroundColor = savedColor;
		})
	}
}

searchSecondColorBackground();

const secondColorPicker = document.querySelector('#secondColorPicker');
const sendSecondColor = document.querySelector('.sendSecondColor');
sendSecondColor.addEventListener('click', () => {
	let color = secondColorPicker.value;
	document.querySelector('.second-background').style.backgroundColor = color;
    localStorage.setItem('secondBackgroundColor', color);
})

const customNavbar = document.querySelector('.container-navbar .personalizza');
customNavbar.addEventListener('click', () => {
	const containerSectionCard = document.querySelector('.container');
	containerSectionCard.style.display = 'none';
	const containerCart = document.querySelector('.container-custom');
	containerCart.style.display = 'flex';
})

const customDropdown = document.querySelector('.dropdown-menu .personalizza');
customDropdown.addEventListener('click', () => {
	const containerSectionCard = document.querySelector('.container');
	containerSectionCard.style.display = 'none';
	const containerCart = document.querySelector('.container-custom');
	containerCart.style.display = 'flex';
})

const openClose = document.querySelector('.openClose');
openClose.addEventListener('click', () => {
	const containerCustomFirst = document.querySelector('.backgroundColorCustom');
	const containerCustomSecond = document.querySelector('.secondBackgroundColorCustom');
	const containerCustomThird = document.querySelector('.logoCustom');
	const styleFirst = window.getComputedStyle(containerCustomFirst).getPropertyValue('display');
	const styleSecond = window.getComputedStyle(containerCustomSecond).getPropertyValue('display');
	const styleThird = window.getComputedStyle(containerCustomThird).getPropertyValue('display');
	if (styleFirst !== 'none' || styleSecond !== 'none' || styleThird !== 'none') {
		containerCustomFirst.style.display = 'none';
		containerCustomSecond.style.display = 'none';
		containerCustomThird.style.display = 'none';
	} else {
		containerCustomFirst.style.display = 'flex';
		containerCustomSecond.style.display = 'flex';
		containerCustomThird.style.display = 'flex';
	}
})

function updateFromLocalStorage(key, selector) {
	const value = localStorage.getItem(key);
	if (value) {
		document.querySelectorAll(selector).forEach(element => {
			element.textContent = value;
		});
		document.getElementById(key).value = value;
	}
}

updateFromLocalStorage('nameAdmin', '.nameAdmin');
updateFromLocalStorage('where', '.where');
updateFromLocalStorage('PIVA', '.PIVA');
updateFromLocalStorage('CF', '.CF');

function saveAndUpdate(buttonSelector, inputId, classSelector, localStorageKey) {
	const buttonElement = document.querySelector(buttonSelector);
	buttonElement.addEventListener('click', () => {
		const value = document.getElementById(inputId).value;
		localStorage.setItem(localStorageKey, value);
		document.querySelectorAll(classSelector).forEach(element => {
			element.textContent = value;
		});
		document.getElementById(inputId).value = '';
	});
}

saveAndUpdate('.sendNameAdmin', 'nameAdmin', '.nameAdmin', 'nameAdmin');
saveAndUpdate('.sendWhere', 'where', '.where', 'where');
saveAndUpdate('.sendPIVA', 'PIVA', '.PIVA', 'PIVA');
saveAndUpdate('.sendCF', 'CF', '.CF', 'CF');