const express = require("express");
const { signup, login } = require("../controllers/userController");
const { auth } = require("../middlewares/authMiddleware");
const userRoutes = express.Router();


userRoutes.post("/login", login);

userRoutes.post("/signup", signup);

userRoutes.post("/verify", auth, (request, response) => {
    return response.json({
        success: true,
        message: "You're a authenticated user"
    })
});

module.exports = userRoutes;