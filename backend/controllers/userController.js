// file imports
const { errorHandeler } = require('../utils/errorHandler');

const {
    deleteUserCall,
    changePasswordCall,
    changeUserDetailsCall,
    trialAccessCall,
    premiumAccessCall,
    getUserDetailsCall,
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

            const { name, email, image } = req.body;

            const user = await changeUserDetailsCall(userId, name, email, image);

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
    // link       /api/user/trial-access
    trialAccess: async (req, res, next) => {
        try {

            const { userId } = req.user;

            const user = await trialAccessCall(userId);

            return res.status(200).json({
                success: true,
                message: "Trial access granted successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    },

    // premium access
    // link       /api/user/premium-access
    premiumAccess: async (req, res, next) => {
        try {

            const { period } = req.body;

            const { userId } = req.user;

            if (!period) {
                errorHandeler("Period is required", 400);
            }

            const user = await premiumAccessCall(userId, period);

            return res.status(200).json({
                success: true,
                message: "Premium access granted successfully",
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
    }

    // create checkout session
    // link       /api/user/create-checkout-session
    // createCheckoutSession: async (req, res, next) => {
    //     try {



    //     } catch (error) {
    //         next(error);
    //     }
    // },
}