const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const env = require('dotenv').config({ path: './.env' });

const bodyParser = require("body-parser")

const sequelize = require('./config/Connection');


const PORT = process.env.PORT || 3001;
const app = express();


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27',
//   appInfo: { // For sample support and debugging, not required for production:
//     name: "stripe-samples/accept-a-payment/payment-element",
//     version: "0.0.2",
//     url: "https://github.com/stripe-samples"
//   }
// });


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use(cors({
    origin: 'https://apex-smoothies.herokuapp.com/'
  }));
} else {
  app.use(cors({
    origin: 'http://localhost:3000'
  }));
  // app.use(express.static(process.env.STATIC_DIR));
}



app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(routes);


// app.get('/', (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + '/index.html');
//   res.sendFile(path);
// });

// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
app.post('/webhook', async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // we can retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {
    // Funds have been captured
    // Fulfill any orders, e-mail receipts, etc
    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});