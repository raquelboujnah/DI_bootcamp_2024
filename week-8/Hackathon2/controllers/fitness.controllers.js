const {_userRegister, _userLogin, _getExerciseDay, updateIntensity} = require("../models/fitness.models");
const bcrypt = require("bcrypt");
const path = require("path")
const fs = require("fs")

const registerFile = (req,res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"))
}

const loginFile = (req,res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
}

const mainFile = (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
}

const userRegister = (req, res) => {
    const {username, password, email, height, weight, gender} = req.body;
    const heightMetre = height.toString() * 0.01
    const BMI = weight / (heightMetre * heightMetre)
    let bmistatus = ''
    if (BMI < 18.5) {
        bmistatus = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        bmistatus = "Normal";
    } else if (BMI >= 25 && BMI <= 29.9) {
        bmistatus = "Overweight";
    } else if (BMI >= 30) {
        bmistatus = "Obese";
    }
    _userRegister(username, password, email, height, weight, gender, bmistatus)
        .then(result => {
            res.json({message: `Your bmi status is: ${bmistatus}`, username});
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"})
        })
}

const userIntensity = (req,res) => {
    const {intensity, username} = req.body
    updateIntensity(intensity, username)
    .then(result => {
        res.json(intensity)
    })
    .catch((err) => {
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    })
}

const userLogin = async(req, res) => {
    const {username, password} = req.body;
    try{
        const loginStatus = await _userLogin(username)
        if (loginStatus.length === 0) {
            return res.status(404).json({message: "Username not valid, try again."});
        }
        const passwordMatch = await bcrypt.compare(password+"", loginStatus[0].password);
        if(!passwordMatch){
            return res.status(401).json({error: "Wrong password"});
        }
        return res.json({message: `Welcom back ${username}`})
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})     
    }
}

const getExerciseDay = async(req, res) =>{
    try {
        const results = await Promise.all([
            _getExerciseDay("cardio"),
            _getExerciseDay("powerlifting"),
            _getExerciseDay("strength")
        ]);
        const response = [results[0][0], results[1][0], results[2][0]];
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching exercises' });
    }
}


module.exports = {
    registerFile,
    loginFile,
    mainFile,
    userRegister,
    userLogin,
    getExerciseDay,
    userIntensity
}