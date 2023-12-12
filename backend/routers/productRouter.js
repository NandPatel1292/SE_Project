// package imports
const express = require('express');

// file imports
const {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct
} = require('../controllers/productController');
const verifyToken = require("../middleware/tokenAuth");
const verifyPayedUser = require("../middleware/payedUserAuth");

// router setup
const router = express.Router();

// add product
// link       /api/product/add
// access     private
router.route('/add').post(verifyToken, verifyPayedUser, addProduct);

// update product
// link       /api/product/update/:id
// access     private
router.route('/update/:id').patch(verifyToken, verifyPayedUser, updateProduct);

// get all products
// link       /api/product/get
// access     private
router.route('/get').get(verifyToken, verifyPayedUser, getAllProducts);

// get product
// link       /api/product/get/:id
// access     private
router.route('/get/:id').get(verifyToken, verifyPayedUser, getProduct);

// delete product
// link       /api/product/delete/:id
// access     private
router.route('/delete/:id').delete(verifyToken, verifyPayedUser, deleteProduct);

module.exports = router;