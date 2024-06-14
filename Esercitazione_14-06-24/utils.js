const pTitleEl = document.querySelector('.p-title');
const pPriceEl = document.querySelector('.p-price');
const pDescriptionEl = document.querySelector('.p-description');
const pCategoryEl = document.querySelector('.p-category-id');
const pImagesEl = document.querySelector('.p-images');
const inputCategoryEl = document.querySelector('.category-id');

function clearP() {
	pTitleEl.textContent = '';
	pPriceEl.textContent = '';
	pDescriptionEl.textContent = '';
	pCategoryEl.textContent = '';
	pImagesEl.textContent = '';
}

function errorMessage(array) {
	if (array.length >= 1) {
		if (array[0].includes('Category')) {
			pCategoryEl.textContent = 'Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}';
			return;
		}
		array.push('Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}');
		if (inputCategoryEl.value) {
			array.pop('Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}');
			array.forEach(message => {
				if (message.toLowerCase().includes('title')) {
					pTitleEl.textContent = 'Title should not be empty';
				}
				if (message.toLowerCase().includes('price')) {
					pPriceEl.textContent = "Price must be a positive number";
				}
				if (message.toLowerCase().includes('description')) {
					pDescriptionEl.textContent = 'Description should not be empty';
				}
				if (message.toLowerCase().includes('images')) {
					pImagesEl.textContent = 'Each value in images must be a URL address"';
				}
			})
			return;
		}
		array.forEach(message => {
			if (message.toLowerCase().includes('title')) {
				pTitleEl.textContent = 'Title should not be empty';
			}
			if (message.toLowerCase().includes('price')) {
				pPriceEl.textContent = "Price must be a positive number";
			}
			if (message.toLowerCase().includes('description')) {
				pDescriptionEl.textContent = 'Description should not be empty';
			}
			if (message.toLowerCase().includes('category')) {
				pCategoryEl.textContent = 'Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}';
			}
			if (message.toLowerCase().includes('images')) {
				pImagesEl.textContent = 'Each value in images must be a URL address"';
			}
		});
		array.pop('Could not find any entity of type \"Category\" matching: {\n    \"id\": 0\n}');
	}
}

export {
	clearP, errorMessage
}