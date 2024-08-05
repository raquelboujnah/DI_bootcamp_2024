const express = require("express");
const cors = require('cors')
const router = require("./routes/route.js")
const app = express()

app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`run on ${process.env.PORT || 5000}`);
});

app.use('/', router);