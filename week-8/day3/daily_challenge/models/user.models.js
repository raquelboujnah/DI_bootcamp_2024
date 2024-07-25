const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')

const jsonFilePath = path.join(__dirname, '../config/data.json');

const _userRegister = async(user_username, user_first_name, user_last_name, user_email, user_password, data) => {
    const bcryptPassword = await bcrypt.hash(user_password + '', 10);
    try{
        const existingUser = users.find(user => user.username === user_username || user.email === user_email);
        if (existingUser) {
            return { message: 'Username or email already exists' };
        }
        const newUser = {id: data.length + 1, username: user_username, first_name: user_first_name, last_name: user_last_name, email: user_email, password: bcryptPassword};
        data.push(newUser);
        fs.writeFileSync(jsonFilePath, JSON.stringify(arrJson, null, 2), "utf-8");
        return true
    }catch(err){
        console.log(err);
    }
} 
const _userLogin = (user_username, user_password, data) => { 
    const user = data.find(user => user.username === user_username);
    if (!user) {
        return { message: 'Username is not registered' };
    }
    const passwordMatch = bcrypt.compare(user_password+"", user.password);
    if(!passwordMatch){
        return false
    }
    return true
}


const _getAllUsers = () => {
    try{
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        const jsonArr = JSON.parse(data);
        return jsonArr
    }catch(err){
        console.log(err);
    }
}

const _getOneUser = (user_id, data) => {
    try{
        for(let user of data){
            if(user.id == user_id){
                return user
            }
        }
    }catch(err){
        console.log(err);
    }
}
    
const _updateUser = (user_id, user_username, user_first_name, user_last_name, user_email, user_password, data) => {
    try{
        for(let user of data){
            if(user.id == user_id){
                task.username = user_username
                task.first_name = user_first_name
                task.last_name = user_last_name
                task.email = user_email
                task.password = user_password
                fs.writeFileSync(jsonFilePath, JSON.stringify(arrJson, null, 2), "utf-8");
            }
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    _userRegister, 
    _userLogin, 
    _getAllUsers, 
    _getOneUser, 
    _updateUser
}