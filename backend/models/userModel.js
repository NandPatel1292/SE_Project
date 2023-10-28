const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide your name'],
        },
        email: {
            type: String,
            required: [true, 'Please provide your email'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide your password'],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;