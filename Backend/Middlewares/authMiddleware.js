const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

exports.authMiddlware = async (request, response, next) => {
    try {
        let token = request.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return response.json({
                success: false,
                message: "Please login and try again"
            })
        }

        // verify the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);

            const userEmail = payload.email;

            const user = await userModel.findOne({email: userEmail});

            if (!user) {
                return response.json({
                    success: false,
                    message: "Please login and try again"
                })
            }

            return response.json({
                success: true,
                message: `Welcome back ${user.name}`
            })
        } catch(err) {
            return response.json({
                success: false
            })
        }

    } catch(err) {
        return response.json({
            success: false
        })
    }
}