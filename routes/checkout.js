const express = require("express");
const router = express.Router();

const Checkout = require("../model/checkoutModel");


// This is what will happen when a user makes a post to the direct route.
router.post("/", function (req, res) {
  console.log("request sent");
  const { transformedCartItems, displayName, email, _id } = req.body;

  const newCheckout = new Checkout({
    userName: displayName,
    userEmail: email,
    purchasedProduct: transformedCartItems,
    // In ideal case, we want to pass in the user id as the id of this product
    // but for now, we let mongoose do it for us.
  });

  newCheckout
    .save()
    .then(() => {
      // If successful, send a 201
      res.status(201).send();
    })
    .catch((err) => {
      // Else send an error
      console.log(err);
      throw err;
    });
});

router.get("/", function (req, res) {
  Product.find()
    .lean()
    .exec((err, products) => {
      if (err) throw err;
      console.log(JSON.stringify(products));
      // Return a JSON stringified version of all the products to be displayed on the screen.
      return res.status(201).send(JSON.stringify(products));
    });
});

module.exports = router;
