const url = "https://jsonplaceholder.typicode.com/users"
const options = {
    method: "GET",
    headers: {
    "Content-type": "application/json",
    },
}

import { getUsers } from "./info.js";
getUsers(url, options).then(users => console.log(users));