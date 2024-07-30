const express = require("express");
const router = require("./routes/todo.routes.js")
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`run on ${process.env.PORT || 5000}`);
});

app.use('/', router);
