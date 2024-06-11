import { API_KEY } from "./keys.js";

const bodyEl = document.querySelector('body');
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
const btnType = document.querySelector('.type');
const btnAiringToday = document.querySelector('.airing_today');
const btnPopularTV = document.querySelector(`.popular`);
const btnTopRatedTV = document.querySelector(`.top_rated`);
const btnOnTheAir = document.querySelector('.on_the_air');
const btnTV = document.querySelector('#tv');
const selectGen = document.querySelector('select');

let resData = [];
let page = 1;
let maxPage;
let index = 0;
const arrayButtonsID = movieID();
const arrayButtonsClass = tvClass();
let classBtn = buttonClass(btnPopular);
let btnID;
let type = [classBtn];
let currentGenre = '';

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

function filterProductsTV(original_name) {
	const filteredProducts = resData.filter(product => product.original_name.toLowerCase().includes(original_name));
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

function movieID() {
	const arrayID = document.querySelectorAll('.movie');
	const ids = [];
	arrayID.forEach(element => {
	ids.push(element.id);
	});
	return ids;
}

function tvClass() {
	const arrayClass = document.querySelectorAll('.tv');
	const classes = [];
	arrayClass.forEach(element => {
		if (element.classList.length === 2) {
			classes.push(element.classList[1]);
		}
	})
	return classes;
}

function buttonIndexClass(element) {
	for(let i = 0; i < arrayButtonsClass.length; i++) {
		if (element.classList[1] === arrayButtonsClass[i]) {
			return i;
		}
	}
}

function buttonClass(button) {
	return button.className;
}

function buttonID(button) {
	return button.id;
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

async function loadMovies(endpoint, page = 1) {
	if (currentGenre) {
		if (type[0] === classBtn) {
			const response = await fetch(`https://api.themoviedb.org/3/discover/${classBtn}?page=${page}&with_genres=${currentGenre}`, options);
			const data = await response.json();
			inputEl.value = '';
			resData = data.results;
			maxPage = data.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}
		if (type[0] === btnID) {
			const response = await fetch(`https://api.themoviedb.org/3/discover/${btnID}?page=${page}&with_genres=${currentGenre}`, options);
			const data = await response.json();
			inputEl.value = '';
			resData = data.results;
			maxPage = data.total_pages;
			containerCardsEl.innerHTML = '';
			displayProducts(resData);
		}
	}
}

async function loadGenres() {
	if (type[0] === classBtn) {
		const url = `https://api.themoviedb.org/3/genre/${classBtn}/list`;
		const response = await fetch(url, options);
		const data = await response.json();
		populateGenreSelect(data.genres);
	}
	if (type[0] === btnID) {
		const url = `https://api.themoviedb.org/3/genre/${btnID}/list`;
		const response = await fetch(url, options);
		const data = await response.json();
		populateGenreSelect(data.genres);
	}
}

function populateGenreSelect(genres) {
	genres.forEach(genre => {
		const option = document.createElement('option');
		option.value = genre.id;
		option.textContent = genre.name;
		selectGen.appendChild(option);
	});
}

const options = {
	headers: {
		Authorization: `Bearer ${API_KEY}`
	}
};

const GET = async () => {
	const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	resData = data.results;
	maxPage = data.total_pages;
    displayProducts(resData);
    inputEl.addEventListener('input', (event) => {
        const inputValue = event.target.value.toLowerCase();
        filterProducts(inputValue);
    });
}
selectGen.addEventListener('change', async () => {
	if (selectGen.options[0].selected) {
		inputEl.value = '';
		containerCardsEl.innerHTML = '';
		await GET();
		return;
	}
	if (type[0] === classBtn || type[0] === btnID) {
		currentGenre = selectGen.value;
		loadMovies(arrayButtonsClass[index], page);
	}
});
btnType.addEventListener('click', async (e) => {
	const target = e.target;
	if (target.className === 'movie') {
		resetButtons();
		index = buttonIndexID(btnPopular);
		classBtn = buttonClass(btnPopular);
		btnAiringToday.style.display = 'none';
		btnTopRatedTV.style.display = 'none';
		btnPopularTV.style.display = 'none';
		btnOnTheAir.style.display = 'none';
		btnNowPlaying.style.display = 'block';
		btnTopRated.style.display = 'block';
		btnPopular.style.display = 'block';
		btnUpcoming.style.display = 'block';
		const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(classBtn);
		selectGen.selectedIndex = 0;
	}
	if (target.id === 'tv') {
		resetButtons();
		index = buttonIndexClass(btnPopularTV);
		btnID = buttonID(btnTV);
		btnAiringToday.style.display = 'block';
		btnTopRatedTV.style.display = 'block';
		btnPopularTV.style.display = 'block';
		btnOnTheAir.style.display = 'block';
		btnNowPlaying.style.display = 'none';
		btnTopRated.style.display = 'none';
		btnPopular.style.display = 'none';
		btnUpcoming.style.display = 'none';
		const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(btnID);
		selectGen.selectedIndex = 0;
		inputEl.addEventListener('input', (event) => {
			const inputValue = event.target.value.toLowerCase();
			filterProductsTV(inputValue);
		});
	}
	
})
btnPopularTV.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexClass(btnPopularTV);
	btnID = buttonID(btnTV);
	const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(btnID);
	selectGen.selectedIndex = 0;
});
btnTopRatedTV.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexClass(btnTopRatedTV);
	btnID = buttonID(btnTV);
	const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(btnID);
	selectGen.selectedIndex = 0;
});
btnAiringToday.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexClass(btnAiringToday);
	btnID = buttonID(btnTV);
	const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(btnID);
	selectGen.selectedIndex = 0;
});
btnOnTheAir.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexClass(btnOnTheAir);
	btnID = buttonID(btnTV);
	const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(btnID);
	selectGen.selectedIndex = 0;
});
btnPopular.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexID(btnPopular);
	classBtn = buttonClass(btnPopular);
	const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(classBtn);
	selectGen.selectedIndex = 0;
});
btnTopRated.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexID(btnTopRated);
	classBtn = buttonClass(btnTopRated);
	const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(classBtn);
	selectGen.selectedIndex = 0;
});
btnUpcoming.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexID(btnUpcoming);
	classBtn = buttonClass(btnUpcoming);
	const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(classBtn);
	selectGen.selectedIndex = 0;
});
btnNowPlaying.addEventListener('click', async () => {
	resetButtons();
	index = buttonIndexID(btnNowPlaying);
	classBtn = buttonClass(btnNowPlaying);
	const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
	const data = await response.json();
	inputEl.value = '';
	resData = data.results;
	maxPage = data.total_pages;
	containerCardsEl.innerHTML = '';
	displayProducts(resData);
	type = Array(classBtn);
	selectGen.selectedIndex = 0;
});
btn1El.addEventListener('click', async () => {
	if (type[0] === classBtn) {
		page = btn1El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(classBtn);
		selectGen.selectedIndex = 0;
	}
	if (type[0] === btnID) {
		page = btn1El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(btnID);
		selectGen.selectedIndex = 0;
	}
});
btn2El.addEventListener('click', async () => {
	if (type[0] === classBtn) {
		page = btn2El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(classBtn);
		selectGen.selectedIndex = 0;
	}
	if (type[0] === btnID) {
		page = btn2El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(btnID);
		selectGen.selectedIndex = 0;
	}
});
btn3El.addEventListener('click', async () => {
	if (type[0] === classBtn) {
		page = btn3El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${classBtn}/${arrayButtonsID[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(classBtn);
		selectGen.selectedIndex = 0;
	}
	if (type[0] === btnID) {
		page = btn3El.textContent;
		const response = await fetch(`https://api.themoviedb.org/3/${btnID}/${arrayButtonsClass[index]}?language=en-US&page=${page}`, options);
		const data = await response.json();
		inputEl.value = '';
		resData = data.results;
		maxPage = data.total_pages;
		containerCardsEl.innerHTML = '';
		displayProducts(resData);
		type = Array(btnID);
		selectGen.selectedIndex = 0;
	}
});
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

await GET();
loadGenres();
loadMovies(arrayButtonsID[index], page);