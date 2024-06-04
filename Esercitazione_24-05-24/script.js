const h1El = document.createElement('h1');
h1El.innerHTML = ('Sono un titolo h1');
document.body.insertAdjacentElement('afterbegin', h1El);

const pEl = document.createElement('p');
pEl.innerHTML = ('Sono un paragrafo');
document.body.append(pEl);

const divEl = document.createElement('div');
pEl.insertAdjacentElement('afterend', divEl);

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 0;
divEl.insertAdjacentElement('beforeend', buttonEl);

divEl.style.display = 'flex';
divEl.style.justifyContent = 'center';
divEl.style.height = '50vh';
divEl.style.alignItems = 'center';

buttonEl.style.backgroundColor = 'green';
buttonEl.style.borderRadius = '50%';
buttonEl.style.border = 'none';
buttonEl.style.fontSize = '30px';
buttonEl.style.width = '50px';
buttonEl.style.height = '50px';


buttonEl.onmouseenter = function(){
	buttonEl.style.backgroundColor = "red";
	buttonEl.style.color = 'black';
	onclick = function(){
		buttonEl.innerHTML++;
		const buttonWidth = parseInt(buttonEl.style.width);
		const newButtonWidth = buttonWidth + 5;
		buttonEl.style.width = newButtonWidth + 'px';
		const buttonHeight = parseInt(buttonEl.style.height);
		const newButtonHeight = buttonHeight + 5;
		buttonEl.style.height = newButtonHeight + 'px';
		if (buttonEl.innerHTML === '50') {
			buttonEl.innerHTML = 0;
			buttonEl.style.width = '50px';
			buttonEl.style.height = '50px';
		}
	}
}

buttonEl.onmouseout = function(){
	buttonEl.style.backgroundColor = "blue";
	buttonEl.style.color = 'white';
	if (Number(buttonEl.innerHTML) === 0) {
		buttonEl.innerHTML = 0;
		return;
	}
	buttonEl.innerHTML--;
	const buttonWidth = parseInt(buttonEl.style.width);
	const newButtonWidth = buttonWidth - 5;
	buttonEl.style.width = newButtonWidth + 'px';
	const buttonHeight = parseInt(buttonEl.style.height);
	const newButtonHeight = buttonHeight - 5;
	buttonEl.style.height = newButtonHeight + 'px';
}




const formEl = document.body.querySelector('form');
const inputEl = document.body.querySelector('input');
const ulEl = document.body.querySelector('.list');

formEl.onsubmit = function(event) {
	event.preventDefault();
	const inputValue = inputEl.value;
	if (inputValue && inputValue.includes(' ')) {
		const liEl = document.createElement('li');
		liEl.innerHTML = `${inputValue}`;
		ulEl.insertAdjacentElement('afterbegin', liEl);
		liEl.onclick = function() {
			console.log(liEl.innerHTML);
		}
	}
}