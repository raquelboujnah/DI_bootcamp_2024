const express = require("express");
const { fetchPosts } = require('./data/dataService.js');

const app = express();
app.listen(5003, (req, res) => {
    console.log('run on 5003');
})

app.get('/api/posts', async (req, res) => {
    try {
        const data = await fetchPosts();
        res.json(data);
    } catch (error) {
        res.status(404).send('Error fetching data');
    }
});

