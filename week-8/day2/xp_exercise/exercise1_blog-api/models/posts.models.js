const {db} = require('../config/db.js')

const _getAllBlogs = () => {
    return db('posts') 
    .select("id", "title", "content")
    .orderBy("id")
}

const _getOneBlog = (blog_id) => {
    return db('posts')
    .select("id", "title", "content")
    .where({id: blog_id})
}

const _insertBlog = (title, content) => {
    return db('posts')
    .insert({title, content}, ["id", "title", "content"])
}; 

const _updateBlog = (blog_id, blog_title, blog_content) => {
    return db('posts')
    .update({title: blog_title, content: blog_content})
    .where({id: blog_id})
}

const _deleteBlog = (blog_id) => {
    return db('posts')
    .del()
    .where({id: blog_id})
}

module.exports = {
    _getAllBlogs,
    _getOneBlog,
    _insertBlog,
    _updateBlog,
    _deleteBlog
}