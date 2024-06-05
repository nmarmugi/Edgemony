const containerButtonsEl = document.querySelector('.containerButtons');
const modalEl = document.getElementById("myModal");
const timeCloseModalEl = document.querySelector('.timer');
const textModalEl = document.querySelector('.input-text');
const inputEl = document.querySelector('.buttonInput');

let time = 5;
let countdown;

containerButtonsEl.addEventListener('click', function(event) {
	const target = event.target;
	if (target.id === 'firstButton') {
		console.log('Bottone 1');
	}
	if (target.id === 'secondButton') {
		console.log('Bottone 2');
	}
	if (target.id === 'thirdButton') {
		console.log('Bottone 3');
	}
	if (target.id === 'openModalButton') {
		console.log('MODALE');
		textModalEl.textContent = '';
		modalEl.style.display = "block";
		timeCloseModalEl.textContent = time; 
		countdown = setInterval(function() {
			timeCloseModalEl.textContent = --time; 
			if (time <= 0) {
				clearInterval(countdown);
				modalEl.style.display = 'none';
				time = 5;
			}
		}, 1000);
	}
	if (target.id === 'input') {
		if (!/^[a-zA-Z]+$/.test(inputEl.value)) {
			alert("Inserisci almeno un carattere alfabetico e non caratteri che non siano alfabetici!");
		}
		else {
			const value = inputEl.value;
			textModalEl.textContent = `Benvenuto ${value}`;
			modalEl.style.display = "block";
			timeCloseModalEl.textContent = time; 
			countdown = setInterval(function() {
				timeCloseModalEl.textContent = --time; 
				if (time <= 0) {
					clearInterval(countdown);
					modalEl.style.display = 'none';
					time = 5;
				}
			}, 1000);
		}
	}
	thisLog.call(target);
})

modalEl.addEventListener('click', function(event) {
	const target = event.target;
	if (target.className === 'yes') {
		console.log('Bottone YES');
	}
	if (target.id === 'no') {
		console.log('Bottone NO');
	}
	if (target.className === 'close') {
		clearInterval(countdown);
		modalEl.style.display = 'none';
		time = 5;
	}
	thisLog.call(target);
})

function thisLog() {
	console.log(this);
}