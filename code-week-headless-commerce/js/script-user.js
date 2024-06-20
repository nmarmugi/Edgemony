import { createShops } from "./shops-user.js";
import { createCard, FETCH, displayProducts, displayProductsCart, GET, cart } from "./cards-user.js";
import { MODAL, modalPay } from "./modals-admin.js";
import { HOME } from "./home-admin.js";

createShops();

const containerCards = document.querySelector('.container-cards');
containerCards.style.display = 'none';

const linkToAdmin = document.querySelectorAll('.link-to-admin');
linkToAdmin.forEach(link => {
	link.addEventListener('click', () => {
		const removeShops = document.querySelector('.container-shops');
		removeShops.style.display = 'none';
		containerCards.style.display = 'flex';
	})
})

const inputFilter = document.querySelector('.filter');
const btnProducts = document.querySelectorAll('.products');

HOME();	//RICHIAMO HOME DA HOME-ADMIN.JS
MODAL(); //RICHIAMO MODAL DA MODALS-ADMIN.JS
modalPay();

const BASE_URL = 'https://fakestoreapi.com/';
let end_point = 'products';

let resData = await FETCH(BASE_URL, end_point); //RICHIAMO FETCH DA CARDS-ADMIN.JS
displayProducts(resData); //RICHIAMO DISPLAYPRODUCTS DA CARDS-ADMIN.JS

//GESTIONE DEL CARRELLO
const numberCartDropdown = document.querySelector('.dropdown-menu .number');
numberCartDropdown.style.display = 'none';

const numberCartNavbar = document.querySelector('.container-navbar .number');
numberCartNavbar.style.display = 'none';

const cartNavbar = document.querySelector('.container-navbar .carrello');
cartNavbar.addEventListener('click', () => {
	const containerSectionCard = document.querySelector('.container');
	containerSectionCard.style.display = 'none';
	const containerCart = document.querySelector('.container-cart');
	containerCart.style.display = 'flex';
})

const cartDropdown = document.querySelector('.dropdown-menu .carrello');
cartDropdown.addEventListener('click', () => {
	const containerSectionCard = document.querySelector('.container');
	containerSectionCard.style.display = 'none';
	const containerCart = document.querySelector('.container-cart');
	containerCart.style.display = 'flex';
})
//GESTIONE DEL CARRELLO

// FILTRAGGIO DEI PRODOTTI
inputFilter.addEventListener('input', (event) => {
	const inputValue = event.target.value.toLowerCase();
	filterProducts(inputValue);
	const buttonCart = document.querySelectorAll('.button-cart');
		buttonCart.forEach(button => {
			button.addEventListener('click', async (e) => {
			console.log('cioa')
			numberCartNavbar.textContent = Number(numberCartNavbar.textContent) + 1;
			numberCartDropdown.textContent = Number(numberCartDropdown.textContent) + 1;
			numberCartDropdown.style.display = 'inline-block';
			numberCartNavbar.style.display = 'inline-block';
			let priceCard = e.target.parentNode.querySelector('.card-price').textContent.replace(/[^\d.]/g, '');
        	let priceWithVAT = Number(priceCard) * 1.22;

			let currentTotal = totalPrice.textContent.replace(/[^\d.]/g, '');
			let newTotal = Number(currentTotal) + priceWithVAT;
			totalPrice.textContent = newTotal.toFixed(2) + ' euro';
			let idCard = e.target.parentNode.querySelector('.card-id').textContent;
			let cardToCart = await GET(idCard);
			cart.push(cardToCart);
			displayProductsCart(cart);
		})
	})
})

function filterProducts(title) {
	const filteredProducts = resData.filter(product => product.title.toLowerCase().includes(title));
	
	const containerCardsEl = document.querySelector('.container-cards');
	containerCardsEl.innerHTML = '';
	
	filteredProducts.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	})
}
// FILTRAGGIO DEI PRODOTTI

