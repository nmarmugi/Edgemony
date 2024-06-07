const containerBtnEl = document.querySelector('.container');
const BtnEl = document.querySelector('.button');
const containerCardsEl = document.querySelector('.container-cards');
const inputEl = document.querySelector('#input');

let resData = [];
console.log(resData)

fetch('https://fakestoreapi.com/products').then((res) => {
	return res.json();
	}).then((data) => {
	resData = data;

	BtnEl.addEventListener('click', () => {
		containerBtnEl.style.display = 'none';
		BtnEl.style.display = 'none';
		displayProducts(resData);
		console.log(resData)
	});

	inputEl.addEventListener('input', (event) => {
		const inputValue = event.target.value.toLowerCase();
		filterProducts(inputValue);
	});
});

function displayProducts(products) {
	containerCardsEl.innerHTML = '';

	products.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

function createCard(product) {
	const cardEl = document.createElement('div');
	cardEl.className = 'card';

	const titleCardEl = document.createElement('h2');
	titleCardEl.className = 'card-title';
	titleCardEl.textContent = product.title;

	const imgCardEl = document.createElement('img');
	imgCardEl.className = 'card-img';
	imgCardEl.src = product.image;
	imgCardEl.alt = 'Immagine';
	imgCardEl.width = 100;

	const rateCardEl = document.createElement('p');
	rateCardEl.className = 'card-rate';
	rateCardEl.textContent = `${product.rating.rate} / 5`;

	const descriptionCardEl = document.createElement('p');
	descriptionCardEl.className = 'card-description';
	descriptionCardEl.textContent = product.description;

	const priceCardEl = document.createElement('p');
	priceCardEl.className = 'card-price';
	priceCardEl.textContent = `${product.price} euro`;

	cardEl.append(titleCardEl, imgCardEl, rateCardEl, descriptionCardEl, priceCardEl);
	return cardEl;
}

function filterProducts(title) {
	const filteredProducts = resData.filter(product => product.title.toLowerCase().includes(title));

	containerCardsEl.innerHTML = '';

	filteredProducts.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}
