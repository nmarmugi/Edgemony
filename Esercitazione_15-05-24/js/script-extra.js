//EXTRA CON PIU' CONTROLLI
//NAME
let userName = prompt('Inserisci qui il tuo nome, esempio: Mario');
let userNameLength;
if (userName === null) {
	alert("OPERAZIONE ANNULLATA!");
	window.location.reload();
}
else {
	userNameLength = userName.length;
	if (userNameLength < 3) {
		alert("Errore: Inserire almeno 3 CARATTERI!");
		window.location.reload();
	}
	if (!/^[A-Z]+$/.test(userName[0])) {
		alert("Errore: Inserire come primo carattere una LETTERA MAIUSCOLA!");
		window.location.reload();
	}
	if (!/^[a-z]+$/.test(userName.substring(1))) {
		alert("Errore: Inserire dopo la prima lettera maiuscola caratteri ALFABETICI MINUSCOLI!");
		window.location.reload();
	}
	else {
		console.log("Nome valido:", userName);
	}
}
//NAME

//SURNAME
let userSurname = prompt('Inserisci qui il tuo cognome esempio: Rossi');
let userSurnameLength;
if (userName === null) {
	alert("OPERAZIONE ANNULLATA!");
	window.location.reload();
}
else {
	userSurnameLength = userSurname.length;
	if (userNameLength < 3) {
		alert("Errore: Inserire almeno 3 CARATTERI!");
		window.location.reload();
	}
	if (!/^[A-Z]+$/.test(userSurname[0])) {
		alert("Errore: Inserire come primo carattere una LETTERA MAIUSCOLA!");
		window.location.reload();
	}
	if (!/^[a-z]+$/.test(userSurname.substring(1))) {
		alert("Errore: Inserire dopo la prima lettera maiuscola caratteri ALFABETICI MINUSCOLI!");
		window.location.reload();
	}
	else {
		console.log("Nome valido:", userSurname);
	}
}
//SURNAME
//EXTRA CON PIU' CONTROLLI