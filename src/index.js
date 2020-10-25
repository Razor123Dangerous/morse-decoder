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
    if(expr.toString().length % 10 !== 0){
        return 0;
    }
    else{
        let array = [];
        let result = '';
        let array_new = [];
        
        for (let i = 0; i < expr.length; i++) {
            if(i % 10 === 0){
                array.push(expr.substr(i, 10));
            }
        }
        
        for (let i = 0; i < array.length; i++) {
            if(array[i] === '**********'){
                result = array[i];
            }
            else{
                for (let j = 0; j < array[i].length; j++) {
                    if(array[i][j] === '0'){
                        continue;
                    }
                    else if(j % 2 === 0){
                        if(array[i].substr(j, 2) === '10'){
                            result += '.' 
                        }
                        else if(array[i].substr(j, 2) === '11'){
                            result += '-';
                        }
                    }
                }
            }
            array_new.push(result);
            result = '';
        }
        
            for (let i = 0; i < array_new.length; i++) {
                if(array_new[i] === "**********"){
                    result += ' ';
                }
                else{
                    for(key in MORSE_TABLE){
                        if(array_new[i] === key){
                            result += MORSE_TABLE[key];
                        }
                    }
                }
            }
            return result;
        }
    }

module.exports = {
    decode
}