const container = document.createElement('div');
container.className = 'container';

const spanHour = document.createElement('span');
spanHour.className = 'spanHour';
spanHour.textContent = '';

const spanMinute = document.createElement('span');
spanMinute.className = 'spanMinute';
spanMinute.textContent = '';

const spanSecond = document.createElement('span');
spanSecond.className = 'spanSecond';
spanSecond.textContent = '';

const spanDoubleDots = document.createElement('span');
spanDoubleDots.className = 'doubleDots';
spanDoubleDots.textContent = '';

const spanDoubleDotsTwo = document.createElement('span');
spanDoubleDotsTwo.className = 'doubleDots';
spanDoubleDotsTwo.textContent = '';

const paragraphTime = document.createElement('p');
paragraphTime.className = 'paragraphTime';
paragraphTime.textContent = 'CLICCA START PER MOSTRARE L\'ORA CORRENTE';

const containerButtons = document.createElement('div');
containerButtons.className = 'containerButtons';

const containerFirstButton = document.createElement('div');
containerFirstButton.className = 'containerFirstButton';

const containerSecondButton = document.createElement('div');
containerSecondButton.className = 'containerSecondButton';

const buttonStart = document.createElement('button');
buttonStart.className = 'start';
buttonStart.textContent = 'START';

const buttonStop = document.createElement('button');
buttonStop.className = 'stop';
buttonStop.textContent = 'STOP';

containerFirstButton.append(buttonStart);
containerSecondButton.append(buttonStop);
containerButtons.append(containerFirstButton, containerSecondButton);
container.append(spanHour, spanDoubleDots, spanMinute, spanDoubleDotsTwo, spanSecond, paragraphTime, containerButtons);

const bodyEl = document.querySelector('body');
bodyEl.append(container);

let startID;

buttonStart.addEventListener('click', () => {
	if (!startID) {
		startID = setInterval(() => {
			spanHour.innerHTML = new Date().getHours();
			spanDoubleDots.innerHTML = ':';
			spanMinute.innerHTML = new Date().getMinutes();
			spanDoubleDotsTwo.innerHTML = ':';
			spanSecond.innerHTML = new Date().getSeconds();
			paragraphTime.innerHTML = 'CLICCA STOP PER TORNARE ALLA SITUAZIONE PRECEDENTE';
			paragraphTime.style.marginTop = '0px';
		},1000);
	}
});

buttonStop.addEventListener('click', () => {
	setTimeout(() => {
		clearInterval(startID);
		spanHour.innerHTML = '';
		spanDoubleDots.innerHTML = '';
		spanMinute.innerHTML = '';
		spanDoubleDotsTwo.innerHTML = '';
		spanSecond.innerHTML = '';
		paragraphTime.innerHTML = 'CLICCA START PER MOSTRARE L\'ORA CORRENTE';
		startID = null;
		paragraphTime.style.marginTop = '128px';
	});
});