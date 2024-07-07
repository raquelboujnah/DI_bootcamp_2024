const task = []

let form = document.forms[0]
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

function addTask(){
    let taskInput = document.getElementById('input');
    let taskText = taskInput.value.trim();
    if (taskText === ""){
        alert('Please do not submit an empty task')
    }else{
        task.push(taskText)
    }let divList = document.querySelector('div');
    const xSpan = document.createElement('i');
    xSpan.classList.add('fa-solid', 'fa-square-xmark');
    divList.appendChild(xSpan)
    xSpan.style.color = 'red'
    let checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    divList.appendChild(checkBox)
    let userTaskElem = document.createElement('span');
    userTaskElem.innerHTML = taskText;
    divList.appendChild(userTaskElem)
    let br = document.createElement('br')
    divList.appendChild(br)
    taskInput.value = '';

}
