import { createShops } from "./shops-user.js";
import { createCard, FETCH, displayProducts } from "./cards-user.js";
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
		end_point = 'products';
		await FETCH(BASE_URL, end_point);
		displayProducts(resData);
		inputFilter.value = '';
	})
})