//FUNZIONI PER LA CREAZIONE DELLE CARDS DALL'API E PER IL DISPLAY USER

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

//FUNZIONI PER LA CREAZIONE DEL CART E PER IL DISPLAY
export function displayProductsCart(products) {
	const containerCardsCartEl = document.querySelector('.cart');
	containerCardsCartEl.innerHTML = '';

	products.forEach(product => {
		const cardEl = createCardForCart(product);
		containerCardsCartEl.append(cardEl);
	});
}

export const GET = async (id) => {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
		headers: {
			accept: 'application/json'
		}
	})
	const data = await response.json();
	return data;
}

export let cart = [];

export function createCardForCart(product) {
	const cardEl = document.createElement('div');
	cardEl.className = 'card-cart';

	const imgCardEl = document.createElement('img');
	imgCardEl.className = 'card-img-cart';
	imgCardEl.src = product.image;
	imgCardEl.alt = 'Immagine';
	imgCardEl.width = 100;

	const titleCardEl = document.createElement('h2');
	titleCardEl.className = 'card-title-cart';
	titleCardEl.textContent = product.title;

	const priceCardEl = document.createElement('p');
	priceCardEl.className = 'card-price-cart';
	priceCardEl.textContent = `${product.price} euro`;

	const idCardEl = document.createElement('p');
	idCardEl.className = 'card-id-cart';
	idCardEl.textContent = product.id;

	const btnCart = document.createElement('button');
	btnCart.className = 'card-button-cart';
	btnCart.textContent = 'RIMUOVI';
	btnCart.addEventListener('click', (e) => {
		let idCard = e.target.parentNode.querySelector('.card-id-cart').textContent;
		for(let i = 0; i < cart.length; i++) {
			if (cart[i].id == idCard) {
				cart.splice(i, 1);
                break; 
			}
		}
		const numberCartNavbar = document.querySelector('.container-navbar .number');
		const numberCartDropdown = document.querySelector('.dropdown-menu .number');
		numberCartNavbar.textContent = Number(numberCartNavbar.textContent) - 1;
		numberCartDropdown.textContent = Number(numberCartDropdown.textContent) - 1;
		const totalPrice = document.querySelector('.total');
		let priceCard = e.target.parentNode.querySelector('.card-price-cart').textContent.replace(/[^\d.]/g, '');
        let priceWithVAT = Number(priceCard) * 1.22;

        let currentTotal = totalPrice.textContent.replace(/[^\d.]/g, '');
        let newTotal = Number(currentTotal) - priceWithVAT;

        totalPrice.textContent = newTotal.toFixed(2) + ' euro';
		if (numberCartDropdown.textContent === '0' && numberCartNavbar.textContent === '0') {
			numberCartDropdown.style.display = 'none';
			numberCartNavbar.style.display = 'none';
		}
		displayProductsCart(cart);
	})

	cardEl.append(imgCardEl, titleCardEl, priceCardEl, idCardEl, btnCart);
	return cardEl;
}
//FUNZIONI PER LA CREAZIONE DEL CART E PER IL DISPLAY

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

	const idCardEl = document.createElement('p');
	idCardEl.className = 'card-id';
	idCardEl.textContent = product.id;

	const btnCart = document.createElement('button');
	btnCart.className = 'button-cart';
	btnCart.textContent = 'AGGIUNGI AL CARRELLO';

	cardEl.append(imgCardEl, titleCardEl, priceCardEl, descriptionCardEl, btnCart, idCardEl);
	return cardEl;
}