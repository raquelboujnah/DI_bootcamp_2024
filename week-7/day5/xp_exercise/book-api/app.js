const express = require("express");
const app = express()
app.listen(5000, (res, req) => {
    console.log("run on 5000");
});

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "Moby Dick",
        author: "Herman Melville",
        publishedYear: 1851
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

app.get("/api/books", (req, res) => {
    res.json(books)
})

app.get("/api/books/:id", (req, res) => {
    const {id} = req.params;
    const book = books.find((item) => item.id === Number(id))
    if (!book) return res.status(404).send("Book not found");
    res.json(book).status(200)
})

app.post("/api/books", (res, req) => {
    const newBook = {id: books.length + 1, title: "Moby Dick", author: "Herman Melville", publishedYear: 1851 }
    books.push(newBook)
    res.json(books).status(200)
})

