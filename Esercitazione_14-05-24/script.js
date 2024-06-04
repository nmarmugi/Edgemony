let helloWorld = "Ciao Mondo";

let uncleCity = 'Mio zio viene dalla città di l\'Aquila';

let concatString = `${helloWorld}\n${uncleCity}`;

let toUpperCase = helloWorld.toUpperCase();

let userPrompt = prompt("Dai valore alla variabile");

console.log(userPrompt.toLowerCase());

let lottery = prompt("Inserire un valore da 1 a 10\nper provare a vincere alla lotteria");

if(Number.isInteger(lottery) == false && Number(lottery) <= 10 && Number(lottery) >= 1) {
	if(Number(lottery) > 7) {
		console.log('HAI VINTO!');
	}
	else {
		console.log("RITENTA!");
	}
}
else {
	alert("IL CAMPO INSERITO NON E' VALIDO!");
	console.log("IL CAMPO INSERITO E': ", Number(lottery));
}