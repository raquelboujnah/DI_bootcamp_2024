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


    