const { registerCall, loginCall } = require("../helper/authHelper");
const { errorHandeler } = require("../utils/errorHandler");

module.exports = {
    // register
    // link       /api/v1/register
    register: async (req, res, next) => {
        try {
            const { email, password, name } = req.body;

            if (!email || !password || !name) {
                errorHandeler("Please fill all the fields", 400);
            }

            const user = await registerCall(name, email, password);

            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // login
    // link       /api/v1/login
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                errorHandeler("Please fill all the fields", 400);
            }

            let re = /\S+@\S+\.\S+/;


            if (!re.test(email)) {

            }

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
    }

}