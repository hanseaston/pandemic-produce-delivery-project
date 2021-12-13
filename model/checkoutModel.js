/**
 * This model class stores information about all of the checkout items from a user
 * @module models/checkout.js
 */
/** Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Schema */
const checkoutSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    purchasedProduct: [
      { name: String, quantity: Number, _id: Schema.Types.ObjectId },
    ],
  },
  { versionKey: false }
);

/* Exporting the checking-out model with its schema */
module.exports = mongoose.model("Checkout", checkoutSchema);
