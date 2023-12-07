// file imports
const Product = require('../models/productModel');

module.exports = {
    // add product call
    addProductCall: async (name, price, description, imageUrl) => {
        try {
            const product = await Product.create({
                name,
                price,
                description,
                imageUrl
            });

            return product;
        } catch (error) {
            next(error);
        }
    },

    // update product call
    updateProductCall: async (id, name, price, description, imageUrl) => {
        try {
            const product = Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            product.name = name || product.name;
            product.price = price || product.price;
            product.description = description || product.description;
            product.imageUrl = imageUrl || product.imageUrl;

            await product.save();

            return product;
        } catch (error) {
            next(error);
        }
    },

    // get all products call
    // link       /api/user/get
    getAllProducts: async () => {
        try {
            const product = await Product.find();

            return product;
        } catch (error) {
            next(error);
        }
    },

    // get single product call
    // link       /api/user/get/:id
    getProduct: async (id) => {
        try {
            const product = await Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            return product;
        } catch (error) {
            next(error);
        }
    },

    // delete product call
    // link       /api/user/delete/:id
    deleteProductcall: async (id) => {
        try {
            const product = await Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            await Product.findByIdAndDelete(id);

            return product;
        } catch (error) {
            next(error);
        }
    },
}