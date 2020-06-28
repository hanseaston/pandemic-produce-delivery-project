/**
 * This class handles all of the shop-related requests
 */

// Imports
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

// getting the shop main page
// use the HTML template to dynamically render HTML pages
// and add products
router.get("/", productController.getDisplayProductPage);

// Exports
module.exports = router;
