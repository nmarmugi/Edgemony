import { cards } from "./data/cards.js";

import {
    backgroundElGen,
    cardElGen,
    buttonElGen,
    modalElGen
} from "./modules/components.js";


const paragraphEl = document.querySelector('p');
const buttonEl = buttonElGen();
const modal = modalElGen();
paragraphEl.insertAdjacentElement('beforeend', buttonEl);
paragraphEl.insertAdjacentElement('beforeend', modal);

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
},
{
    name: 'Foresta Nera',
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



let i = 0;
/* let y = 0; */


const createList = () => {

    for (let i = 0; i < cards.length; i++) {

        const cardEl = cardElGen(cards[i]);
        mainSectionEl.append(cardEl);

    }
    return mainSectionEl;
}


const main = createList();

// Funzione per aprire il modal
function openModal() {

    // Rimuove la classe 'hidden' dall'elemento del modal
    modal.classList.remove('hidden');

    // Restituisce l'elemento del modal
    return modal;

}

function getRandomInt(value) {
    return Math.floor(Math.random() * value);
}
/* console.log(getRandomInt(newCard.length)); */

/* buttonEl.addEventListener('click', function () {

    // Controlla se tutte le carte sono già state aggiunte
    if (y === newCard.length) {
        console.log('sono finite le carte');
        return;// Esce dalla funzione se non ci sono più carte da aggiungere
    }

    // Verifica se la carta corrente (newCard[y]) è già presente nell'array `cards`
    const isValid = cards.some(i => i.name.toLowerCase() === newCard[y].name.toLowerCase());

    if (isValid) {
        console.log('La carta è già presente!');
        y++;// Incrementa `y` per passare alla prossima carta

        openModal();

    } 
}
)
 */

let randomValue = 0;

buttonEl.addEventListener('click', function () {
    randomValue = getRandomInt(newCard.length);


    const allEmpty = newCard.every(element => element === "");
    if (allEmpty) {
        const message = document.querySelector('.messageModal');
        message.textContent = 'Ho finito le card da stampare!';
        openModal();
        return;
    }


    while (newCard[randomValue] === '') {
        randomValue = getRandomInt(newCard.length);
    }


    if (newCard[randomValue] !== '') {
        const isValid = cards.some(i => i.name.toLowerCase() === newCard[randomValue].name.toLowerCase());


        if (isValid) {

            console.log('La carta è già presente!');
            openModal();

        } else {
            const newCardGen = cardElGen(newCard[randomValue]);
            cards.push(newCard[randomValue]);
            newCard.splice(randomValue, 1, '');

            main.insertAdjacentElement('beforeend', newCardGen);

        }

    }
}
)


modal.addEventListener('click', function () {

    modal.classList.add('hidden');
})


window.onload = main;

