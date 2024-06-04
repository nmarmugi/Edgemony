function indicazioni(...direzioni) {
	for(let i = 0; i < direzioni.length; i++) {
		if (direzioni[i] !== 'su' && direzioni[i] !== 'giù' &&
		direzioni[i] !== 'destra' && direzioni[i] !== 'sinistra'
		&& typeof direzioni[i] !== 'string') {
			console.log('Non hai inserito un\'indicazione');
			return '';
		}
		console.log(direzioni[i]);
	}
	return direzioni
}

indicazioni('su', 'su', 'sinistra');
indicazioni('su', 'giù', 'sinistra');
indicazioni('su', 'destra', 'sinistra');
indicazioni(32, 'giù');
indicazioni('giù', 32);

function contaIndicazioni(...direzioni) {
    const directions = { su: 0, giù: 0, destra: 0, sinistra: 0};
	for(let i = 0; i < direzioni.length; i++) {
		if (direzioni[i] !== 'su' && direzioni[i] !== 'giù' &&
		direzioni[i] !== 'destra' && direzioni[i] !== 'sinistra') {
			console.log('Non hai inserito un\'indicazione');
			return '';
		}
		if (direzioni[i] === 'su') {
			directions.su++;
		}
		if (direzioni[i] === 'giù') {
			directions.giù++;
		}
		if (direzioni[i] === 'sinistra') {
			directions.sinistra++;
		}
		if (direzioni[i] === 'destra') {
			directions.destra++;
		}
	}
	console.log(directions);
	return directions;
}

contaIndicazioni('su', 'su', 'sinistra');
contaIndicazioni('su', 'giù', 'sinistra');
contaIndicazioni('su', 'destra', 'sinistra');
contaIndicazioni(32, 'giù');
contaIndicazioni('giù', 32);

let count = 0;
const countClick = () => {
	count++;
	console.log('click ->', count);
    return count;
} 
document.body.onclick = countClick;


function numberAlphabet(string) {
	if (typeof string !== 'string') {
		return;
	}
	const indexForEachLetter = {
		a: 1, b: 2, c: 3, d: 4,
		e: 5, f: 6, g: 7, h: 8,
		i: 9, j: 10, k: 11, l: 12,
		m: 13, n: 14, o: 15, p: 16,
		q: 17, r: 18, s: 19, t: 20,
		u: 21, v: 22, w: 23, x: 24,
		y: 25, z: 26
	}
	const arrayOnlyValues = Object.entries(indexForEachLetter);
	const stringLower = string.replace(/[\s,!?\.]/g, '').toLowerCase();
	const stringToArray = stringLower.split('');
	let arrayEmpty = [];
	let i = 0;
	let y = 0;
	while(i < stringToArray.length) {
		if(stringToArray[i] === arrayOnlyValues[y][0]) {
			arrayEmpty.push(arrayOnlyValues[y][1])
			i++;
			y = 0;
		}
		else {
			y++;
		}
	}
	const newString = arrayEmpty.join(' ');
	return newString;
}

console.log(numberAlphabet('Rosso di sera, bel tempo si spera'));
