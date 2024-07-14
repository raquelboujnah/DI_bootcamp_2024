// exercise 1
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
// let randomInt = Math.floor(Math.random() * 100);
// for (let i=0; i<randomInt; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// exercise 2
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,
// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
function string(str){
    let strArr = str.split('')
    let strEvenCap = []
    let strOddCap = []
    for (let i=0; i<strArr.length; i++){
        if (i % 2 === 0 || i === 0){
            strEvenCap.push(strArr[i].toUpperCase())
            strOddCap.push(strArr[i])
        }else {
            strEvenCap.push(strArr[i])
            strOddCap.push(strArr[i].toUpperCase())
        }
    }return [strEvenCap.join(''), strOddCap.join('')]
}
console.log(string('raquel'));


// exercise 3
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
function isPalindrome(str){
    let strReverse = str.split('').reverse().join('');
    if (str === strReverse){
        return true
    }else {
        return false
    }
}
console.log(isPalindrome('kayak'));


// exemple 4 
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:
// let array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// let array2 = ['a', 3, 4, 2]; // should return 4 
// let array3 = []; // should return 0
// function  biggestNumberInArray(arrayNumber){
//     for (let i=0; i<arrayNumber.length; i++){
//         if (typeof(arrayNumber[i]) === 'string' || isNaN(arrayNumber[i])){
//             arrayNumber.pop(i)
//             return Math.max(...arrayNumber)
//         }else if (arrayNumber.length === 0){
//             return 0
//         }else{
//             return Math.max(...arrayNumber)
//         }
//     }
    
// }
// console.log(biggestNumberInArray(array2));


// exercise 5
// Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
function unique(arr){
    let uniqueArr = []
    for (let num of arr){
        if (uniqueArr.includes(num)){
            
        }else {
            uniqueArr.push(num)
        }
    }return uniqueArr
}
console.log(unique([1,2,3,3,3,3,4,5]));


// exercise 6
// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
// For instance, createCalendar(2012, 9) should generate the following calendar:
// Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.
function createCalendar(year, month){

}