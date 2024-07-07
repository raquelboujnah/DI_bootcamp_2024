// exercise 1
let obj1 = {FullName : 'Raquel Boujnah',
            Mass : '55k',
            Height : '158cm',
            calculateBMI: function() {
                return this.mass / (this.height * this.height); 
            }
        }

let obj2 = {FullName : 'Ezra Israel',
            Mass : '74k',
            Height : '175cm',
            calculateBMI: function() {
                return this.mass / (this.height * this.height);
            }  
        }

function compareBMI(bmi1, bmi2){
    if (bmi1 < bmi2){
        return obj1.FullName
    }else {
        return obj2.FullName
    }
}

let largestBMI = compareBMI(obj1.calculateBMI, obj2.calculateBMI)
console.log(largestBMI);


// exercise 2
function findAvg(gradesList){
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }let average = sum / gradesList.length;
  if (average > 65){
    console.log('You have passed');
  }else {
    console.log('You have failed, you need to redo the cours');
  }
}

findAvg([23, 78, 98, 54, 90])