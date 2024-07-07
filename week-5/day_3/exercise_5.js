// exercise 5

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let div1 = document.getElementById('container');
console.log(div1);

let firstUl = document.querySelector('ul');
let pete = firstUl.lastElementChild;
pete.innerText = 'Richard';

let allUl = document.getElementsByTagName('ul');
let scdUl = allUl[1];
let scdLi = scdUl.lastElementChild;
// scdUl.removeChild(scdLi)

for (let ul of allUl) {
    ul.firstElementChild.textContent = 'Raquel';
}

for (let ul of allUl) {
    ul.setAttribute('class', 'student_list');
}


firstUl.setAttribute('class', 'university, attendance');

div1.style.backgroundColor = 'lightblue';
div1.style.padding = '20px';

// //

scdLi.style.border = '2px solid black';

let body = document.getElementsByTagName('body');
body.style.fontSize = '50px';




console.log(scdLi);