// file imports
const {
    addProductCall,
    updateProductCall,
} = require('../helper/productHelper');
const { errorHandeler } = require('../utils/errorHandler');

module.exports = {
    // add product
    // link       /api/product/add
    addProduct: async (req, res, next) => {
        try {
            const { name, price, description, imageUrl } = req.body;

            if (!name || !price || !description || !imageUrl) {
                errorHandeler("Please fill all the fields", 400);
            }

            const product = await addProductCall(name, price, description, imageUrl);

            return res.status(200).json({
                success: true,
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
            const { name, price, description, imageUrl } = req.body;

            if (!name || !price || !description || !imageUrl) {
                errorHandeler("Please fill all the fields", 400);
            }

            const product = await updateProductCall(req.params.id, name, price, description, imageUrl);

            return res.status(200).json({
                success: true,
                data: product
            });

        } catch (error) {
            next(error)
        }
    },
}