const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (request, response, next) => {
    // const token = request.header("Authorization").replace("Bearer ", "");
    const token = request.cookies;
    console.log("Token : ", token);

    if (!token) {
        return response.json({
            success: false
        });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Payload ", payload);

        request.user = payload;
    } catch(err) {
        return response.json({
            success: false
        });
    }

    next();
}