import { API_KEY } from "./keys.js";

const inputEl = document.querySelector('#input');
const containerCardsEl = document.querySelector('.container-cards');
let btn1El = document.querySelector('#button1');
let btn2El = document.querySelector('#button2');
let btn3El = document.querySelector('#button3');
const btnAvanti = document.querySelector('#avanti');
const btnIndietro = document.querySelector('#indietro');
const btnNowPlaying = document.querySelector('#now_playing');
const btnPopular = document.querySelector('#popular');
const btnTopRated = document.querySelector('#top_rated');
const btnUpcoming = document.querySelector('#upcoming');

let resData = [];
let page = 1;
let maxPage;
let index = 0;
const arrayButtonsID = ID();

btn1El.textContent = 1;
btn2El.textContent = Number(btn1El.textContent) + 1;
btn3El.textContent = Number(btn1El.textContent) + 2;

function displayProducts(product) {
	product.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

function filterProducts(original_title) {
	const filteredProducts = resData.filter(product => product.original_title.toLowerCase().includes(original_title));
	containerCardsEl.innerHTML = '';
	filteredProducts.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

function createCard(product) {
	const cardEl = document.createElement('div');
	cardEl.className = 'card';
	const containerImgEl = document.createElement('div');
	containerImgEl.className = 'container-img';
	const imgCardEl = document.createElement('img');
	imgCardEl.className = 'card-img';
	imgCardEl.src = `https://image.tmdb.org/t/p/original${product.poster_path}`;
	imgCardEl.alt = 'Immagine';
	imgCardEl.width = 200;
	const descriptionCardEl = document.createElement('p');
	descriptionCardEl.className = 'card-description';
	descriptionCardEl.textContent = product.overview;
	containerImgEl.append(imgCardEl);
	cardEl.append(containerImgEl, descriptionCardEl);
	return cardEl;
}

function ID() {
	const arrayID = document.querySelectorAll('.category');
	const ids = [];
	arrayID.forEach(element => {
	ids.push(element.id);
	});
	return ids;
}

function resetButtons() {
	page = 1;
	btn1El.textContent = 1;
	btn2El.textContent = Number(btn1El.textContent) + 1;
	btn3El.textContent = Number(btn1El.textContent) + 2;
}

function buttonIndexID(element) {
	for(let i = 0; i < arrayButtonsID.length; i++) {
		if (element.id === arrayButtonsID[i]) {
			return i;
		}
	}
}

const options = {
	headers: {
		Authorization: `Bearer ${API_KEY}`
	}
};

fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
	return response.json();
}).then((responseData) => {
    resData = responseData.results;
	maxPage = responseData.total_pages;
    displayProducts(resData);
    inputEl.addEventListener('input', (event) => {
        const inputValue = event.target.value.toLowerCase();
        filterProducts(inputValue);
    });
	btnPopular.addEventListener('click', () => {
		resetButtons();
		index = buttonIndexID(btnPopular);
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	});
	btnTopRated.addEventListener('click', () => {
		resetButtons();
		index = buttonIndexID(btnTopRated);
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	});
	btnUpcoming.addEventListener('click', () => {
		resetButtons();
		index = buttonIndexID(btnUpcoming);
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	});
	btnNowPlaying.addEventListener('click', () => {
		resetButtons();
		index = buttonIndexID(btnNowPlaying);
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	});
	btn1El.addEventListener('click', () => {
		page = btn1El.textContent;
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	})
	btn2El.addEventListener('click', () => {
		page = btn2El.textContent;
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	})
	btn3El.addEventListener('click', () => {
		page = btn3El.textContent;
		fetch(`https://api.themoviedb.org/3/movie/${arrayButtonsID[index]}?language=en-US&page=${page}`, options).then((response) => {
			return response.json();
		}).then((responseData) => {
			inputEl.value = '';
			resData = responseData.results;
			maxPage = responseData.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}).catch((err) => {
			console.error(err);
		})
	})
	btnAvanti.addEventListener('click', () => {
		if (Number(btn3El.textContent) === maxPage) {
			return;
		}
		btn1El.textContent = Number(btn1El.textContent) + 1;
		btn2El.textContent = Number(btn1El.textContent) + 1;
		btn3El.textContent = Number(btn1El.textContent) + 2;
	})
	btnIndietro.addEventListener('click', () => {
		if (Number(btn1El.textContent) === 1) {
			return;
		}
		btn1El.textContent = Number(btn1El.textContent) - 1;
		btn2El.textContent = Number(btn1El.textContent) + 1;
		btn3El.textContent = Number(btn1El.textContent) + 2;
	})
}).catch((err) => {
	console.error(err);
})