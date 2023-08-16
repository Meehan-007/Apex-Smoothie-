const router = require('express').Router(); 
require("dotenv").config() 
const stripe = require("stripe")("sk_test_51Mz617JMbYrxGFszKLIrYnz5RrVucH61cuDq4LC5HOOw11REgo5oWi6xDmxACk4JgfwjheVbRBdeoakY7wBhgr3v00wUUK9Qo2")





router.post("/", async (req, res) => {
    let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Apex Smoothie",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
}) 


module.exports = router;