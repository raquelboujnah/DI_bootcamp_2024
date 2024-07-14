// exercise 1
// Display the value of the selected option.
// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.
// const selectElement = document.getElementById('genres');
// selectElement.addEventListener('change', function() {
//     console.log(selectElement.value); 
// });
// let newoption = document.createElement('option');
// newoption.value = 'classic'
// newoption.innerHTML = 'Classic'
// newoption.setAttribute('selected', 'selected')
// selectElement.appendChild(newoption)

// exercise 2
/* Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list. */
// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener('click', removeColor);
// function removeColor() {
//     const selectElement = document.getElementById('colorSelect');
//     const selectedOption = selectElement.options[selectElement.selectedIndex];
//     if (selectedOption) {
//       selectElement.removeChild(selectedOption);
//     }
// }


// exercise 3
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:
// <div id="root"></div>
// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = []
const form = document.createElement('form');

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Enter item';
form.appendChild(inputField);

const addButton1 = document.createElement('button');
addButton1.type = 'button';
addButton1.textContent = 'AddItem';
form.appendChild(addButton1);


const addButton2 = document.createElement('button');
addButton2.type = 'button';
addButton2.textContent = 'clearAll';
form.appendChild(addButton2);


document.getElementById('root').appendChild(form);

addButton1.addEventListener('click', addItem);
addButton2.addEventListener('click', clearAll);

function addItem(){
  const itemValue = inputField.value;
  if (itemValue) {
    shoppingList.push(itemValue)
    inputField.value = ''
  } else {
    console.log('Please enter an item.');
  }
  console.log(shoppingList);
}

function clearAll(){
  shoppingList = []
  console.log(shoppingList);
}


