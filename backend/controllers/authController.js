// file imports
const { errorHandeler } = require("../utils/errorHandler");
const {
    registerCall,
    loginCall,
    googleLoginCall
} = require("../helper/authHelper");

module.exports = {
    // register
    // link       /api/auth/register
    register: async (req, res, next) => {
        try {
            const { email, password, name } = req.body;

            if (!email || !password || !name) {
                errorHandeler("Please fill all the required fields", 400);
            }

            const { token, user } = await registerCall(name, email, password);

            return res
                .cookie("token", token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
                })
                .status(200).json({
                    success: true,
                    message: "User Sign up successfully",
                    data: {
                        token,
                        user
                    }
                });

        } catch (error) {
            next(error);
        }
    },

    // login
    // link       /api/auth/login
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                errorHandeler("Please fill all the fields", 400);
            }

            // email validation
            // let re = /\S+@\S+\.\S+/;
            // if (!re.test(email)) {
            // }

            const { token, user } = await loginCall(email, password);

            return res
                .cookie("token", token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
                })
                .status(200).json({
                    success: true,
                    message: "User logged in successfully",
                    data: {
                        token,
                        user
                    }
                });

        } catch (error) {
            next(error);
        }
    },

    // logout
    // link       /api/auth/logout
    logout: async (req, res, next) => {
        try {
            return res
                .clearCookie("token")
                .status(200).json({
                    success: true,
                    message: "User logged out successfully",
                });

        } catch (error) {
            next(error);
        }
    },

    // google login
    // link       /api/auth/google-login
    googleLogin: async (req, res, next) => {
        try {
            const { name, email, image } = req.body;

            if (!email || !image || !name) {
                errorHandeler("Please fill all the fields", 400);
            }

            const data = await googleLoginCall(name, email, image);

            return res
                .cookie("token", data.token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                })
                .status(200).json({
                    success: true,
                    message: "User logged in successfully",
                    data: data.user,
                });

        } catch (error) {
            next(error);
        }
    },

}
