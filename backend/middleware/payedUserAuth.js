// file imports
const { getUserDetailsCall } = require('../helper/userHelper');
const { errorHandeler } = require('../utils/errorHandler');

const verifyPayedUser = async (req, res, next) => {
    try {
        const { userId } = req.user;

        const user = await getUserDetailsCall(userId);

        if (!user) {
            errorHandeler("User not found", 404);
        }

        // vefiry if user is on premium or on trial period

        const expireDate = new Date(user.expiresAt);
        const currentDate = new Date();

        if ((user.isOnPremium || user.isOnTrial) && (expireDate > currentDate)) {
            next();
        } else {
            errorHandeler("User is nither a premium nor on trial period", 401);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = verifyPayedUser;