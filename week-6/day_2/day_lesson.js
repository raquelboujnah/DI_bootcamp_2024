// function solution(s){
//     let lastAIndex = s.lastIndexOf('a')
//     let firstBIndex = s.indexOf('b')
//     if (firstBIndex === -1 || lastAIndex === -1 || lastAIndex < firstBIndex){
//         return true;
//     }return false
// }

// const testCases = [
//     { input: "aabbb", output: true },
//     { input: "ba", output: false },
//     { input: "aaa", output: true },
//     { input: "b", output: true },
//     { input: "abba", output: false },
//     { input: "a", output: true },
//     { input: "bbaa", output: false },
//     { input: "bbba", output: false },
//     { input: "aabb", output: true },
//     { input: "bababab", output: false },
//     { input: "babababa", output: false },
//     { input: "aabababb", output: false },
//     { input: "baaab", output: false },
//     { input: "bbabbabbababbab", output: false },
//     { input: "babaabaaab", output: false },
//     { input: "ab", output: true },
//     { input: "ababa", output: false },
//   ];

// function testSolution() {
//     for (let i = 0; i < testCases.length; i++) {
//       const { input, output } = testCases[i];
//       const result = solution(input);
//       console.log(
//         `Input: "${input}", Output: ${result}, Expected Output: ${output} Result: ${
//           result === output ? "OK" : "NOT OK"
//         }`
//       );
//     }
//   }
//   testSolution();

// let users = ['John', 'Marry', 'Dan', 'Anne']

// let arr = []
// users.forEach((x, index) => {
//     users[index] = x + '@gmail.com'
// });
// console.log(users);


// function number(arr1){
//     let arr2 = [];
//     arr1.forEach((num) => {
//         arr2.push(num * 2);
//     })
//     return arr2
// }
// console.log(number([1,2,3,4,5]));


// let users = [
//     { userid: 1, name: "John", email: "jjj@gmail.com" },
//     { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   ];

// function render(arr){
//     let usersHtml = arr.map((user) => {
//         let body = document.querySelector('body');
//         let item = document.createElement('div');
//         item.innerHTML = `userid: ${userid}, name: ${name} and email: ${email}`
//         body.appendChild(item)
//     })
// }

// function numbers(arr){
//     let newArr = []
//     for (let num of arr){
//         if (num > 3){
//             newArr.push(num)
//         }
//     };return newArr
// }

// console.log(numbers([0,1,1,2,3,5,8]));

let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 3, name: "Or", email: "aaa@gmail.com" },
];

// let onlyOArr = users.filter((item) => {
//     return item.name.toLocaleLowerCase().includes('o')
// });
// console.log(onlyOArr);

// function sum(arr){
//     let totalSum = 0
//     for (let i =0; i<arr.length; i++){
//         totalSum += arr[i]
//     }return totalSum
// }

// console.log(sum([2,5,10,100]));

let first3 = (obj) => {
    for (let item of obj){
        if (item.userid === 3){
            return item
        }
    }
}

console.log(first3(users));


function birthdayCandles(arr){
    let currentBignum = 0
    let numCandles = 0
    for (let i=0; i<arr.lenght; i++){
        if (arr[i] > currentBignum){
            currentBignum = arr[i]
        }else if (arr[i] === currentBignum){
            numCandles += 1
        }
    }return numCandles
}


console.log(birthdayCandles([2,8,4,4,8,1,8]));
