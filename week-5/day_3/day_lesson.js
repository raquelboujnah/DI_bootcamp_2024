function myAge(age){
    momAge = age * 2
    dadAge = momAge * 1.2
    ;
    return [momAge, dadAge]
}
momage = myAge(22)[0]
dadage = myAge(22)[1]

console.log(momage, dadage);



/** DOM */
/** find / access element in the HTML Page */

/** finding by id */

/** getElementById */
// let div = document.getElementById("firstdiv");
// console.log(div);

// let h2 = document.getElementById('h2infirstdiv');
// console.log(h2);

/** tag / class name */
/** getElementsByTagName / getElementsByClassName */
// let divs = document.getElementsByTagName('div');
// console.log(divs[0]);

// let elements = document.getElementsByClassName('colorred');
// console.log(elements[1]);

/** querySelector tag/#/. / querySelectorAll */

// let elem = document.querySelector('div .colorred');
// console.log(elem);

// let elems = document.querySelectorAll("div #firstdiv")
// console.log(elems);

/** changing elements */

/** textContent / innerText / innerHTML */

let h2 = document.getElementById("h2infirstdiv");
// console.log(h2);
// h2.innerText = 'New Header 222'
// h2.textContent = 'bal bal bal'
// h2.innerHTML = '<span style="color:red;">Hello</span>'

// h2.setAttribute('class', 'coloryellow' )
h2.setAttribute("userid", "1234567");

let h2class = h2.getAttribute("class");
last
// console.log(h2class);

h2.style.color = "cyan";
h2.style.backgroundColor = "rgb(204, 204, 2)";

/** Add element */
let h3header = document.createElement("h3");
h3header.innerText = "my h3 header";

// console.log(h3header);
h3header.style.color = "red";

let div = document.getElementById("firstdiv");
// console.log(div);

div.appendChild(h3header);

// div.removeChild(h2)

let body = document.getElementsByTagName('body')[0];
// console.log(body[0]);

// body.appendChild(document.createElement('footer'))

/** children */
// console.log(div.children[1]);

/** firstElementChild / lastElementChild */
// console.log(div.firstElementChild);
// console.log(div.lastElementChild);


/** parentNode */
// console.log(h3header.parentNode.parentNode.parentNode);

/** nextElementSibling / previousElementSibling*/
console.log(h3header.previousElementSibling.parentNode);

/** class (s) */
div.classList.add('text22', 'tal');
div.classList.remove('colorred')