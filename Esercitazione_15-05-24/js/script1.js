//NAME
let nameUser = prompt("Inserire il nome")

let nameUserLength;

if (nameUser === null) {
	alert("OPERAZIONE ANNULLATA!");
	window.location.reload();
}
else {
	nameUserLength = nameUser.length;
	if (nameUserLength < 3) {
		alert("Errore: Inserire almeno 3 CARATTERI!");
		window.location.reload();
	}
	else {
		console.log("Nome valido:", nameUser);
	}
}

let nameUserUpper = nameUser[0].toUpperCase() + nameUser.substring(1);
console.log(nameUserUpper);
//NAME

//SURNAME
let surnameUser = prompt("Inserire il nome")

let surnameUserLength;

if (surnameUser === null) {
	alert("OPERAZIONE ANNULLATA!");
	window.location.reload();
}
else {
	surnameUserLength = surnameUser.length;
	if (surnameUserLength < 3) {
		alert("Errore: Inserire almeno 3 CARATTERI!");
		window.location.reload();
	}
	else {
		console.log("Nome valido:", surnameUser);
	}
}

let surnameUserUpper = surnameUser[0].toUpperCase() + surnameUser.substring(1);
console.log(nameUserUpper);
//SURNAME

alert(`Ciao ${nameUserUpper} ${surnameUserUpper}`);