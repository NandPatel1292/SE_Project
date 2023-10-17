// imports
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {

    // registerCall
    registerCall: async (name, email, password) => {
        try {

            const hashedpassword = await bcrypt.hash(password, 10)

            const user = await User.create({
                name,
                email,
                password: hashedpassword
            })

            return user
        } catch (error) {
            throw error
        }
    },

    // loginCall
    loginCall: async (email, password) => {
        try {
            const user = await User.findOne({ email })

            if (!user) {
                const error = new Error("User not found");
                error.statusCode = 404;
                throw error;
            }

            const isMatch = await user.matchPassword(password)

            if (!isMatch) {
                const error = new Error("Invalid credentials");
                error.statusCode = 401;
                throw error;
            }

            const expiresIn = process.env.JWT_EXPIRE || '1d';
            const jwtSecret = process.env.JWT_SECRET || "sdvbuhsabsduf67237472317";

            const token = jwt.sign(
                {
                    id: user._id
                },
                jwtSecret,
                {
                    expiresIn: expiresIn
                }
            )

            return { token, user }
        } catch (error) {
            throw error
        }
    }
}