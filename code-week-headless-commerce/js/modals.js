export const MODAL = function() {
	//MODALE REGISTRATI
	const modalRegistrati = document.getElementById('registrati');
	const spanCloseModal = document.getElementsByClassName('close')[0];

	spanCloseModal.onclick = function() {
		modalRegistrati.style.display = 'none';
		inputPasswordReg.value = '';
		inputPasswordRegConfirm.value = '';
		inputUsernameReg.value = '';
		textReg.textContent = '';
		textReg.style.color = 'red';
		selectRole.selectedIndex = 0;
	}
	//MODALE REGISTRATI

	//APERTURA DEL REGISTRATI
	const openRegistrati = document.querySelectorAll('.registrati');

	openRegistrati.forEach(button => {
		button.addEventListener('click', () => {
			modalRegistrati.style.display = 'block';
		})
	})

	const inputUsernameReg = document.querySelector('.usernameReg');
	const inputPasswordReg = document.querySelector('.passwordReg');
	const inputPasswordRegConfirm = document.querySelector('.passwordRegConfirm');
	const buttonReg = document.querySelector('.buttonReg');
	const textReg = document.querySelector('.textReg');
	const selectRole = document.querySelector('#role');

	buttonReg.addEventListener('click', (e) => {
		if (inputPasswordReg.value === inputPasswordRegConfirm.value &&
			inputPasswordReg.value &&
			inputPasswordRegConfirm.value &&
			inputUsernameReg.value && selectRole.selectedIndex !== 0) {
			
			if (inputUsernameReg.value.includes('/')) {
				e.preventDefault();
				textReg.textContent = 'L\'Username ha un carattere non valido "/"!';
				return;
			}
			if (localStorage.getItem(inputUsernameReg.value)) {
				e.preventDefault();
				textReg.textContent = 'L\'Username è già esistente!';
			} else {
				e.preventDefault();
				textReg.textContent = 'Registrazione completata!';
				textReg.style.color = 'green';
				localStorage.setItem(inputUsernameReg.value, `${inputPasswordReg.value}/${selectRole.value}`);
				inputPasswordReg.value = '';
				inputPasswordRegConfirm.value = '';
				inputUsernameReg.value = '';
				selectRole.selectedIndex = 0;
			}
		} else {
			e.preventDefault();
			textReg.textContent = 'Riempire correttamente i campi!';
		}
	})
	//APERTURA DEL REGISTRATI

	//MODALE LOGIN
	const modalLogin = document.getElementById('login');
	const spanCloseModalLogin = document.querySelector('.login-span');

	spanCloseModalLogin.onclick = function() {
		modalLogin.style.display = 'none';
		inputPasswordLogin.value = '';
		inputUsernameLogin.value = '';
		textLogin.textContent = '';
		selectRoleLogin.selectedIndex = 0;
	}
	//MODALE LOGIN

	//APERTURA DEL LOGIN
	const openLogin = document.querySelectorAll('.login');

	openLogin.forEach(button => {
		button.addEventListener('click', () => {
			modalLogin.style.display = 'block';
		})
	})

	const inputUsernameLogin = document.querySelector('.usernameLogin');
	const inputPasswordLogin = document.querySelector('.passwordLogin');
	const buttonLogin = document.querySelector('.buttonLogin');
	const textLogin = document.querySelector('.textLogin');
	const selectRoleLogin = document.querySelector('#role-login');

	buttonLogin.addEventListener('click', (e) => {
		const res = localStorage.getItem(inputUsernameLogin.value);
		if (res) {
			const arrayRes = res.split('/');
			if (arrayRes[0] !== inputPasswordLogin.value || arrayRes[1] !== selectRoleLogin.value) {
				e.preventDefault();
				textLogin.textContent = 'La Password non è corretta o il ruolo non è esatto!';
			} else {
				if (arrayRes[1] === 'admin') {
					buttonLogin.href = './admin.html';
					console.log('admin');
					modalLogin.style.display = 'none';
					inputPasswordLogin.value = '';
					inputUsernameLogin.value = '';
					textLogin.textContent = '';
					selectRoleLogin.selectedIndex = 0;
				}
				else {
					buttonLogin.href = './user.html';
					console.log('user');
					modalLogin.style.display = 'none';
					inputPasswordLogin.value = '';
					inputUsernameLogin.value = '';
					textLogin.textContent = '';
					selectRoleLogin.selectedIndex = 0;
				}
			}
		} else {
			e.preventDefault();
			textLogin.textContent = 'L\'Username non è corretto!';
		}
	})
	//APERTURA DEL LOGIN
	//MODALE RIMUOVI ACCOUNT
	const modalRemove = document.getElementById('remove');
	const spanCloseModalRemove = document.querySelector('.close-remove');

	spanCloseModalRemove.onclick = function() {
		modalRemove.style.display = 'none';
		inputPasswordRemove.value = '';
		inputPasswordRemoveConfirm.value = '';
		inputUsernameRemove.value = '';
		textRemove.textContent = '';
		textRemove.style.color = 'red';
	}
	//MODALE REGISTRATI

	//APERTURA DEL REGISTRATI
	const openRemove = document.querySelectorAll('.remove');

	openRemove.forEach(button => {
		button.addEventListener('click', () => {
			modalRemove.style.display = 'block';
		})
	})

	const inputUsernameRemove = document.querySelector('.usernameRemove');
	const inputPasswordRemove = document.querySelector('.passwordRemove');
	const inputPasswordRemoveConfirm = document.querySelector('.passwordRemoveConfirm');
	const buttonRemove = document.querySelector('.buttonRemove');
	const textRemove = document.querySelector('.textRemove');

	buttonRemove.addEventListener('click', (e) => {
		if (!inputUsernameRemove.value) {
			e.preventDefault();
			textRemove.textContent = 'Inserire Username!!';
			return;
		}
		const res = localStorage.getItem(inputUsernameRemove.value);
		const resSplit = res.split('/');
		if (res) {
			if (resSplit[1] === 'admin' || resSplit[1] === 'user') {
				if (resSplit[0] !== inputPasswordRemove.value || inputPasswordRemove.value !== inputPasswordRemoveConfirm.value) {
					e.preventDefault();
					textRemove.textContent = 'La Password non è corretta o non corrisponde!';
				} else {
					e.preventDefault();
					localStorage.removeItem(inputUsernameRemove.value);
					textRemove.style.color = 'green';
					textRemove.textContent = 'Account eliminato!';
					inputUsernameRemove.value = '';
					inputPasswordRemove.value = '';
					inputPasswordRemoveConfirm.value = '';
				}
			}
		} else {
			e.preventDefault();
			textRemove.textContent = 'L\'Username non è corretto!';
		}
	})
	//APERTURA RIMUOVI ACCOUNT
}