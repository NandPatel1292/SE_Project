require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const stripePayment = async (items) => {
    const storeItems = new Map([
        [1, { priceInCents: 3000, name: "One Month Subscription" }],
        [2, { priceInCents: 32400, name: "One Year Subscription" }],
    ])

    console.log(process.env.STRIPE_PRIVATE_KEY);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: items.map(item => {
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
    } catch (error) {
        throw error;
    }
}

module.exports = stripePayment;