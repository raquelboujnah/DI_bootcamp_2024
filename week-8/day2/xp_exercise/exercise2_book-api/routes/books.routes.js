const {getAllBooks, getOneBook} = require('../controllers/books.controllers.js');
const express = require('express');

const router = express.Router();

router.get("/api/books", getAllBooks)
router.get("/api/books/:id", getOneBook)

module.exports = router
