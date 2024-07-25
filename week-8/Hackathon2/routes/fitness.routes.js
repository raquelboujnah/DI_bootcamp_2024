const { registerFile, loginFile, mainFile, userRegister, userLogin, getExerciseDay, userIntensity} = require("../controllers/fitness.controllers")
const express = require('express');
const router = express.Router();

router.get("/exercises", getExerciseDay)
router.get("/register", registerFile),
router.get("/login", loginFile), 
router.get("/main", mainFile), 
router.post("/register", userRegister);
router.post("/intensity", userIntensity);
router.post("/login", userLogin);

module.exports = router