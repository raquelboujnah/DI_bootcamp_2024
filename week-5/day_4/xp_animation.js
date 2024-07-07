// exercise 1
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
// setTimeout(popup, 2 *1000);
// function popup() {
//     alert("Hello world");
// }
// let container = document.getElementById('container');
// function addPara() {
//     let newPara = document.createElement('p');
//     newPara.innerHTML = 'Hello world';
//     container.appendChild(newPara);
// }
// setTimeout(addPara, 2000);

// let intervalId = setInterval(() => {
//     addPara()
//     if (container.getElementsByTagName('p').length >= 5) {
//         clearInterval(intervalId);
//     }
// }, 2000);


// exercise 2
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 1);

    function frame() {
        if (pos >= 400 - 50) {
            clearInterval(id);
        } else {
            pos += 3
            elem.style.left = pos + 'px';
        }
    }
}


// exercise 3