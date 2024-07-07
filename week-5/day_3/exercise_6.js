// exercise 6

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let div1 = document.getElementById('navBar');
div1.setAttribute('class', 'socialNetworkNavigation');
let newLi = document.createElement('li');
let newText = document.createTextNode('Logout');
newLi.appendChild(newText)
let ul1 = div1.firstElementChild
// ul1.appenChild(newLi)

const firstLi = ul1.firstElementChild;
const lastLi = ul1.lastElementChild;

console.log('First <li>:', firstLi.textContent);
console.log('Last <li>:', lastLi.textContent);
