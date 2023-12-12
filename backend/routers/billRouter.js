// package imports
const express = require('express');

// file imports
const {
    createBill,
    getAllBills,
    deleteBill,
    getBill,
    updateBill
} = require('../controllers/billController');
const verifyAccess = require('../middleware/payedUserAuth');
const verifyAuth = require('../middleware/tokenAuth');

// router reaction
const router = express.Router();

// routes
// create bill
// link: /api/bill/create
// access: private
router.route('/create').post(verifyAuth, verifyAccess, createBill);

// get all bills
// link: /api/bill/get
// access: private
router.route('/get').get(verifyAuth, verifyAccess, getAllBills);

// get a bill by id
// link: /api/bill/get/:id
// access: private
router.route('/get/:id').get(verifyAuth, verifyAccess, getBill);

// delete a bill by id
// link: /api/bill/delete/:id
// access: private
router.route('/delete/:id').delete(verifyAuth, verifyAccess, deleteBill);

// update a bill by id
// link: /api/bill/update/:id
// access: private
router.route('/update/:id').patch(verifyAuth, verifyAccess, updateBill);

// export router
module.exports = router;