const {_getAllBooks, _getOneBook} = require('../models/books.models.js')

const getAllBooks = (req, res) => {
    _getAllBooks()
        .then(result => {
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send("Book not found")
        })
}

const getOneBook = (req, res) => {
    const {id} = req.params;
    _getOneBook(id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send("Book not found")
        })
}


module.exports = {
    getAllBooks, 
    getOneBook
}