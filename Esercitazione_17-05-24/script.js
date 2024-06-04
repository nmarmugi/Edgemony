// ESERCIZIO 1
let wordForArray;
let array = [];

for(let i = 0; i < 5; i++) {
	wordForArray = prompt('Inserisci un numero');
	if (wordForArray === null || wordForArray === '' || /^-?\d+$/.test(wordForArray) === false) {
		alert('OPERAZIONE ANNULLATA O NON VALIDA!');
		break;
	}
	else {
		array.push(Number(wordForArray));
	}
}

for(let i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		console.log(array[i]);
	}
}

for(let i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		console.log(array[i]);
		break;
	}
}
// ESERCIZIO 1

// ESERCIZIO 2
let word = prompt('INSERISCI UNA PAROLA');

if (word === null || word === '') {
	alert('OPERAZIONE NON VALIDA O ANNULLATA!');
}
else {
	let wordSplit = word.split('');
	let	copyWordSplit = [];
	for(let i = 0; i < wordSplit.length; i++) {
		copyWordSplit.push(wordSplit[i]);
	}
	let reverseWordSplit = wordSplit.reverse();
	let isPalindrome = true;
	for(let i = 0; i < copyWordSplit.length; i++) {
		if (copyWordSplit[i] !== reverseWordSplit[i]) {
			alert('NON E\' PALINDROMA');
			console.log('NON E\' PALINDROMA');
			isPalindrome = false;
			break;
		}
	}
	if (isPalindrome) {
		alert('SUCCESSO! E\' PALINDROMO!');
		console.log('SUCCESSO! E\' PALINDROMO!');
	}
}
// ESERCIZIO 2