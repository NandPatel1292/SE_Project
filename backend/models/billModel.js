const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
        billDate: {
            type: Date,
            default: Date.now(),
        },
        customerName: {
            type: String,
            required: true,
        },
        customerMobile: {
            type: String,
            required: true,
        },
        items: [
            {
                barCode: {
                    type: String,
                    required: true,
                },
                itemName: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                priceType: {
                    type: Boolean,
                    required: true,
                },
                weight: {
                    type: Number,
                },
                discount: {
                    type: Number,
                    required: true,
                },
                gst: {
                    type: Number,
                    required: true,
                },
                sellingPrice: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                total: {
                    type: Number,
                    required: true,
                },
                productRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                }
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
        },
        payment: {
            paymentType: {
                type: String,
                required: true,
            },
            paymentStatus: {
                type: String,
                required: true,
            },
            paymentDate: {
                type: Date,
                default: Date.now(),
            },
            paymentReference: {
                type: String,
                required: true,
            },
        },
        userRef: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;