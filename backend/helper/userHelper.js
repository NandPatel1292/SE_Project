// package imports
const bcrypt = require('bcryptjs')

// file imports
const User = require('../models/userModel');
const { errorHandeler } = require('../utils/errorHandler.js');
const stripePayment = require('../middleware/stripePayment');

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
    changeUserDetailsCall: async (userId, name, email, gstNumber, orginationName, address, contactNumber) => {
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
            user.gstNumber = gstNumber || user.gstNumber;
            user.orginationName = orginationName || user.orginationName;
            user.address = address || user.address;
            user.contactNumber = contactNumber || user.contactNumber;

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // update info using more details
    updateOrganisationDetailsCall: async (userId, gstNumber, orginationName, address, contactNumber) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            user.gstNumber = gstNumber || user.gstNumber;
            user.orginationName = orginationName || user.orginationName;
            user.address = address || user.address;
            user.contactNumber = contactNumber || user.contactNumber;

            await user.save();

            return user;
        } catch (error) {
            throw error
        }
    },

    // trial access call
    accessBillPeCall: async (type, userId) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            if (user.isOnTrial) {
                errorHandeler("You are already on trial", 400);
            }

            if (type === 'trial') {
                if (user.isTrialUsed) {
                    errorHandeler("You have already used your trial", 400);
                }

                if (user.isOnPremium) {
                    errorHandeler("You are already on premium", 400);
                }

                const session = await stripePayment("One Month Subscription", 3000)

                console.log(session);

                user.isOnTrial = true;
                user.isTrialUsed = true;
                user.startedAt = Date.now();
                user.expiresAt = Date.now() + 37 * 24 * 60 * 60 * 1000; // 7 + 30 days trial period available and accessed

                await user.save();

                return user;

            } else {
                if (user.isOnPremium) {
                    errorHandeler("You are already on premium", 400);
                }

                const session = await stripePayment("One Year Subscription", 3240)

                console.log(session);

                user.isOnPremium = true;
                user.startedAt = Date.now();
                user.expiresAt = Date.now() + period * 360 * 24 * 60 * 60 * 1000; // 360 days premium period available and accessed

                await user.save();

                return user;
            }

        } catch (error) {
            throw error
        }
    },

    // Get user details call
    getUserDetailsCall: async (userId) => {
        try {
            const user = await User.findById(userId);

            if (!user) {
                errorHandeler("User not found", 404);
            }

            return user;
        } catch (error) {
            throw error
        }
    }
}