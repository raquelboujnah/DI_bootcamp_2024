const hello = (name) => {
    return `hello ${name} welcome to NodeJs`
}

const getFullName = (fname, lname) => {
    return `${lname} ${fname}`
}

let a = 10

module.exports = {
    hello,
    a,
    getFullName
}

