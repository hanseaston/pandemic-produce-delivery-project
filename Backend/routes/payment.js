const express = require("express");
const router = express.Router();

const config = require("dotenv").config();
if (config.error) throw config.error;

const stripe = require("stripe")(process.env.stripeSecretKey);

router.post("/", function (req, res) {
  console.log("request received!", "request body is ", req.body);

  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  console.log("secret key is ", process.env.stripeSecretKey);

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = router;
