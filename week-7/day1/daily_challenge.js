// daily challenge 1
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function makeAllCaps(arr){
    let numWord = 0
    for (word of arr){
        if (typeof(word) === 'string')
            numWord += 1
    }return new Promise((res, rej) => {
        if (numWord === arr.length){
            res(arr.map(word => word.toUpperCase()))
        }else {
            rej('not all string')
        }
    })
}

function sortWords(arr){
    return new Promise((res, rej) => {
        if (arr.length > 4){
            let arrSort = arr.sort()
            res(arrSort)
        }else {
            res('bigger than 4')
        }
    })
}

// makeAllCaps([1, "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result)) 
//     .catch(error => console.log(error))

// daily challenge 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..
// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// Chain the three functions.

function toJs(json){
    let morseObj = JSON.parse(json)
    return new Promise((res, rej) => {
        if (!morseObj){
            rej('err')
        }else{
            res(morseObj)
        }
    })
}

function toMorse(morseJs){
    let userWord = prompt('enter a word or a sentence');
    return new Promise((res, rej) => {
        let userMorse = []
        for (letter of userWord){
            if ((letter in morseJs) === false){
                rej('err')
            }else{
                userMorse.push(morseJs[letter])
            }
        }res(userMorse)
    })
}

function joinWords(morseTranslation) {
    const joinedMorse = morseTranslation.join('<br>');
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = joinedMorse; // Use innerHTML to interpret <br> tags
    document.body.appendChild(resultDiv);
}

function translateToMorse() {
    toJs(morse)
        .then(morseJS => toMorse(morseJS))
        .then(morseTranslation => joinWords(morseTranslation))
        .catch(error => {
            const errorDiv = document.createElement('div');
            errorDiv.textContent = error;
            document.body.appendChild(errorDiv);
        });
}

translateToMorse()