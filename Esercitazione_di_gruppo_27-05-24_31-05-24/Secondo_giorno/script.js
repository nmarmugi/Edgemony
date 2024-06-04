import { cards } from "./data/cards.js";

import {
    cardElGen
} from "./modules/components.js";

const mainSectionEl = document.querySelector('.container-card');

for (let i = 0; i < cards.length; i++) {

    const cardEl = cardElGen(cards[i]);
    mainSectionEl.append(cardEl);

}

window.onload = mainSectionEl;