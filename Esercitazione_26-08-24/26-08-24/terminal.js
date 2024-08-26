const readline = require('readline');

function contaCaratteri(input) {
    const inputLength = input.length;
    const inputText = input;

    let countAlfabetici = 0;
    let countSpazi = 0;

    for (let i = 0; i < inputLength; i++) {
        if (/^[\p{L}]$/u.test(inputText[i])) {
            countAlfabetici++;
        }
        if (/\s/.test(inputText[i])) {
            countSpazi++;
        }
    }

    return {
        totalCharacters: inputLength,
        alphabeticCharacters: countAlfabetici,
        spaces: countSpazi
    };
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Inserisci il testo: ', (input) => {
    const result = contaCaratteri(input);
    console.log(`Numero totale di caratteri: ${result.totalCharacters}`);
    console.log(`Numero di caratteri alfabetici: ${result.alphabeticCharacters}`);
    console.log(`Numero di spazi: ${result.spaces}`);
    rl.close();
});
