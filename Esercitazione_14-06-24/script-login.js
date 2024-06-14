const inputUsernameReg = document.querySelector('.usernameReg');
const inputPasswordReg = document.querySelector('.passwordReg');
const inputPasswordRegConfirm = document.querySelector('.passwordRegConfirm');
const buttonReg = document.querySelector('.buttonReg');
const inputUsername = document.querySelector('.username');
const inputPassword = document.querySelector('.password');
const buttonLogin = document.querySelector('.buttonLogin');
const modal = document.getElementById("deleteModal");
const span = document.getElementsByClassName("close")[0];
const textModal = document.querySelector('.text-modal');
const containerEl = document.querySelector('.container-login');
const containerSecondEl = document.querySelector('.container-second');
const benvenuto = document.querySelector('h1');
const buttonReturn = document.querySelector('.buttonReturn');
const inputUsernameDel = document.querySelector('.usernameDel');
const inputPasswordDel = document.querySelector('.passwordDel');
const inputPasswordDelConfirm = document.querySelector('.passwordDelConfirm');
const buttonDel = document.querySelector('.buttonDel');
const btnModal = document.querySelector('.btnModal');

buttonReg.addEventListener('click', (e) => {
	if (inputPasswordReg.value === inputPasswordRegConfirm.value) {
		localStorage.setItem(inputUsernameReg.value, inputPasswordReg.value);
	} else {
		e.preventDefault();
		textModal.textContent = 'Le password non corrispondono!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
})

buttonLogin.addEventListener('click', (e) => {
	const username = inputUsername.value;
	const res = localStorage.getItem(inputUsername.value);
	if (res) {
		if (res !== inputPassword.value) {
			e.preventDefault();
			textModal.textContent = 'La Password non è corretta!';
			modal.style.display = "block";
			setTimeout(() => {
				modal.style.display = "none";
			}, 3000);
		} else {
			e.preventDefault();
			containerEl.style.display = 'none';
			containerSecondEl.style.display = 'flex';
			benvenuto.textContent = `BENVENUTO ${username}!`;
			inputUsername.value = '';
			inputPassword.value = '';
		}
	} else {
		e.preventDefault();
		textModal.textContent = 'L\'Username non è corretto!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
})

buttonReturn.addEventListener('click', () => {
	containerSecondEl.style.display = 'none';
	containerEl.style.display = 'flex';
})

buttonDel.addEventListener('click', (e) => {
	const res = localStorage.getItem(inputUsernameDel.value);
	if (res) {
		if (res !== inputPasswordDel.value || inputPasswordDel.value !== inputPasswordDelConfirm.value) {
			e.preventDefault();
			textModal.textContent = 'La Password non è corretta o non corrisponde!';
			modal.style.display = "block";
			setTimeout(() => {
				modal.style.display = "none";
			}, 3000);
		} else {
			e.preventDefault();
			localStorage.removeItem(inputUsernameDel.value);
			textModal.textContent = 'Account eliminato!';
			modal.style.display = "block";
			btnModal.style.display= 'block';
			span.style.display = 'none';
			inputUsernameDel.value = '';
			inputPasswordDel.value = '';
		}
	} else {
		e.preventDefault();
		textModal.textContent = 'L\'Username non è corretto!';
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.display = "none";
		}, 3000);
	}
})

btnModal.addEventListener('click', () => {
	span.style.display = 'block';
	modal.style.display = "none";
	btnModal.style.display= 'none';
	containerSecondEl.style.display = 'none';
	containerEl.style.display = 'flex';
})

span.addEventListener('click', () => {
	modal.style.display = "none";
});