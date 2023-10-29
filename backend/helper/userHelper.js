// package imports
const bcrypt = require('bcryptjs')

// file imports
const User = require('../models/userModel');
const { errorHandeler } = require('../utils/errorHandler.js');

module.exports = {

    // deleteUserCall
    deleteUserCall: async (userId, password) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                errorHandeler("Invalid credentials", 401);
            }

            await User.findByIdAndDelete(userId);

            return user;
        } catch (error) {
            throw error
        }
    },

    // changePasswordCall
    changePasswordCall: async (userId, oldPassword, newPassword) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            const isMatch = await bcrypt.compare(oldPassword, user.password);

            if (!isMatch) {
                errorHandeler("Invalid credentials", 401);
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            user.password = hashedPassword;

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // chnageUserDetailsCall
    changeUserDetailsCall: async (userId, name, email, image) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            if (user.email !== email) {
                const isEmailExist = await User.findOne({ email });

                if (isEmailExist) {
                    errorHandeler("Email already exists", 400);
                }
            }

            user.name = name || user.name;
            user.email = email || user.email;
            user.image = image || user.image;

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // trial access call
    trialAccessCall: async (userId) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            if (user.isOnTrial) {
                errorHandeler("You are already on trial", 400);
            }

            if (user.isTrialUsed) {
                errorHandeler("You have already used your trial", 400);
            }

            if (user.isOnPremium) {
                errorHandeler("You are already on premium", 400);
            }

            user.isOnTrial = true;
            user.isTrialUsed = true;
            user.startedAt = Date.now();
            user.expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days trial period available and accessed

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // premium access call
    premiumAccessCall: async (userId, period) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            if (user.isOnTrial) {
                errorHandeler("You are already on trial", 400);
            }

            if (user.isOnPremium) {
                errorHandeler("You are already on premium", 400);
            }

            // TODO: Payment gateway integration remaining

            user.isOnPremium = true;
            user.startedAt = Date.now();
            user.expiresAt = Date.now() + period * 30 * 24 * 60 * 60 * 1000;

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // 
}