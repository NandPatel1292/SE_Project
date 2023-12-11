// file imports
const { errorHandeler } = require('../utils/errorHandler');
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const {
    deleteUserCall,
    changePasswordCall,
    changeUserDetailsCall,
    accessBillPeCall,
    getUserDetailsCall,
    updateOrganisationDetailsCall,
} = require('../helper/userHelper');

module.exports = {

    // deleteUser
    // link       /api/user/delete
    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.user;

            const { password } = req.body;

            if (!userId) {
                errorHandeler("Login to delete your account", 400);
            }

            if (!password) {
                errorHandeler("Password is required", 400);
            }

            const user = await deleteUserCall(userId, password);

            return res
                .clearCookie("token")
                .status(200).json({
                    success: true,
                    message: "User deleted successfully",
                    data: user,
                });

        } catch (error) {
            next(error)
        }
    },

    // chnage password
    // link       /api/user/change-password
    changePassword: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const { oldPassword, newPassword } = req.body;

            if (!oldPassword || !newPassword) {
                errorHandeler("Please fill all the fields", 400);
            }

            const user = await changePasswordCall(userId, oldPassword, newPassword);

            return res.status(200).json({
                success: true,
                message: "Password changed successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // change user details
    // link       /api/user/change-user-details
    changeUserDetails: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const { name, email, gstNumber, orginationName, address, contactNumber } = req.body;

            const user = await changeUserDetailsCall(userId, name, email, gstNumber, orginationName, address, contactNumber);

            return res.status(200).json({
                success: true,
                message: "User details changed successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // trial access
    // link       /api/user/access
    accessBillPe: async (req, res, next) => {
        try {

            const { type } = req.query;

            const { userId } = req.user;

            const user = await accessBillPeCall(type, userId);

            return res.status(200).json({
                success: true,
                message: "Trial access granted successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // get user details
    // link       /api/user/details
    getUserDetails: async (req, res, next) => {
        try {
            const { userId } = req.user;

            const user = await getUserDetailsCall(userId);

            return res.status(200).json({
                success: true,
                message: "User details fetched successfully",
                data: user
            });

        } catch (error) {
            next(error)
        }
    },

    // add organisation details
    // link       /api/user/update-organisation-details
    updateOrganisationDetails: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const { gstNumber, orginationName, address, contactNumber } = req.body;

            if (!gstNumber || !orginationName || !address || !contactNumber) {
                errorHandeler("Please fill all the fields", 400);
            }

            const user = await updateOrganisationDetailsCall(userId, gstNumber, orginationName, address, contactNumber);

            return res.status(200).json({
                success: true,
                message: "Organisation details updated successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // create checkout session
    // link       /api/user/create-checkout-session
    createCheckoutSession: async (req, res, next) => {

        const storeItems = new Map([
            [1, { priceInCents: 3000, name: "One Month Subscription" }],
            [2, { priceInCents: 32400, name: "One Year Subscription" }],
          ])

        try {
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ["card"],
              mode: "payment",
              line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                  price_data: {
                    currency: "inr",
                    product_data: {
                      name: storeItem.name,
                    },
                    unit_amount: storeItem.priceInCents,
                  },
                  quantity: item.quantity,
                }
              }),
              success_url: `http://localhost:5173/features`,
              cancel_url: `http://localhost:5173/select-plan`,
            })
            res.json({ url: session.url })
          } catch (e) {
            next(e);
          }

    },
}