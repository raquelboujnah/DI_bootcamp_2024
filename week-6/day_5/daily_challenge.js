// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
function anagramChecker(str1, str2){
    let strList1 = str1.toLowerCase().replace(' ','').split('')
    let strList2 = str2.toLowerCase().replace(' ','').split('')
    if (strList1.length === strList2.length){
        if (JSON.stringify(strList1.sort()) === JSON.stringify(strList2.sort())){
            return true
        }else return false + 'fghj'
    }else return false
}
console.log(anagramChecker('Astronomer', 'Moon starer'));
console.log(anagramChecker('School master', 'The classroom'));
console.log(anagramChecker('The Morse Code', 'Here come dots'));

