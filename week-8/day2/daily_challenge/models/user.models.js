const {db} = require("../config/db.js");
const bcrypt = require("bcrypt");

const createUser = async(userinfo) => {
    const {username, password, email, first_name, last_name} = userinfo;
    const trx = await db.transaction();
    try{
        const [user] = await trx("users").insert(
            {email, username, first_name, last_name},
            ["username", "id"]
        );
        const hashPassword = await bcrypt.hash(password + '', 10);
        await trx('hashpwd').insert(
            {username: user.username, password: hashPassword}
        );
        await trx.commit();
        return user;

    }catch(err){
        await trx.rollback();
        throw err
    };
};

const getUserByUsername = async(email, username) => {
    try{
        const user = await db('users')
            .select('users.id', "users.username", "hashpwd.password")
            .join("hashpwd", {"users.username": "hashpwd.username"})
            .where("users.username", username)
            .orWhere("users.email", email)
            .first()
        return user
    }catch(err){
        throw err
    };
};

const getAllUsers = async() => {
    try{
        const users = await db("users");
        return users
    }catch(err){
        throw err;
    };
};

const getOneUser = async(user_id) => {
    return db('users')
    .select("id", "username")
    .where({id: user_id})
}

const updateUser = async(user_id, user_username, user_fname, user_lname) => {
    return db('users')
    .update({id: user_id, username: user_username, first_name: user_fname, last_name: user_lname})
    .where({id: user_id})
}

module.exports = {
    createUser,
    getUserByUsername,
    getAllUsers,
    getOneUser, 
    updateUser
}