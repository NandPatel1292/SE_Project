// pcakage imports
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
        image: {
            type: String,
            default: null,
        },
        isOnTrial: {
            type: Boolean,
            default: false,
        },
        isOnPremium: {
            type: Boolean,
            default: false,
        },
        isTrialUsed: {
            type: Boolean,
            default: false,
        },
        subscription: {
            type: Boolean,
            default: false,
        },
        startedAt: {
            type: Date,
            default: null,
        },
        payment: {
            transferId: {
                type: String,
                default: null,
            },
            amount: {
                type: Number,
                default: null,
            },
            transferDate: {
                type: Date,
                default: null,
            },
        },
        expiresAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;