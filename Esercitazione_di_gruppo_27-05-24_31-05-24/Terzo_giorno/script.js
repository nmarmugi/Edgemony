import { cards } from "./data/cards.js";

import {
    backgroundElGen,
    cardElGen,
    buttonElGen
} from "./modules/components.js";


const paragraphEl = document.querySelector('p');
const buttonEl = buttonElGen();
paragraphEl.insertAdjacentElement('beforeend', buttonEl);

const mainSectionEl = document.querySelector('.container-card');
mainSectionEl.append(backgroundElGen());

const newCard = [{
    name: 'Labello Blu',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, maiores incidunt? Minus quisquam harum magnam.',
    offerte: [
        {
            nomeOfferta: 'Cup',
            img: "./img/cup.png",
            price: '€ 1.00'
        },
        {
            nomeOfferta: 'Cone',
            img: "./img/cone.png",
            price: '€ 1.50'
        },
        {
            nomeOfferta: 'Brioche',
            img: "./img/brioche.png",
            price: '€ 2.00'
        }],
    image: "./img/cono-plus.png",
    animation: 'fadeIn9',
    margin: 'ciao'
},
{
    name: 'Valle Incantata',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, maiores incidunt? Minus quisquam harum magnam.',
    offerte: [
        {
            nomeOfferta: 'Cup',
            img: "./img/cup.png",
            price: '€ 1.00'
        },
        {
            nomeOfferta: 'Cone',
            img: "./img/cone.png",
            price: '€ 1.50'
        },
        {
            nomeOfferta: 'Brioche',
            img: "./img/brioche.png",
            price: '€ 2.00'
        }],
    image: "./img/coppa-sorriso.png",
    animation: 'fadeIn10',
    margin: 'ciao'
}]


// dichiariamo e inizializziamo un counter che rappresenta l'indice dell'array delle nuove card
let i = 0;


const createList = () => {

    // creiamo la lista ciclando l'array cards
    for (let i = 0; i < cards.length; i++) {

        // salviamo le card in una variabile
        const cardEl = cardElGen(cards[i]);

        // appendiamo cardEl al main
        mainSectionEl.append(cardEl);

    }

    // torniamo il main riempito di card
    return mainSectionEl;
}


// Salviamo in una variabile il risultato della funzione createList
const main = createList();


// creiamo la funzione all'evento onclick 
buttonEl.addEventListener('click', function () {
    if (i === newCard.length) {
        console.log('sono finite le carte');
        return;// Esce dalla funzione se non ci sono più carte da aggiungere
    }

    // In una nuova variabile salviamo l'oggetto trasformato in card all'indice in cui ci troviamo    
    const newCardGen = cardElGen(newCard[i]);

    // aggiungiamo appena prima della fine del main 
    main.insertAdjacentElement('beforeend', newCardGen);

    // iteriamo la i per passare all'oggetto successivo
    i++;

})

// al caricamento della pagina applichiamo il tutto
window.onload = main;



// Con il metodo applicato da Ema in classe

/* // creiamo la funzione che resetta il main
const resetCardList = () => {
    mainSectionEl.textContent = '';

    //applica funzione che genera la sezione del background
    mainSectionEl.append(backgroundElGen());

    // creiamo le nostre card ciclando l'oggetto cards
    for (let i = 0; i < cards.length; i++) {

        // salviamo le card in una variabile
        const cardEl = cardElGen(cards[i]);

        // appendiamo cardEl al main
        mainSectionEl.append(cardEl);

    }

    // torniamo il main riempito di card
    return mainSectionEl;
}


// creiamo la funzione all'evento onclick 
buttonEl.addEventListener('click', function () {

    // in cui pushiamo la nuova carta nell'array di oggetti
    cards.push(newCard);

    // al main attribuiamo il valore della lista vecchia più la carta aggiunta
    mainSectionEl.append(resetCardList());
})


// al caricamento della pagina applichiamo il tutto
window.onload = mainSectionEl.append(resetCardList()); */