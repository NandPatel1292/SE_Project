// imports
const User = require('../models/userModel');
const { errorHandeler } = require('../utils/errorHandler.js');
const bcrypt = require('bcryptjs')

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
    }
}