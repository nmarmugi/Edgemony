let score = 0;
alert('Rispondi alle seguenti domande: RISPOSTA CORRETTA +3 PT, RISPOSTA ERRATA -1 PT');
let firstQuestion = prompt('Quanto fa 2+2?');
let secondQuestion = prompt('Di che colore era il cavallo bianco di Napoleone?');
let thirdQuestion = prompt('Di che colore è il cielo?');
let fourthQuestion = prompt('Come si chiama questa materia?');

switch (firstQuestion) {
	case '4':
		score += 3;
		break;

	default:
		score -= 1;
}

switch (secondQuestion) {
	case 'bianco':
		score += 3;
		break;

	default:
		score -= 1;
}

switch (thirdQuestion) {
	case 'azzurro':
		score += 3;
		break;

	default:
		score -= 1;
}

switch (fourthQuestion) {
	case 'javascript':
		score += 3;
		break;

	default:
		score -= 1;
}

console.log('Punteggio finale: ', score);
console.log(typeof score)

switch (score) {
	case 12:
		alert('Sei il nuovo campione!');
		break;
	case 8:
		alert('Per un pelo!\nRiprova 8pt');
		window.location.reload();
		break;
	case 4:
		alert('Sufficiente...\nRiprova 4pt');
		window.location.reload();
		break;
	case 0:
		alert('..Devi studiare di più..\nRiprova 0pt');
		window.location.reload();
		break;
	default:
		alert('..CORRI A STUDIARE..\nRIPROVA! -4pt');
		window.location.reload();
}
