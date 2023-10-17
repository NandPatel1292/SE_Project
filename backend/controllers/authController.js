const { registerCall, loginCall } = require("../helper/authHelper");


module.exports = {
    // register
    // link       /api/v1/register
    register: async (req, res, next) => {
        try {
            const { email, password, name } = req.body;

            if (!email || !password || !name) {

                const error = new Error("Please fill all the fields");
                error.statusCode = 400;
                throw error;
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
                const error = new Error("Please fill all the fields");
                error.statusCode = 400;
                throw error;
            }

            const { token, user } = await loginCall(email, password);

            return res.status(200).json({
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