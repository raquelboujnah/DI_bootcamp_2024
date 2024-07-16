// exercise 1
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// let url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

// let options = {
//     method: "GET",
//     headers: {
//         "content-type": "application/json"
//     }
// }

// async function retrieveData(url, options){
//     try{
//         let res = await fetch(url, options)
//         let data = await res.json()
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// retrieveData(url, options)


// exercise 2
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.
// let query = 'sun'
// let offest = 2
// let limit = 10
// let url = `https://api.giphy.com/v1/gifs/search?q=${query}&offset=${offest}&limit=${limit}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

// let options = {
//     method: "GET",
//     headers: {
//         "content-type": "application/json"
//     }
// }

// async function retrieveData(url, options){
//     try{
//         let res = await fetch(url, options)
//         let data = await res.json()
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// retrieveData(url, options)


// exercise 3
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// async function starWars(){
//     try{
//         let res = await fetch("https://www.swapi.tech/api/starships/9/", {method: "GET", headers: {"content-type": "application/json"}})
//         let data = await res.json()
//         console.log(data.result);
//     }catch(err){
//         console.log(err);
//     }
// }
// starWars()


// exercise 4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// calling
// resolved