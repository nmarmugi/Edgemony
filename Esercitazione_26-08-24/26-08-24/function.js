export function contaCaratteri(input) {
    const inputLength = input.length;
    const inputText = input;

    let countAlfabetici = 0;
    let countSpazi = 0;

    for (let i = 0; i < inputLength; i++) {
        if (/^[\p{L}]$/u.test(inputText[i])) {
            countAlfabetici++;
        }
        else if (/\s/.test(inputText[i])) {
            countSpazi++;
        }
    }

    return {
        totalCharacters: inputLength,
        alphabeticCharacters: countAlfabetici,
        spaces: countSpazi
    };
}