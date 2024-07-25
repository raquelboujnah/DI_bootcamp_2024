const userModel = require("../models/user.models.js")
const bcrypt = require('bcrypt')

const registerUser = async(req, res) => {
    const {username, password, email, first_name, last_name} = req.body;
    const user = {username, password, email, first_name, last_name}
    try{
        const userinfo = await userModel.createUser(user);
        res.status(201).json({
            message: 'User registered seccessfullt',
            user: userinfo
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})
    }
}

const loginUser = async(req, res) => {
    const {email, username, password} = req.body;
     try{
        const user = await userModel.getUserByUsername(email, username);

        if (!user) {
            return res.status(404).json({error: "user not found..."});
        }
        const passwordMatch = await bcrypt.compare(password+"", user.password);

        if(!passwordMatch){
            return res.status(401).json({error: "Wrong password"});
        }

        res.json({
            message: "Login successfully",
            user: {userid: user.id, username: user.username}
        })

     }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})     
    }
}

const getAllUsers = async(req, res) => {
    try{
        const users = await userModel.getAllUsers();
        res.json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
}


const getOneUser = async(req, res) => {
    const {id} = req.params;
    try{
        const user = await userModel.getOneUser(id);
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"})
    }
}

const updateUser = async(req, res) => {
    const {id} = req.params;
    const {username, first_name, last_name} = req.body;
    try{
        const user = await userModel.updateUser(id, username, first_name, last_name)
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"})
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getOneUser,
    updateUser
}