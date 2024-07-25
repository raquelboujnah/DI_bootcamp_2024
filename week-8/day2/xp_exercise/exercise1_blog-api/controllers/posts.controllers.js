const {_getAllBlogs, _getOneBlog, _insertBlog, _updateBlog, _deleteBlog} = require('../models/posts.models.js')

const getAllBlogs = (req, res) => {
    _getAllBlogs()
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}

const getOneBlogs = (req, res) => {
    const {id} = req.params;
    _getOneBlog(id)
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}


const insertBlog = (req, res) => {
    const {title, content} = req.body;
    _insertBlog(title, content)
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}

const updateBlog = (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    _updateBlog(id, title, content)
        .then(result => {
            getAllBlogs(req, res)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}

const deleteBlog = (req, res) => {
    const {id} = req.params;
    _deleteBlog(id)
        .then(result => {
            getAllBlogs(req, res)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}

module.exports = {
    getAllBlogs,
    getOneBlogs,
    insertBlog,
    updateBlog,
    deleteBlog
}
