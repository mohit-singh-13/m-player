const express = require("express");
const { signup, login } = require("../controllers/userController");
const userRoutes = express.Router();


userRoutes.post("/login", login);

userRoutes.post("/signup", signup);

module.exports = userRoutes;