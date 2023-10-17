// imports
const express = require('express');
const { register } = require('../controllers/userController');

// router
const router = express.Router();

// routes

// register
// link       /api/v1/register
// access     public
router.add('/register', register);

// login
// link       /api/v1/login
// access     public
router.add('/register', login);

module.exports = router;