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
const options = {
	headers: {
		Authorization: `Bearer ${API_KEY}`
	}
};

btn1El.textContent = 1;
btn2El.textContent = Number(btn1El.textContent) + 1;
btn3El.textContent = Number(btn1El.textContent) + 2;

let page = 1;
let maxPage;

fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
	return response.json();
}).then((responseData) => {
            console.log(page, btnPopular.id);
            resData = responseData.results;
            displayProducts(resData);
            inputEl.addEventListener('input', (event) => {
                const inputValue = event.target.value.toLowerCase();
                filterProducts(inputValue);
            });
			btn1El.addEventListener('click', () => {
	
				page = btn1El.textContent;
				
				fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
					return response.json();
				}).then((responseData) => {
							console.log(page);
							resData = responseData.results;
							containerCardsEl.innerHTML = '';
							displayProducts(resData);
							inputEl.addEventListener('input', (event) => {
								const inputValue = event.target.value.toLowerCase();
								filterProducts(inputValue);
							});
						}).catch((err) => {
							console.error(err);
				});
			})
			
			btn2El.addEventListener('click', () => {
				
				page = btn2El.textContent;
				
				fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
					return response.json();
				}).then((responseData) => {
							console.log(page);
							resData = responseData.results;
							containerCardsEl.innerHTML = '';
							displayProducts(resData);
							inputEl.addEventListener('input', (event) => {
								const inputValue = event.target.value.toLowerCase();
								filterProducts(inputValue);
							});
						}).catch((err) => {
							console.error(err);
				});
			})
			
			btn3El.addEventListener('click', () => {
				
				page = btn3El.textContent;
				
				fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
					return response.json();
				}).then((responseData) => {
							console.log(page);
							resData = responseData.results;
							containerCardsEl.innerHTML = '';
							displayProducts(resData);
							inputEl.addEventListener('input', (event) => {
								const inputValue = event.target.value.toLowerCase();
								filterProducts(inputValue);
							});
						}).catch((err) => {
							console.error(err);
				});
			})
			btnAvanti.addEventListener('click', () => {
				maxPage = 44540;
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
});

