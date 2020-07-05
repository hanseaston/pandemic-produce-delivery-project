/**
 * This model class stores information about a single product
 * @module models/product.js
 */

/** Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Schema */
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

/** Exporting the product model with its schema */
module.exports = mongoose.model("Product", productSchema);
