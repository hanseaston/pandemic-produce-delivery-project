/**
 * This class handles all of the shop-related requests
 */

// Imports
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// handling routes for the shop main page
router.get("/", shopController.getDisplayIndexPage);
router.get("/products", shopController.getDisplayProductPage);
router.get("/products/:productId", shopController.getDisplayProductDetail);
router.get("/cart", shopController.getDisplayCartPage);
router.post("/cart", shopController.postCardPage);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.get("/orders", shopController.getDisplayOrdersPage);
router.get("/checkout", shopController.getDisplayCheckoutPage);

// Exports
module.exports = router;
