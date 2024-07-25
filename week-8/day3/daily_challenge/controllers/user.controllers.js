const {_userRegister, _userLogin, _getAllUsers, _getOneUser, _updateUser} = require("../models/user.models.js")

const userRegister = (req, res) => {
    const {user_username, user_first_name, user_last_name, user_email, user_password} = req.body;
    const data = getAllUsers();
    try{
        const registerStatus = _userRegister(user_username, user_first_name, user_last_name, user_email, user_password, data)
        if(registerStatus){
            res.json({ message: 'Hello, your account is now created' });
        }res.json(registerStatus)
    }catch(err){
        console.log(err);
        res.json({ message: 'Something went wrong' });
    }
} 

const userLogin = (req, res) => {
    const {user_username, user_password} = req.body
    const data = getAllUsers();
    try{
        const loginStatus = !_userLogin(user_username, user_password, data);
        if(!loginStatus){
            return res.json({ message: 'Invalid password'});
        }else if(typeof(loginStatus) === Object){
            res.json(loginStatus);
        }else{
            res.json({ message: `Welcome back, ${username}` });
        }
    }catch(err){
        console.log();
        res.status(404).json({message: "Something went wrong"});
    }
} 

const getAllUsers = (req, res) => {
    try{
        const result = _getAllUsers()
        res.json(result);
    }catch(err){
        console.log();
        res.status(404).json({message: "something went wrong"})
    }
}

const getOneUser = (req, res) => {
    const {id} = req.params;
    const data = _getAllUsers()
    try{
        const user = _getOneUser(id, data)
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }

}
    
const updateUser = (req, res) => {
    const {id} = req.params;
    const {user_username, user_first_name, user_last_name, user_email, user_password} = req.body;
    const data = _getAllUsers();
    try{
        _updateUser(id, user_username, user_first_name, user_last_name, user_email, user_password, data);
        res.json({message: "user updated successfully"})
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }
}


module.exports = {
    userRegister, 
    userLogin, 
    getAllUsers, 
    getOneUser, 
    updateUser
}