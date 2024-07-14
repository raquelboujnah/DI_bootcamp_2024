// exercise 1
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`
function printFullName(obj){
    const {first, last} = obj
    console.log(`Your full name is ${first} ${last}`);
}
printFullName({first: 'Elie', last:'Schoppik'}) 

// exercise 2
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
function keysAndValues(obj){
    let key = Object.keys(obj)
    let value = Object.values(obj)
    console.log([key, value]);
}
keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ key1: true, key2: false, key3: undefined })


// exercise 3
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
//2