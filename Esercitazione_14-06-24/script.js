import { clearP, errorMessage } from "./utils.js";

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

const options = {
	headers: {
		accept: 'application/json'
	}
}

const GET = async (id) => {
	try {
		const response = await fetch(`${url}/${id}`, options);
		const data = await response.json();
		if (data.message || inputSearchAndEditEl.value === 0 || !inputSearchAndEditEl.value) {
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

buttonSendEl.addEventListener('click', async () => {
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

buttonDeleteEl.addEventListener('click', () => {
	DELETE(inputDeleteIdEl.value);
	console.log(`Oggetto con ID: ${inputDeleteIdEl.value} eliminato`);
})

buttonSearchEl.addEventListener('click', async () => {
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

buttonEditEl.addEventListener('click', () => {
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