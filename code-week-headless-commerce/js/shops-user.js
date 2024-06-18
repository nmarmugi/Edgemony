export const createShops = function() {
	for(let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		let value = localStorage.getItem(key);
		console.log(value.split('/')[1])
		if (value.split('/')[1] === 'admin') {
			const containerShop = document.querySelector('.column-shop');

			const cardEl = document.createElement('div');
			cardEl.className = 'card-shop';
			
			const imgCardEl = document.createElement('img');
			imgCardEl.className = 'card-img-shop';
			imgCardEl.src = '.././img/shop_746900.png';
			imgCardEl.alt = 'Immagine';
			imgCardEl.width = 100;
			
			const titleCardEl = document.createElement('h2');
			titleCardEl.className = 'card-title';
			titleCardEl.textContent = `Admin-name: ${localStorage.key(i)}`;

			const linkToShop = document.createElement('button');
			linkToShop.title = 'Vai allo SHOP!';
			linkToShop.textContent = 'Vai allo SHOP!';
			linkToShop.className = 'link-to-admin';

			cardEl.append(imgCardEl, titleCardEl, linkToShop);
			containerShop.append(cardEl);
		}
	}
}
