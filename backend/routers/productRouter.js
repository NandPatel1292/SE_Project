// package imports
const express = require('express');

// file imports
const { addProduct } = require('../controllers/productController');
const verifyToken = require("../middleware/tokenAuth");
const verifyPayedUser = require("../middleware/payedUserAuth");

// router setup
const router = express.Router();

// add product
// link       /api/product/add
// access     private
router.route('/add').post(verifyToken, verifyPayedUser, addProduct);

module.exports = router;