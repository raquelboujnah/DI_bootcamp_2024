//exercise 1
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();

// people[2] = 'Jason';

// people.push('Raquel');

// console.log(people.indexOf('Mary'));

// let arr = people.slice(1,3)

// console.log(people.indexOf('Foo'));

// var last = people.pop()

// for (let x in people) {
//     console.log(people[x]);
// }

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//         break;
//     }
// }


// exercise 2
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// var colors = ['red', 'pink', 'blue', 'green', 'black']
// for(let i = 0; i < colors.length; i++) {
//     console.log(`My #${i + 1} choice is ${colors[i]}`);
// }

// for(let i = 0; i < colors.length; i++) {
//     if (i == 0){
//         var num = 'st';
//     } else if (i == 1){
//         var num = 'nd';
//     } else if (i == 2){
//         var num = 'rd';
//     } else if (i == 3 || i == 4){
//         var num = 'th';
//     }

//     console.log(`My #${i + 1}${num} choice is ${colors[i]}`);
// }

// exercise 3
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let user_number = prompt('Choose a number')
// console.log(typeof(user_number));
// do { user_number = prompt('Choose a number')
// } while (Number(user_number) <= 10)


// exercise 4
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building['numberOfFloors']);

console.log((building['numberOfAptByFloor']['firstFloor']), (building['numberOfAptByFloor']['thirdFloor']));

let secondTenant = building['nameOfTenants'][1];
console.log(secondTenant, (building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]));

let sarah_david_rent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
if (sarah_david_rent > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
}


// exercise 5
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    father: "John",
    mother: "Jane",
    daughter: "Emily",
    son: "Michael"
};

for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}


// exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let sentence = "";
for (let key in details) {
  sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim());


// exercise 7
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetters = [];
for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i].charAt(0));
}
firstLetters.sort()
var compagny_name = firstLetters.join('');
console.log(compagny_name);