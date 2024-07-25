const db = require('../config/db.js');
const bcrypt = require("bcrypt")

const _userRegister = async(username, user_password, email, height, weight, gender, bmistatus) => {
    const password = await bcrypt.hash(user_password + '', 10);
    return db("users")
    .insert({username, password, email, height, weight, gender, bmistatus}, ["id", "username", "password", "email", "height", "weight", "gender", "bmistatus"]);
}

const _userLogin = async(username) => {
    try{
        return db("users")
        .select("username", "password")
        .where({username: username})
    }catch(err){
        console.log(err);
        return false
    }
}

const _getExerciseDay = (type) => {
    return db("exercises")
    .select("name", "type", "muscle", "equipment", "difficulty", "instructions")
    .where({type: type})
    .orderByRaw('RANDOM()')
    .limit(1)
}

const updateIntensity = (intensity, username) => {
    return db("users")
    .update({intensity: intensity})
    .where({username: username})
}

module.exports = {
    _userRegister,
    _userLogin,
    _getExerciseDay,
    updateIntensity
}