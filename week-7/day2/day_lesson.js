// let url = "https://jsonplaceholder.typicode.com/users"

// let options = {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({userid:4, title:'my litle poney'})
// };
// fetch(url, options)
//     .then((res) => {
//         return res.json()
//     })
//     .then((post) => {
//         console.log(post);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// 1.  Create an HTML form in your index.html file with inputs for name, username, and email, 
// and a submit button.
// 2. When the form is submitted, send a POST request to 
// with a JSON data, example
// {name:'...',username:'...', email:'...'}.
// 3. Display the response data on the page.
//  */


// function submitForm(e){
//     e.preventDefault();
//     let name = e.target.name.value;
//     let username = e.target.username.value;
//     let email = e.target.email.value;
//     fetch("https://users-18kl.onrender.com/userjson", {
//         method: 'POST',
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({name, username, email})
//     })
//     .then((res) =>{
//         return res.json;
//     })
//     .then((data)=>{
//         console.log(data);
//         render(data)
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// }

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.name} ${item.username} ${item.email}</div>`
    })
    document.getElementById('root').innerHTML = html.join('')
}

async function fetchData(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        // return data
        render(data)
    }catch(e){
        console.log(e);
    }
}
// fetchData("https://jsonplaceholder.typicode.com/users").then((users) => {
//     console.log(users);
// })
fetchData("https://jsonplaceholder.typicode.com/users")