// package imports
const bcrypt = require('bcryptjs');

// file imports
const User = require('../models/userModel.js')
const { errorHandeler } = require('../utils/errorHandler.js');
const generateToken = require('../utils/generateToken.js');

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

            const token = generateToken(user._id)

            return { token, user }
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

            const token = generateToken(user._id)

            return { token, user }
        } catch (error) {
            throw error
        }
    },

    // googleLoginCall
    googleLoginCall: async (name, email, image) => {
        try {
            const user = await User.findOne({ email })

            if (!user) {
                const password = Math.random().toString(36).slice(-8);

                const hashedPassword = await bcrypt.hash(password, 10);

                user = new User({
                    name,
                    email,
                    password: hashedPassword,
                    image
                });

                await user.save();
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