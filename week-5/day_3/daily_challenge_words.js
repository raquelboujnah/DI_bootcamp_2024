// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

let userWords = prompt('enter several words separated by commas')
function starsWords(words){
    let wordsArr = words.split(',')
    console.log('*' * wordsArr.length);
    for (let word of wordsArr){
        console.log('*'+ word.trim() +'*');
    }console.log('*' * wordsArr.length);
}

starsWords(userWords)
