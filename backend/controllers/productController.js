// file imports
const {
    addProductCall,
    updateProductCall,
    deleteProductcall,
    getAllProductsCall,
    getProductCall
} = require('../helper/productHelper');
const { errorHandeler } = require('../utils/errorHandler');

module.exports = {
    // add product
    // link       /api/product/add
    addProduct: async (req, res, next) => {
        try {
            const {
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
            } = req.body;

            const { userId } = req.user;

            if (!barCode || !itemName || !category || !brand || !price || !priceType || !description) {
                errorHandeler("Please fill all the fields", 400);
            }

            const product = await addProductCall(
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
            );

            return res.status(200).json({
                success: true,
                message: "Product added successfully",
                data: product
            });

        } catch (error) {
            next(error)
        }
    },

    // update product
    // link       /api/product/update/:id
    updateProduct: async (req, res, next) => {
        try {

            const {
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
            } = req.body;


            const { id } = req.params;

            const { userId } = req.user;

            const product = await updateProductCall(
                id,
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
            );

            return res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product
            });

        } catch (error) {
            next(error)
        }
    },

    // get all products
    // link       /api/product/get
    getAllProducts: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const products = await getAllProductsCall(userId);

            return res.status(200).json({
                success: true,
                message: "All products fetched successfully",
                data: products
            });

        } catch (error) {
            next(error)
        }
    },

    // get product
    // link       /api/product/get/:id
    getProduct: async (req, res, next) => {
        try {

            const { id } = req.params;

            const { userId } = req.user;

            const product = await getProductCall(id, userId);

            return res.status(200).json({
                success: true,
                message: "Product fetched successfully",
                data: product
            });

        } catch (error) {
            next(error)
        }
    },

    // delete product
    // link       /api/product/delete/:id
    deleteProduct: async (req, res, next) => {
        try {

            const { id } = req.params;

            const { userId } = req.user;

            const product = await deleteProductcall(id, userId);

            return res.status(200).json({
                success: true,
                message: "Product deleted successfully",
                data: product
            });

        } catch (error) {
            next(error)
        }
    },
}