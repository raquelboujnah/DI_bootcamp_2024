"use strict";
//exercise 1
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    ;
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    ;
}
;
const person = new Person('Raquel', 'Boujnah', 22, 'Hadera');
console.log(person.getFullName());
;
;
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    ;
    start() {
        return `The ${this.make} ${this.model} with ${this.numberOfDoors} doors is starting.`;
    }
    ;
}
;
const myCar = new Sedan("Toyota", "Camry", 4);
console.log(myCar.start());
//exercise 3
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: "Raquel", age: 22 };
const obj2 = { job: "Developer", city: "Tlv" };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
//exercise 4
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    ;
    pop() {
        return this.items.pop();
    }
    ;
    isEmpty() {
        if (!this.items) {
            return false;
        }
        else {
            return true;
        }
    }
}
//exercise 5
const filterArray = (arr, predicate) => {
    const result = [];
    for (const element of arr) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
};
//daily challenge
let types = ['string', 'number'];
const validateUnionType = (value, allowedTypes) => {
    if (allowedTypes.includes(typeof value)) {
        return true;
    }
    else {
        return false;
    }
    ;
};
console.log(validateUnionType(true, types));
//XP GOLD
//exercise 1
class Animal {
    speak() {
        return `The animal speaks`;
    }
}
class Dog extends Animal {
    speak() {
        return "The dog barks";
    }
}
const user = {
    id: 1,
    name: 'Raquel',
};
const getUserInfo = (obj) => {
    return `${obj.name} ${obj.id} ${obj.email || 'no email'}`;
};
console.log(getUserInfo(user));
//exercise 3
const printInfo = (val) => {
    if (typeof val === 'number') {
        return `The number is ${val}`;
    }
    else if (typeof val === 'string') {
        return `The string is ${val}`;
    }
    else {
        return 'not a string or number';
    }
};
//exercise 4
