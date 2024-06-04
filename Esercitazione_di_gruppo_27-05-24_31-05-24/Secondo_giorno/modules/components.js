const cardElGen = (obj) => {
    const border1 = document.createElement('div');
    border1.className = 'border-card1';
    border1.classList.add('fadeIn', obj.animation);


    const border2 = document.createElement('div');
    border2.className = 'border-card2';

    /* crea main card */
    const container = document.createElement('div');
    container.className = 'card';

    const titleCard = document.createElement('h2');
    titleCard.className = 'card__name';
    titleCard.textContent = obj.name;

    const paragrafCard = document.createElement('p');
    paragrafCard.className = 'card__paragraph';
    paragrafCard.textContent = obj.description;

    /* crea contenitore cup-cone-brioche */
    const containerOffer = document.createElement('div');
    containerOffer.className = 'container-price';

    /* crea contenitore offerta cup */
    const containerOfferCup = document.createElement('div');
    containerOfferCup.className = 'price__littleCard';

    const titleOfferCup = document.createElement('h3');
    titleOfferCup.className = 'price__name';
    titleOfferCup.textContent = obj.offerte[0].nomeOfferta;

    const imageOfferCup = document.createElement('img');
    imageOfferCup.src = obj.offerte[0].img;
    imageOfferCup.className = 'price__img';
    imageOfferCup.width = 50;
    imageOfferCup.height = 50;
    imageOfferCup.alt = 'icona gelato';

    const priceOfferCup = document.createElement('span');
    priceOfferCup.className = 'price__price';
    priceOfferCup.textContent = obj.offerte[0].price;


    /* crea contenitore offerta cone */
    const containerOfferCone = document.createElement('div');
    containerOfferCone.className = 'price__littleCard';

    const titleOfferCone = document.createElement('h3');
    titleOfferCone.className = 'price__name';
    titleOfferCone.textContent = obj.offerte[1].nomeOfferta;

    const imageOfferCone = document.createElement('img');
    imageOfferCone.src = obj.offerte[1].img;
    imageOfferCone.className = 'price__img';
    imageOfferCone.width = 50;
    imageOfferCone.height = 50;
    imageOfferCone.alt = 'icona gelato';

    const priceOfferCone = document.createElement('span');
    priceOfferCone.className = 'price__price';
    priceOfferCone.textContent = obj.offerte[1].price;

    /* crea contenitore offerta brioche */
    const containerOfferBrioche = document.createElement('div');
    containerOfferBrioche.className = 'price__littleCard';

    const titleOfferBrioche = document.createElement('h3');
    titleOfferBrioche.className = 'price__name';
    titleOfferBrioche.textContent = obj.offerte[2].nomeOfferta;

    const imageOfferBrioche = document.createElement('img');
    imageOfferBrioche.src = obj.offerte[2].img;
    imageOfferBrioche.className = 'price__img';
    imageOfferBrioche.width = 50;
    imageOfferBrioche.height = 50;
    imageOfferBrioche.alt = 'icona gelato';

    const priceOfferBrioche = document.createElement('span');
    priceOfferBrioche.className = 'price__price';
    priceOfferBrioche.textContent = obj.offerte[2].price;

    /* crea immagine fondo card */
    const imageCard = document.createElement('img');
    imageCard.src = obj.image;
    imageCard.className = 'card__img';
    imageCard.classList.add('margin-top', obj.margin);
    imageCard.width = 150;
    imageCard.alt = 'icona gelato';


    containerOfferCup.append(titleOfferCup, imageOfferCup, priceOfferCup);
    containerOfferCone.append(titleOfferCone, imageOfferCone, priceOfferCone);
    containerOfferBrioche.append(titleOfferBrioche, imageOfferBrioche, priceOfferBrioche);

    containerOffer.append(containerOfferCup, containerOfferCone, containerOfferBrioche);

    container.append(titleCard, paragrafCard, containerOffer, imageCard);
    border2.append(container);
    border1.append(border2);
    return border1;
}

export {
    cardElGen
}


