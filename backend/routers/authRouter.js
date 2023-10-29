// package imports
const express = require("express");

// file imports
const {
    register,
    login,
    logout,
    googleLogin
} = require("../controllers/authController");
const verifyToken = require("../middleware/tokenAuth");

// router
const router = express.Router();

// routes

// register
// link       /api/auth/register
// access     public
router.route('/register').post(register);

// login
// link       /api/auth/login
// access     public
router.route('/login').post(login);

// logout
// link       /api/auth/logout
// access     private
router.route('/logout').get(verifyToken, logout);

// google login
// link       /api/auth/google-login
// access     private
router.route('/google-login').get(verifyToken, googleLogin);

module.exports = router;
