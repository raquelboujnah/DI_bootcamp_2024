const year = document.querySelector('span')!
const thisYear : string = new Date().getFullYear().toString()
year.textContent = thisYear
class User {
    public name: string;
    private readonly age: number;
    protected active: boolean;
    constructor(name: string, age: number, active: boolean){
        this.name = name;
        this.age = age;
        this.active = active
    };
    getAge() {
        return `My age is ${this.age}`
    };
    getActive() {
        return `Am i active? ${this.active}`
    };
    setAge(age: number){
        // this.age = age
    };
};
let user1 = new User('Raquel', 22, true);
user1.setAge(23)
console.log(user1.getActive());
console.log(user1.getAge());
class Student extends User {
    constructor(name: string, age: number, active: boolean){
        super(name, age, active);
    };
    getStudAge(){
        // return `My age is ${this.age}`
    }
    getStudActive(){
        return `My age is ${this.active}`
    }
}
let stud1 = new Student('Ezra', 24, false);
console.log(stud1.name);
console.log(stud1.getAge());
console.log(stud1.getActive());
class Peeps {
    static count: number = 0;
    static getCount() : number {
        return Peeps.count;
    };
    public id: number;
    public name: string
    constructor(name: string){
        this.name = name
        this.id = ++ Peeps.count;
    };
};
const stud2 = new Peeps('John');
const stud3 = new Peeps('Anne');
const stud4 = new Peeps('Marie');
console.log(stud2.name, stud2.id);
console.log(stud3.name, Peeps.count);
type UserType = {
    name: string;
    age: number;
    active: boolean;
};
type Grade = {
    grade: number;
};
let users1: UserType = {
    name: 'Raquel',
    age: 22,
    active: true
};
let stud5: UserType & Grade = {
    grade: 10,
    name: 'Raquel',
    age: 22,
    active: true,
};
type UserInterface = {
    name: string;
    age: number;
    active: boolean;
}
class Users implements UserInterface {
    public _name: string;
    protected _age: number;
    private _active: boolean;
    constructor(name: string, age: number, active: boolean) {
      this._name = name;
      this._age = age;
      this._active = active;
    }
    getAge(): number {
      return this._age;
    }
    get name(): string {
      return this._name;
    }
    get age(): number {
      return this._age;
    }
    get active(): boolean {
      return this._active;
    }
    set name(name: string) {
      this._name = name;
    }
    set age(age: number) {
      this.age = age;
    }
    set active(active: boolean) {
      this._active = active;
    }
}