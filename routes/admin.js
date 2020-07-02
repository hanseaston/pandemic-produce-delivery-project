/**
 * This class handles all of the admin-related requests
 */

// Imports
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/add-product", adminController.getAddProductPage);
router.post("/add-product", adminController.postProductAndRedirect);
router.get("/admin-products", adminController.getDisplayProductPage);
router.get("/edit-product/:productId", adminController.getEditProductPage);
router.post("/edit-product", adminController.updateAdmindProduct);
router.post("/delete-product", adminController.postDeleteProduct);

// Exporting the routes
module.exports = router;
