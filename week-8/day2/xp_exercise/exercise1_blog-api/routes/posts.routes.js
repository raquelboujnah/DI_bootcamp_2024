const {getAllBlogs, getOneBlogs, insertBlog, updateBlog, deleteBlog} = require("../controllers/posts.controllers.js");
const express = require('express');

const router = express.Router();

router.get('/api/posts', getAllBlogs);
router.get('/api/posts/:id', getOneBlogs);
router.post('/api/posts', insertBlog);
router.put('/api/posts/:id', updateBlog);
router.delete('/api/posts/:id', deleteBlog);

module.exports = router
