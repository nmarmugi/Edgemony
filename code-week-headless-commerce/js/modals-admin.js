import { cart, displayProductsCart } from "./cards-user.js";

export const MODAL = function() {
	const btnLogout = document.querySelectorAll('.logout');
	const modalLogout = document.getElementById('logout');
	const spanCloseModalLogout = document.querySelector('.logout-span');

	spanCloseModalLogout.onclick = function() {
		modalLogout.style.display = 'none';
	}

	btnLogout.forEach(button => {
		button.addEventListener('click', () => {
			modalLogout.style.display = 'block';
		})
	})
}

export const modalPay = function() {
//MODALE LOGIN
const modalPay = document.getElementById('pay');
const spanCloseModalPay = document.querySelector('.pay-span');

spanCloseModalPay.onclick = function() {
	modalPay.style.display = 'none';
	inputPasswordPay.value = '';
	inputUsernamePay.value = '';
	textPay.textContent = '';
	textPay.style.color = 'red';
}
//MODALE LOGIN

//APERTURA DEL LOGIN
const btnPay = document.querySelector('.total-price button');

btnPay.addEventListener('click', () => {
	if (cart.length !== 0) {
		modalPay.style.display = 'block';
	}
})

const inputUsernamePay = document.querySelector('.usernamePay');
const inputPasswordPay = document.querySelector('.passwordPay');
const inputCardNumberPay = document.querySelector('#cardNumber');
const inputCvvPay = document.querySelector('#cardCvv');
const inputExpitationPay = document.querySelector('#cardExpiration');
const buttonPay = document.querySelector('.buttonPay');
const textPay = document.querySelector('.textPay');

buttonPay.addEventListener('click', (e) => {
	const res = localStorage.getItem(inputUsernamePay.value);
	if (res) {
		const arrayRes = res.split('/');
		if (arrayRes[0] !== inputPasswordPay.value) {
			e.preventDefault();
			textPay.textContent = 'La Password non è corretta!';
			return;
		}
		if (inputCardNumberPay.value === '') {
			e.preventDefault();
			textPay.textContent = 'Campo non riempito!';
			return;
		}
		if (!/^[0-9]{3}$/.test(inputCvvPay.value)) {
			e.preventDefault();
			textPay.textContent = 'CVV non valido!';
			return;
		}
		if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(inputExpitationPay.value)) {
			e.preventDefault();
			textPay.textContent = 'Riempire il campo correttamente!';
			return;
		}
		if (inputCardNumberPay.value && inputUsernamePay.value && inputPasswordPay.value &&
			inputCvvPay.value && inputExpitationPay.value) {
			e.preventDefault();
			inputPasswordPay.value = '';
			inputUsernamePay.value = '';
			inputCardNumberPay.value = '';
			inputCvvPay.value = '';
			inputExpitationPay.value = '';
			textPay.textContent = 'Pagamento effettuato!';
			textPay.style.color = 'green';
			cart.length = 0;
			displayProductsCart(cart);
			const numberCartNavbar = document.querySelector('.container-navbar .number');
			const numberCartDropdown = document.querySelector('.dropdown-menu .number');
			numberCartDropdown.textContent = '0';
			numberCartNavbar.textContent = '0';
			numberCartDropdown.style.display = 'none';
			numberCartNavbar.style.display = 'none';
			const totalPrice = document.querySelector('.total');
			totalPrice.textContent = '0.00 euro'
			return;
		}
		} else {
		e.preventDefault();
		textPay.textContent = 'L\'Username non è corretto!';
	}
})
//APERTURA DEL LOGIN
}