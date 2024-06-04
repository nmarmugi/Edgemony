const coder = {
	firstName: 'Luca',
	lastName: 'Pagliaro',
	age: 29,
	skills: ['JavaScript', 'HTML', 'CSS'],
	address: {
		city: 'Catania',
		zipCode: '95100'
	}
};

for (let skillsValue of coder.skills) {
	console.log(skillsValue);
}

coder.address.country = prompt('Inserisci il paese');
coder.address.street = prompt('Inserisci la strada');
console.log(coder.address);

for (let keys in coder) {
	console.log(keys);
}

const vocali ='aeiou';
for (let keys in coder) {
	if (vocali.includes(keys[0])) {
		console.log(`${keys}: ${coder[keys]}`);
	}
}

const newKey = prompt('INSERISCI UNA NUOVA CHIAVE');
const newValue = prompt('INSERISCI UN AVALORE PER LA CHIAVE INSERITA');
coder[newKey] = newValue;