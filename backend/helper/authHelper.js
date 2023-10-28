// imports
const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { errorHandeler } = require('../utils/errorHandler.js');

module.exports = {

    // registerCall
    registerCall: async (name, email, password) => {
        try {

            let user = await User.findOne({ email });

            if (user) {
                errorHandeler("User already exists", 400);
            }

            const hashedpassword = await bcrypt.hash(password, 10)

            user = await User.create({
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
                errorHandeler("User not found", 404);
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                errorHandeler("Invalid credentials", 401);
            }

            const expiresIn = process.env.JWT_EXPIRE || '7d';
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