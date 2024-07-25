const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controllers.js');

router.post('/register', userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.get("/all", userControllers.getAllUsers);
router.get("/:id", userControllers.getOneUser);
router.put("/:id", userControllers.updateUser);


module.exports = router;