btnPopular.addEventListener('click', () => {
	
    page = 1;
	btn1El.textContent = 1;
	btn2El.textContent = Number(btn1El.textContent) + 1;
	btn3El.textContent = Number(btn1El.textContent) + 2;
    
	fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
		return response.json();
	}).then((responseData) => {
				console.log(page, btnPopular.id);
				resData = responseData.results;
				containerCardsEl.innerHTML = '';
				displayProducts(resData);
				inputEl.addEventListener('input', (event) => {
					const inputValue = event.target.value.toLowerCase();
					filterProducts(inputValue);
				});
				btn1El.addEventListener('click', () => {
	
					page = btn1El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn2El.addEventListener('click', () => {
					
					page = btn2El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn3El.addEventListener('click', () => {
					
					page = btn3El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnPopular.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				btnAvanti.addEventListener('click', () => {
					maxPage = 44540;
					if (Number(btn3El.textContent) === maxPage) {
						btn3El.textContent = 44540;
						btn2El.textContent = 44539;
						btn1El.textContent = 44538;
						return;
					}
				})
				
				btnIndietro.addEventListener('click', () => {
					if (Number(btn1El.textContent) === 1) {
						btn3El.textContent = 3;
						btn2El.textContent = 2;
						btn1El.textContent = 1;
						return;
					}
				})
			}).catch((err) => {
				console.error(err);
	});
})

btnNowPlaying.addEventListener('click', () => {
	
	page = 1;
	btn1El.textContent = 1;
	btn2El.textContent = Number(btn1El.textContent) + 1;
	btn3El.textContent = Number(btn1El.textContent) + 2;
    
	fetch(`https://api.themoviedb.org/3/movie/${btnNowPlaying.id}?language=en-US&page=${page}`, options).then((response) => {
		return response.json();
	}).then((responseData) => {
				console.log(responseData);
				resData = responseData.results;
				containerCardsEl.innerHTML = '';
				displayProducts(resData);
				inputEl.addEventListener('input', (event) => {
					const inputValue = event.target.value.toLowerCase();
					filterProducts(inputValue);
				});
				btn1El.addEventListener('click', () => {
	
					page = btn1El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnNowPlaying.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn2El.addEventListener('click', () => {
					
					page = btn2El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnNowPlaying.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn3El.addEventListener('click', () => {
					
					page = btn3El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnNowPlaying.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				btnAvanti.addEventListener('click', () => {
					maxPage = 238;
					console.log(maxPage);
					if (Number(btn3El.textContent) > maxPage) {
						btn3El.textContent = 238;
						btn2El.textContent = 237;
						btn1El.textContent = 236;
						return;
					}
				})
				
				btnIndietro.addEventListener('click', () => {
					if (Number(btn1El.textContent) === 1) {
						btn3El.textContent = 3;
						btn2El.textContent = 2;
						btn1El.textContent = 1;
						return;
					}
				})
			}).catch((err) => {
				console.error(err);
	});
})

btnTopRated.addEventListener('click', () => {
	
    page = 1;
	btn1El.textContent = 1;
	btn2El.textContent = Number(btn1El.textContent) + 1;
	btn3El.textContent = Number(btn1El.textContent) + 2;
    
	fetch(`https://api.themoviedb.org/3/movie/${btnTopRated.id}?language=en-US&page=${page}`, options).then((response) => {
		return response.json();
	}).then((responseData) => {
				console.log(responseData);
				resData = responseData.results;
				containerCardsEl.innerHTML = '';
				displayProducts(resData);
				inputEl.addEventListener('input', (event) => {
					const inputValue = event.target.value.toLowerCase();
					filterProducts(inputValue);
				});
				btn1El.addEventListener('click', () => {
	
					page = btn1El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnTopRated.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn2El.addEventListener('click', () => {
					
					page = btn2El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnTopRated.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn3El.addEventListener('click', () => {
					
					page = btn3El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnTopRated.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				btnAvanti.addEventListener('click', () => {
					maxPage = 471;
					console.log(maxPage);
					if (Number(btn3El.textContent) > maxPage) {
						btn3El.textContent = 471;
						btn2El.textContent = 470;
						btn1El.textContent = 469;
						return;
					}
				})
				
				btnIndietro.addEventListener('click', () => {
					if (Number(btn1El.textContent) === 1) {
						btn3El.textContent = 3;
						btn2El.textContent = 2;
						btn1El.textContent = 1;
						return;
					}
				})
			}).catch((err) => {
				console.error(err);
	});
})

btnUpcoming.addEventListener('click', () => {
	
	page = 1;
	btn1El.textContent = 1;
	btn2El.textContent = Number(btn1El.textContent) + 1;
	btn3El.textContent = Number(btn1El.textContent) + 2;
    
	fetch(`https://api.themoviedb.org/3/movie/${btnUpcoming.id}?language=en-US&page=${page}`, options).then((response) => {
		return response.json();
	}).then((responseData) => {
				console.log(responseData);
				resData = responseData.results;
				containerCardsEl.innerHTML = '';
				displayProducts(resData);
				inputEl.addEventListener('input', (event) => {
					const inputValue = event.target.value.toLowerCase();
					filterProducts(inputValue);
				});
				btn1El.addEventListener('click', () => {
	
					page = btn1El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnUpcoming.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn2El.addEventListener('click', () => {
					
					page = btn2El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnUpcoming.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				
				btn3El.addEventListener('click', () => {
					
					page = btn3El.textContent;
					
					fetch(`https://api.themoviedb.org/3/movie/${btnUpcoming.id}?language=en-US&page=${page}`, options).then((response) => {
						return response.json();
					}).then((responseData) => {
								console.log(page);
								resData = responseData.results;
								containerCardsEl.innerHTML = '';
								displayProducts(resData);
								inputEl.addEventListener('input', (event) => {
									const inputValue = event.target.value.toLowerCase();
									filterProducts(inputValue);
								});
							}).catch((err) => {
								console.error(err);
					});
				})
				btnAvanti.addEventListener('click', () => {
					maxPage = 43;
					console.log(maxPage);
					if (Number(btn3El.textContent) > maxPage) {
						btn3El.textContent = 43;
						btn2El.textContent = 42;
						btn1El.textContent = 41;
						return;
					}
				})
				
				btnIndietro.addEventListener('click', () => {
					if (Number(btn1El.textContent) === 1) {
						btn3El.textContent = 3;
						btn2El.textContent = 2;
						btn1El.textContent = 1;
						return;
					}
				})
			}).catch((err) => {
				console.error(err);
	});
})

function displayProducts(product) {
	product.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}

function createCard(product) {
	const cardEl = document.createElement('div');
	cardEl.className = 'card';

	const titleCardEl = document.createElement('h2');
	titleCardEl.className = 'card-title';
	titleCardEl.textContent = product.original_title;

	const imgCardEl = document.createElement('img');
	imgCardEl.className = 'card-img';
	imgCardEl.src = `https://image.tmdb.org/t/p/original${product.poster_path}`;
	imgCardEl.alt = 'Immagine';
	imgCardEl.width = 200;

	const rateCardEl = document.createElement('p');
	rateCardEl.className = 'card-rate';
	rateCardEl.textContent = `${product.vote_average} / 10`;

	const descriptionCardEl = document.createElement('p');
	descriptionCardEl.className = 'card-description';
	descriptionCardEl.textContent = product.overview;

	const priceCardEl = document.createElement('p');
	priceCardEl.className = 'card-price';
	priceCardEl.textContent = `Original language: ${product.original_language}`;

	cardEl.append(imgCardEl, titleCardEl, rateCardEl, descriptionCardEl, priceCardEl);
	return cardEl;
}

function filterProducts(original_title) {
	const filteredProducts = resData.filter(product => product.original_title.toLowerCase().includes(original_title));

	containerCardsEl.innerHTML = '';

	filteredProducts.forEach(product => {
		const cardEl = createCard(product);
		containerCardsEl.append(cardEl);
	});
}
