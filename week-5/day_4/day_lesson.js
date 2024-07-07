/** DOM events */
// function clickMe(evt) {
//     console.log(evt.target);
//   }
  
// // same than:

// let click = document.getElementById("btn");
// console.log(click);

// click.addEventListener("click", function (e) {
// console.log(e.target);
// });



// // let email = document.getElementById("email");
// console.log(email);
  
//   function getvalue(e) {
//     console.log(email.value, email.type, email.id);
//     console.log(e.target.value, e.target.type, e.target.id);
//   }
  
// // same than

// let pass = document.getElementById("password");
// console.log(pass);
  
// pass.addEventListener("input", function (e) {
// console.log(e.target.value);
// });

// let mydiv = document.querySelector("div");
// console.log(mydiv);

// mydiv.style.width = "200px";
// mydiv.style.height = "200px";
// mydiv.style.border = "1px solid #000";

// mydiv.addEventListener("mouseover", chnageBdRed);
// // same than
click.addEventListener("mouseover", function (e) {
e.target.style.backgroundColor = "red";
});
function chnageBdRed(e) {
e.target.style.backgroundColor = "red";
}
  
const divroot = document.getElementById("root");
// const divmain = document.getElementById("main");
// const button = document.getElementById("innerbutton");

// divroot.style.width = "200px";
// divroot.style.height = "200px";
// divroot.style.border = "1px solid #000";
  
// divmain.style.width = "100px";
// divmain.style.height = "100px";
// divmain.style.border = "1px solid #000";

// console.log(divroot,divmain,button);
// divroot.addEventListener("click", divrootclick, false);
// divmain.addEventListener("click", divmainclick, false);
// button.addEventListener("click", buttonclick, false);
  
// function divrootclick(e) {
//     console.log("click on root DIV");
//     e.stopPropagation();
// }
// function divmainclick(e) {
//     console.log("click on main DIV");
//     e.stopPropagation();
// }
// function buttonclick(e) {
//     console.log("click on button");
//     e.stopPropagation();
// }
let username = document.getElementById("username");
let email = document.getElementById("email");

function formsubmit(e) {
    e.preventDefault();
  
    console.log(e.target.username.value);
    if(username.value.trim() === ""){
      alert('Please put a valid username');
    }
    console.log(e.target.elements["username"].value)
    e.target.submit()
}
  
//   let formdata = new FormData()
  
  /**  setTimeout / setInterval */
  console.log("before");
  setTimeout(popup, 0);
  alert();
  console.log("after");
  
  function popup() {
    alert("Welcome please join the club");
  }
  let count = 0;
  let id = setInterval(function() {
    console.log("Hello " + count);
    count++;
  }, 2 * 1000);
  
  setTimeout(function () {
    clearInterval(id);
  }, 10 * 1000);
  
  /**
   * 
   * Display a message on an html page after 5 sec - '.....'
   * Remove the message from the page afterr 15 sec
   * 
   * Add a button onClick - the will showing every 5 sec for 5 sec
   * Add a button to stop it form showing o the page
   * 
   */
  