// BOTTONE PRODOTTI
btnProducts.forEach(button => {
	button.addEventListener('click', async () => {
		const containerCart = document.querySelector('.container-cart');
		containerCart.style.display = 'none';
		const containerSectionCard = document.querySelector('.container');
		containerSectionCard.style.display = 'flex';
		displayProducts(resData);
		inputFilter.value = '';
		const buttonCart = document.querySelectorAll('.button-cart');
		buttonCart.forEach(button => {
			button.addEventListener('click', async (e) => {
			console.log('cioa')
			numberCartNavbar.textContent = Number(numberCartNavbar.textContent) + 1;
			numberCartDropdown.textContent = Number(numberCartDropdown.textContent) + 1;
			numberCartDropdown.style.display = 'inline-block';
			numberCartNavbar.style.display = 'inline-block';
			let priceCard = e.target.parentNode.querySelector('.card-price').textContent.replace(/[^\d.]/g, '');
        	let priceWithVAT = Number(priceCard) * 1.22;

			let currentTotal = totalPrice.textContent.replace(/[^\d.]/g, '');
			let newTotal = Number(currentTotal) + priceWithVAT;
			totalPrice.textContent = newTotal.toFixed(2) + ' euro';
			let idCard = e.target.parentNode.querySelector('.card-id').textContent;
			let cardToCart = await GET(idCard);
			cart.push(cardToCart);
			displayProductsCart(cart);
		})
	})
	})
})
// BOTTONE PRODOTTI

// PREZZO CARRELLO
const totalPrice = document.querySelector('.total');
const buttonCart = document.querySelectorAll('.button-cart');
buttonCart.forEach(button => {
	button.addEventListener('click', async (e) => {
		numberCartNavbar.textContent = Number(numberCartNavbar.textContent) + 1;
		numberCartDropdown.textContent = Number(numberCartDropdown.textContent) + 1;
		numberCartDropdown.style.display = 'inline-block';
		numberCartNavbar.style.display = 'inline-block';
		let priceCard = e.target.parentNode.querySelector('.card-price').textContent.replace(/[^\d.]/g, '');
        let priceWithVAT = Number(priceCard) * 1.22;

        let currentTotal = totalPrice.textContent.replace(/[^\d.]/g, '');
        let newTotal = Number(currentTotal) + priceWithVAT;
        totalPrice.textContent = newTotal.toFixed(2) + ' euro';
		let idCard = e.target.parentNode.querySelector('.card-id').textContent;
		let cardToCart = await GET(idCard);
		cart.push(cardToCart);
		displayProductsCart(cart);
	})
})
// PREZZO CARRELLO

// FUNZIONI PER PESCARE INFORMAZIONI DI STILE DAL LOCALSTORAGE
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

function updateFromLocalStorage(key, selector) {
	const value = localStorage.getItem(key);
	if (value) {
		document.querySelectorAll(selector).forEach(element => {
			element.textContent = value;
		});
	}
}

updateFromLocalStorage('nameAdmin', '.nameAdmin');
updateFromLocalStorage('where', '.where');
updateFromLocalStorage('PIVA', '.PIVA');
updateFromLocalStorage('CF', '.CF');
// FUNZIONI PER PESCARE INFORMAZIONI DI STILE DAL LOCALSTORAGE

// BOTTONE PER TORNARE AI NEGOZI LETTI NEL LOCALSTORAGE REGISTRATI CON VARI RESET
const backToShops = document.querySelectorAll('.backTo');
backToShops.forEach(button => {
	button.addEventListener('click', () => {
		const containerCart = document.querySelector('.container-cart');
		containerCart.style.display = 'none';
		const containerSectionCard = document.querySelector('.container');
		containerSectionCard.style.display = 'flex';
		const removeShops = document.querySelector('.container-shops');
		removeShops.style.display = 'flex';
		containerCards.style.display = 'none';
		displayProducts(resData);
		inputFilter.value = '';
		const buttonCart = document.querySelectorAll('.button-cart');
			buttonCart.forEach(button => {
				button.addEventListener('click', async (e) => {
				console.log('cioa')
				numberCartNavbar.textContent = Number(numberCartNavbar.textContent) + 1;
				numberCartDropdown.textContent = Number(numberCartDropdown.textContent) + 1;
				numberCartDropdown.style.display = 'inline-block';
				numberCartNavbar.style.display = 'inline-block';
				let priceCard = e.target.parentNode.querySelector('.card-price').textContent.replace(/[^\d.]/g, '');
				let priceWithVAT = Number(priceCard) * 1.22;
	
				let currentTotal = totalPrice.textContent.replace(/[^\d.]/g, '');
				let newTotal = Number(currentTotal) + priceWithVAT;
				totalPrice.textContent = newTotal.toFixed(2) + ' euro';
				let idCard = e.target.parentNode.querySelector('.card-id').textContent;
				let cardToCart = await GET(idCard);
				cart.push(cardToCart);
				displayProductsCart(cart);
			})
		})
	})
})
// BOTTONE PER TORNARE AI NEGOZI LETTI NEL LOCALSTORAGE REGISTRATI CON VARI RESET