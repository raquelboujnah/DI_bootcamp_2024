const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    const user = { username, password, email, first_name, last_name };
 
    try {
      const userInfo = await userModel.createUser(user);
      res.status(201).json({
        message: "User registered successfullt",
        user: userInfo,
      });
    } catch (error) {
      console.log(error.code);
      if (error.code == 23505) {
        return res
          .status(200)
          .json({ messgae: "Email or Username already exist" });
      }
      res.status(500).json({ error: "internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(email, username);

      if (!user) {
        return res.status(404).json({ message: "user not found, ...." });
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed..." });
      }

      const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

      const accessToken = jwt.sign(
        { userid: user.id, email: user.email },
        ACCESS_TOKEN_SECRET,
        {expiresIn: '60s'}
      );

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        //secure: 
        maxAge: 60 * 1000,
      })


      const refreshToken = jwt.sign(
        { email: user.email },
        REFRESH_TOKEN_SECRET,
        {expiresIn: '3d'}
      );

      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        //secure: 
        maxAge: 259200000, 
      })

      await userModel.updateToken(user.id, refreshToken);

      res.json({
        message: "Login succesfull",
        user: { userid: user.id, email: user.email },
        access_token: accessToken,
        refresh_token: refreshToken
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    };
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getUserById: async(req, res) => {
    try {
      const userid = req.userid
      const user = await userModel.getUserById(userid);
      res.json(user);
    }catch(err){
      console.log(err);
      res.status(500).json({error: "internal server error"})
    }
  }
};
