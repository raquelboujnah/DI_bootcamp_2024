// exercise 1
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// colors.forEach((color, index) => {
//     console.log(`#${index + 1} choice is ${color}`); 
// })
// function ifVioletLastif() { 
//     if (colors.lastIndexOf('violet') === colors.length){
//         console.log("Yeah")
//     }else console.log("No...")
// }
// ifVioletLastif()

// exercise 2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// colors.forEach((color, index) => {
//     if (index === 0){
//         let st = ordinal.indexOf('st')
//         console.log(`${index + 1}${ordinal[st]} choice is ${color}`);
//     }else if (index === 1){
//         let nd = ordinal.indexOf('nd')
//         console.log(`${index + 1}${ordinal[nd]} choice is ${color}`);
//     }else if (index === 2){
//         let rd = ordinal.indexOf('rd')
//         console.log(`${index + 1}${ordinal[rd]} choice is ${color}`);
//     }else {
//         let th = ordinal.indexOf('th')
//         console.log(`${index + 1}${ordinal[th]} choice is ${color}`);
//     }
// })


// exercise 3
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
// const country = "USA";
// console.log([...country]);
// ['U','S','A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// []


// exercise 4
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// Using the filter() method, create a new array, containing only the Full Stack Residents.
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// let welcomeMsg = users.map((item) => {
//     return `Hello ${item.firstName}`
// });
// console.log(welcomeMsg);

// let onlyFullstack = users.filter((item) => {
//     return item.role === 'Full Stack Resident'
// });
// console.log(onlyFullstack);


// exercise 5
// Use the reduce() method to combine all of these into a single string.
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let singleStr = epic.reduce((str, word) => str + " " + word)
// console.log(singleStr);


// exercise 6
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];
let passedCours = students.filter((item) => {
    return item.isPassed === true
})
passedCours.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});