/**
 * This class handles all of the shop-related requests
 */

// Imports
const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

// getting the shop main page
// use the HTML template to dynamically render HTML pages
// and add products
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    // activeShop: true,
    // productCSS: true
  });
});

// Exports
module.exports = router;
