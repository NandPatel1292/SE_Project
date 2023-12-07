// pcakage imports
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide product name'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide product price'],
        },
        description: {
            type: String,
            required: [true, 'Please provide product description'],
        },
        imageUrl: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;