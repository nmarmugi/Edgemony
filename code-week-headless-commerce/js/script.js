import { MODAL } from "./modals.js";
import { HOME } from "./home.js";

HOME();	//RICHIAMO HOME DA HOME.JS
MODAL(); //RICHIAMO MODAL DA COMPONENTS.JSz

function loadLanguage(language) {
	fetch(`./translations_${language}.json`).then(response => {
		return response.json();
	}).then(translations => {
		applyTranslations(translations);
	}).catch(error => {
		console.error(error);
	})
}

function applyTranslations(translations) {
	for (const key in translations) {
		if (translations.hasOwnProperty(key)) {
			const element = document.getElementById(key);
			if (element) {
				if (element.tagName === 'INPUT') {
					element.placeholder = translations[key];
				} else {
					element.textContent = translations[key];
				}
			}
		}
	}
}

const it = document.querySelectorAll('.btn-italian');
it.forEach(button => {
	button.addEventListener('click', function() {		
		loadLanguage('it');
	})
})

const en = document.querySelectorAll('.btn-english');
en.forEach(button => {
	button.addEventListener('click', function() {
		loadLanguage('en');
	})
})