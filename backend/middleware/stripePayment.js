require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (name, priceInCents) => {
    try {
        console.log(stripe);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: name,
                    },
                    unit_amount: priceInCents,
                },
                quantity: 1,
            },
            success_url: `http://localhost:5173/features`,
            cancel_url: `http://localhost:5173/select-plan`,
        })
        return session
    } catch (error) {
        throw error;
    }
}

module.exports = stripePayment