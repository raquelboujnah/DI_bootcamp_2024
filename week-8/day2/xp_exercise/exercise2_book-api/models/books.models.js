const {db} = require('../config/db.js')

const _getAllBooks = () => {
    return db('books')
    .select("id", "title", "author", "publishedyear")
    .orderBy("id")
}

const _getOneBook = (book_id) => {
    return db('books')
    .select("id", "title", "author", "publishedyear")
    .where({id: book_id})
}

module.exports = {
    _getAllBooks, 
    _getOneBook
}