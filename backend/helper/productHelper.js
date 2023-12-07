// file imports
const Product = require('../models/productModel');

module.exports = {
    // add product call
    addProductCall: async (
        barCode,
        itemName,
        category,
        brand,
        price,
        priceType,
        description,
        weight,
        unit,
        discount,
        gst,
        sellingPrice,
        userId
    ) => {
        try {
            const product = await Product.create({
                barCode,
                itemName,
                category,
                brand,
                price,
                priceType,
                description,
                weight,
                unit,
                discount,
                gst,
                sellingPrice,
                userRef: userId
            });

            return product;

        } catch (error) {
            next(error);
        }
    },

    // update product call
    updateProductCall: async (id,
        userId,
        barCode,
        itemName,
        category,
        brand,
        price,
        priceType,
        description,
        weight,
        unit,
        discount,
        gst,
        sellingPrice
    ) => {
        try {
            const product = await Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            if (product.userRef.toString() !== userId) {
                errorHandeler("You are not authorized to update this product", 401);
            }

            product.barCode = barCode || product.barCode;
            product.itemName = itemName || product.itemName;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.price = price || product.price;
            product.priceType = priceType || product.priceType;
            product.description = description || product.description;
            product.weight = weight || product.weight;
            product.unit = unit || product.unit;
            product.discount = discount || product.discount;
            product.gst = gst || product.gst;
            product.sellingPrice = sellingPrice || product.sellingPrice;

            await product.save();

            return product;
        } catch (error) {
            throw error;
        }
    },

    // get all products call
    // link       /api/user/get
    getAllProductsCall: async (userId) => {
        try {
            const product = await Product.find({ userRef: userId });

            return product;
        } catch (error) {
            next(error);
        }
    },

    // get single product call
    // link       /api/user/get/:id
    getProductCall: async (id, userId) => {
        try {
            const product = await Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            if (product.userRef.toString() !== userId) {
                errorHandeler("You are not authorized to access this product", 401);
            }

            return product;
        } catch (error) {
            next(error);
        }
    },

    // delete product call
    // link       /api/user/delete/:id
    deleteProductcall: async (id, userId) => {
        try {
            const product = await Product.findById(id);

            if (!product) {
                errorHandeler("Product not found", 404);
            }

            if (product.userRef.toString() !== userId) {
                errorHandeler("You are not authorized to delete this product", 401);
            }

            await Product.findByIdAndDelete(id);

            return product;
        } catch (error) {
            next(error);
        }
    },
}