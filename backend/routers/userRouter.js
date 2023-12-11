// package imports
const express = require("express");

// file imports
const {
    deleteUser,
    changePassword,
    changeUserDetails,
    accessBillPe,
    getUserDetails,
    updateOrganisationDetails,
    createCheckoutSession,
} = require("../controllers/userController");
const verifyToken = require("../middleware/tokenAuth");

// router
const router = express.Router();

// routes

// deleteUser
// link       /api/user/delete
// access     private
router.route('/delete').delete(verifyToken, deleteUser);

// change password
// link       /api/user/change-password
// access     private
router.route('/change-password').patch(verifyToken, changePassword);

// change user details
// link       /api/user/change-user-details
// access     private
router.route('/change-user-details').patch(verifyToken, changeUserDetails);

// trial access & premium access
// link       /api/user/access?type=trial
// access     private
router.route('/access').post(verifyToken, accessBillPe);

// Fetch user details
// link       /api/user/details
// access     private
router.route('/details').get(verifyToken, getUserDetails);

// add organisation details
// link       /api/user/update-organisation-details
// access     private
router.route('/update-organisation-details').patch(verifyToken, updateOrganisationDetails);

// create checkout session
// link       /api/user/create-checkout-session
// access     private
router.route('/create-checkout-session').post(verifyToken, createCheckoutSession);

module.exports = router;
