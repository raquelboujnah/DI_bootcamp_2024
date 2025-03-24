// const task = []

// let form = document.forms[0]
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     addTask();
// });

// function addTask(){
//     let taskInput = document.getElementById('input');
//     let taskText = taskInput.value.trim();
//     if (taskText === ""){
//         alert('Please do not submit an empty task')
//     }else{
//         task.push(taskText)
//     }let divList = document.querySelector('div');
//     const xSpan = document.createElement('i');
//     xSpan.classList.add('fa-solid', 'fa-square-xmark');
//     divList.appendChild(xSpan)
//     xSpan.style.color = 'red'
//     let checkBox = document.createElement('input');
//     checkBox.setAttribute("type", "checkbox");
//     divList.appendChild(checkBox)
//     let userTaskElem = document.createElement('span');
//     userTaskElem.innerHTML = taskText;
//     divList.appendChild(userTaskElem)
//     let br = document.createElement('br')
//     divList.appendChild(br)
//     taskInput.value = '';

// }

const task = [];

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  userInfo = document.getElementById("inputText").value;
  console.log(userInfo);

  if (userInfo.trim() === "") {
    alert("Enter task");
    return;
  }
  task.push(userInfo);
  console.log(task);

  let taskDiv = document.createElement("div");
  taskDiv.textContent = userInfo;

  document.getElementById("idListTask").appendChild(taskDiv);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  taskDiv.appendChild(checkbox);



  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function () {
    taskDiv.remove(); // У
  });

  taskDiv.appendChild(checkbox);

  taskDiv.appendChild(deleteButton);

  

  document.getElementById("inputText").value = "";

  //   document.getElementById("idListTask").appendChild(taskElement);
}