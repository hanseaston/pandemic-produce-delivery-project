/**
 * This model class stores information about a single user
 * @module models/order.js
 */

/** Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Schema */
const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
});

/** Exporting the order model with its schema */
module.exports = mongoose.model("Order", orderSchema);
