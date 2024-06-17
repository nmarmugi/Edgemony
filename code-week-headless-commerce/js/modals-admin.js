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