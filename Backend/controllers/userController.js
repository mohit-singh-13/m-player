const { passwordHash, matchPassword } = require("../utils/passwordHashing");
const userModel = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.login = async (request, response) => {
    try {
        const {email, password} = request.body;
        
        const user = await userModel.findOne({email});

        if (!user) {
            return response.json({
                success: false,
                message: "Please create an account before logging in"
            })
        }

        // console.log("User document : ", user);
        const hashedPassword = user.password;

        const payload = {
            id: user._id,
        }

        const JWT_SECRET = process.env.JWT_SECRET;

        if (await matchPassword(password, hashedPassword)) {
            
            let token = jwt.sign(payload, JWT_SECRET, {
                "expiresIn": "2h"
            });

            // user._doc.token = token;
            const cookieOptions = {
                httpOnly: true, // Cookie is not accessible via JavaScript
                sameSite: 'None', // Allow cross-origin cookies
                secure: true, // Cookie only sent over HTTPS
                maxAge: 24 * 60 * 60 * 1000, // 1 day expiry time
            };

            return response.cookie("token", token, cookieOptions).json({
                success: true,
                // user,
                message: "You're logged in successfully"
            })
        } else {
            return response.json({
                success: false,
                message: "Please enter correct password"
            })
        }
    } catch(err) {
        console.log("Error in login", err);
        return response.json({
            success: false,
            message: "We are facing some issues. Please try again later. Sorry for inconvenience!!!"
        })
    }
}

exports.signup = async (request, response) => {
    try {
        const {name, email, password} = request.body;

        const hashedPassword = await passwordHash(password);

        if (!hashedPassword) {
            return response.json({
                success: false,
                message: "Couldn't create entry in database due to error in password hashing"
            })
        }

        const existingUser = await userModel.findOne({email});

        if (existingUser) {
            console.log("User already exists");
            
            return response.json({
                success: false,
                message: "User already exists"
            })
        }

        const user = await userModel.create({name, email, password:hashedPassword});

        if (user) {
            return response.json({
                success: true,
                message: "Your account has been created successfully"
            })
        }
    } catch(err) {
        console.log("Error in signup", err);
        return response.json({
            success: false,
            message: "We are facing some issues. Please try again later. Sorry for inconvenience!!!"
        })
    }
}