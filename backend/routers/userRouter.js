// imports
const express = require("express");
const {
    deleteUser,
    changePassword,
    changeUserDetails,
    trialAccess,
    premiumAccess,
} = require("../controllers/userController");
const verifyToken = require("../middleware/tokenAuth");

// router
const router = express.Router();

// routes

// deleteUser
// link       /api/user/delete
// access     private
router.route('/delete').delete(verifyToken, deleteUser);

// chnage password
// link       /api/user/change-password
// access     private
router.route('/change-password').patch(verifyToken, changePassword);

// chnage user details
// link       /api/user/change-user-details
// access     private
router.route('/change-user-details').patch(verifyToken, changeUserDetails);

// trial access
// link       /api/user/trial-access
// access     private
router.route('/trial-access').patch(verifyToken, trialAccess);

// premium access
// link       /api/user/premium-access
// access     private
router.route('/premium-access').patch(verifyToken, premiumAccess);


module.exports = router;
