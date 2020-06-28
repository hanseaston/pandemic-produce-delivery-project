/**
 * This class handles all of the admin-related requests
 */

// Imports
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

// getting the add project page with the form
// use the HTML template to dynamically render HTML pages
router.get("/add-product", productController.getAddProductPage);

// Keeping track of the new product information and redict
router.post("/add-product", productController.postProductAndRedirect);

// Exporting the routes
module.exports = router;
