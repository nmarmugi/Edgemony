// ESERCIZIO 1
let score = 0;

const RISPOSTA_GIUSTA = 3;

const RISPOSTA_SBAGLIATA = -1;

const risposte = [];

alert('Rispondi alle domande a risposta multipla!\nRISPETTARE MAIUSCOLE E MINUSCOLE SCRIVERE UGUALE A COME VEDETE SCRITTO!');

let primaRisposta = prompt("Quanto fa 2+2? Scegli tra:\n3, 4, -1000, 20");
let secondaRisposta = prompt("Di che colore era il cavallo bianco di Napoleone? Scegli tra:\nbianco, nero, non aveva un cavallo, blu");
let terzaRisposta = prompt("Di che colore è il cielo? Scegli tra:\nblu, dipinto di blu, bianco, grigio");
let quartaRisposta = prompt("Che materia è questa? Scegli tra:\njavascript, css, html, react");

switch (primaRisposta) {
	case '4':
		score += RISPOSTA_GIUSTA;
		break;
	default:
		score += RISPOSTA_SBAGLIATA;
}

risposte.push(primaRisposta);

switch (secondaRisposta) {
	case 'bianco':
		score += RISPOSTA_GIUSTA;
		break;
	default:
		score += RISPOSTA_SBAGLIATA;
}

risposte.push(secondaRisposta);

switch (terzaRisposta) {
	case 'blu':
		score += RISPOSTA_GIUSTA;
		break;
	default:
		score += RISPOSTA_SBAGLIATA;
}

risposte.push(terzaRisposta);

switch (quartaRisposta) {
	case 'javascript':
		score += RISPOSTA_GIUSTA;
		break;
	default:
		score += RISPOSTA_SBAGLIATA;
}

risposte.push(quartaRisposta);

switch (score) {
	case 12:
		alert('HAI VINTO! 12pt');
		console.log("Risposte date: ", risposte, "Numero di risposte: ", risposte.length);
		break;
	case 8:
		alert('C\'eri quasi! Riprova 8pt');
		window.location.reload();
		break;
	case 4:
		alert('Sufficiente... Riprova 4pt');
		window.location.reload();
		break;
	case 0:
		alert('Non ci siamo... Riprova 0pt');
		window.location.reload();
		break;
	default:
		alert('VAI A STUDIARE! Riprova -4pt');
		window.location.reload();
}
// ESERCIZIO 1

// ESERCIZIO 2
let firstWord = prompt('INSERISCI UNA PAROLA');
let secondWord = prompt('INSERISCINE UN\'ALTRA');
let thirdWord = prompt('ANCORA UNA');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

const consonantiUpper = 'BCDFGHJKLMNPQRSTVWXYZ';
const consonantiLower = 'bcdfghjklmnpqrstvwxyz';

const vocaliUpper = 'AEIOU';
const vocaliLower = 'aeiou';

const isValid = `${upperCase}${lowerCase}`;

const isCons = `${consonantiUpper}${consonantiLower}`;

const isVoca = `${vocaliUpper}${vocaliLower}`;

let isFirstLetterValid = isValid.includes(firstWord[0]);

let isFirstLetterCons = isCons.includes(firstWord[0]);

let isConsOrVocal = (isFirstLetterValid) ? ((isFirstLetterCons) ? 'consonante' : 'vocale') : 'NON STAI INSERENDO UN CARATTERE VALIDO';

console.log(isConsOrVocal);

isFirstLetterValid = isValid.includes(secondWord[0]);

isFirstLetterCons = isCons.includes(secondWord[0]);

isConsOrVocal = (isFirstLetterValid) ? ((isFirstLetterCons) ? 'consonante' : 'vocale') : 'NON STAI INSERENDO UN CARATTERE VALIDO';

console.log(isConsOrVocal);

isFirstLetterValid = isValid.includes(thirdWord[0]);

isFirstLetterCons = isCons.includes(thirdWord[0]);

isConsOrVocal = (isFirstLetterValid) ? ((isFirstLetterCons) ? 'consonante' : 'vocale') : 'NON STAI INSERENDO UN CARATTERE VALIDO';

console.log(isConsOrVocal);
// ESERCIZIO 2

// ESERCIZIO 3
let word = prompt('Inserisci una parola, la girerò al contrario!');

function reverseString(str) {
	return str.split('').reverse().join('');
}

if (word !== null) {
	let reverseWord = reverseString(word);
	alert(reverseWord);
	console.log(reverseWord);
}
else {
	alert('OPERAZIONE ANNULLATA!');
	console.log(word);
}
// ESERCIZIO 3