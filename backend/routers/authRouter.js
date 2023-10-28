// imports
const express = require("express");
const { register, login } = require("../controllers/authController");

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

module.exports = router;
