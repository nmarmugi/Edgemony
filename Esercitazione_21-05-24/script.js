function clear() {
	console.clear();
}

function capitalize(string) {
	if (!string || typeof string === 'number') {
		return console.log('Non hai inserito una stringa o hai inserito una stringa vuota');
	}
	const newString = string.toLowerCase();
	const returnString =`${newString[0].toUpperCase()}${newString.slice(1)}`;
	console.log(returnString);
	return returnString;
}

capitalize();
capitalize('');
capitalize(32);
capitalize('ciao');
capitalize('Ciao');
capitalize('CIAO');

clear();

capitalize();
capitalize('');
capitalize(32);
capitalize('ciao');
capitalize('Ciao');
capitalize('CIAO');

function min(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		console.log('Non hai inserito un numero');
		return NaN;
	}
	if (a > b) {
		console.log(b);
		return b;
	}
	else if (a === b) {
		console.log('I numeri sono uguali');
		return b;
	}
	else {
		console.log(a);
		return a;
	}
}

min(2, 3);
min(4, -3);
min(2, 2);
min(2, -2);
min('ciao', 2);
min(2, 'ciao');
min('ciao', 'ciao');

function potenza(base, esponente) {
	if (typeof base !== 'number' || typeof esponente !== 'number') {
		console.log('Non hai inserito un numero');
		return NaN;
	}
	if (base === 0 && esponente === 0) {
		console.log('Forma indeterminata');
		return;
	}
	if (esponente < 0) {
		let resultEsponenteNegativo = 1;
		const esponenteToPositive = Math.abs(esponente);
		for(let i = 0; i < esponenteToPositive; i++) {
			resultEsponenteNegativo = resultEsponenteNegativo * base;
		}
		resultEsponenteNegativo = 1 / resultEsponenteNegativo;
		console.log(resultEsponenteNegativo);
		return resultEsponenteNegativo;
	}
	let result = 1;
	for(let i = 0; i < esponente; i++) {
		result = result * base;
	}
	console.log(result);
	return result;
}

potenza(4, 2);
potenza(5, 3);
potenza(1, 100);
potenza(0, 0);
potenza(2, 0);
potenza(2, -2);
potenza('ciao', -2);
potenza(2, 'ciao');
potenza('ciao', 'ciao');

function factorial(n) {
	if (typeof n !== 'number') {
		console.log('Non hai inserito un numero');
		return NaN;
	}
	if (n < 0) {
		console.log('Non si calcola il fattoriale per un numero negativo');
		return;
	}
	if (n === 0) {
		return 1;
	}
	return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(-4));
console.log(factorial(0));
console.log(factorial('3'));
