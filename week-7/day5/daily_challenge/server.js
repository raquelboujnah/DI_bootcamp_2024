const express = require("express")
const {emoji} = require('./config/emoji.js');

const app = express()


app.listen(3001, () => {
    console.log("run on 3001");
});

app.use("/", express.static(__dirname + "/public"));


app.get('/emojis', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emoji.length);
    const randomEmoji = emoji[randomIndex];
    res.json(randomEmoji)
})




