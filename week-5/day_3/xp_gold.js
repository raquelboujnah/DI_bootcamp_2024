// exercise 1
function checkIfBlank(input){
    if (input.trim() === ''){
        return true
    }else {
        return false
    }
}
console.log(checkIfBlank(' '));


// exercise 2
function abbrevName(fullName){
    let nameArray = fullName.split(" ");
    if (nameArray.length > 1) {
        return `${nameArray[0]} ${nameArray[1].charAt(0)}.`;
    }
    return fullName;
}


// exercise 3
function changeCase(sentence){
    let swappedStr = '';
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }return swappedStr;
}
console.log(changeCase('The Quick Brown Fox'));

// exercise 4
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

let arr = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
function isOmnipresent(array, value) {
    for (let subarray of array) {
        let found = false;
        for (let item of subarray) {
            if (item === value) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}
console.log(isOmnipresent(arr, 2));


// exercise 5
let table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}