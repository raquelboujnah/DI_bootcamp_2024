const express = require("express");
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`run on ${process.env.PORT || 5000}`);
});

app.get('/post', async(req, res) => {
    res.json(blogPosts)
})

app.get('/post/:id', async(req, res) => {
    const {id} = req.params
    const post = blogPosts.find(p => p.id === Number(id));
    res.json(post)
})

app.post('/post', async(req, res) => {
    const { title, content, timestamp} = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content,
        timestamp
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);

})

app.delete('/post/:id', async(req, res) => {
    const {id} = req.params
    const post = blogPosts.find(p => p.id === Number(id));
    blogPosts.splice(post, 1)
    res.json(blogPosts)
})

app.put('/post/:id', (req, res) => {
    const {id} = req.params;
    const { title, content, timestamp } = req.body;
    const postIndex = blogPosts.findIndex(p => p.id === Number(id));
    blogPosts[postIndex] = {
        id: id,
        title,
        content,
        timestamp
    };
    res.json(blogPosts[postIndex]);
});

const blogPosts = [
    {
        id: 1,
        title: "Sample Blog Post",
        content: "This is a sample content for the blog post. It contains information about various topics of interest.",
        timestamp: 2024
    },
    {
        id: 2,
        title: "Understanding JavaScript Objects",
        content: "In this post, we will explore JavaScript objects and how they are used to store data in key-value pairs.",
        timestamp: 2023
    },
    {
        id: 3,
        title: "Introduction to Node.js",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications.",
        timestamp: 2022
    }
];
