// imports
const express = require("express");
const { deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/tokenAuth");

// router
const router = express.Router();

// routes

// deleteUser
// link       /api/user/delete
// access     private
router.route('/delete').delete(verifyToken, deleteUser);


module.exports = router;
