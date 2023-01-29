const MORSE_TABLE = {
    // '**********': ' ',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = Array.from(expr);
    const letters = [];
    while (arr.length > 0) {
        letters.push(arr.splice(0, 10));
    }

    const code = letters.map(i => i.join('')
        .replace(/^0+/, '')
        .replace(/10/ig, '.')
        .replace(/11/ig, '-'))

    return code.map(i => MORSE_TABLE[i] ? MORSE_TABLE[i] : ' ').join('')
};

module.exports = {
    decode
}