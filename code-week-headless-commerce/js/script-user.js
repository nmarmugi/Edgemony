import { createShops } from "./shops-user.js";
import { createCard, FETCH, displayProducts, displayProductsCart, GET, cart } from "./cards-user.js";
import { MODAL } from "./modals-admin.js";
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

const BASE_URL = 'https://fakestoreapi.com/';
let end_point = 'products';

let resData = await FETCH(BASE_URL, end_point); //RICHIAMO FETCH DA CARDS-ADMIN.JS
displayProducts(resData); //RICHIAMO DISPLAYPRODUCTS DA CARDS-ADMIN.JS

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
		const containerCart = document.querySelector('.container-cart');
		containerCart.style.display = 'none';
		const containerSectionCard = document.querySelector('.container');
		containerSectionCard.style.display = 'flex';
		inputFilter.value = '';
	})
})

const buttonCart = document.querySelectorAll('.button-cart');
buttonCart.forEach(button => {
	button.addEventListener('click', async (e) => {
		numberCartNavbar.textContent = Number(numberCartNavbar.textContent) + 1;
		numberCartDropdown.textContent = Number(numberCartDropdown.textContent) + 1;
		numberCartDropdown.style.display = 'inline-block';
		numberCartNavbar.style.display = 'inline-block';
		let idCard = e.target.parentNode.querySelector('.card-id').textContent;
		let cardToCart = await GET(idCard);
		cart.push(cardToCart);
		displayProductsCart(cart);
	})
})