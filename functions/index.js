const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IF6lZCRSKAqYrLgD3NDO1DY16aP88PH6Ulbi14WHZ5oYO7S43TG1FdjmEauO3PzGB7qyxNK4zQpWGlUdiIC8l2o00CNxmMx3F");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Route
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  console.log(paymentIntent);

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/silpymeals/us-central1/api
