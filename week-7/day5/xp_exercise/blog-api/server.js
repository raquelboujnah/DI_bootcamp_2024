// const express = require('express');
// const app = express();
// app.listen(5001, () => {
//     console.log('run on 5001');
// });

// app.use(express.urlencoded({extended:true}));
// app.use(express.json())

// const blogPosts = [
//     {
//         id: 1,
//         title: "Understanding JavaScript Closures",
//         content: "JavaScript closures are a fundamental concept that every JavaScript developer should understand..."
//     },
//     {
//         id: 2,
//         title: "A Guide to Modern CSS Layouts",
//         content: "CSS has evolved significantly over the years, and modern CSS layouts offer more flexibility and control..."
//     },
//     {
//         id: 3,
//         title: "Getting Started with Node.js",
//         content: "Node.js is a powerful tool for building server-side applications. In this guide, we'll cover the basics..."
//     },
//     {
//         id: 4,
//         title: "An Introduction to React Hooks",
//         content: "React Hooks are a new addition to React that allows you to use state and other React features without writing a class..."
//     },
//     {
//         id: 5,
//         title: "Effective TypeScript: Best Practices",
//         content: "TypeScript enhances JavaScript by adding type safety, which helps developers catch errors early. Here are some best practices..."
//     }
// ];

// app.get("/posts", (req, res) => {
//     res.json(blogPosts)
// });

// app.get("/posts/:id", (req, res) => {
//     const {id} = req.params;
//     const blog = blogPosts.find((item) => item.id === Number(id));
//     if (!blog) return res.status(404).send('blog not found');
//     res.json(blog)
// });

// app.post("/posts/", (req, res) => {
//     const {title, content} = req.body
//     const newBlog = {title, content, id: blogPosts.length + 1}
//     blogPosts.push(newBlog);
//     res.json(blogPosts);
// })


// app.put("/posts/:id", (req, res) => {
//     const {id} = req.params;
//     const {title, content} = req.body
//     const index = blogPosts.findIndex((item) => item.id == id);
//     if (index === -1) {
//         return res.status(404).json({ message: "not found" });
//     }
//     blogPosts[index] = {
//         ...blogPosts[index],
//         title,
//         content,
//       };
//     res.json(blogPosts)
// })

// app.delete("/posts/:id", (req, res) => {
//     const {id} = req.params;
//     const index = blogPosts.findIndex((item) => item.id == id);
//     if (index === -1) {
//         return res.status(404).json({ message: "not found" });
//     }
//     blogPosts.splice(index, 1)
//     res.json(blogPosts)
// })




express = require('express')
const app = express()
const PORT = 3002
app.use(express.json());
app.listen(PORT, ()=>{
    console.log((`run on ${PORT}`));
})
const blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        content: "In this post, we will explore what a closure is in JavaScript and how it works..."
    },
    {
        id: 2,
        title: "A Guide to CSS Flexbox",
        content: "CSS Flexbox is a layout model that allows responsive design and alignment of elements on a webpage..."
    },
    {
        id: 3,
        title: "Top 10 Python Libraries for Data Science",
        content: "Data science has become a crucial part of modern technology, and Python offers powerful libraries to aid in this..."
    },
    {
        id: 4,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces. In this post, we will cover the basics..."
    },
    {
        id: 5,
        title: "The Future of Artificial Intelligence",
        content: "Artificial Intelligence continues to evolve and influence various fields. Let's discuss what the future holds..."
    }
];
// get all
app.get('/api/posts', (req,res)=>
    {
        res.json(blogPosts)
    })
// get by id
app.get("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myPost = blogPosts.find((item) => item.id == id);
    if (!myPost) return res.sendStatus(404);
    res.json(myPost);
    });
//create new post
app.post('/api/posts/',(req, res) => {
    const { title, content } = req.body;
    console.log(req.body);
    if(!title||!content)
    {
        return res.status(400).json({error: "requires both title and content"})
    }
    const newPost = { id: blogPosts.length + 1, title, content };
    blogPosts.push(newPost);
    res.json(blogPosts);
})
//update post by id
app.put("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const index = blogPosts.find((item) => item.id == id);
    const { title, content } = req.body;
    if (index === -1) {
        return res.sendStatus(404);
    }
    blogPosts[index].title = title
    blogPosts[index].content = content
    res.json(myPost[index]);
    });
// delete post
app.delete("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const index = blogPosts.find((item) => item.id == id);
    if (index === -1) {
        return res.sendStatus(404);
    }
    blogPosts.splice(index,1)
    res.status(200).json({message: "Deleleted successfully"})
    });









