const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const buttonDeleteEl = document.querySelector('.button-delete');

const BASE_URL = "https://api.escuelajs.co/";
const endpoint = "api/v1/products";
const url = BASE_URL + endpoint;


async function POST(newObj) {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newObj),
	})
	const data = await response.json();
	console.log(data.id);
	return data.id; 
}

buttonSendEl.addEventListener('click', (e) => {
	e.preventDefault();
	const objForm = {
		title: inputTitleEl.value,
		price: inputPriceEl.value,
		description: inputDescriptionEl.value,
		categoryId: inputCategoryEl.value,
		images: [inputImagesEl.value]
	}
	POST(objForm);
})

const DELETE = async (productId) => {
	const deleteUrl = `${BASE_URL}${endpoint}/${productId}`;
	const response = await fetch(deleteUrl, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		}
	})
}

buttonDeleteEl.addEventListener('click', async (e) => {
	e.preventDefault();
	const productId = prompt("Inserisci l'ID del prodotto da eliminare:");
	if (!productId || isNaN(productId)) {
		alert("ID del prodotto non valido.");
		console.log('ID non valido')
		return;
	}
	console.log('ID eliminato')
	await DELETE(productId);
})