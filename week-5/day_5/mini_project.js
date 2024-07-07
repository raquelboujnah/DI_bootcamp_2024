function createGrid(rows, cols) {
    let board = document.getElementById('board');
    for (let i = 0; i < rows * cols; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mousedown', startDrawing);
        box.addEventListener('mouseover', draw);
        box.addEventListener('mouseup', stopDrawing);
        board.appendChild(box);
    }
}
let numRows = 45;  
let numCols = 60;  
createGrid(numRows, numCols);

let colorBar = document.getElementById('colorBar');
let selectedColor = 'white';
let isDrawing = false;

function changeBoxColor(box){
    box.style.backgroundColor = selectedColor;
}

function startDrawing(e) {
    isDrawing = true;
    changeBoxColor(e.target);
}

function draw(e) {
    if (isDrawing) {
        changeBoxColor(e.target);
    }
}

function stopDrawing() {
    isDrawing = false;
}

for (let i=0; i < colorBar.children.length; i++){
    let colorBox = colorBar.children[i];
    if (colorBox.tagName.toLowerCase() === 'div'){
        colorBox.addEventListener('click', function(){
            selectedColor = colorBox.style.backgroundColor;
            console.log(selectedColor);
        });
    }else if (colorBox.tagName.toLowerCase() === 'button'){
        colorBox.addEventListener('click', clearBoard);
    }
}


function clearBoard(){
    let boxes = document.querySelectorAll('.box');
    for (let i =0; i< boxes.length; i++){
        boxes[i].style.backgroundColor = 'white';
    }
}
document.addEventListener('mouseup', stopDrawing);

