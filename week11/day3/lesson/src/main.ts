// interface EmployeeInterface {
//   // [key: string]: string | number;
//   name: string;
//   age: number;
//   role: string;
// }

// let employee1: EmployeeInterface = {
//   name: 'jonh',
//   age: 30,
//   role: 'Developer'
// }

// employee1['email'] = 'johm@gmail.com';

// let prop1 : string = 'name';
// console.log(employee1[prop1 as keyof EmployeeInterface]);

// for(let key in employee1){
//   console.log(`${key} - ${employee1[key as keyof EmployeeInterface]}`);
//   console.log(`${key} - ${employee1[key as keyof  typeof employee1]}`);

// }

// interface EmployeeInterface {
//   // [key: string]: string | number;
//   name: string;
//   age: number;
//   role: string;
// }

// let employee1: EmployeeInterface = {
//   name: 'jonh',
//   age: 30,
//   role: 'Developer'
// }

// const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface): void => {
//   console.log(key, employee[key]);
// }
// logEmployee(employee1, 'age')


// interface StudentInterface {
//   // [key: string]: string | number | string[] | undefined
//   name: string;
//   grade: number;
//   courses?: string[];
// };

// const student: StudentInterface = {
//   name: 'Raquel',
//   grade: 100,
// }

// for(let key in student){
//   console.log(`${key} - ${student[key as keyof StudentInterface]}`);
// }



type keys = 'name' | 'age' | 'role';
type EmployeeType = Record<keys, string | number>

let employee2: EmployeeType = {
  name: 1,
  age: '22',
  role: 'director',
}

for(let key in employee2){
  console.log(`${key} - ${employee2[key as keyof EmployeeType]}`);
}


//Generic
// const strEcho = (value: string): string => {
//   return value
// };

const echo = <T>(value: T): T => {
  return value
}
console.log(echo('hello'));

interface BoolCheck<T> {
  arg: T;
  is: boolean
}

const isObj = <T>(arg: T): BoolCheck<T> => {
  // return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
  if(Array.isArray(arg) && !arg.length){
    return {arg, is: false}
  }else if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
    return {arg, is: true}
  }else{
    return {arg, is: !!arg};
  }
}

console.log(isObj(true));
console.log(isObj({a: 'true'}));


interface HasId{
  id: number;
};

const checkUser = <T extends HasId>(user: T): T => {
  return user
}

console.log(checkUser({id: 3, name: 'jhon'}));

const userJson = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const getUserInfo = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}

console.log(getUserInfo(userJson, 'email'));


// Generic class
class StateObject<T>{
  private data: T

  constructor(value:T){
    this.data = value
  }

  get state(): T {
    return this.data;
  }

  set state(value: T){
    this.data = value;
  }
}

const state = new StateObject('john')
console.log(state.state);
state.state = 'dan'
console.log(state.state);


// Utility types

//Partial
interface Post {
  id: number;
  title: string;
  content: string;
  authoor: string;
}

const post1: Partial<Post> = {
  id: 1,
  content: 'fff'
};

// const updatePost = (post: Post, update: Partial<Post>): Post => {
//   return{...post, ...update}
// }

// console.log(updatePost(post1, {content: 'bagg'}));


// Require
const updatePost;


//Pick or Omit
type MiniPost = Pick<Post, 'id' |  'title'>
type OtherPost = Omit<Post, 'id' | 'title'>


//Exclude
type Grade = 'A' | 'B' | 'C';
type Passes = Exclude<Grade, 'C'>

//Extract
type Failed = Extract<Grade, 'C'>

//NonNullable
type NullableString = string | null | undefined
type NonNullableString = NonNullable<NullableString>;

//ReturnType
const createUser = (name: string, age: number, active: boolean) => {
  return{name, age, active};
}

type UserReturnType = ReturnType<typeof createUser>

//Parameters
type UserParams = Parameters<typeof createUser>

//Awaited 
interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async(): Promise<Users[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>