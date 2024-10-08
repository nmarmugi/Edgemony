//FUNZIONI PER LA CREAZIONE DELLE CARDS DALL'API E PER IL DISPLAY ADMIN

export async function FETCH(BASE_URL, end_point) {
	const response = await fetch(`${BASE_URL}${end_point}`);
	const data = await response.json();
	return data;
}

export function displayProducts(products) {
	const containerCardsEl = document.querySelector('.container-cards');
	containerCardsEl.innerHTML = '';

	products.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

export function createCard(product) {
	const cardEl = document.createElement('div');
	cardEl.className = 'card';

	const imgCardEl = document.createElement('img');
	imgCardEl.className = 'card-img';
	imgCardEl.src = product.image;
	imgCardEl.alt = 'Immagine';
	imgCardEl.width = 100;

	const titleCardEl = document.createElement('h2');
	titleCardEl.className = 'card-title';
	titleCardEl.textContent = product.title;

	const priceCardEl = document.createElement('p');
	priceCardEl.className = 'card-price';
	priceCardEl.textContent = `${product.price} euro`;

	const descriptionCardEl = document.createElement('p');
	descriptionCardEl.className = 'card-description';
	descriptionCardEl.textContent = product.description;

	cardEl.append(imgCardEl, titleCardEl, priceCardEl, descriptionCardEl);
	return cardEl;
}