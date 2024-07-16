// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.
// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…
// Populate the array with a few quotes that you like.
// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row

const quotes = [
    {
        id: 0,
        author: 'Albert Einstein',
        quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {
        id: 1,
        author: 'Isaac Newton',
        quote: 'If I have seen further, it is by standing on the shoulders of giants.'
    },
    {
        id: 2,
        author: 'Yoda',
        quote: 'Do, or do not. There is no try.'
    },
    {
        id: 3,
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        id: 4,
        author: 'Maya Angelou',
        quote: 'You will face many defeats in life, but never let yourself be defeated.'
    }
];

let lastQuoteIndex = -1;
let currentQuote = null
function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    
    lastQuoteIndex = randomIndex;
    currentQuote = quotes[randomIndex];
    return currentQuote
}

function displayQuote() {
    const section = document.querySelector('section');
    const randomQuote = getRandomQuote();
    section.innerHTML = randomQuote.quote;
}

let buttonGenerate = document.getElementById('generateQuote');


// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes
// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.
function addQuote(e){
    e.preventDefault()
    let userQuote = document.getElementById('quote').value;
    let userauthor = document.getElementById('author').value;
    let newQuote = {id: quotes.length, author: userauthor, quote: userQuote}
    quotes.push(newQuote)
}

let buttoncharSpace = document.getElementById('numCharSpace');
let buttonChar = document.getElementById('numChar');
let buttonWord = document.getElementById('numWord');
let buttonLike = document.getElementById('like');

function numCharSpace(){
    alert(`Character Count (With Spaces): ${currentQuote.quote.length}`);
}

function numChar(){
    const count = currentQuote.quote.trim().split(/\s+/g).length;
    alert(`Word Count: ${count}`);
}

function numWords() {
    if (currentQuote) {
        const count = currentQuote.quote.trim().split(/\s+/g).length;
        alert(`Word Count: ${count}`);
    }
}

function like() {
    if (currentQuote) {
        currentQuote.likes++;
        updateLikeCount();
    }
}

function updateLikeCount() {
    quotes.forEach((item) => {
        item[like] = 0
    })
}

buttonGenerate.addEventListener('click', displayQuote);
document.forms[0].addEventListener('submit', addQuote);
document.getElementById('numCharSpace').addEventListener('click', numCharSpace);
document.getElementById('numChar').addEventListener('click', numChar);
document.getElementById('numWord').addEventListener('click', numWords);
document.getElementById('like').addEventListener('click', like);


