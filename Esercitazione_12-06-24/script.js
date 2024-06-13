const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const buttonDeleteEl = document.querySelector('.button-delete');
const inputDeleteIdEl = document.querySelector('.delete-id');
const buttonResetEl = document.querySelector('.button-reset');
const modal = document.getElementById("deleteModal");
const span = document.getElementsByClassName("close")[0];

const BASE_URL = "https://api.escuelajs.co/";
const endpoint = "api/v1/products";
const url = BASE_URL + endpoint;

const options = {
	headers: {
		accept: 'application/json'
	}
}

const GET = async () => {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
}

GET();

const POST = async (obj) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
	});
	const data = await response.json();
	return data.id;
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
	const response = await fetch(`${url}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	modal.style.display = "block";
	setTimeout(() => {
		modal.style.display = "none";
	}, 5000);
	return data;
}

buttonDeleteEl.addEventListener('click', (e) => {
	e.preventDefault();
	DELETE(inputDeleteIdEl.value);
	console.log(`Oggetto con ID: ${inputDeleteIdEl.value} eliminato`);
})

buttonResetEl.addEventListener('click', () => {
	inputTitleEl.value = '';
	inputPriceEl.value = '';
	inputDescriptionEl.value = '';
	inputCategoryEl.value = '';
	inputImagesEl.value = '';
	inputDeleteIdEl.value = '';
})

span.addEventListener('click', () => {
	modal.style.display = "none";
});