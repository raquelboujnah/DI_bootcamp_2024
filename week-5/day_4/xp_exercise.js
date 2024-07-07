// exercise 1
// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// let elemArticle = document.querySelector('article')
// let elemh1 = document.querySelector('h1')
// let lastP = elemArticle.lastElementChild
// elemArticle.removeChild(lastP)

// let elemh2 = document.querySelector('h2')
// elemh2.addEventListener('mouseover', function (e) {
//     e.target.style.backgroundColor = 'red';
// });


// let elemh3 = document.querySelector('h3')
// elemh3.addEventListener('click', function (e) {
//     e.target.style.display = 'none'
// });

// let makeBold = document.getElementById('makeBold');
// makeBold.addEventListener('click', () => {
//     let paragraphs = document.querySelectorAll('article p');
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].style.fontWeight = 'bold';
//     }
// });


// exercise 2
// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

// let form = document.forms[0]
// console.log(form);

// let fname = document.getElementById('fname')
// let lname = document.getElementById('lname')
// let submit = document.getElementById('submit')
// console.log(fname);
// console.log(lname);
// console.log(submit);

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let firstName = fname.value.trim();
//     let lastName = lname.value.trim();
    
//     if (firstName === '' || lastName === '') {
//         alert('Both fields are required.');
//         return;
//     }

//     let elemUl = document.querySelector('.usersAnswer');
//     console.log(elemUl);
//     let firstNameLi = document.createElement('li');
//     let lastNameLi = document.createElement('li');
//     firstNameLi.textContent = firstName;
//     lastNameLi.textContent = lastName;
//     elemUl.appendChild(firstNameLi);
//     elemUl.appendChild(lastNameLi);
// });


// exercise 3
// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// let allBoldItems;
// function getBoldItems(){
//     allBoldItems = document.getElementsByTagName('strong');
// }

// function highlight(){
//     for (let i =0; i < allBoldItems.length; i++){
//         allBoldItems[i].style.color = 'blue';
//     }
// }

// function returnItemsToDefault(){
//     for (let i =0; i < allBoldItems.length; i++){
//         allBoldItems[i].style.color = 'black';
//     }
// }

// getBoldItems()
// let pPara = document.querySelector('p')
// pPara.addEventListener("mouseover", highlight);
// pPara.addEventListener("mouseout", returnItemsToDefault);


// exercise 4
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

function calculateVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

let radiusForm = document.forms[0]
radiusForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let radiusInput = document.getElementById('radius');
    let radius = radiusInput.value;
    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid positive number for the radius.');
        return;
    }
    let volume = calculateVolume(radius);
    document.getElementById('volume').value = volume;
});