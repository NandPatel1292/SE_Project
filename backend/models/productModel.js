// pcakage imports
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        barCode: {
            type: Number,
            required: [true, 'Please provide product barcode'],
        },
        itemName: {
            type: String,
            required: [true, 'Please provide product name'],
        },
        category: {
            type: String,
            required: [true, 'Please provide product category'],
        },
        brand: {
            type: String,
            required: [true, 'Please provide product brand'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide product price'],
        },
        priceType: {
            type: Boolean, // true for piece price, false for weight price
            required: [true, 'Please provide product price type'],
        },
        description: {
            type: String,
            required: [true, 'Please provide product description'],
        },
        weight: {
            type: Number,
            default: null,
        },
        discount: {
            type: Number,
            default: null,
        },
        gst: {
            type: Number,
            default: null,
        },
        sellingPrice: {
            type: Number,
            default: null,
        },
        userRef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user reference'],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;