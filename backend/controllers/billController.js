// file imports
const {
    createBillCall,
    deleteBillCall,
    getAllBillsCall,
    getBillCall,
    updateBillCall,
} = require('../helper/billHelper')
const { errorHandeler } = require('../utils/errorHandler');

module.exports = {
    // Create a new bill
    // link: /api/bill/create
    createBill: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const { customerName, customerMobile, items, totalAmount, payment } = req.body;

            if (!customerName || !customerMobile || !items || !totalAmount || !payment) {
                errorHandeler('Please fill all the fields', 400);
            }

            const bill = await createBillCall(customerName, customerMobile, items, totalAmount, payment, userId);

            return res.status(201).json({
                success: true,
                message: 'Bill created successfully',
                data: bill,
            });
        } catch (error) {
            next(error);
        }
    },

    // Get all bills
    // link: /api/bill/get
    getAllBills: async (req, res, next) => {
        try {
            const { userId } = req.user;

            const bills = await getAllBillsCall(userId);

            return res.status(200).json({
                success: true,
                message: 'Bills fetched successfully',
                data: bills,
            });

        } catch (error) {
            next(error);
        }
    },

    // Get a bill by id
    // link: /api/bill/get/:id
    getBill: async (req, res, next) => {
        try {
            const { userId } = req.user;
            const { id } = req.params;

            const bill = await getBillCall(id, userId);

            return res.status(200).json({
                success: true,
                message: 'Bill fetched successfully',
                data: bill,
            });

        } catch (error) {
            next(error);
        }
    },

    // delete a bill by id
    // link: /api/bill/delete/:id
    deleteBill: async (req, res, next) => {
        try {
            const { userId } = req.user;
            const { id } = req.params;

            const bill = await deleteBillCall(id, userId);

            return res.status(200).json({
                success: true,
                message: 'Bill deleted successfully',
                data: bill,
            });

        } catch (error) {
            next(error);
        }
    },

    // update a bill by id
    // link: /api/bill/update/:id
    updateBill: async (req, res, next) => {
        try {
            const { userId } = req.user;
            const { id } = req.params;

            const { customerName, customerMobile, items, totalAmount, payment } = req.body;

            const bill = await updateBillCall(id, userId, customerName, customerMobile, items, totalAmount, payment);

            return res.status(200).json({
                success: true,
                message: 'Bill updated successfully',
                data: bill,
            });

        } catch (error) {
            next(error);
        }
    },
}