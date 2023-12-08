// custom impots
const Bill = require('../models/billModel');
const { errorHandeler } = require('../utils/errorHandler');

module.exports = {
    // Create a new bill call
    createBillCall: async (
        customerName,
        customerMobile,
        items,
        totalAmount,
        payment,
        userId
    ) => {
        try {
            const bill = await Bill.create({
                customerName,
                customerMobile,
                items,
                totalAmount,
                payment,
                userRef: userId,
            })

            return bill;

        } catch (error) {
            throw error;
        }
    },

    // Get all bills call
    getAllBillsCall: async (userId) => {
        try {
            const bills = await Bill.find({ userRef: userId });

            return bills;
        } catch (error) {
            throw error;
        }
    },

    // get bill by id call
    getBillCall: async (id, userId) => {
        try {
            const bill = await Bill.findById(id);

            if (!bill) {
                errorHandeler('Bill not found', 404);
            }

            if (bill.userRef.toString() !== userId.toString()) {
                errorHandeler('Unauthorized access', 401);
            }

            return bill;
        } catch (error) {
            throw error;
        }
    },

    // delete bill call
    deleteBillCall: async (id, userId) => {
        try {
            const bill = await Bill.findById(id);

            if (!bill) {
                errorHandeler('Bill not found', 404);
            }

            if (bill.userRef.toString() !== userId.toString()) {
                errorHandeler('Unauthorized access', 401);
            }

            await Bill.findByIdAndDelete(id);

            return bill;
        }
        catch (error) {
            throw error;
        }
    },

    // update bill call
    updateBillCall: async (id, userId, customerName, customerMobile, items, totalAmount, payment) => {
        try {
            const bill = await Bill.findById(id);

            if (!bill) {
                errorHandeler('Bill not found', 404);
            }

            if (bill.userRef.toString() !== userId.toString()) {
                errorHandeler('Unauthorized access', 401);
            }

            bill.customerName = customerName || bill.customerName;
            bill.customerMobile = customerMobile || bill.customerMobile;
            bill.items = items || bill.items;
            bill.totalAmount = totalAmount || bill.totalAmount;
            bill.payment = payment || bill.payment;

            await bill.save();

            return bill;

        } catch (error) {
            throw error;
        }
    },
}