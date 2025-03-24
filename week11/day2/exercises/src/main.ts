//exercise 1
class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;

    constructor(firstName: string, lastName: string, age: number, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address
    };
    getFullName(): string{
        return `${this.firstName} ${this.lastName}`
    };
};

const person = new Person('Raquel', 'Boujnah', 22, 'Hadera');
console.log(person.getFullName());


//exercise 2
interface Vehicule {
    make: string;
    model: string;
    start(): string
};

interface Car extends Vehicule {
    numberOfDoors: number;
};

class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number){
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    };
    start(): string {
        return `The ${this.make} ${this.model} with ${this.numberOfDoors} doors is starting.`;
    };
};
const myCar = new Sedan("Toyota", "Camry", 4);
console.log(myCar.start());


//exercise 3
function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const obj1 = { name: "Raquel", age: 22 };
const obj2 = { job: "Developer", city: "Tlv" };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj); 


//exercise 4
class Stack<T>{
    private items: T[] = [];  

    push(element: T): void{
        this.items.push(element)
    };

    pop(): T | undefined{
        return this.items.pop();
    };

    isEmpty(): boolean{
        if(!this.items) {
            return false
        }else {
            return true
        }
    }
}


//exercise 5
const filterArray = <T>(arr: T[], predicate: (element: T) => boolean): T[] => {
    const result: T[] = [];
    for (const element of arr) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

 
//daily challenge
let types : string[]= ['string',  'number'];

const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
    if(allowedTypes.includes(typeof value)){
        return true
    }else{
        return false
    };
};
console.log(validateUnionType(true, types));


//XP GOLD
//exercise 1
class Animal{
    speak(): string{
        return `The animal speaks`
    }
}

class Dog extends Animal{
    speak(): string {
        return "The dog barks";
    }
}


//exercise 2
interface User {
    id: number;
    name: string;
    email?: string;
}

const user = {
    id: 1,
    name: 'Raquel',
}

const getUserInfo = (obj: User): string => {
    return `${obj.name} ${obj.id} ${obj.email || 'no email'}`
}
console.log(getUserInfo(user));


//exercise 3
const printInfo = (val: number| string): string => {
    if(typeof val === 'number'){
        return `The number is ${val}`
    }else if(typeof val === 'string'){
        return `The string is ${val}`
    }else{
        return 'not a string or number'
    }
}


//exercise 4
