const {userRegister, userLogin, getAllUsers, getOneUser, updateUser} = require('../controllers/user.controllers.js')
const express = require('express');

const router = express.Router();

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/users", getAllUsers)
router.get("/users/:id", getOneUser)
router.put("/users/:id", updateUser)

module.exports = router