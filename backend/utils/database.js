// all importss
const mongoose = require("mongoose");

export const connect = async () => {
    try {
        const url = process.env.MONGO_URI || "";
        const connected = await mongoose.connect(url);

        if (connected) {
            console.log("Database connected");
        }

    } catch (error) {
        console.log(error);
    }
}