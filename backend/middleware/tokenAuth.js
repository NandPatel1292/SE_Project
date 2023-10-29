// package imports
const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            const error = new Error("User not authorized");
            error.name = "unauthorizederror";
            throw error;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "");

        if (!decoded) {
            const error = new Error("User not authorized");
            error.name = "unauthorizederror";
            throw error;
        }

        req.user = {
            userId: decoded.id,
        };

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = verifyToken