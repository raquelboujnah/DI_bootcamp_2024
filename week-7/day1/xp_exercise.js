// exercise 1
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
function compareToTen(num){
    return new Promise((res, rej) =>{
        if (num <= 10){
            res('resolve' + num)
        }else if (num > 10) {
            rej('reject' + num)
        }
    })
}
compareToTen(5)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// exercise 2
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
let selfPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('success')
    }, 4000)
})
selfPromise.then(result => console.log(result));


// exercise 3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
let promise3 = Promise.resolve(3)
promise3.then(result => console.log(result));

let promiseBoo = Promise.reject('Boo!')
promiseBoo.then(err => console.log(err));

