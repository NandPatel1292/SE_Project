// file imports
const { errorHandeler } = require('../utils/errorHandler');

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

            const { name, email, gstNumber, orginationName, address, numberOfCounters, contactNumber } = req.body;

            const user = await changeUserDetailsCall(userId, name, email, gstNumber, orginationName, address, numberOfCounters, contactNumber);

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

            const { gstNumber, orginationName, address, numberOfCounters, contactNumber } = req.body;

            if (!gstNumber || !orginationName || !address || !numberOfCounters || !contactNumber) {
                errorHandeler("Please fill all the fields", 400);
            }

            const user = await updateOrganisationDetailsCall(userId, gstNumber, orginationName, address, numberOfCounters, contactNumber);

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
    // createCheckoutSession: async (req, res, next) => {
    //     try {



    //     } catch (error) {
    //         next(error);
    //     }
    // },
}