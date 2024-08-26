import { contaCaratteri } from './function.js';

const input = document.querySelector('.textarea');
const caratteri = document.querySelector('.caratteri');
const caratteriAlfabetici = document.querySelector('.caratteriAlfabetici');
const spazi = document.querySelector('.spazi');

input.addEventListener('input', () => {
    const objCaratteri = contaCaratteri(input.value);
    caratteri.innerText = objCaratteri.totalCharacters;
    caratteriAlfabetici.innerText = objCaratteri.alphabeticCharacters;
    spazi.innerText = objCaratteri.spaces;
});
