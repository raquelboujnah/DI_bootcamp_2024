const express = require('express');
const app = express();
app.listen(5001, () => {
    console.log('run on 5001');
});

const blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        content: "JavaScript closures are a fundamental concept that every JavaScript developer should understand..."
    },
    {
        id: 2,
        title: "A Guide to Modern CSS Layouts",
        content: "CSS has evolved significantly over the years, and modern CSS layouts offer more flexibility and control..."
    },
    {
        id: 3,
        title: "Getting Started with Node.js",
        content: "Node.js is a powerful tool for building server-side applications. In this guide, we'll cover the basics..."
    },
    {
        id: 4,
        title: "An Introduction to React Hooks",
        content: "React Hooks are a new addition to React that allows you to use state and other React features without writing a class..."
    },
    {
        id: 5,
        title: "Effective TypeScript: Best Practices",
        content: "TypeScript enhances JavaScript by adding type safety, which helps developers catch errors early. Here are some best practices..."
    }
];

app.get("/posts", (req, res) => {
    res.json(blogPosts)
});

app.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    const blog = blogPosts.find((item) => item.id === Number(id));
    if (!blog) return res.status(404).send('blog not found');
    res.json(blog)
});

app.post("/posts/add", (req, res) => {
    const newBlog = {id: products.length + 1, title: "Getting Started with Node.js", content: "Node.js is a powerful tool for building server-side applications. In this guide, we'll cover the basics..."}
    products.push(newBlog);
    res.json(blogPosts);
})

app.put("/posts/update/:id", (req, res) => {
    const {id} = req.params;
    const title = 'A Guide to Modern CSS Layouts'
    const content = 'CSS has evolved significantly over the years, and modern CSS layouts offer more flexibility and control...'
    const index = blogPosts.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "not found" });
    }

    blogPosts[index] = {
        ...blogPosts[index],
        title,
        content,
      };
    res.json(blogPosts)
})

app.delete("/posts/delete/:id", (req, res) => {
    const {id} = req.params;
    const index = blogPosts.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "not found" });
    }
    blogPosts.splice(index, 1)
    res.json(blogPosts)
})

