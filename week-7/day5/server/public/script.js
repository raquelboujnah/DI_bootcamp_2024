const { json } = require("body-parser");

const url = "http://localhost:5000/api/products"
const fetchProducts = async() => {
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
fetchProducts()

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        </div>`
    });
    document.getElementById('shop').innerHTML = html.join("");
}

const searchProduct = e => {
    e.preventDefault();
    const name = e.target.search.value;
    fetch("http://localhost:5000//api/products/search?name=" + name)
    .then(res => res.json())
    .then(data => {
        render(data)
    })
    .catch(e => {
        console.log(e);
    })
};


const addProduct = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    fetch("http://localhost:5000//api/products",{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name: price})
    })
    .then(res => res.json())
    .then(data => {
        render(data)
    })
    .catch((err) => {
        console.log(err);
    })   
}



