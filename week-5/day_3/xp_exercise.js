// exercise 1
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313
// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible(divisor){
    let sum_num = 0
    for (let i = 0; i < 501; i++){
        if (i % divisor === 0){
            console.log(i);
            sum_num += i
        }
    }
    console.log(sum_num);
}

// displayNumbersDivisible(23)


// exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

// let shoppingList = ['banana', 'orange', 'apple']

function myBill(){
    let totalPrice = 0
    for (let item of shoppingList){
        if (item in stock && stock[item] > 0){
            totalPrice += prices[item];
            stock[item] -= 1;
        } 
    } return totalPrice;
}

// console.log(myBill()); 


// exercise 3
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// 4. To illustrate:
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

function changeEnough(itemPrice, amountOfChange){
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * values[i];
    }
    return totalChange >= itemPrice
     
}
// console.log(changeEnough(14.11, [2,100,0,0]));


// exercise 4
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost(){
    const costPerNight = 140;
    let numberOfNights;

    while (true) {
        numberOfNights = prompt("How many nights would you like to stay in the hotel?");
        if (numberOfNights !== null && !isNaN(numberOfNights) && Number(numberOfNights) > 0) {
            numberOfNights = Number(numberOfNights);
            break;
        } else {
            alert("Please enter a valid number of nights.");
        }
    }return numberOfNights * costPerNight;
}
// console.log(hotelCost());        

function planeRideCost(){
    let cost = 0 
    let userDestination;
    while (true){
        userDestination = prompt('what is your destination?').toLowerCase()
        if (userDestination !== '' && isNaN(userDestination)){
            if (userDestination === 'london'){
                cost = 183
                break;
            }else if (userDestination === 'paris'){
                cost = 220
                break;
            }else {
                cost = 300
                break
            }
        }else {
            alert('please enter a valid destination');
        }
    } return cost
}

// console.log(planeRideCost());

function rentalCarCost(){
    let numberDay;
    let cost = 0;
    while(true){
        numberDay = prompt('how many days you would want to rent a car?')
        if (numberDay !== '' && !isNaN(numberDay) && Number(numberDay) > 0){
            if (Number(numberDay) > 10){
                cost = (Number(numberDay) * 40) * 0.95
                break
            }else{
                cost = Number(numberDay) * 40
                break
            }
        }else{
            alert('enter a valid amout of day');
        }
    }return cost
}
// console.log(rentalCarCost());

function totalVacationCost(){
    let hotel_cost = hotelCost();        
    let plane_cost = planeRideCost();
    let car_cost = rentalCarCost();
    let total_cost = hotel_cost + plane_cost + car_cost
    return total_cost

}

// console.log(totalVacationCost());

// exercise 7
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let allBooks = [
    {
        title: 'Harry Potter',
        author: 'J.K Rolling',
        image: '',
        alreadyRead: false

    },
    {
        title: 'Noublie Jamais',
        author: 'Michel Bussi',
        image: '',
        alreadyRead: true
    },
]

let section1 = document.querySelector('section')
// console.log(section1);
for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i];
    
    const bookDiv = document.createElement('div');
    
    const bookDetails = document.createElement('h3');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }
    
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    section1.appendChild(bookDiv);
}







