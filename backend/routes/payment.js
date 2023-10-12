const router = require('express').Router(); 
const path = require('path');  
const env = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY , {
	apiVersion: '2020-08-27',
	appInfo: { // For sample support and debugging, not required for production:
	  name: "stripe-samples/accept-a-payment/payment-element",
	  version: "0.0.2",
	  url: "https://github.com/stripe-samples"
	}
  });


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


router.get('/config', (req, res) => {
	res.send({ 
	   
	  publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	});
  });
  



router.get('/create-payment-intent', async (req, res) => {
	// Create a PaymentIntent with the amount, currency, and a payment method type.
	// how do i bring in the items and find their ids and get their price? 

	// See the documentation [0] for the full list of supported parameters.
	//
	// [0] https://stripe.com/docs/api/payment_intents/create 


	try { 

		// get the category ids 
		// grab prices 
		// sum up prices 

		// const getItemPrices = (itemIds) => {
		// 	// This is a mock implementation; replace it with your data retrieval logic. 

		// 	if(item[i].category_name === "Iced Refresher"){
		// 		const price = 600
		// 	}  

		// 	if(item[i].category_name === "Crushed Fruit Bowl"){
		// 		const price = 1000
		// 	}  

		// 	else {
		// 		const price = 1100 
		// 	}

		// 	const itemPrices = {
		// 	  item1: 999,  // Price of item with ID 'item1' in cents (e.g., $9.99).
		// 	  item2: 599,  // Price of item with ID 'item2' in cents (e.g., $5.99).
		// 	  // Add more item prices here...
		// 	}; 

	  const paymentIntent = await stripe.paymentIntents.create({
		currency: 'EUR',
		amount: total,
		automatic_payment_methods: { enabled: true }
	  });
  
	  // Send publishable key and PaymentIntent details to client
	  res.send({
		clientSecret: paymentIntent.client_secret,
	  });
	}
 
  catch (e) {
	  return res.status(400).send({
		error: {
		  message: e.message,
		},
	  });
	}
  
});



module.exports = router;