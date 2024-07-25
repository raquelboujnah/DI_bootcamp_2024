const express = require('express');
const cors = require("cors");
const router = require('./routes/books.routes.js');

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors())

app.listen(process.env.PORT || 5002, (req, res) => {
    console.log(`run on ${process.env.PORT || 5002}`);
});

app.use('/', router);
