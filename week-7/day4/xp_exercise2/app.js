import { people } from "./data.js";

const averageAgePeople = () => {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0); 
    const averageAge = totalAge / people.length;
    return averageAge
}

console.log(averageAgePeople());
