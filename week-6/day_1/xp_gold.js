// exercise 1
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
// Change the code below to nested arrow functions.
let landscape = () => {
    let result = "";
    let flat = (x) => {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }
    let mountain = (x) => {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }result = result + "\\"
    }
    flat(4);
    mountain(4);
    flat(4)
    return result;
}
console.log(landscape()); 

// exercise 2
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3));

// exercise 3
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1));

// exercise 4 
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum1 = (a) => (b) => a + b
const add55 = curriedSum1(5)
console.log(add55(12));

// exercise 5
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10));
