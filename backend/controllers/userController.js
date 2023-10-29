// imports
const { errorHandeler } = require('../utils/errorHandler');
const { deleteUserCall } = require('../helper/userHelper');

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
}