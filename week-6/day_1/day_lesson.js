function centuty(year){
    let yearCentury = (year > 2000) ? 'You are in the 21st century' : 'you live in the middle age'
    return yearCentury
}
console.log(centuty(2024)); 

const sum = (operator, a, b) => operator === '+' ? a + b : operator === '-' ? a - b : operator === '*' ? a * b : operator === '/' ? a / b : 'your operator is not valid'
console.log(sum('-', 2, 1));

const sum1 = (num) => num * 2 //7*2
const sum2 = (num) => num + 1 //6+1=7

const sumsum = (a,b) => (c) => a(b(c));

console.log(sumsum(sum1, sum2)(6));

let user = {
    name: 'John',
    last: 'Doe', 
    adress: {
        city: 'Tel aviv',
    },
};

let obj = {...user}
obj.adress = {...user.adress}
obj.adress.city = 'Ramat Gan'

console.log(obj);
console.log(user);
