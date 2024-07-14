// function getX(f){
//     setTimeout(() => {
//         f(5);
//     }, 2000);
// }

// function getY(f){
//     setTimeout(() => {
//         f(6)
//     }, 3000);
// }

// function getXY(){
//     getX((x) => {
//         console.log(x);
//         getY((y) => {
//            console.log(y);
//            console.log(x + y);
//         });
    
//     });
// }

// getXY()


// function getX(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(5);
//         }, 2000);
//     });
// }

// function getY(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(6);
//         }, 3000);
//     });
// }

// function getXY(){
//     getX()
//     .then((x)=>{
//         getY().then((y)=>{
//             console.log(x+y);
//         });
//     });
// }
// getXY()


const users = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
];

const getDataFromServer = (arr) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if (arr) res(JSON.stringify(arr))
            else rej('404')
        }, 2000);
    });
}
function displayData(arr){
    let body = document.querySelector('body')
    let html = arr.map((item)=>{
        return `<div>
            ${item.username}: ${item.email}
        </div>`
    })
    body.innerHTML = html.join('')
}

getDataFromServer(users)
    .then((data) =>{
        console.log(JSON.parse(data));
        displayData(JSON.parse(data))
    })
    .catch((err)=>{
        console.log(err);
    })



