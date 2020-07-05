/**
 * This model class stores information about a single user
 * @module models/product.js
 */

/** Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Schema */
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

/**
 * Adding a product to the cart, updating the user's model
 * @param {Product} - a single poduct model
 * @returns {Promise} - indicating whether the operation has been
 */
userSchema.methods.addToCart = function (product) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  return this.save();
};

/**
 * Adding a product to the cart, updating the user's model
 * @param {ProductId} - a single product's unique productId
 * @returns {Promise} - indicating whether the remove operation succeeds
 */
userSchema.methods.removeFromCart = function (productId) {
  console.log("prod id", productId);
  const updatedCartItems = this.cart.items.filter((item) => {
    return item.productId.toString() !== productId.toString();
  });
  console.log("updated cart items", updatedCartItems);
  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

/** Exports the user model with its schema */
module.exports = mongoose.model("User", userSchema);
