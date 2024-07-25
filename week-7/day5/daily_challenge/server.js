const express = require('express');
const emojis = require('./config/emojis.js')
const app = express();

app.listen(5000, () => {
    console.log('run on 5000');
});

app.use(express.json());
app.use(express.static('public'));

let playerScore = 0;

app.get('/emoji', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [randomEmoji.name];
    
    while (options.length < 4) {
        const distractor = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(distractor)) {
            options.push(distractor);
        }
    }
    res.json({ emoji: randomEmoji.emoji, options });
});


app.post('/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);

    if (correctEmoji && correctEmoji.name === guess) {
        playerScore++;
        res.json({ correct: true, score: playerScore });
    } else {
        res.json({ correct: false, score: playerScore });
    }
});


