// function createGrid(rows, cols) {
//     let board = document.getElementById('board');
//     for (let i = 0; i < rows * cols; i++) {
//         let box = document.createElement('div');
//         box.classList.add('box');
//         box.addEventListener('mousedown', startDrawing);
//         box.addEventListener('mouseover', draw);
//         box.addEventListener('mouseup', stopDrawing);
//         board.appendChild(box);
//     }
// }
// let numRows = 45;  
// let numCols = 60;  
// createGrid(numRows, numCols);

// let colorBar = document.getElementById('colorBar');
// let selectedColor = 'white';
// let isDrawing = false;

// function changeBoxColor(box){
//     box.style.backgroundColor = selectedColor;
// }

// function startDrawing(e) {
//     isDrawing = true;
//     changeBoxColor(e.target);
// }

// function draw(e) {
//     if (isDrawing) {
//         changeBoxColor(e.target);
//     }
// }

// function stopDrawing() {
//     isDrawing = false;
// }

// for (let i=0; i < colorBar.children.length; i++){
//     let colorBox = colorBar.children[i];
//     if (colorBox.tagName.toLowerCase() === 'div'){
//         colorBox.addEventListener('click', function(){
//             selectedColor = colorBox.style.backgroundColor;
//             console.log(selectedColor);
//         });
//     }else if (colorBox.tagName.toLowerCase() === 'button'){
//         colorBox.addEventListener('click', clearBoard);
//     }
// }


// function clearBoard(){
//     let boxes = document.querySelectorAll('.box');
//     for (let i =0; i< boxes.length; i++){
//         boxes[i].style.backgroundColor = 'white';
//     }
// }
// document.addEventListener('mouseup', stopDrawing);



const color_set = ['Black', 'LightSlateGray', 'Brown', 'Navy', 'Blue', 'SkyBlue', 'Aquamarine', 'DarkOliveGreen', 'Green', 'Lime', 'Yellow', 'Gold', 'Orange', 'Red', 'Crimson', 'Indigo', 'Purple', 'Magenta', 'Violet', 'DeepPink', 'Pink'];
let current_color;

function addDiv(container_class, number, class_name){
// add 'number' divs to a class of name 'container_class' and set the class name to 'class_name' 
    for (let i = 0; i < number; i++){
        const div = document.createElement('div');
        div.setAttribute('class', class_name);
        const container = document.getElementsByClassName(container_class)[0];
        container.appendChild(div);
    }
}

function addColorToPalette(){
// add the colors from the color_set list to each div in the 'color_palette' container,
// add 'color' attribute and add event listener
    const color_palette = document.getElementsByClassName('color-palette')[0];
    const colors = color_palette.getElementsByClassName('color');
    for(let i = 0; i < color_set.length; i++){
        colors[i].setAttribute('style', `background-color: ${color_set[i]}`);
        colors[i].dataset.color = color_set[i];
        colors[i].addEventListener("click", setCurrentColor);
    }
}

function addEventListener(){
// add mouse over event listener to each pixel on the drawing canvas to change color
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener('mouseover', changeColor);
    }
}

const div_set = document.getElementsByClassName('color');

function setCurrentColor(e){
    current_color = e.target.dataset.color;
}
function changeColor(e){
    if (current_color != null){
        e.target.style.backgroundColor = current_color;
    }
}

const clear = document.querySelector('button')
clear.addEventListener('click', clearCanvas);

function clearCanvas(e){
    current_color = null;
    const pixels = document.getElementsByClassName('pixel');
    for (const pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
}

addDiv('color-palette', 21, 'color');
addColorToPalette();
addDiv('drawing-canvas', 60*60, 'pixel');
addEventListener();


