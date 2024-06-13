const bodyEl = document.querySelector('body');
const pTitleEl = document.querySelector('.p-title');
const pPriceEl = document.querySelector('.p-price');
const pDescriptionEl = document.querySelector('.p-description');
const pCategoryEl = document.querySelector('.p-category-id');
const pImagesEl = document.querySelector('.p-images');
const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const buttonDeleteEl = document.querySelector('.button-delete');
const inputDeleteIdEl = document.querySelector('.delete-id');
const inputSearchAndEditEl = document.querySelector('.search-and-edit-id');
const buttonSearchEl = document.querySelector('.button-search');
const buttonEditEl = document.querySelector('.button-edit');
const buttonResetEl = document.querySelector('.button-reset');
const modal = document.getElementById("deleteModal");
const span = document.getElementsByClassName("close")[0];
const textModal = document.querySelector('.text-modal');

const BASE_URL = "https://api.escuelajs.co/";
const endpoint = "api/v1/products";
const url = BASE_URL + endpoint;
let ID;

function clearP() {
	pTitleEl.textContent = '';
	pPriceEl.textContent = '';
	pDescriptionEl.textContent = '';
	pCategoryEl.textContent = '';
	pImagesEl.textContent = '';
}

function errorMessage(array) {
	if (array.length === 4) {
		array.push('Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}');
		array.forEach(message => {
			if (message.toLowerCase().includes('title')) {
				pTitleEl.textContent = 'Title should not be empty';
			}
			if (message.toLowerCase().includes('price')) {
				pPriceEl.textContent = "Price must be a positive number";
			}
			if (message.toLowerCase().includes('description')) {
				pDescriptionEl.textContent = 'Description should not be empty';
			}
			if (message.toLowerCase().includes('category')) {
				pCategoryEl.textContent = 'Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}';
			}
			if (message.toLowerCase().includes('images')) {
				pImagesEl.textContent = 'Each value in images must be a URL address"';
			}
		});
		array.pop('Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}');
		return;
	} else {
		if (array[0].includes('Category')) {
			pCategoryEl.textContent = 'Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}';
		}
	}
}

const options = {
	headers: {
		accept: 'application/json'
	}
}

const GET = async (id) => {
	try {
		const response = await fetch(`${url}/${id}`, options);
		const data = await response.json();
		if (data.message) {
			throw data;
		}
		console.log(data);
		ID = data.id;
		textModal.textContent = 'Oggetto trovato!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
		return data;
	} catch (err) {
		textModal.textContent = 'Oggetto non trovato!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
}

const POST = async (obj) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		});
		const data = await response.json();
		if (data.message || !inputCategoryEl.value || inputCategoryEl.value === 0) {
			throw data;
		}
		textModal.textContent = 'Oggetto caricato!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
		ID = data.id;
		clearP();
		return data.id;
	} catch (err) {
		textModal.textContent = 'Oggetto non caricato, riempire in maniera corretta i campi!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
		clearP();
		if (Array.isArray(err.message)) {
			errorMessage(err.message);
			return;
		}
		errorMessage(Array(err.message));
	}
}

buttonSendEl.addEventListener('click', async (e) => {
	e.preventDefault();
	const newObj = {
		title: inputTitleEl.value,
		price: inputPriceEl.value,
		description: inputDescriptionEl.value,
		categoryId: inputCategoryEl.value,
		images: [inputImagesEl.value]
	}
	console.log('Oggetto creato con ID:', await POST(newObj), newObj);
})

const DELETE = async (id) => {
	try {
		const response = await fetch(`${url}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		if (data.message) {
			throw data;
		}
		textModal.textContent = 'Oggetto rimosso!'
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
		return data;
	} catch (err) {
		textModal.textContent = 'Non sono riuscito a rimuovere l\'oggetto!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
}

buttonDeleteEl.addEventListener('click', (e) => {
	e.preventDefault();
	DELETE(inputDeleteIdEl.value);
	console.log(`Oggetto con ID: ${inputDeleteIdEl.value} eliminato`);
})

buttonSearchEl.addEventListener('click', async (e) => {
	e.preventDefault();
	const searchedObj = await GET(inputSearchAndEditEl.value);
	inputTitleEl.value = searchedObj.title;
	inputPriceEl.value = searchedObj.price;
	inputDescriptionEl.value = searchedObj.description;
	inputCategoryEl.value = searchedObj.category.id;
	inputImagesEl.value = searchedObj.images.join('').replace(/[\[\]"]/g, '');
})

const PUT = async (id, obj) => {
	try {
		const response = await fetch(`${url}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		});
		const data = await response.json();
		if (data.message) {
			throw data;
		}
		textModal.textContent = 'Oggetto modificato!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 2000);
		return data;
	} catch (err) {
		textModal.textContent = 'Oggetto non modificato, riempire i campi nella maniera corretta!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
}

buttonEditEl.addEventListener('click', (e) => {
	e.preventDefault();
	const editObj = {
		title: inputTitleEl.value,
		price: inputPriceEl.value,
		description: inputDescriptionEl.value,
		categoryId: inputCategoryEl.value,
		images: [inputImagesEl.value]
	}
	PUT(ID, editObj);
})

buttonResetEl.addEventListener('click', () => {
	inputTitleEl.value = '';
	inputPriceEl.value = '';
	inputDescriptionEl.value = '';
	inputCategoryEl.value = '';
	inputImagesEl.value = '';
	inputDeleteIdEl.value = '';
	inputSearchAndEditEl.value = '';
})

span.addEventListener('click', () => {
	modal.style.display = "none";
});