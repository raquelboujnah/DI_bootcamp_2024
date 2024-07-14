function calDigit(num){
    let arrNum = num.toString().split('');
    let totalNum = arrNum.reduce((total, num) => Number(total) + Number(num));
    return (totalNum < 10) ? totalNum : calDigit(totalNum);
    // for (let i in arrNum){
    //     total += Number(arrNum[i])
    // }if (total > 10){
    //     return total
    // }
}
console.log(calDigit(8765437654));

class User{
    constructor(name){
        this.name = name
    }

    hello(){
        console.log(`hello ${this.name}`);
    }
}

class Student extends User{
    constructor(name){
        super(name)
    }
}

let arrStudents = [
    new Student('Jay'),
    new Student('Mike'),
    new Student('Raquel')
]
arrStudents.forEach(student => student.hello())

