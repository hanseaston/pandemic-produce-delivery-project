/**
 * This class handles all of the shop-related requests
 * @class
 */

/** Imports */
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

/** handling routes for the shop main page */
router.get("/", shopController.getDisplayIndexPage);
router.get("/products", shopController.getDisplayProductPage);
router.get("/products/:productId", shopController.getDisplayProductDetail);
router.get("/cart", shopController.getDisplayCartPage);
router.post("/cart", shopController.postCartPage);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.post("/create-order", shopController.postOrder);
router.get("/orders", shopController.getOrders);

/** Exports */
module.exports = router;
