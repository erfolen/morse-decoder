const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str =[];
    for (let i = 0; i < expr.length;i += 10) {
        let letter = expr.substr(i, 10);
        letter = (letter === '**********') ? ' ': letter;
        let sim = '';
        for (let y = 0; y < letter.length; y += 2) {
            let simNum = letter.substr(y, 2);
            if (simNum == 10) {
                sim += '.';
            } else if (simNum == 11) {
                sim += '-';
            } else if (simNum == ' ') {
                sim += ''
            } else {
                sim += '';
            }
        } 
        (MORSE_TABLE[sim] == undefined) ? str.push(' ') : str.push(MORSE_TABLE[sim]);
    }
    return res = str.join ('');
  }

module.exports = {
    decode
}