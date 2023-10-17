// imports
const express = require("express");
const { register, login } = require("../controllers/authController");

// router
const router = express.Router();

// routes

// register
// link       /api/auth/register
// access     public
router.route('/register').get(register);

// login
// link       /api/auth/login
// access     public
router.route('/login').get(login);

module.exports = router;
