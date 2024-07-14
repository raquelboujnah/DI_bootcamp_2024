// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
let form1 = document.forms[0]
form1.addEventListener('submit', function(e){
    e.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    let user = {
        firstname: fname,
        lastname: lname
    };

    let userJason = JSON.stringify(user)

    let divOutput = document.getElementById('output')
    divOutput.textContent = userJason
});


