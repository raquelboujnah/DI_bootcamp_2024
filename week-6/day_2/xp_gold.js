// Analyze this code, what will be the output ?
let arr1 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// [2,4,6]
console.log(arr1);

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?
let arr = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// [0,3]
console.log(arr);

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
// What is the value of i ?
// [2,4,8,10,16,18]
// 0,1,2,3,4,5,6
console.log(arrayNum);

// exercise 4
// Write a JavaScript program to find the sum of all elements in an array.
let sumArr = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

// exercise 5
// Write a JavaScript program to remove duplicate items in an array.
function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

// exercise 6
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
function onlyNum(arr){
    return arr.filter((item) => Boolean(item))
}
console.log(onlyNum([NaN, 0, 15, false, -22, '',undefined, 47, null]));

// exercise 7
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
function repeat(str, num = 1){
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

// exercise 8
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

function x(){
    let startLineIndex = startLine.indexOf('<')
    let spaces = ''
    for (let i = 0; i< 7; i++){
    spaces += ' '
    }rabbit = spaces + rabbit
    turtle = spaces + turtle
}
x()
console.log(startLine);
console.log(turtle);
console.log(rabbit);
